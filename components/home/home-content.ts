export type CapabilityStatus = "live" | "example" | "direction";

export type EvidenceLayer = {
  label: string;
  detail: string;
};

export const heroContent = {
  eyebrow: "For property developers",
  headline: "A home that can explain itself.",
  support:
    "OpenHouse turns each house type’s approved information into sourced homeowner answers and visible developer gaps.",
  primaryAction: {
    label: "Request a house-type walkthrough",
    href: "/contact?intent=house-type-walkthrough",
  },
  commercialAction: {
    label: "Trace a sourced answer",
    href: "#working-example",
  },
  proof: "Live product capability shown with clearly labelled example data.",
} as const;

export const evidenceLayers: readonly EvidenceLayer[] = [
  { label: "Plans", detail: "Room information and approved drawings" },
  { label: "Specifications", detail: "Fixtures, finishes and house-type details" },
  { label: "Systems", detail: "Installed equipment and approved guidance" },
  { label: "Documents", detail: "Manuals, warranties and handover records" },
  { label: "History", detail: "Questions, notes and issues retained in context" },
] as const;

export const homepageChapters = {
  context: {
    status: "live" as CapabilityStatus,
    headline: "Give the home its context.",
    support:
      "Organise plans, specifications, room information, systems, manuals and warranties around the home they belong to.",
    caveat: "Coverage depends on the information supplied for each house type and home.",
  },
  answer: {
    status: "live" as CapabilityStatus,
    qualifier: "Example home",
    headline: "Ask the home, not the folder.",
    support:
      "Homeowners ask in ordinary language. OpenHouse answers from the available home information and shows the supporting source.",
  },
  developer: {
    status: "live" as CapabilityStatus,
    qualifier: "Example developer view",
    headline: "See where the information runs out.",
    support:
      "Track recurring questions, low-confidence answers and missing information so future handovers become clearer.",
  },
  energy: {
    status: "example" as CapabilityStatus,
    headline: "Energy, explained through the home.",
    support:
      "See how one home’s systems and usage data can be translated into Money, Comfort and Risk, with a clear explanation and next step.",
    disclosure: "Demonstration data. No live supplier or device connection is implied.",
  },
  direction: {
    status: "direction" as CapabilityStatus,
    headline: "From home context to home intelligence.",
    support:
      "The next layer connects consented energy data, system history and homeowner preferences so OpenHouse can explain changes, identify patterns and support bounded optimisation over time.",
  },
} as const;

export const walkthroughContent = {
  headline: "See one of your house types inside OpenHouse.",
  support:
    "Send a house-type link or approved information pack. We will show how the home context becomes a purchaser walkthrough and developer insight.",
  action: "Request a house-type walkthrough",
} as const;
