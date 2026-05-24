/* Homeowner Property Assistant - scenes.
 *
 * Reuses the dark canvas / PhoneCanvas / Caption / PhoneBezel chrome
 * from scenes.jsx and the warm gold visual language from Agent/Care.
 *
 * Timeline (66s total):
 *   0   - 6    COLD OPEN     "What size is my living room? / Just ask."
 *   6   - 12   APP REVEAL    Meet the Property Assistant
 *   12  - 32   SCENE 1       Living room size + floor plan (the magic moment)
 *   32  - 50   SCENE 2       Heat pump E3 self-diagnosis (60-second fix)
 *   50  - 56   PROOF BEAT    "Every answer. From your home."
 *   56  - 68   WHAT ELSE     5 breadth frames - slowed for readability
 *   68  - 76   END CARD      Lockup + CTA
 */

const { Sprite: HSprite, useSprite: hUseSprite } = window;
const HE      = window.Easing;
const hInterp = window.interpolate;
const { PhoneCanvas: HoPhoneCanvas, PhoneBezel: HoPhoneBezel } = window;
const { HomeownerChatHome, LivingRoomScreen, HeatPumpScreen, HomeownerBreadthScreen } = window;

const HOW = 1080, HOH = 1080;

const HT = {
  COLD_START:    0,    COLD_END:     6.0,
  REVEAL_START:  6.0,  REVEAL_END:  12.0,
  S1_START:     12.0,  S1_END:      32.0,
  S2_START:     32.0,  S2_END:      50.0,
  PROOF_START:  50.0,  PROOF_END:   56.0,
  WHATELSE_START:56.0, WHATELSE_END:68.0,
  END_START:    68.0,  END_END:     76.0,
};

const HOMEOWNER_ISLAND = null;

// Live-Activity-style pill that briefly expands the dynamic island when
// the AI responds. The outer PhoneBezel handles the width/padding spring
// animation - this component just provides the content (gold dot + label).
// The visibility threshold in HoScene1Inner/HoScene2Inner is centred on
// the alpha curve so the React render swap aligns with the CSS spring.
function HomeownerIslandPill() {
  return (
    <React.Fragment>
      <span style={{
        width: 7, height: 7, borderRadius: 4,
        background: '#D4AF37',
        boxShadow: '0 0 6px #D4AF37',
        display: 'inline-block',
      }} />
      <span style={{ whiteSpace: 'nowrap' }}>OpenHouse Ai · new answer</span>
    </React.Fragment>
  );
}

// ─────────────────────────────────────────────────────────────
// COLD OPEN
// ─────────────────────────────────────────────────────────────
function HoColdOpen() {
  return <HSprite start={HT.COLD_START} end={HT.COLD_END}><HoColdOpenInner /></HSprite>;
}

function HoColdOpenInner() {
  const { localTime: lt } = hUseSprite();
  const markAlpha = hInterp([0, 0.6, 5.4, 6.0], [0, 1, 1, 0], [HE.easeOutCubic, HE.linear, HE.easeInCubic])(lt);
  const markY     = hInterp([0, 1.2], [-24, 0], HE.easeOutCubic)(lt);
  const markScale = hInterp([0, 1.2], [0.92, 1], HE.easeOutCubic)(lt);
  const markGlow  = hInterp([0.4, 1.2, 2.2], [0, 1, 0.4], HE.easeInOutSine)(lt);
  const line1Alpha = hInterp([0.9, 1.5, 5.4, 5.8], [0, 1, 1, 0], [HE.easeOutCubic, HE.linear, HE.easeInCubic])(lt);
  const line1Y     = hInterp([0.9, 1.5], [14, 0], HE.easeOutCubic)(lt);
  const line2Alpha = hInterp([2.8, 3.4, 5.4, 5.8], [0, 1, 1, 0], [HE.easeOutCubic, HE.linear, HE.easeInCubic])(lt);
  const line2Y     = hInterp([2.8, 3.4], [14, 0], HE.easeOutCubic)(lt);

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#050505', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 30%, rgba(212,175,55,0.10), transparent 55%)',
        opacity: 0.6 + 0.4 * markGlow,
      }} />
      <div style={{
        position: 'absolute', top: 110, left: '50%',
        transform: `translateX(-50%) translateY(${markY}px) scale(${markScale})`,
        opacity: markAlpha,
        width: 92, height: 92,
        filter: `drop-shadow(0 0 ${12 + 28 * markGlow}px rgba(212,175,55,${0.35 + 0.4 * markGlow}))`,
      }}>
        <img src={window.OH_MARK_SRC} alt="OpenHouse" style={{ width: '100%', height: '100%' }} />
      </div>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '0 60px', textAlign: 'center',
      }}>
        <div style={{
          opacity: line1Alpha,
          transform: `translateY(${line1Y}px)`,
          color: '#FFFFFF',
          fontFamily: 'var(--font-sans)',
          fontWeight: 800, fontSize: 76,
          lineHeight: 1.06, letterSpacing: '-0.035em',
          maxWidth: 980, marginBottom: 26,
          textWrap: 'balance',
          fontStyle: 'italic',
        }}>"What are the measurements of my living room?"</div>
        <div style={{
          opacity: line2Alpha,
          transform: `translateY(${line2Y}px)`,
          fontFamily: 'var(--font-sans)',
          fontWeight: 700, fontSize: 110,
          lineHeight: 1.05, letterSpacing: '-0.025em',
          maxWidth: 940, textWrap: 'balance',
        }}>
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #FFE489 0%, #D4AF37 50%, #B88A18 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            paddingBottom: 4,
          }}>Just ask OpenHouse.</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// APP REVEAL
