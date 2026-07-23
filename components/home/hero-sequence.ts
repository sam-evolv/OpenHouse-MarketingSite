export type HeroSequenceStateId = "context" | "model" | "question" | "answer" | "developer";

export type HeroSequenceState = {
  id: HeroSequenceStateId;
  title: string;
  description: string;
  accessibleLabel: string;
  startAtMs: number;
};

export const heroSequenceDurationMs = 20_000;

export const heroSequenceStates: readonly HeroSequenceState[] = [
  {
    id: "context",
    title: "The information produced during construction",
    description: "Plans, specifications, systems and approved documents arrive as separate evidence.",
    accessibleLabel: "Plans, specifications, systems and approved documents surrounding one home",
    startAtMs: 0,
  },
  {
    id: "model",
    title: "Organised around the home",
    description: "OpenHouse connects the available evidence to the house type, rooms and installed systems it describes.",
    accessibleLabel: "Evidence connected by a gold line to rooms and systems in one home",
    startAtMs: 3_200,
  },
  {
    id: "question",
    title: "A homeowner asks",
    description: "What size is my living room?",
    accessibleLabel: "A homeowner asking for the size of the living room",
    startAtMs: 7_200,
  },
  {
    id: "answer",
    title: "The source stays attached",
    description: "The answer shows the example-home measurement and the floor plan behind it.",
    accessibleLabel: "A home-specific answer with a highlighted floor plan and source control",
    startAtMs: 10_800,
  },
  {
    id: "developer",
    title: "The gap becomes visible",
    description: "Recurring questions, low-confidence answers and missing information become signals for the developer.",
    accessibleLabel: "One home pulling back into a scheme view of recurring questions and information gaps",
    startAtMs: 15_500,
  },
] as const;

export function getHeroStateIndexAtTime(elapsedMs: number) {
  const clampedElapsed = Math.max(0, Math.min(elapsedMs, heroSequenceDurationMs));

  for (let index = heroSequenceStates.length - 1; index >= 0; index -= 1) {
    if (clampedElapsed >= heroSequenceStates[index].startAtMs) {
      return index;
    }
  }

  return 0;
}
