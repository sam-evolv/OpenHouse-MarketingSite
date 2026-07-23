import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../../../", import.meta.url);

async function read(relativePath) {
  return readFile(new URL(relativePath, root), "utf8");
}

test("root layout keeps the opening render free of global transition and prefetch wrappers", async () => {
  const source = await read("app/layout.tsx");

  for (const removedRuntime of [
    "ScrollProvider",
    "PrefetchProvider",
    "TransitionOverlay",
    "RouteWipe",
    "ProgressBar",
    "RouteTransitionHandler",
  ]) {
    assert.doesNotMatch(source, new RegExp(removedRuntime));
  }

  assert.match(source, /metadataBase:/);
  assert.match(source, /strategy="lazyOnload"/);
});

test("navigation avoids oversized branding, eager prefetch and scroll-driven state", async () => {
  const source = await read("components/navigation.tsx");

  assert.doesNotMatch(source, /window\.addEventListener\("scroll"/);
  assert.doesNotMatch(source, /prefetch=\{true\}/);
  assert.doesNotMatch(source, /priority/);
  assert.match(source, /h-20/);
  assert.match(source, /bg-carbon\/\[0\.92\]/);
  assert.match(source, /Request a walkthrough/);
});

test("footer uses sequential headings and avoids priority media", async () => {
  const source = await read("components/footer.tsx");

  assert.doesNotMatch(source, /priority/);
  assert.doesNotMatch(source, /<h4/);
  assert.match(source, /<h2/);
});
