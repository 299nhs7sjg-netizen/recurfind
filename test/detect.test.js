const test = require("node:test"); const assert = require("node:assert");
const fs = require("fs"); const path = require("path");
const RF = require("../detect.js"); const M = require("../merchants.js");
const load = f => RF.parseFile(f, fs.readFileSync(path.join(__dirname, "../samples", f), "utf8"));
const byName = (r, n) => r.subs.find(s => s.name === n);

test("merchant table has 60+ entries with https cancel links", () => {
  assert.ok(M.length >= 60); for (const m of M) assert.match(m.cancelUrl, /^https:\/\//);
});
test("Chase CSV: finds known subscriptions, ignores payroll and random spend", () => {
  const r = RF.detect(load("chase-checking.csv"), M);
  for (const n of ["Netflix", "Spotify", "Planet Fitness", "ChatGPT Plus", "Apple", "Amazon Prime"]) assert.ok(byName(r, n), n);
  assert.ok(!r.subs.some(s => /PAYROLL|SHELL|TARGET|KROGER/i.test(s.name)));
  assert.equal(byName(r, "Amazon Prime").cadence, "yearly");
  assert.equal(byName(r, "Spotify").cadence, "monthly");
});
test("weekly unknown merchant detected with normalized name", () => {
  const r = RF.detect(load("chase-checking.csv"), M);
  const c = r.subs.find(s => /Local Coffee/i.test(s.name)); assert.ok(c); assert.equal(c.cadence, "weekly");
});
test("price creep flagged on Netflix and Adobe, not Spotify", () => {
  const r = RF.detect(load("chase-checking.csv"), M);
  assert.deepEqual(byName(r, "Netflix").priceCreep, { from: 15.49, to: 17.99 });
  assert.equal(byName(r, "Spotify").priceCreep, null);
  const c = RF.detect(load("capitalone-card.csv"), M);
  assert.ok(byName(c, "Adobe").priceCreep);
});
test("Capital One debit column parsed; payment credit ignored", () => {
  const r = RF.detect(load("capitalone-card.csv"), M);
  assert.ok(byName(r, "Hulu")); assert.ok(byName(r, "DoorDash DashPass"));
  assert.ok(!r.subs.some(s => /PAYMENT|BEST BUY/i.test(s.name)));
});
test("OFX parsed", () => {
  const r = RF.detect(load("sample.ofx"), M); assert.equal(byName(r, "SiriusXM").amount, 8);
});
test("totals and next date", () => {
  const r = RF.detect(load("chase-checking.csv"), M);
  const s = byName(r, "Spotify");
  assert.equal(s.yearly, 143.88); assert.equal(s.nextDate.toISOString().slice(0, 10), "2026-10-11");
  assert.ok(Math.abs(r.monthly - r.subs.reduce((a, x) => a + x.monthly, 0)) < 0.02);
});
test("one-off charges are not subscriptions", () => {
  const tx = [{ date: new Date("2026-01-05"), amount: 40, desc: "NETFLIX" }];
  assert.equal(RF.detect(tx, M).subs.length, 0);
});
test("longest pattern wins: YouTube TV vs YouTube", () => {
  assert.equal(RF.normalizeMerchant("YOUTUBE TV 855", M).key, "YouTube TV");
  assert.equal(RF.normalizeMerchant("GOOGLE *YOUTUBEPREMIUM", M).key, "YouTube Premium");
});
