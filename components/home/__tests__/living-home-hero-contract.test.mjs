import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const heroPath = new URL("../LivingHomeHero.tsx", import.meta.url);
const diagramPath = new URL("../LivingHomeDiagram.tsx", import.meta.url);

test("living home hero renders the proposition and actions in server markup", async () => {
  const source = await readFile(heroPath, "utf8");

  assert.doesNotMatch(source.trimStart(), /^"use client"/);
  assert.match(source, /<h1/);
  assert.match(source, /heroContent\.headline/);
  assert.match(source, /heroContent\.primaryAction/);
  assert.match(source, /heroContent\.commercialAction/);
});

test("living home hero includes a static diagram before the client sequence", async () => {
  const source = await readFile(heroPath, "utf8");

  const staticIndex = source.indexOf("<LivingHomeDiagram");
  const playerIndex = source.indexOf("<HeroSequencePlayer");

  assert.ok(staticIndex >= 0, "missing the server-rendered living home diagram");
  assert.ok(playerIndex > staticIndex, "client player must enhance the static diagram rather than precede it");
});

test("the first server-rendered diagram shows an answer and its source", async () => {
  const source = await readFile(diagramPath, "utf8");

  assert.match(source, /28\.5 m²/);
  assert.match(source, /Source · Ground Floor plan, A3/);
});
