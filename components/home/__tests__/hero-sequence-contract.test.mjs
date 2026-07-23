import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sourcePath = new URL("../hero-sequence.ts", import.meta.url);

test("hero sequence defines five ordered explanatory states", async () => {
  const source = await readFile(sourcePath, "utf8");

  const ids = ["context", "model", "question", "answer", "developer"];
  let previous = -1;

  for (const id of ids) {
    const index = source.indexOf(`id: \"${id}\"`);
    assert.ok(index > previous, `${id} must exist after the previous state`);
    previous = index;
  }
});

test("every hero state exposes accessible copy and the sequence does not overclaim energy", async () => {
  const source = await readFile(sourcePath, "utf8");

  const titleCount = (source.match(/\n    title:/g) ?? []).length;
  const descriptionCount = (source.match(/\n    description:/g) ?? []).length;
  const accessibleLabelCount = (source.match(/\n    accessibleLabel:/g) ?? []).length;

  assert.equal(titleCount, 5);
  assert.equal(descriptionCount, 5);
  assert.equal(accessibleLabelCount, 5);
  assert.doesNotMatch(source, /live smart meter/i);
  assert.doesNotMatch(source, /automatic optimisation/i);
  assert.doesNotMatch(source, new RegExp(String.fromCodePoint(8212)));
});
