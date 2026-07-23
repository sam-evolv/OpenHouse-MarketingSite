import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sectionPath = new URL("../EvidenceModelSection.tsx", import.meta.url);

test("evidence section creates a warm light chapter with construction context", async () => {
  const source = await readFile(sectionPath, "utf8");

  assert.doesNotMatch(source.trimStart(), /^"use client"/);
  assert.match(source, /tone="paper"/);
  assert.match(source, /evidenceLayers/);
  assert.match(source, /home’s context/i);
  assert.match(source, /house type/i);
  assert.match(source, /installed system/i);
});

test("evidence section makes the status and limitations visible", async () => {
  const source = await readFile(sectionPath, "utf8");

  assert.match(source, /CapabilityLabel/);
  assert.match(source, /status="live"/);
  assert.match(source, /supplied and approved information/i);
  assert.doesNotMatch(source, new RegExp(String.fromCodePoint(8212)));
});
