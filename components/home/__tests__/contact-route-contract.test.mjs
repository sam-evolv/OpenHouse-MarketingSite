import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const contactPath = new URL("../../../app/contact/page.tsx", import.meta.url);

test("contact route is a specific house-type walkthrough handoff", async () => {
  const source = await readFile(contactPath, "utf8");

  assert.match(source, /Request a house-type walkthrough/);
  assert.match(source, /one house type/i);
  assert.match(source, /plans/i);
  assert.match(source, /systems/i);
  assert.match(source, /purchaser information/i);
});

test("contact route uses a real email handoff and makes the next step explicit", async () => {
  const source = await readFile(contactPath, "utf8");

  assert.match(source, /mailto:sam@openhouseai\.ie/);
  assert.match(source, /opens your email app/i);
  assert.doesNotMatch(source, /Message Sent/);
  assert.doesNotMatch(source, /personalized/i);
  assert.doesNotMatch(source, new RegExp(String.fromCodePoint(8212)));
});
