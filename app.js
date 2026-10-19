(function () {
  "use strict";
  const cfg = window.RF_CONFIG, $ = id => document.getElementById(id);
  const KEY = "recurfind_license_v1";
  let unlocked = false, last = null;
  try { unlocked = !!localStorage.getItem(KEY); } catch (_) {}
  const money = n => "$" + n.toFixed(2);
  const fmt = d => d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  async function handleFiles(files) {
    let tx = [];
    for (const f of files) tx = tx.concat(RecurFind.parseFile(f.name, await f.text()));
    if (!tx.length) { $("status").textContent = "No charges found in that file. Try a CSV or OFX export from your bank's website."; return; }
    last = RecurFind.detect(tx, RF_MERCHANTS);
    $("status").textContent = "Read " + tx.length + " charges from " + files.length + " file" + (files.length > 1 ? "s" : "") + ".";
    render();
  }
  function render() {
    if (!last) return;
    const r = last; $("results").hidden = false;
    $("count").textContent = r.subs.length; $("monthly").textContent = money(r.monthly); $("yearly").textContent = money(r.yearly);
    const list = unlocked ? r.subs : r.subs.slice(0, 3);
    $("list").innerHTML = list.map(s => `<li class="sub">
      <div class="row"><strong>${esc(s.name)}</strong><span>${money(s.amount)} ${esc(s.cadence)}</span></div>
      <div class="meta">${money(s.yearly)} a year · last ${fmt(s.lastDate)} · next about ${fmt(s.nextDate)}</div>
      ${unlocked && s.priceCreep ? `<div class="creep">Price went up from ${money(s.priceCreep.from)} to ${money(s.priceCreep.to)}</div>` : ""}
      ${unlocked ? (s.merchant ? `<div class="cancel"><a href="${esc(s.merchant.cancelUrl)}" target="_blank" rel="noopener">How to cancel</a> ${esc(s.merchant.steps)}</div>` : `<div class="cancel">Not in our cancel table. Check the merchant's account page or call the number on the charge.</div>`) : ""}
    </li>`).join("");
    const hidden = r.subs.length - list.length;
    $("locked").hidden = unlocked || hidden <= 0;
    $("hiddenCount").textContent = hidden;
    $("export").hidden = !unlocked;
  }
  function exportCSV() {
    const rows = [["Name", "Amount", "Cadence", "Monthly", "Yearly", "Last charge", "Next expected", "Price creep", "Cancel link"]];
    for (const s of last.subs) rows.push([s.name, s.amount, s.cadence, s.monthly, s.yearly, s.lastDate.toISOString().slice(0, 10), s.nextDate.toISOString().slice(0, 10),
      s.priceCreep ? s.priceCreep.from + " to " + s.priceCreep.to : "", s.merchant ? s.merchant.cancelUrl : ""]);
    const csv = rows.map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(",")).join("\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" })); a.download = "subscriptions.csv"; a.click();
  }
  async function verify(key) {
    /* Server-side Gumroad license check. Never honor-system: a key only unlocks if the server says ok. */
    let res;
    try { res = await fetch(cfg.verifyUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ product: cfg.product, key: key.trim() }) }); }
    catch (_) { return { ok: false, message: "Could not reach the license server. Check your connection and try again." }; }
    let d = null; try { d = await res.json(); } catch (_) {}
    return d && d.ok === true ? { ok: true } : { ok: false, message: (d && d.error) || "That key did not verify. Paste the license key from your Gumroad receipt." };
  }
  function openUnlock() { $("modal").hidden = false; $("key").focus(); }
  document.querySelectorAll("[data-unlock]").forEach(b => b.addEventListener("click", openUnlock));
  $("close").onclick = () => { $("modal").hidden = true; };
  const buy = $("buy");
  if (cfg.checkoutUrl) buy.href = cfg.checkoutUrl; else { buy.removeAttribute("href"); buy.textContent = "Checkout coming soon"; }
  $("verify").onclick = async () => {
    const k = $("key").value; if (!k.trim()) return;
    $("msg").textContent = "Checking..."; const r = await verify(k);
    if (r.ok) { unlocked = true; try { localStorage.setItem(KEY, k.trim()); } catch (_) {} $("msg").textContent = "Unlocked. Thank you."; $("modal").hidden = true; applyBadge(); render(); }
    else $("msg").textContent = r.message;
  };
  function applyBadge() { document.querySelectorAll("[data-unlock]").forEach(b => { b.hidden = unlocked; }); $("badge").textContent = unlocked ? "Unlocked" : "Free"; }
  applyBadge();
  $("export").onclick = exportCSV;
  const drop = $("drop"), input = $("file");
  input.onchange = () => handleFiles([...input.files]);
  drop.addEventListener("dragover", e => { e.preventDefault(); drop.classList.add("over"); });
  drop.addEventListener("dragleave", () => drop.classList.remove("over"));
  drop.addEventListener("drop", e => { e.preventDefault(); drop.classList.remove("over"); handleFiles([...e.dataTransfer.files]); });
  $("sample").onclick = async () => { const t = await (await fetch("samples/chase-checking.csv")).text(); handleFiles([new File([t], "chase-checking.csv")]); };
})();