// ─────────────────────────────────────────────────────────────
function HoAppReveal() {
  return <HSprite start={HT.REVEAL_START} end={HT.REVEAL_END}><HoAppRevealInner /></HSprite>;
}

function HoAppRevealInner() {
  const { localTime: lt, duration } = hUseSprite();
  const phoneTY    = hInterp([0, 1.6], [70, 0], HE.easeOutCubic)(lt);
  const phoneAlpha = hInterp([0, 0.8, duration - 0.6, duration], [0, 1, 1, 0])(lt);
  const eyebrowAlpha  = hInterp([0.6, 1.4, duration - 0.5, duration], [0, 1, 1, 0])(lt);
  const eyebrowY      = hInterp([0.6, 1.4], [10, 0], HE.easeOutCubic)(lt);
  const headlineAlpha = hInterp([1.2, 2.2, duration - 0.5, duration], [0, 1, 1, 0])(lt);
  const headlineY     = hInterp([1.2, 2.2], [14, 0], HE.easeOutCubic)(lt);
  const bodyAlpha     = hInterp([2.2, 3.0, duration - 0.5, duration], [0, 1, 1, 0])(lt);
  const bodyY         = hInterp([2.2, 3.0], [10, 0], HE.easeOutCubic)(lt);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: '#050505',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', left: 30, top: 200,
        width: 620, height: 620,
        background: 'radial-gradient(circle, rgba(212,175,55,0.12), transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '52px 64px 0',
      }}>
        <img src={window.OH_MARK_SRC} alt="" style={{ width: 32, height: 32 }} />
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700, fontSize: 18,
          letterSpacing: '0.22em',
          color: 'var(--brand-gold)',
        }}>OPENHOUSE</div>
        <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.25)' }} />
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 500, fontSize: 16,
          letterSpacing: '0.02em',
          color: 'rgba(255,255,255,0.7)',
        }}>Property Assistant</div>
      </div>
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center',
        padding: '8px 64px 56px', gap: 44,
        position: 'relative',
      }}>
        <div style={{
          flexShrink: 0,
          opacity: phoneAlpha,
          transform: `translateY(${phoneTY}px)`,
        }}>
          <HoPhoneBezel screenBg="#FFFFFF" dynamicIslandContent={HOMEOWNER_ISLAND}>
            <HomeownerChatHome />
          </HoPhoneBezel>
        </div>
        <div style={{
          flex: 1, alignSelf: 'stretch',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', gap: 18,
        }}>
          <div style={{
            opacity: eyebrowAlpha,
            transform: `translateY(${eyebrowY}px)`,
            fontFamily: 'var(--font-sans)',
            fontSize: 16, fontWeight: 600,
            color: 'var(--brand-gold)',
            letterSpacing: '0.22em', textTransform: 'uppercase',
          }}>Introducing</div>
          <div style={{
            opacity: headlineAlpha,
            transform: `translateY(${headlineY}px)`,
            fontFamily: 'var(--font-sans)',
            fontSize: 78, fontWeight: 800,
            letterSpacing: '-0.03em', lineHeight: 0.98,
            color: '#fff',
          }}>
            Property
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #FFE489, #D4AF37, #B88A18)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Assistant.</span>
          </div>
          <div style={{
            opacity: bodyAlpha,
            transform: `translateY(${bodyY}px)`,
            fontFamily: 'var(--font-sans)',
            fontSize: 21, fontWeight: 500,
            color: 'rgba(255,255,255,0.72)',
            letterSpacing: '-0.005em',
            lineHeight: 1.45,
            maxWidth: 500, marginTop: 6,
            textWrap: 'balance',
          }}>
            Every <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>floor plan</span>, every <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>appliance</span>, every <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>cert</span>. The app that comes&nbsp;with their keys.
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCENE 1 - Living room size question + floor plan reveal
// ─────────────────────────────────────────────────────────────
function HoScene1() {
  return <HSprite start={HT.S1_START} end={HT.S1_END}><HoScene1Inner /></HSprite>;
}

