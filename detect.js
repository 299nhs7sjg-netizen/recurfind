/* RecurFind detection engine. Runs in the browser and in Node tests. No network. */
(function (root) {
  "use strict";
  function splitCSVLine(line) {
    const out = []; let cur = ""; let q = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (q) { if (c === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += c; }
      else if (c === '"') q = true; else if (c === ",") { out.push(cur); cur = ""; } else cur += c;
    }
    out.push(cur); return out.map(s => s.trim());
  }
  function parseAmount(s) {
    if (s == null) return NaN; s = String(s).trim(); if (!s) return NaN;
    let neg = /^\(.*\)$/.test(s) || /^-/.test(s) || /-$/.test(s);
    const n = parseFloat(s.replace(/[^0-9.]/g, "")); if (isNaN(n)) return NaN;
    return neg ? -n : n;
  }
  function parseDate(s) {
    s = String(s || "").trim(); let m;
    if ((m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/))) return new Date(Date.UTC(+m[1], m[2] - 1, +m[3]));
    if ((m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})/))) { let y = +m[3]; if (y < 100) y += 2000; return new Date(Date.UTC(y, m[1] - 1, +m[2])); }
    if ((m = s.match(/^(\d{4})(\d{2})(\d{2})/))) return new Date(Date.UTC(+m[1], m[2] - 1, +m[3]));
    const d = new Date(s); return isNaN(d) ? null : new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  }
  /* Handles Chase, Bank of America, Wells Fargo (headerless), Capital One, Citi, Amex, Discover and generic layouts. */
  function parseCSV(text) {
    const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter(l => l.trim());
    if (!lines.length) return [];
    let hi = lines.findIndex(l => /date/i.test(l) && /(description|payee|merchant|name|memo)/i.test(l));
    const tx = [];
    if (hi === -1) { /* Wells Fargo style: date, amount, *, , description */
      for (const l of lines) { const c = splitCSVLine(l); const d = parseDate(c[0]); const a = parseAmount(c[1]);
        if (d && !isNaN(a)) tx.push({ date: d, amount: -a, desc: c[4] || c[c.length - 1] || "" }); }
      return tx.filter(t => t.amount > 0);
    }
    const h = splitCSVLine(lines[hi]).map(x => x.toLowerCase());
    const find = (...re) => h.findIndex(x => re.some(r => r.test(x)));
    const iDate = find(/^transaction date$/, /^posted date$/, /^posting date$/, /^date$/, /date/);
    const iDesc = find(/^description$/, /payee/, /merchant/, /^name$/, /description/, /memo/);
    const iAmt = find(/^amount$/, /amount/);
    const iDebit = find(/^debit/); const iCredit = find(/^credit/);
    /* Card exports where charges are positive: Amex, Discover, Capital One (debit column), Citi (debit column). */
    const positiveCharges = /amex|american express/i.test(text.slice(0, 500)) || h.includes("extended details") || h.includes("card member") || (h.includes("trans. date"));
    for (let k = hi + 1; k < lines.length; k++) {
      const c = splitCSVLine(lines[k]); const d = parseDate(c[iDate]); if (!d) continue;
      let spend;
      if (iDebit >= 0 && iAmt < 0) { const db = parseAmount(c[iDebit]); spend = isNaN(db) ? 0 : Math.abs(db); }
      else { const a = parseAmount(c[iAmt]); if (isNaN(a)) continue; spend = positiveCharges ? a : -a; }
      if (spend > 0) tx.push({ date: d, amount: Math.round(spend * 100) / 100, desc: c[iDesc] || "" });
    }
    return tx;
  }
  function parseOFX(text) {
    const tx = []; const blocks = text.split(/<STMTTRN>/i).slice(1);
    for (const b of blocks) {
      const g = t => { const m = b.match(new RegExp("<" + t + ">([^<\\r\\n]*)", "i")); return m ? m[1].trim() : ""; };
      const d = parseDate(g("DTPOSTED")); const a = parseAmount(g("TRNAMT"));
      if (d && a < 0) tx.push({ date: d, amount: -a, desc: g("NAME") + (g("MEMO") ? " " + g("MEMO") : "") });
    }
    return tx;
  }
  function parseFile(name, text) { return /<OFX>|<STMTTRN>/i.test(text) || /\.(ofx|qfx)$/i.test(name) ? parseOFX(text) : parseCSV(text); }

  function normalizeMerchant(desc, table) {
    const raw = String(desc || "").toUpperCase();
    if (table) { let best = null, bl = 0;
      for (const m of table) for (const p of m.match) if (p.length > bl && raw.includes(p)) { best = m; bl = p.length; }
      if (best) return { key: best.name, merchant: best }; }
    let s = raw.replace(/^(SQ \*|TST\* |PAYPAL \*|PP\*|POS |DEBIT CARD PURCHASE |RECURRING PAYMENT |ACH DEBIT |CHECKCARD \d+ )/g, "")
      .replace(/\b(WWW\.|HTTPS?:\/\/)/g, "").replace(/\.(COM|NET|ORG|CO)\b/g, "")
      .replace(/[#*].*$/, "").replace(/\d{3,}/g, " ").replace(/\b[A-Z]{2}\s*$/, "")
      .replace(/[^A-Z& ]/g, " ").replace(/\s+/g, " ").trim();
    s = s.split(" ").slice(0, 3).join(" ");
    return { key: s || raw.slice(0, 20), merchant: null };
  }
  const DAY = 86400000;
  const CADENCES = [
    { name: "weekly", days: 7, tol: 2, perYear: 52 },
    { name: "every 2 weeks", days: 14, tol: 3, perYear: 26 },
    { name: "monthly", days: 30.44, tol: 5, perYear: 12 },
    { name: "quarterly", days: 91.3, tol: 10, perYear: 4 },
    { name: "yearly", days: 365.25, tol: 20, perYear: 1 }
  ];
  function median(a) { const s = [...a].sort((x, y) => x - y); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; }
  function addCadence(date, c) {
    const d = new Date(date.getTime());
    if (c.name === "monthly") d.setUTCMonth(d.getUTCMonth() + 1);
    else if (c.name === "quarterly") d.setUTCMonth(d.getUTCMonth() + 3);
    else if (c.name === "yearly") d.setUTCFullYear(d.getUTCFullYear() + 1);
    else return new Date(date.getTime() + c.days * DAY);
    return d;
  }
  function detect(transactions, table) {
    const groups = new Map();
    for (const t of transactions) {
      const n = normalizeMerchant(t.desc, table);
      if (!groups.has(n.key)) groups.set(n.key, { key: n.key, merchant: n.merchant, tx: [] });
      groups.get(n.key).tx.push(t);
    }
    const subs = [];
    for (const g of groups.values()) {
      const seen = new Set();
      const tx = g.tx.filter(t => { const k = t.date.getTime() + "|" + t.amount; if (seen.has(k)) return false; seen.add(k); return true; })
        .sort((a, b) => a.date - b.date);
      const known = !!g.merchant;
      if (tx.length < 2) continue;
      const amtMed = median(tx.map(t => t.amount));
      /* Similar amount: within 20% of the median or $3, whichever is larger. */
      const similar = tx.filter(t => Math.abs(t.amount - amtMed) <= Math.max(3, amtMed * 0.2));
      if (similar.length < 2) continue;
      const gaps = []; for (let i = 1; i < similar.length; i++) gaps.push((similar[i].date - similar[i - 1].date) / DAY);
      const gm = median(gaps);
      const cad = CADENCES.find(c => Math.abs(gm - c.days) <= c.tol);
      if (!cad) continue;
      const fit = gaps.filter(x => Math.abs(x - cad.days) <= cad.tol * 1.5).length / gaps.length;
      if (fit < 0.6) continue;
      if (!known && similar.length < (cad.name === "yearly" ? 2 : 3)) continue;
      const last = similar[similar.length - 1];
      const first = similar[0];
      const amount = last.amount;
      const priceCreep = similar.some((t, i) => i > 0 && t.amount > similar[i - 1].amount + 0.004) && last.amount > first.amount
        ? { from: first.amount, to: last.amount } : null;
      subs.push({
        name: g.merchant ? g.merchant.name : titleCase(g.key), merchant: g.merchant, cadence: cad.name,
        amount, monthly: round2(amount * cad.perYear / 12), yearly: round2(amount * cad.perYear),
        count: similar.length, lastDate: last.date, nextDate: addCadence(last.date, cad), priceCreep
      });
    }
    subs.sort((a, b) => b.yearly - a.yearly);
    const monthly = round2(subs.reduce((s, x) => s + x.monthly, 0));
    return { subs, monthly, yearly: round2(subs.reduce((s, x) => s + x.yearly, 0)) };
  }
  function round2(n) { return Math.round(n * 100) / 100; }
  function titleCase(s) { return s.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()); }
  const api = { parseCSV, parseOFX, parseFile, normalizeMerchant, detect, parseDate, parseAmount };
  if (typeof module !== "undefined") module.exports = api; else root.RecurFind = api;
})(this);
