/* Homeowner Property Assistant promo - phone screens.
 *
 * Reuses the Agent's warm gold/cream brand language and chrome
 * primitives (OpenHouseHeader, BottomBar concepts, UserBubble,
 * IntelligenceCard, etc) but specialised for the homeowner audience
 * showing the OpenHouse Property Assistant app.
 *
 * Surfaces in this file:
 *   - HomeownerHeader        OpenHouse Ai logo + EN selector + mode/avatar
 *   - HomeownerBottomBar     4-tab: Chat / Map / News / Docs
 *   - HomeownerChatHome      welcome screen with 4 quick-prompt chips
 *   - LivingRoomScreen       "what size is my living room" flow + floor plan
 *   - HeatPumpScreen         red light fault diagnosis flow (echoes Care)
 *   - HomeownerBreadthScreen 6-frame breadth: Plans/HP/Solar/Docs/Maps/Noticeboard
 */

// Shared tokens / components from Agent's phone-screens.jsx
const ohH        = window.ohTokens;
const ohHGoldG   = window.goldGradient;
const ohHGoldGS  = window.goldGradientSoft;
const {
  UserBubble:    HUserBubble,
  TypingPill:    HTypingPill,
  IntelligenceCard: HICard,
  ICardText:     HICardText,
  ChecklistRow:  HChecklistRow,
  GoldCTA:       HGoldCTA,
} = window;

// Local easings
const hramp = (t, a, b) => {
  if (t <= a) return 0;
  if (t >= b) return 1;
  const x = (t - a) / (b - a);
  return 1 - Math.pow(1 - x, 3);
};
const hclip = v => Math.max(0, Math.min(1, v));

