import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sourcePath = new URL("../home-content.ts", import.meta.url);

test("homepage content defines the three capability statuses", async () => {
  const source = await readFile(sourcePath, "utf8");

  for (const status of ["live", "example", "direction"]) {
    assert.match(source, new RegExp(`\\b${status}\\b`), `missing ${status} status`);
  }
});

test("homepage content keeps the developer, sourced-answer and energy disclosures together", async () => {
  const source = await readFile(sourcePath, "utf8");

  assert.match(source, /For property developers/);
  assert.match(source, /A home that can explain itself\./);
  assert.match(source, /approved information into sourced homeowner answers and visible developer gaps/);
  assert.match(source, /Request a house-type walkthrough/);
  assert.match(source, /Trace a sourced answer/);
  assert.match(source, /shows the supporting source/);
  assert.match(source, /Demonstration data\. No live supplier or device connection is implied\./);
  assert.doesNotMatch(source, new RegExp(String.fromCodePoint(8212)));
});