function HoScene1Inner() {
  const { localTime, duration } = hUseSprite();
  const localT = localTime / duration;
  const sceneAlpha = Math.min(Math.min(1, localTime / 0.5), Math.min(1, (duration - localTime) / 0.5));

  // Dynamic island briefly swells when the AI response opens. Threshold
  // centred on the curve so the CSS spring inside PhoneBezel handles the
  // smooth expand/contract.
  const islandActive = localT >= 0.62 && localT <= 0.74;
  const islandContent = islandActive ? <HomeownerIslandPill /> : null;

  const captions = [
    { text: 'They ask.',         start:  9.5, end: 13.5, color: '#fff', size: 90 },
    { text: 'The answer arrives.', start: 13.0, end: 17.5, color: '#fff', size: 70 },
    { text: 'With the plan attached.', start: 17.0, end: 20.5, gradient: true, size: 78, pop: true, typewriter: true },
  ];
  return (
    <HoPhoneCanvas
      phoneT={localT}
      sceneAlpha={sceneAlpha}
      eyebrow="01 / Your home, on call"
      sceneNum="01"
      productLabel="OpenHouse Property Assistant"
      screenBg="#FFFFFF"
      dynamicIslandContent={islandContent}
      screen={<LivingRoomScreen t={localT} />}
      captions={captions}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// SCENE 2 - Heat pump E3 self-diagnosis
// ─────────────────────────────────────────────────────────────
function HoScene2() {
  return <HSprite start={HT.S2_START} end={HT.S2_END}><HoScene2Inner /></HSprite>;
}

function HoScene2Inner() {
  const { localTime, duration } = hUseSprite();
  const localT = localTime / duration;
  const sceneAlpha = Math.min(Math.min(1, localTime / 0.5), Math.min(1, (duration - localTime) / 0.5));

  // Dynamic island swells when the AI fix response opens (around localT 0.32)
  const islandActive = localT >= 0.32 && localT <= 0.44;
  const islandContent = islandActive ? <HomeownerIslandPill /> : null;

  const captions = [
    { text: 'Problems with the heat pump?', start: 5.5, end: 10.5, color: '#fff', size: 60 },
    { text: 'Sorted.',                       start: 10.0, end: 14.0, color: '#fff', size: 96 },
    { text: 'No more phone calls.',          start: 13.5, end: 17.5, gradient: true, size: 80, pop: true, typewriter: true },
  ];
  return (
    <HoPhoneCanvas
      phoneT={localT}
      sceneAlpha={sceneAlpha}
      eyebrow="02 / Every appliance, diagnosed"
      sceneNum="02"
      productLabel="OpenHouse Property Assistant"
      screenBg="#FFFFFF"
      dynamicIslandContent={islandContent}
      screen={<HeatPumpScreen t={localT} />}
      captions={captions}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// PROOF BEAT - the developer benefit
// ─────────────────────────────────────────────────────────────
function HoProof() {
  return <HSprite start={HT.PROOF_START} end={HT.PROOF_END}><HoProofInner /></HSprite>;
}

function HoProofInner() {
  const { localTime: lt, duration } = hUseSprite();
  const sceneAlpha   = hInterp([0, 0.35, duration - 0.35, duration], [0, 1, 1, 0], [HE.easeOutCubic, HE.linear, HE.easeInCubic])(lt);
  const eyebrowAlpha = hInterp([0.15, 0.55], [0, 1], HE.easeOutCubic)(lt);
  const numberAlpha  = hInterp([0.55, 1.05], [0, 1], HE.easeOutCubic)(lt);
  const numberScale  = hInterp([0.55, 1.25], [0.78, 1], HE.easeOutCubic)(lt);
  const sublineAlpha = hInterp([1.4, 1.8], [0, 1], HE.easeOutCubic)(lt);
  const dividerScale = hInterp([1.9, 2.5], [0, 1], HE.easeInOutCubic)(lt);
  const tagAlpha     = hInterp([2.6, 3.1], [0, 1], HE.easeOutCubic)(lt);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: '#050505',
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: sceneAlpha,
      padding: '0 80px',
    }}>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1100, height: 1100,
        background: 'radial-gradient(circle, rgba(212,175,55,0.22), transparent 50%)',
        opacity: numberAlpha,
        pointerEvents: 'none',
      }} />
      <div style={{
        opacity: eyebrowAlpha,
        fontFamily: 'var(--font-sans)',
        fontWeight: 700, fontSize: 22,
        letterSpacing: '0.32em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.55)',
        marginBottom: 32,
      }}>For property developers</div>
      <div style={{
        opacity: numberAlpha,
        transform: `scale(${numberScale})`,
        fontFamily: 'var(--font-sans)',
        fontWeight: 800, fontSize: 104,
        letterSpacing: '-0.03em', lineHeight: 1.0,
        background: 'linear-gradient(135deg, #FFE489 0%, #D4AF37 50%, #B88A18 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 0 60px rgba(212,175,55,0.4))',
        textAlign: 'center',
        textWrap: 'balance',
        maxWidth: 980,
      }}>Their problems, solved.</div>
      <div style={{
        opacity: sublineAlpha,
        fontFamily: 'var(--font-sans)',
        fontWeight: 700, fontSize: 44,
        letterSpacing: '-0.012em',
        color: '#FFFFFF',
        marginTop: 28, textAlign: 'center',
        textWrap: 'balance', maxWidth: 940, lineHeight: 1.12,
      }}>Before the phone ever rings.</div>
      <div style={{
        width: 220, height: 2, marginTop: 28, marginBottom: 22,
        background: 'linear-gradient(90deg, transparent, #D4AF37 30%, #FFE489 50%, #D4AF37 70%, transparent)',
        transform: `scaleX(${dividerScale})`,
        transformOrigin: 'center',
        boxShadow: `0 0 ${12 * dividerScale}px rgba(212,175,55,0.5)`,
      }} />
      <div style={{
        opacity: tagAlpha,
        fontFamily: 'var(--font-sans)',
        fontWeight: 500, fontSize: 26,
        letterSpacing: '-0.005em',
        color: 'rgba(255,255,255,0.78)',
        textAlign: 'center',
      }}>Fewer support calls. Lower aftercare cost. Happier handovers.</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// WHAT ELSE - breadth montage
// ─────────────────────────────────────────────────────────────
function HoWhatElse() {
  return <HSprite start={HT.WHATELSE_START} end={HT.WHATELSE_END}><HoWhatElseInner /></HSprite>;
}

function HoWhatElseInner() {
  const { localTime, duration } = hUseSprite();
  const localT = localTime / duration;
  const sceneAlpha = Math.min(Math.min(1, localTime / 0.4), Math.min(1, (duration - localTime) / 0.4));
  const captions = [
    { text: 'Plans. Appliances. Docs. Maps.', start: 0.0, end: 6.0, color: '#fff', size: 60 },
    { text: 'All in one app.',                 start: 5.8, end: 12.0, gradient: true, size: 96, pop: true },
  ];
  return (
    <HoPhoneCanvas
      phoneT={localT}
      sceneAlpha={sceneAlpha}
      eyebrow="03 / What else?"
      sceneNum="03"
      productLabel="OpenHouse Property Assistant"
      screenBg="#FFFFFF"
      dynamicIslandContent={HOMEOWNER_ISLAND}
      screen={<HomeownerBreadthScreen t={localT} />}
      captions={captions}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// END CARD
// ─────────────────────────────────────────────────────────────
function HoEndCard() {
  return <HSprite start={HT.END_START} end={HT.END_END}><HoEndCardInner /></HSprite>;
}

function HoEndCardInner() {
  const { localTime: lt } = hUseSprite();
  const washAlpha = hInterp([0, 0.6], [0, 1], HE.easeOutCubic)(lt);
  const markAlpha = hInterp([0.2, 1.0], [0, 1], HE.easeOutCubic)(lt);
  const markScale = hInterp([0.2, 1.4], [0.82, 1], HE.easeOutCubic)(lt);
  const markY     = hInterp([0.2, 1.0], [30, 0], HE.easeOutCubic)(lt);
  const wmAlpha = hInterp([0.7, 1.4], [0, 1], HE.easeOutCubic)(lt);
  const wmY     = hInterp([0.7, 1.4], [22, 0], HE.easeOutCubic)(lt);
  const underline = hInterp([1.4, 2.4], [0, 1], HE.easeInOutCubic)(lt);
  const subAlpha = hInterp([2.0, 2.8], [0, 1], HE.easeOutCubic)(lt);
  const subY     = hInterp([2.0, 2.8], [18, 0], HE.easeOutCubic)(lt);
  const tagAlpha = hInterp([3.0, 3.8], [0, 1], HE.easeOutCubic)(lt);
  const tagY     = hInterp([3.0, 3.8], [18, 0], HE.easeOutCubic)(lt);
  const urlAlpha = hInterp([4.0, 4.8], [0, 1], HE.easeOutCubic)(lt);
  const urlY     = hInterp([4.0, 4.8], [14, 0], HE.easeOutCubic)(lt);
  const breath = 1 + 0.005 * Math.sin((lt - 5) * 1.3);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: '#050505',
      opacity: washAlpha,
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '0 80px',
    }}>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -55%)',
        width: 1100, height: 1100,
        background: 'radial-gradient(circle, rgba(212,175,55,0.16), transparent 55%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        opacity: markAlpha,
        transform: `translateY(${markY}px) scale(${markScale * breath})`,
        width: 200, height: 200,
        marginBottom: 8,
        filter: 'drop-shadow(0 0 40px rgba(212,175,55,0.45))',
      }}>
        <img src={window.OH_MARK_SRC} style={{ width: '100%', height: '100%' }} />
      </div>
      <div style={{
        opacity: wmAlpha,
        transform: `translateY(${wmY}px)`,
        fontFamily: 'var(--font-sans)',
        fontWeight: 800, fontSize: 80,
        letterSpacing: '-0.03em', lineHeight: 1,
        background: 'linear-gradient(180deg, #FFE489 0%, #D4AF37 55%, #B88A18 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        textWrap: 'balance', maxWidth: 920,
      }}>OpenHouse Property Assistant</div>
      <div style={{
        width: 360, height: 4, marginTop: 22, marginBottom: 24,
        background: 'linear-gradient(90deg, transparent, #D4AF37 20%, #FFE489 50%, #D4AF37 80%, transparent)',
        transform: `scaleX(${underline})`,
        transformOrigin: 'center',
        borderRadius: 4,
        boxShadow: `0 0 ${20 * underline}px rgba(212,175,55,0.6)`,
      }} />
      <div style={{
        opacity: subAlpha,
        transform: `translateY(${subY}px)`,
        fontFamily: 'var(--font-sans)',
        fontWeight: 600, fontSize: 28,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: '#fff', marginBottom: 22,
        textAlign: 'center', maxWidth: 820,
        textWrap: 'balance', lineHeight: 1.3,
      }}>Built for developers. Loved by residents.</div>
      <div style={{
        opacity: tagAlpha,
        transform: `translateY(${tagY}px)`,
        fontFamily: 'var(--font-serif, "Iowan Old Style", "Palatino", serif)',
        fontWeight: 400, fontStyle: 'italic', fontSize: 40,
        color: 'rgba(255,255,255,0.85)',
        textAlign: 'center', marginBottom: 38,
        textWrap: 'balance', maxWidth: 880,
        letterSpacing: '-0.005em',
      }}>After-sales service, for the 21st century.</div>
      <div style={{
        opacity: urlAlpha,
        transform: `translateY(${urlY}px)`,
        display: 'inline-flex', alignItems: 'center', gap: 14,
        padding: '20px 36px', borderRadius: 999,
        background: 'linear-gradient(135deg, #FFE489 0%, #D4AF37 50%, #B88A18 100%)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 700, fontSize: 28,
        color: '#1A1408',
        boxShadow: '0 12px 40px rgba(212,175,55,0.45), 0 0 0 1px rgba(184,138,24,0.4) inset',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, bottom: 0, width: '35%',
          background: 'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
          animation: 'ho-cta-shimmer 2400ms linear infinite',
          pointerEvents: 'none', mixBlendMode: 'overlay',
        }} />
        <style>{`@keyframes ho-cta-shimmer { 0% { transform: translateX(-180%); } 55% { transform: translateX(360%); } 100% { transform: translateX(360%); } }`}</style>
        <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: 14 }}>
          <span style={{
            fontWeight: 600, fontSize: 18,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            opacity: 0.78,
          }}>Visit</span>
          <span style={{ fontWeight: 800 }}>openhouseai.ie</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M5 11h12M12 5l6 6-6 6" stroke="#1A1408" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      <div style={{
        opacity: urlAlpha,
        transform: `translateY(${urlY}px)`,
        marginTop: 22,
        display: 'flex', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-sans)',
        fontWeight: 500, fontSize: 19,
        color: 'rgba(255,255,255,0.65)',
      }}>
        <span>or book a 15-minute demo</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.7 }}>
          <path d="M3 7h7M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

Object.assign(window, {
  HoColdOpen, HoAppReveal, HoScene1, HoScene2, HoProof, HoWhatElse, HoEndCard,
  HT_SCENES: HT, HOW, HOH,
});