// ─────────────────────────────────────────────────────────────
// HEADER - OpenHouse Ai logo top-left, EN selector, mode toggle, avatar
// Uses the real cropped logo asset for fidelity to the live app.
// ─────────────────────────────────────────────────────────────
function HomeownerHeader() {
  return (
    <div style={{
      padding: '12px 14px 12px',
      background: '#FFFFFF',
      borderBottom: `1px solid ${ohH.border}`,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      {/* Inline logo: gold mark + "OpenHouse Ai" text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, flex: 1 }}>
        <img
          src={window.OH_MARK_SRC}
          alt="OpenHouse Ai"
          style={{ width: 22, height: 22, display: 'block' }}
        />
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700, fontSize: 12.5,
          color: ohH.gold,
          letterSpacing: '-0.005em',
        }}>OpenHouse Ai</div>
      </div>
      {/* EN selector */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 3,
        padding: '4px 9px',
        border: `1px solid ${ohH.border}`,
        borderRadius: 999,
        fontSize: 11, fontWeight: 600, color: ohH.text1,
      }}>
        EN
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* Mode toggle - dark mode crescent moon */}
      <div style={{
        width: 28, height: 28, borderRadius: 14,
        border: `1px solid ${ohH.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: ohH.text1,
        background: '#FFFFFF',
      }}>
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
          <path d="M17 12.5A7.5 7.5 0 017.5 3a.8.8 0 00-1-1A8.5 8.5 0 1018 13.5a.8.8 0 00-1-1z"
                fill="currentColor"/>
        </svg>
      </div>
      {/* Avatar */}
      <div style={{
        width: 26, height: 26, borderRadius: 13,
        background: ohH.gold,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#FFFFFF',
      }}>
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="5" r="2.4" stroke="currentColor" strokeWidth="1.4" fill="none"/>
          <path d="M2.5 12c0-2.4 2-3.5 4.5-3.5s4.5 1.1 4.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BOTTOM BAR - input + 4-tab nav (Chat / Map / News / Docs)
// ─────────────────────────────────────────────────────────────
function HomeownerBottomBar({ inputText = '', focused = false, active = 'Chat', showInput = true }) {
  return (
    <div style={{ background: '#FFFFFF', paddingTop: 0 }}>
      {showInput && (
        <div style={{ padding: '6px 14px 4px' }}>
          <div style={{
            background: '#F1F1EF',
            borderRadius: 999,
            height: 40,
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '0 12px 0 14px',
            boxShadow: focused ? `0 0 0 1.5px ${ohH.gold}40` : 'none',
          }}>
            <div style={{
              flex: 1, fontSize: 12.5,
              color: inputText ? ohH.text1 : ohH.text3,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>
              {inputText || 'Ask about your home or community...'}
              {inputText && <span className="hocaret"></span>}
            </div>
            <div style={{ color: ohH.text3 }}>
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <rect x="4" y="2" width="4" height="6" rx="2" fill="currentColor"/>
                <path d="M2.5 6.5a3.5 3.5 0 007 0M6 10v1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
          </div>
          <div style={{
            fontSize: 9.5, color: ohH.text3,
            textAlign: 'center', marginTop: 4,
          }}>Powered by AI • Information provided for reference only</div>
        </div>
      )}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        padding: '6px 4px 6px',
        background: '#FFFFFF',
        borderTop: `1px solid ${ohH.border}`,
      }}>
        {[
          { key: 'Chat', icon: <HOChatIcon /> },
          { key: 'Map',  icon: <HOMapIcon /> },
          { key: 'News', icon: <HOBellIcon /> },
          { key: 'Docs', icon: <HODocsIcon /> },
        ].map(t => {
          const isActive = t.key === active;
          return (
            <div key={t.key} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 2, padding: '4px 0 2px',
            }}>
              <div style={{ color: isActive ? ohH.gold : ohH.text2 }}>{t.icon}</div>
              <div style={{
                fontSize: 10, fontWeight: 600,
                color: isActive ? ohH.gold : ohH.text2,
              }}>{t.key}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HOChatIcon() { return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.5 9.5C3.5 5.9 6.5 3 10 3s6.5 2.9 6.5 6.5S13.5 16 10 16c-.9 0-1.8-.2-2.6-.5L4 17l1-3.2c-.9-1.2-1.5-2.6-1.5-4.3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/></svg>; }
function HOMapIcon() { return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5l5-2 4 2 5-2v12l-5 2-4-2-5 2V5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/><path d="M8 3v12M12 5v12" stroke="currentColor" strokeWidth="1.4"/></svg>; }
function HOBellIcon() { return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3a4.5 4.5 0 014.5 4.5v3l1.5 3h-12l1.5-3v-3A4.5 4.5 0 0110 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/><path d="M8 16a2 2 0 004 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>; }
function HODocsIcon() { return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 2.5h7l3 3v12a1 1 0 01-1 1H5a1 1 0 01-1-1v-14a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/><path d="M12 2.5v3h3M6.5 9.5h7M6.5 12.5h7M6.5 15.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>; }

// ─────────────────────────────────────────────────────────────
// SUGGESTION CHIP - matches Property Assistant style (outlined pill)
// ─────────────────────────────────────────────────────────────
function HoChip({ children, highlighted = false, highlightAlpha = 0 }) {
  return (
    <div style={{
      background: highlighted ? `rgba(212,175,55,${0.08 + 0.12 * highlightAlpha})` : '#FFFFFF',
      border: `1px solid ${highlighted ? ohH.gold + 'AA' : ohH.border}`,
      color: ohH.text1,
      borderRadius: 14,
      padding: '12px 14px',
      fontSize: 12.5, fontWeight: 500,
      textAlign: 'center',
      lineHeight: 1.3,
      transition: 'background 200ms, border 200ms',
      boxShadow: highlighted ? `0 0 0 ${4 * highlightAlpha}px rgba(212,175,55,0.10)` : 'none',
    }}>{children}</div>
  );
}

// ─────────────────────────────────────────────────────────────
// CHAT HOME - the homeowner's landing screen
// ─────────────────────────────────────────────────────────────
function HomeownerChatHome({ chipHighlight = 0, chipTap = false, highlightedChip = null }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#FFFFFF',
      display: 'flex', flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
    }}>
      <HomeownerHeader />
      <div className="no-scrollbar" style={{
        flex: 1, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center',
        padding: '0 16px',
      }}>
        {/* Big empty space then centered logo with soft halo */}
        <div style={{
          marginTop: 116, marginBottom: 4,
          padding: '14px 22px',
          borderRadius: 999,
          background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.10) 0%, transparent 70%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        }}>
          <img src={window.OH_MARK_SRC} alt="OpenHouse Ai" style={{ width: 56, height: 56, display: 'block' }} />
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700, fontSize: 18,
            color: ohH.gold,
            letterSpacing: '-0.005em',
          }}>OpenHouse Ai</div>
        </div>
        <div style={{
          fontSize: 19, fontWeight: 700, color: ohH.text1,
          letterSpacing: '-0.018em', lineHeight: 1.22,
          textAlign: 'center', marginTop: 26,
          maxWidth: 290,
        }}>Ask anything about your home or community</div>
        <div style={{
          fontSize: 12.5, color: ohH.text2,
          textAlign: 'center', marginTop: 10,
          lineHeight: 1.45, maxWidth: 280,
        }}>Quick answers for daily life: floor plans, manuals, certs, warranties, the lot.</div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 12, marginTop: 22,
          width: '100%', maxWidth: 320,
        }}>
          {['Storage Ideas', 'Long-Term Maintenance', 'Planning Rules', 'EV Charging'].map(label => {
            const isHi = label === highlightedChip;
            return (
              <div key={label} style={{
                transform: isHi && chipTap ? 'scale(0.95)' : 'scale(1)',
                transition: 'transform 120ms cubic-bezier(0.16,1,0.3,1)',
              }}>
                <HoChip
                  highlighted={isHi && chipHighlight > 0.05}
                  highlightAlpha={isHi ? chipHighlight : 0}
                >{label}</HoChip>
              </div>
            );
          })}
        </div>
      </div>
      <HomeownerBottomBar active="Chat" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FLOOR PLAN CARD - the AI's living room answer
//
// Shows a small floor plan diagram with the living room highlighted,
// plus a "Open floor plan" download CTA.
// ─────────────────────────────────────────────────────────────
function FloorPlanDiagram({ width = 220, highlightLR = true, revealProgress = 1 }) {
  // Stage opacities: 0-0.25 walls, 0.25-0.55 rooms, 0.55-0.80 labels, 0.80-1.0 dimensions
  const wallsA  = hclip(revealProgress / 0.25);
  const roomsA  = hclip((revealProgress - 0.25) / 0.30);
  const labelsA = hclip((revealProgress - 0.55) / 0.25);
  const dimsA   = hclip((revealProgress - 0.80) / 0.20);
  return (
    <svg width={width} viewBox="0 0 240 168" fill="none" style={{ display: 'block' }}>
      {/* Outer wall - heavier stroke, clean rectangle */}
      <g opacity={wallsA}>
        <rect x="4" y="4" width="232" height="160" stroke={ohH.text1} strokeWidth="3" fill="#FBFAF5" rx="2"/>
      </g>

      {/* LIVING ROOM (highlighted) */}
      <g opacity={roomsA}>
        <rect x="6" y="6" width="128" height="92" fill={highlightLR ? 'rgba(212,175,55,0.18)' : '#FFFFFF'} stroke={highlightLR ? ohH.gold : ohH.text2} strokeWidth={highlightLR ? 2.2 : 1.4}/>
        {/* Living room sofa */}
        <rect x="20" y="78" width="50" height="12" rx="2" fill={highlightLR ? ohH.gold + '55' : ohH.text3 + '55'}/>
        <rect x="18" y="74" width="6"  height="18" rx="1.5" fill={highlightLR ? ohH.gold + '55' : ohH.text3 + '55'}/>
        <rect x="66" y="74" width="6"  height="18" rx="1.5" fill={highlightLR ? ohH.gold + '55' : ohH.text3 + '55'}/>
        {/* Living room rug */}
        <rect x="86" y="70" width="36" height="22" rx="2" fill="none" stroke={highlightLR ? ohH.gold + '70' : ohH.text3 + '70'} strokeWidth="1" strokeDasharray="2 2"/>
        {/* Living room TV unit */}
        <rect x="18" y="14" width="40" height="6" rx="1" fill={highlightLR ? ohH.gold + '40' : ohH.text3 + '40'}/>
      </g>

      {/* Living room label - stage 3 */}
      <g opacity={labelsA}>
        <text x="70" y="40" textAnchor="middle" fontSize="9" fontWeight="800" fill={highlightLR ? ohH.goldDark : ohH.text2} fontFamily="var(--font-sans)" letterSpacing="0.05em">LIVING ROOM</text>
      </g>

      {/* Living room dimensions - stage 4 (the payoff) */}
      <g opacity={dimsA}>
        <text x="70" y="54" textAnchor="middle" fontSize="14" fontWeight="800" fill={highlightLR ? ohH.text1 : ohH.text2} fontFamily="var(--font-sans)">28.5 m²</text>
        <text x="70" y="66" textAnchor="middle" fontSize="7.5" fill={ohH.text2} fontFamily="var(--font-sans)">5.7m × 5.0m</text>
      </g>

      {/* KITCHEN room */}
      <g opacity={roomsA}>
        <rect x="136" y="6" width="98" height="58" fill="#FFFFFF" stroke={ohH.text2} strokeWidth="1.2"/>
        {/* Kitchen island */}
        <rect x="160" y="40" width="42" height="14" rx="1.5" fill={ohH.text3 + '33'} stroke={ohH.text3} strokeWidth="0.6"/>
        {/* Kitchen counter top edge */}
        <rect x="138" y="8" width="94" height="6" fill={ohH.text3 + '20'}/>
      </g>
      <g opacity={labelsA}>
        <text x="185" y="26" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={ohH.text2} fontFamily="var(--font-sans)" letterSpacing="0.04em">KITCHEN</text>
      </g>
      <g opacity={dimsA}>
        <text x="185" y="38" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={ohH.text2} fontFamily="var(--font-sans)">14.2 m²</text>
      </g>

      {/* DINING room */}
      <g opacity={roomsA}>
        <rect x="136" y="66" width="98" height="32" fill="#FFFFFF" stroke={ohH.text2} strokeWidth="1.2"/>
        <ellipse cx="185" cy="84" rx="18" ry="9" fill="none" stroke={ohH.text3} strokeWidth="0.8"/>
      </g>
      <g opacity={labelsA}>
        <text x="155" y="82" fontSize="8" fontWeight="700" fill={ohH.text2} fontFamily="var(--font-sans)">DINING</text>
      </g>

      {/* HALL */}
      <g opacity={roomsA}>
        <rect x="6" y="100" width="84" height="58" fill="#FFFFFF" stroke={ohH.text2} strokeWidth="1.2"/>
        <g stroke={ohH.text3} strokeWidth="0.6">
          <line x1="14" y1="118" x2="44" y2="118"/>
          <line x1="14" y1="124" x2="44" y2="124"/>
          <line x1="14" y1="130" x2="44" y2="130"/>
          <line x1="14" y1="136" x2="44" y2="136"/>
          <line x1="14" y1="142" x2="44" y2="142"/>
        </g>
      </g>
      <g opacity={labelsA}>
        <text x="65" y="128" textAnchor="middle" fontSize="8" fontWeight="700" fill={ohH.text2} fontFamily="var(--font-sans)">HALL</text>
      </g>

      {/* WC */}
      <g opacity={roomsA}>
        <rect x="92" y="100" width="44" height="28" fill="#FFFFFF" stroke={ohH.text2} strokeWidth="1.2"/>
        <circle cx="116" cy="116" r="3.5" fill="none" stroke={ohH.text3} strokeWidth="0.6"/>
      </g>
      <g opacity={labelsA}>
        <text x="114" y="120" textAnchor="middle" fontSize="7" fontWeight="700" fill={ohH.text2} fontFamily="var(--font-sans)">WC</text>
      </g>

      {/* UTILITY */}
      <g opacity={roomsA}>
        <rect x="92" y="130" width="44" height="28" fill="#FFFFFF" stroke={ohH.text2} strokeWidth="1.2"/>
        <rect x="98" y="138" width="10" height="14" rx="1" fill="none" stroke={ohH.text3} strokeWidth="0.6"/>
      </g>
      <g opacity={labelsA}>
        <text x="120" y="148" textAnchor="middle" fontSize="7" fontWeight="700" fill={ohH.text2} fontFamily="var(--font-sans)">UTILITY</text>
      </g>

      {/* GARAGE */}
      <g opacity={roomsA}>
        <rect x="138" y="100" width="96" height="58" fill="#FFFFFF" stroke={ohH.text2} strokeWidth="1.2"/>
        <line x1="143" y1="156" x2="229" y2="156" stroke={ohH.text3} strokeWidth="2"/>
        <line x1="143" y1="156" x2="143" y2="158" stroke={ohH.text3} strokeWidth="1"/>
        <line x1="229" y1="156" x2="229" y2="158" stroke={ohH.text3} strokeWidth="1"/>
      </g>
      <g opacity={labelsA}>
        <text x="186" y="130" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={ohH.text2} fontFamily="var(--font-sans)">GARAGE</text>
      </g>

      {/* Door arcs - small doorways */}
      <g opacity={roomsA}>
        <path d="M134 70 q-6 4 -10 0" fill="none" stroke={ohH.text2} strokeWidth="0.7"/>
        <path d="M90 110 q4 6 0 10" fill="none" stroke={ohH.text2} strokeWidth="0.7"/>
      </g>

      {/* North arrow */}
      <g opacity={labelsA} transform="translate(220, 14)">
        <circle r="6" fill="#FFFFFF" stroke={ohH.text2} strokeWidth="0.6"/>
        <path d="M0 -4 L2 2 L0 1 L-2 2 Z" fill={ohH.text1}/>
        <text y="-7" textAnchor="middle" fontSize="5.5" fontWeight="700" fill={ohH.text2} fontFamily="var(--font-sans)">N</text>
      </g>

      {/* Stamp */}
      <g opacity={labelsA}>
        <text x="8" y="167" fontSize="6" fill={ohH.text3} fontFamily="var(--font-mono, monospace)" letterSpacing="0.05em">UNIT 9 • 3-BED SEMI • GROUND FLOOR</text>
      </g>

      {/* Scale bar */}
      <g opacity={labelsA} transform="translate(190, 165)">
        <line x1="0" y1="0" x2="20" y2="0" stroke={ohH.text3} strokeWidth="0.8"/>
        <line x1="0" y1="-2" x2="0" y2="2" stroke={ohH.text3} strokeWidth="0.8"/>
        <line x1="20" y1="-2" x2="20" y2="2" stroke={ohH.text3} strokeWidth="0.8"/>
        <text x="22" y="2" fontSize="5.5" fill={ohH.text3} fontFamily="var(--font-mono, monospace)">1m</text>
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// SCENE 1 — "What size is my living room?"
//
// Local timeline (t = 0..1 over ~20s scene):
//   0.00-0.08  Chat home with chips. "Storage Ideas" chip highlights and taps
//              (placeholder - actually user types the question)
//   0.08-0.50  User types: "What size is my living room?"
//   0.50-0.55  Send tap
//   0.55-0.60  User bubble lands
//   0.60-0.66  AI typing pill
//   0.66-0.74  AI response opens: "Your living room is 28.5 m²..."
//   0.74-0.82  Floor plan diagram appears with LR highlighted
//   0.82-0.90  Detail line: "5.7m x 5.0m. South-facing."
//   0.90-0.98  Gold CTA "Open full floor plan"
//   0.98-1.00  Hold
// ─────────────────────────────────────────────────────────────
const LR_PROMPT = 'What are the measurements of my living room?';

function LivingRoomScreen({ t }) {
  const typeProgress = hclip((t - 0.10) / (0.30 - 0.10));
  const typedChars = Math.floor(typeProgress * LR_PROMPT.length);
  const typed = LR_PROMPT.slice(0, typedChars);
  const inputFocused = t > 0.06 && t < 0.45;
  const sending = t >= 0.40 && t < 0.45;

  const chipsAlpha = 1 - hramp(t, 0.40, 0.47);
  const showChips = chipsAlpha > 0.02;

  const userAlpha   = hramp(t, 0.45, 0.51);
  const typingRaw   = hramp(t, 0.51, 0.55) * (1 - hramp(t, 0.58, 0.62));
  const aiAlpha     = hramp(t, 0.62, 0.68);
  const typingAlpha = aiAlpha > 0.01 ? 0 : typingRaw;

  const summaryAlpha = hramp(t, 0.66, 0.72);
  const planAlpha    = hramp(t, 0.72, 0.78);
  const detailAlpha  = hramp(t, 0.76, 0.82);
  const ctaAlpha     = hramp(t, 0.92, 0.97);
  const ctaTapped    = t > 0.97 && t < 0.99;

  const inputText = sending ? '' : typed;

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#FFFFFF',
      display: 'flex', flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
    }}>
      <HomeownerHeader />
      <div className="no-scrollbar" style={{
        flex: 1, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        padding: '6px 14px 0',
        position: 'relative',
      }}>
        {showChips && (
          <div style={{
            opacity: chipsAlpha,
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            pointerEvents: 'none',
            padding: '0 16px',
          }}>
            <div style={{
              marginTop: 116, marginBottom: 4,
              padding: '14px 22px',
              borderRadius: 999,
              background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.10) 0%, transparent 70%)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            }}>
              <img src={window.OH_MARK_SRC} alt="OpenHouse Ai" style={{ width: 56, height: 56, display: 'block' }} />
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700, fontSize: 18,
                color: ohH.gold,
                letterSpacing: '-0.005em',
              }}>OpenHouse Ai</div>
            </div>
            <div style={{
              fontSize: 19, fontWeight: 700, color: ohH.text1,
              letterSpacing: '-0.018em', lineHeight: 1.22,
              textAlign: 'center', marginTop: 26, maxWidth: 290,
            }}>Ask anything about your home or community</div>
            <div style={{
              fontSize: 12.5, color: ohH.text2,
              textAlign: 'center', marginTop: 10, lineHeight: 1.45, maxWidth: 280,
            }}>Quick answers for daily life: floor plans, manuals, certs, warranties, the lot.</div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 12, marginTop: 22, width: '100%', maxWidth: 320,
            }}>
              {['Storage Ideas', 'Long-Term Maintenance', 'Planning Rules', 'EV Charging'].map(label => (
                <HoChip key={label}>{label}</HoChip>
              ))}
            </div>
          </div>
        )}
        <div style={{
          opacity: hramp(t, 0.52, 0.58),
          marginTop: 14,
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {userAlpha > 0 && (
            <HUserBubble animate={userAlpha}>{LR_PROMPT}</HUserBubble>
          )}
          <div style={{
            maxHeight: typingAlpha > 0 ? 40 : 0,
            overflow: 'hidden',
            transition: 'max-height 240ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}>
            {typingAlpha > 0 && <HTypingPill animate={typingAlpha} />}
          </div>
          {aiAlpha > 0 && (
            <HICard animate={aiAlpha}>
              <HICardText size={12.5}>
                <span style={{ opacity: summaryAlpha }}>
                  Your <b>living room</b> is <b>28.5 m²</b> (307 sq ft) - one of the largest in your spec.
                </span>
              </HICardText>
              {planAlpha > 0 && (() => {
                // Punch-in zoom: when plan first appears, briefly zoom into
                // the living room (top-left), then settle back to full view.
                // Living room sits at viewBox ~(6,6)-(134,98) in a 240x168
                // viewBox, so the LR centre is roughly (70, 52). When we
                // scale by Z, transform-origin (70/240, 52/168) keeps the
                // LR centred.
                const zoomP = hclip((t - 0.74) / (0.86 - 0.74));
                const easedZoom = 1 - Math.pow(1 - zoomP, 3); // easeOutCubic
                const zoom = 1.32 - 0.32 * easedZoom; // 1.32 → 1.0
                const originX = 70 / 240 * 100;  // ≈ 29%
                const originY = 52 / 168 * 100;  // ≈ 31%
                return (
                  <div style={{
                    opacity: planAlpha,
                    transform: `translateY(${(1 - planAlpha) * 6}px)`,
                    background: '#FAFAF6',
                    borderRadius: 10,
                    padding: '8px',
                    marginTop: 2,
                    display: 'flex', justifyContent: 'center',
                    border: `1px solid ${ohH.border}`,
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      transform: `scale(${zoom.toFixed(3)})`,
                      transformOrigin: `${originX}% ${originY}%`,
                      transition: 'transform 60ms linear',
                      display: 'flex', justifyContent: 'center',
                    }}>
                      <FloorPlanDiagram width={272} revealProgress={hclip((t - 0.72) / (0.84 - 0.72))} />
                    </div>
                  </div>
                );
              })()}
              {detailAlpha > 0 && (
                <div style={{
                  opacity: detailAlpha,
                  display: 'flex', flexDirection: 'column', gap: 4,
                  marginTop: 2,
                  fontSize: 11.5, lineHeight: 1.5, color: ohH.text2,
                }}>
                  <div><b style={{ color: ohH.text1 }}>Dimensions</b> · 5.7m × 5.0m</div>
                  <div><b style={{ color: ohH.text1 }}>Aspect</b> · south-facing, dual-aspect</div>
                  <div><b style={{ color: ohH.text1 }}>Source</b> · your Ground Floor plan, A3</div>
                </div>
              )}
              {ctaAlpha > 0 && (
                <div style={{ height: 1, background: 'rgba(0,0,0,0.06)', marginTop: 2, marginBottom: 4, opacity: ctaAlpha }} />
              )}
              {ctaAlpha > 0 && (
                <HGoldCTA
                  alpha={ctaAlpha}
                  tapped={ctaTapped}
                  icon={
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 2h6l2 2v8a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
                      <path d="M7 7v3M5 8.5l2 1.5 2-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  }
                >Open full floor plan</HGoldCTA>
              )}
            </HICard>
          )}
        </div>
      </div>
      <HomeownerBottomBar active="Chat" inputText={inputText} focused={inputFocused} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCENE 2 — Heat pump diagnosis (homeowner-framed)
// ─────────────────────────────────────────────────────────────
const HP_PROMPT = "There's a red light flashing on my heat pump and it's saying E3. What do I do?";

const HP_FIX_STEPS = [
  "Switch off at the unit and the isolator. Wait 3 minutes.",
  "Find the indoor unit - usually in your utility or hot press.",
  "Check the air filter behind the front panel.",
  "Rinse, dry for 20 minutes, refit.",
  "Switch back on. The red light clears in 2 minutes.",
];

function HeatPumpScreen({ t }) {
  const userAlpha   = hramp(t, 0.10, 0.18);
  const typingRaw   = hramp(t, 0.18, 0.24) * (1 - hramp(t, 0.28, 0.32));
  const aiAlpha     = hramp(t, 0.32, 0.38);
  const typingAlpha = aiAlpha > 0.01 ? 0 : typingRaw;
  const introAlpha  = hramp(t, 0.36, 0.42);
  const introB      = hramp(t, 0.46, 0.52);
  const stepAlpha = (i) => hramp(t, 0.52 + i * 0.06, 0.58 + i * 0.06);

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#FFFFFF',
      display: 'flex', flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
    }}>
      <div className="no-scrollbar" style={{
        flex: 1, overflow: 'hidden',
        padding: '12px 14px 0',
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        {userAlpha > 0 && <HUserBubble animate={userAlpha}>{HP_PROMPT}</HUserBubble>}
        <div style={{
          maxHeight: typingAlpha > 0 ? 40 : 0,
          overflow: 'hidden',
          transition: 'max-height 240ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          {typingAlpha > 0 && <HTypingPill animate={typingAlpha} />}
        </div>
        {aiAlpha > 0 && (
          <HICard animate={aiAlpha}>
            <HICardText size={12.5}>
              <span style={{ opacity: introAlpha }}>
                <b>E3</b> means high pressure in your heat pump - usually a <b>blocked air filter</b>. Here's how to clear it:
              </span>
            </HICardText>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
              {HP_FIX_STEPS.map((step, i) => (
                <HChecklistRow key={i} alpha={stepAlpha(i)}>
                  {step}
                </HChecklistRow>
              ))}
            </div>
            <div style={{
              opacity: introB,
              fontSize: 10.5, color: ohH.text2,
              marginTop: 4, paddingTop: 6,
              borderTop: '1px dashed rgba(0,0,0,0.08)',
              display: 'flex', alignItems: 'center', gap: 4,
            }}>
              <span style={{
                width: 12, height: 12, borderRadius: 6,
                background: ohH.gold + '33', color: ohH.gold,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 9, fontWeight: 700,
              }}>i</span>
              Source · your Mitsubishi Ecodan installation manual, page 14.
            </div>
          </HICard>
        )}
      </div>
      <HomeownerBottomBar active="Chat" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BREADTH MONTAGE - 5 frames showing what else the assistant covers
// ─────────────────────────────────────────────────────────────
const HO_BREADTH = [
  {
    key: 'plans',
    title: 'Floor plans',
    eyebrow: 'YOUR HOME',
    headline: 'Room dimensions, on tap',
    rows: [
      { name: 'Living room',     meta: '28.5 m² · 5.7×5.0',  badge: 'A3 GROUND',  color: 'gold' },
      { name: 'Kitchen + Dining', meta: '20.4 m² · 5.7×3.6', badge: 'A3 GROUND',  color: 'gold' },
      { name: 'Master bedroom',  meta: '14.6 m² · 4.2×3.5',  badge: 'A3 FIRST',   color: 'gold' },
    ],
    icon: <BedIcon />,
  },
  {
    key: 'heatpump',
    title: 'Heat pump',
    eyebrow: 'YOUR APPLIANCES',
    headline: 'Self-diagnose any fault',
    rows: [
      { name: 'E3 · high pressure', meta: 'Filter cleaning · 60 sec', badge: 'GUIDED',  color: 'gold'  },
      { name: 'Annual service',     meta: 'Due in 47 days',           badge: 'BOOKED',  color: 'green' },
      { name: 'Warranty',           meta: '5 years remaining',        badge: 'COVERED', color: 'green' },
    ],
    icon: <FlameIcon />,
  },
  {
    key: 'solar',
    title: 'Solar + battery',
    eyebrow: 'YOUR APPLIANCES',
    headline: 'How much you generated today',
    rows: [
      { name: 'Generated today',    meta: '9.5 kWh',           badge: 'LIVE',     color: 'green' },
      { name: 'Saved this month',   meta: '€87.12',            badge: '+4% MoM',  color: 'gold'  },
      { name: 'Battery',            meta: '68% · solar charge', badge: 'CHARGING', color: 'green' },
    ],
    icon: <SunIcon2 />,
  },
  {
    key: 'docs',
    title: 'Docs + warranties',
    eyebrow: 'YOUR DOCUMENTS',
    headline: 'Every cert. One search.',
    rows: [
      { name: 'HomeBond cert',       meta: 'Policy MB-44219',           badge: 'ON FILE',   color: 'green' },
      { name: 'BER report',          meta: 'A2 · valid until 2036',     badge: 'ON FILE',   color: 'green' },
      { name: 'Appliance manuals',   meta: '12 documents indexed',      badge: 'INDEXED',   color: 'gold'  },
    ],
    icon: <DocIcon />,
  },
  {
    key: 'maps',
    title: 'Maps',
    eyebrow: 'YOUR COMMUNITY',
    headline: 'Everything around your home.',
    rows: [
      { name: 'Gloria Jean\'s Coffees', meta: 'Castle St · 4.1★ · 2 min', badge: 'CAFÉS',  color: 'gold' },
      { name: 'The Webworkhouse',    meta: 'Winthrop St · 4.3★ · 5 min', badge: 'WORK',    color: 'gold' },
      { name: 'Old Town Whiskey Bar', meta: 'Cornmarket · 4.4★ · 6 min', badge: 'BARS',    color: 'gold' },
    ],
    icon: <PinIcon />,
  },
  {
    key: 'noticeboard',
    title: 'Community noticeboard',
    eyebrow: 'YOUR COMMUNITY',
    headline: 'Neighbours, talking.',
    rows: [
      { name: 'Bin collection moved',  meta: 'Posted by Bridge Court · 2h ago', badge: 'ALERT',   color: 'gold' },
      { name: 'Summer BBQ · Sat 21st', meta: '14 neighbours going',             badge: 'EVENT',   color: 'green' },
      { name: 'Found: a black cat',    meta: 'On Castle St · contact Niamh',     badge: 'LOST',    color: 'gold' },
    ],
    icon: <BellChatIcon />,
  },
];

function BedIcon()   { return <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="6" width="11" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.4"/><path d="M2.5 6V4.2h4V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M1.5 11v1.5M12.5 11v1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>; }
function FlameIcon() { return <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1c-.5 2-1.8 3-1.8 5.3a3.8 3.8 0 107.6 0c0-1.8-1.2-2.6-2-4-.5 1.2-1.4 2-2 1.6S7.5 1.6 7 1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/></svg>; }
function SunIcon2()  { return <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="2.6" stroke="currentColor" strokeWidth="1.4"/><g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><line x1="7" y1="1.5" x2="7" y2="3"/><line x1="7" y1="11" x2="7" y2="12.5"/><line x1="1.5" y1="7" x2="3" y2="7"/><line x1="11" y1="7" x2="12.5" y2="7"/></g></svg>; }
function DocIcon()   { return <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 2h5l3 3v7a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 2v3h3" stroke="currentColor" strokeWidth="1.4"/></svg>; }
function PinIcon()   { return <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5a4 4 0 014 4c0 3-4 7-4 7s-4-4-4-7a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><circle cx="7" cy="5.5" r="1.4" stroke="currentColor" strokeWidth="1.4"/></svg>; }
function BellChatIcon() { return <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2a3.5 3.5 0 013.5 3.5v2L11.5 9h-9l1-1.5v-2A3.5 3.5 0 017 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M5.5 11a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>; }

const HO_BADGE = {
  green: { bg: 'rgba(46,184,108,0.14)', fg: '#0E8E63' },
  gold:  { bg: 'rgba(212,175,55,0.16)', fg: '#A8821F' },
};

function hoSmooth(t) { return t * t * (3 - 2 * t); }

function HomeownerBreadthScreen({ t }) {
  const N = HO_BREADTH.length;
  const slot = 1 / N;
  const fade = 0.04;
  function frameAlpha(i) {
    const start = i * slot;
    const end = (i + 1) * slot + (i === N - 1 ? 0 : fade);
    if (t < start - fade && i > 0) return 0;
    if (t > end + 0.02) return 0;
    const fadeIn  = hclip((t - start) / fade);
    const fadeOut = i === N - 1 ? 1 : 1 - hclip((t - (end - fade)) / fade);
    return hclip(hoSmooth(fadeIn) * hoSmooth(fadeOut));
  }
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#FFFFFF',
      display: 'flex', flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
    }}>
      <HomeownerHeader />
      <div style={{
        flex: 1, overflow: 'hidden',
        position: 'relative',
        padding: '8px 16px 8px',
      }}>
        {HO_BREADTH.map((f, i) => (
          <HoBreadthFrame key={f.key} frame={f} alpha={frameAlpha(i)} />
        ))}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 8,
          display: 'flex', justifyContent: 'center', gap: 6,
          pointerEvents: 'none',
        }}>
          {HO_BREADTH.map((_, i) => {
            const active = Math.min(N - 1, Math.floor(t / slot));
            return (
              <div key={i} style={{
                width: active === i ? 18 : 6,
                height: 6, borderRadius: 999,
                background: active === i ? ohH.gold : 'rgba(0,0,0,0.18)',
                transition: 'width 240ms cubic-bezier(0.4,0,0.2,1), background 240ms',
              }} />
            );
          })}
        </div>
      </div>
      <HomeownerBottomBar active="Chat" />
    </div>
  );
}

function HoBreadthFrame({ frame, alpha }) {
  if (alpha <= 0.001) return null;
  return (
    <div style={{
      position: 'absolute',
      inset: '4px 16px 28px',
      opacity: alpha,
      transform: `translateY(${(1 - alpha) * 6}px)`,
      display: 'flex', flexDirection: 'column',
      pointerEvents: 'none',
    }}>
      <div style={{
        fontSize: 10, fontWeight: 700, color: ohH.gold,
        letterSpacing: '0.18em', marginTop: 8,
      }}>{frame.eyebrow} · {frame.title.toUpperCase()}</div>
      <div style={{
        fontSize: 22, fontWeight: 800, color: ohH.text1,
        letterSpacing: '-0.025em', lineHeight: 1.15, marginTop: 6,
      }}>{frame.headline}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 12 }}>
        {frame.rows.map((r, i) => {
          const c = HO_BADGE[r.color] || HO_BADGE.gold;
          return (
            <div key={i} style={{
              background: '#FFFFFF',
              borderRadius: 10,
              border: `1px solid ${ohH.border}`,
              padding: '10px 12px',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 14,
                background: 'rgba(212,175,55,0.16)', color: ohH.goldDark,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>{frame.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 12.5, fontWeight: 700, color: ohH.text1,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>{r.name}</div>
                <div style={{
                  fontSize: 11, color: ohH.text2, marginTop: 1,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>{r.meta}</div>
              </div>
              <div style={{
                fontSize: 8.5, fontWeight: 800,
                padding: '3px 7px', borderRadius: 999,
                background: c.bg, color: c.fg,
                letterSpacing: '0.08em',
                flexShrink: 0,
              }}>{r.badge}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, {
  HomeownerHeader, HomeownerBottomBar,
  HomeownerChatHome, LivingRoomScreen, HeatPumpScreen, HomeownerBreadthScreen,
  FloorPlanDiagram,
});
