/* OpenHouse Property Assistant - Homeowner promo composer.
 * Mounts the Stage with all homeowner scenes + tweaks panel.
 */

const HO_DURATION = 76;

// Homeowner-specific SFX schedule. Times are absolute (seconds) on the
// 76-second timeline. Synced to the magic-moments of each scene so the
// audio reinforces the visual instead of competing with it.
const HO_TRIGGERS = [
  // Cold open - silent. Music carries it.
  // App reveal - a single soft chime when the phone settles in
  { t: 8.2,  type: 'chime', level: 0.05 },

  // Scene 1 - Living Room (12-32s)
  { t: 20.5, type: 'whoosh', level: 0.10 },           // user message sends
  { t: 24.5, type: 'chime',  level: 0.07 },           // AI response card opens
  { t: 26.5, type: 'tick',   i: 0, level: 0.05 },     // floor plan walls draw
  { t: 27.0, type: 'tick',   i: 1, level: 0.05 },     // rooms appear
  { t: 27.6, type: 'tick',   i: 2, level: 0.05 },     // labels appear
  { t: 28.2, type: 'tick',   i: 3, level: 0.07 },     // dimensions land

  // Scene 1 climax caption "With the plan attached."
  { t: 29.5, type: 'chime',  level: 0.05 },

  // Scene 2 - Heat Pump (32-50s)
  { t: 34.0, type: 'whoosh', level: 0.10 },           // user asks
  { t: 38.5, type: 'chime',  level: 0.07 },           // AI response opens
  // 5 fix steps cascade in (subtle ticks)
  { t: 42.5, type: 'tick',   i: 0, level: 0.04 },
  { t: 43.5, type: 'tick',   i: 1, level: 0.04 },
  { t: 44.5, type: 'tick',   i: 2, level: 0.04 },
  { t: 45.5, type: 'tick',   i: 3, level: 0.04 },
  { t: 46.5, type: 'tick',   i: 4, level: 0.04 },
  // "Sorted. / No more phone calls." climax
  { t: 47.5, type: 'thump',  level: 0.07 },

  // Proof beat (50-56s) - "Their problems, solved."
  { t: 50.5, type: 'thump',  level: 0.10 },
  { t: 52.5, type: 'chime',  level: 0.06 },

  // What Else montage (56-68s) - 6 frames at 2s each, quiet tap on each flip
  { t: 56.0, type: 'tap', level: 0.04 },
  { t: 58.0, type: 'tap', level: 0.04 },
  { t: 60.0, type: 'tap', level: 0.04 },
  { t: 62.0, type: 'tap', level: 0.04 },
  { t: 64.0, type: 'tap', level: 0.04 },
  { t: 66.0, type: 'tap', level: 0.04 },

  // End card (68-76s)
  { t: 68.2, type: 'rise',  level: 0.06 },
  { t: 70.0, type: 'chime', level: 0.08 },
];

const HO_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "sound": true,
  "film": true,
  "progress": true
}/*EDITMODE-END*/;

function HoPromo() {
  const [t, setTweak] = useTweaks(HO_TWEAK_DEFAULTS);

  return (
    <React.Fragment>
      <Stage
        width={HOW}
        height={HOH}
        duration={HO_DURATION}
        background="#050505"
        loop={true}
        autoplay={true}
        persistKey="oh-homeowner-promo"
      >
        <HoColdOpen />
        <HoAppReveal />
        <HoScene1 />
        <HoScene2 />
        <HoProof />
        <HoWhatElse />
        <HoEndCard />
        <window.SoundEngine enabled={t.sound !== false} triggers={HO_TRIGGERS} />
        {t.progress !== false && <HoProgressBar />}
        {t.film !== false && <window.FilmTreatment />}
        <HoLoopFade />
        <HoSceneWipe />
      </Stage>

      <TweaksPanel title="Homeowner promo tweaks">
        <TweakSection label="Soundtrack" />
        <TweakToggle
          label="Music + SFX"
          value={t.sound !== false}
          onChange={(v) => setTweak('sound', v)}
        />
        <TweakSection label="Film treatment" />
        <TweakToggle
          label="Vignette + grain"
          value={t.film !== false}
          onChange={(v) => setTweak('film', v)}
        />
        <TweakToggle
          label="Progress hairline"
          value={t.progress !== false}
          onChange={(v) => setTweak('progress', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

function HoLoopFade() {
  const { time = 0, duration = 1 } = window.useTimeline ? window.useTimeline() : {};
  let alpha = 0;
  if (time < 0.3) alpha = 1 - time / 0.3;
  else if (time > duration - 0.5) alpha = Math.min(1, (time - (duration - 0.5)) / 0.5);
  if (alpha <= 0.001) return null;
  return <div style={{ position: 'absolute', inset: 0, background: '#000', opacity: alpha, pointerEvents: 'none', zIndex: 1003 }} />;
}

function HoProgressBar() {
  const { time = 0, duration = 1 } = window.useTimeline ? window.useTimeline() : {};
  const pct = Math.max(0, Math.min(1, time / duration));
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      height: 3, background: 'rgba(255,255,255,0.04)',
      pointerEvents: 'none', zIndex: 1002,
    }}>
      <div style={{
        height: '100%', width: `${pct * 100}%`,
        background: 'linear-gradient(90deg, #FFE489 0%, #D4AF37 50%, #B88A18 100%)',
        boxShadow: '0 0 10px rgba(212,175,55,0.7)',
        transition: 'width 80ms linear',
      }} />
    </div>
  );
}

const HO_BOUNDARIES = [12, 32, 50, 56, 68];
function HoSceneWipe() {
  const { time = 0 } = window.useTimeline ? window.useTimeline() : {};
  let active = null;
  for (const b of HO_BOUNDARIES) {
    if (time >= b - 0.05 && time < b + 0.4) { active = b; break; }
  }
  if (active == null) return null;
  const local = time - active;
  const p = Math.max(0, Math.min(1, local / 0.4));
  const ease = 0.5 - 0.5 * Math.cos(p * Math.PI);
  const x = -100 + 200 * ease;
  return (
    <div style={{
      position: 'absolute', inset: 0,
      pointerEvents: 'none', zIndex: 1004,
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(95deg, transparent 35%, rgba(212,175,55,0.7) 47%, #FFE489 50%, rgba(212,175,55,0.7) 53%, rgba(10,10,10,0.92) 60%, #050505 100%)',
        transform: `translateX(${x}%)`,
        filter: 'drop-shadow(0 0 24px rgba(212,175,55,0.6))',
      }} />
    </div>
  );
}

const hoRoot = ReactDOM.createRoot(document.getElementById('root'));
hoRoot.render(<HoPromo />);
