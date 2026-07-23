import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);

async function read(name) {
  return readFile(new URL(name, root), "utf8");
}

test("homeowner proof uses authentic UI and distinguishes supplied evidence", async () => {
  const source = await read("HomeownerProofSection.tsx");

  assert.match(source, /assistant-floorplan-ui\.png/);
  assert.match(source, /assistant-e3-ui\.png/);
  assert.match(source, /CapabilityLabel/);
  assert.match(source, /status="live"/);
  assert.match(source, /supplied/i);
  assert.match(source, /source/i);
  assert.doesNotMatch(source, /priority/);
});

test("developer insight proves resolved, escalated and missing states", async () => {
  const source = await read("DeveloperInsightSection.tsx");

  assert.match(source, /builder-homeowners-ui\.png/);
  assert.match(source, /resolved/i);
  assert.match(source, /escalated/i);
  assert.match(source, /missing/i);
  assert.match(source, /status="live"/);
});

test("energy is explicitly positioned as direction and example data", async () => {
  const source = await read("EnergyDirectionSection.tsx");

  assert.match(source, /status="direction"/);
  assert.match(source, /status="example"/);
  assert.match(source, /Money/);
  assert.match(source, /Comfort/);
  assert.match(source, /Risk/);
  assert.match(source, /not live telemetry/i);
});

test("final CTA offers a specific walkthrough and a working email fallback", async () => {
  const source = await read("FinalCtaSection.tsx");

  assert.match(source, /house type/i);
  assert.match(source, /mailto:/);
  assert.match(source, /sam@openhouseai\.ie/);
  assert.doesNotMatch(source, new RegExp(String.fromCodePoint(8212)));
});
