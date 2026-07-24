import { Camera, ImageIcon, Keyboard, Mic } from "lucide-react";

/**
 * How a question actually reaches the assistant.
 *
 * The site described a chat box for a long time, which undersold the
 * product: a homeowner standing at a flashing panel does not type a model
 * number, they photograph it, and someone up a ladder speaks. Text, speech
 * and image are three doors into the same home record, so they are shown
 * together rather than as a feature list.
 *
 * Exchanges are illustrative and labelled as such wherever this renders.
 */

export const ASK_MODES = [
  {
    icon: Keyboard,
    label: "Type it",
    short: "Type the question you would have emailed the site office.",
    body: "The question a buyer would otherwise send to the site office at nine on a Monday. Answered from the record, with the document it came from attached.",
    attachment: null as string | null,
    q: "Where is the stopcock in my house?",
    a: "In the utility room, on the wall to the left of the cylinder.",
    source: "Homeowner manual, p.12",
  },
  {
    icon: Mic,
    label: "Say it",
    short: "Ask out loud when your hands are full and hear the answer back.",
    body: "Hands full at the fuse board, or halfway up the attic ladder. The question is spoken, and the answer comes back the same way.",
    attachment: null as string | null,
    q: "Which switch is the immersion?",
    a: "Second from the left, labelled water heater on your board.",
    source: "Electrical cert, board schedule",
  },
  {
    icon: Camera,
    label: "Show it",
    short: "Point the camera at whatever is flashing. It reads the image.",
    body: "Point the camera at the flashing panel, the model plate or the valve nobody knows the name of. The assistant reads the image and answers against that home's record.",
    attachment: "Photo · heat pump display" as string | null,
    q: "What does this mean?",
    a: "That is a sensor reading, not a breakdown. Try this 90-second check first.",
    source: "Heat pump manual, fault codes",
  },
];

/* ── Compact: three rows, for a column beside the app screen ── */
export function AskModesCompact({ className = "" }: { className?: string }) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {ASK_MODES.map((m) => (
        <li key={m.label} className="flex items-start gap-4">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10">
            <m.icon className="h-5 w-5 text-gold" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[16px] font-semibold text-white">{m.label}</p>
            <p className="mt-0.5 text-[14px] leading-relaxed text-porcelain/65">
              {m.short}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ── Full: three cards, each carrying its own exchange ── */
export function AskModesGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 gap-5 md:grid-cols-3 ${className}`}>
      {ASK_MODES.map((m) => (
        <div
          key={m.label}
          className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-6"
        >
          <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10">
            <m.icon className="h-[22px] w-[22px] text-gold" aria-hidden="true" />
          </span>
          <h3 className="mb-2 font-heading text-[20px] font-bold leading-snug text-white">
            {m.label}
          </h3>
          <p className="mb-6 flex-1 text-[14.5px] leading-relaxed text-porcelain/65">
            {m.body}
          </p>

          <div className="space-y-2 rounded-2xl border border-white/[0.07] bg-black/25 p-3.5">
            <div className="flex justify-end">
              <span className="max-w-[92%] rounded-2xl rounded-br-md border border-white/10 bg-white/[0.07] px-3 py-1.5">
                {m.attachment && (
                  <span className="mb-1.5 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-[10.5px] font-medium text-porcelain/70">
                    <ImageIcon
                      className="h-3 w-3 flex-shrink-0 text-gold/80"
                      aria-hidden="true"
                    />
                    {m.attachment}
                  </span>
                )}
                <span className="block font-serif text-[12.5px] italic leading-snug text-porcelain">
                  {m.q}
                </span>
              </span>
            </div>
            <div className="flex justify-start">
              <span className="relative max-w-[94%] rounded-2xl rounded-bl-md border border-gold/20 bg-gold/[0.07] px-3 py-1.5">
                <span
                  className="absolute bottom-2 left-0 top-2 w-px bg-gold/50"
                  aria-hidden="true"
                />
                <span className="block text-[12.5px] leading-snug text-porcelain">
                  {m.a}
                </span>
                <span className="mt-1 block text-[10.5px] font-medium text-gold/80">
                  Source: {m.source}
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
