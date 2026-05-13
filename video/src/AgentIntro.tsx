import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  Audio,
} from "remotion";
import { loadFont as loadFraunces } from "@remotion/google-fonts/Fraunces";
import { loadFont as loadGeistMono } from "@remotion/google-fonts/GeistMono";
import { Agent } from "./agents";

const { fontFamily: serif } = loadFraunces();
const { fontFamily: mono } = loadGeistMono();

const VOID = "#050404";
const BONE = "#F2EDE4";
const GOLD = "#C9A84C";
const GOLD_DIM = "rgba(201,168,76,0.30)";
const GREY = "rgba(242,237,228,0.55)";
const LINE = "rgba(242,237,228,0.10)";

type Props = {
  agent: Agent;
  voiceoverUrl?: string | null;
};

const Typed: React.FC<{ text: string; startFrame: number; charsPerFrame?: number; style?: React.CSSProperties }> = ({
  text,
  startFrame,
  charsPerFrame = 0.9,
  style,
}) => {
  const frame = useCurrentFrame();
  const elapsed = Math.max(0, frame - startFrame);
  const visible = Math.min(text.length, Math.floor(elapsed * charsPerFrame));
  const showCaret = elapsed >= 0 && visible < text.length;
  return (
    <span style={style}>
      {text.slice(0, visible)}
      {showCaret && (
        <span
          style={{
            display: "inline-block",
            width: "0.55em",
            marginLeft: "0.05em",
            backgroundColor: GOLD,
            height: "0.9em",
            verticalAlign: "text-bottom",
            opacity: Math.floor(frame / 6) % 2 === 0 ? 1 : 0,
          }}
        />
      )}
    </span>
  );
};

const FadeIn: React.FC<{ start: number; duration?: number; children: React.ReactNode; y?: number }> = ({
  start,
  duration = 18,
  children,
  y = 12,
}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [start, start + duration], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ty = interpolate(frame, [start, start + duration], [y, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <div style={{ opacity: o, transform: `translateY(${ty}px)` }}>{children}</div>;
};

export const AgentIntro: React.FC<Props> = ({ agent, voiceoverUrl }) => {
  const frame = useCurrentFrame();
  const { fps, width, height, durationInFrames } = useVideoConfig();

  const borderProgress = spring({ frame, fps, config: { damping: 200 } });
  const outroStart = durationInFrames - 60;
  const outroOpacity = interpolate(frame, [outroStart, outroStart + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: VOID, color: BONE, fontFamily: serif }}>
      {voiceoverUrl && <Audio src={voiceoverUrl} />}

      {/* Hairline gold border — animates in */}
      <div
        style={{
          position: "absolute",
          inset: 56,
          border: `1px solid ${GOLD_DIM}`,
          opacity: borderProgress,
          pointerEvents: "none",
        }}
      />

      {/* Top-left mark */}
      <div style={{ position: "absolute", top: 90, left: 110, fontFamily: mono, color: GOLD, fontSize: 22, letterSpacing: 4 }}>
        AKHARA<span style={{ color: GREY, margin: "0 10px" }}>·</span>N°01
      </div>

      {/* Top-right tier */}
      <div style={{ position: "absolute", top: 90, right: 110, fontFamily: mono, color: GREY, fontSize: 18, letterSpacing: 3 }}>
        / {agent.tier}
      </div>

      {/* Center stack */}
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 140px" }}>
        <div style={{ width: "100%", maxWidth: 1500 }}>
          {/* Number */}
          <FadeIn start={6}>
            <div style={{ fontFamily: mono, fontSize: 28, color: GOLD, letterSpacing: 6 }}>
              / EMPLOYEE&nbsp;&nbsp;{agent.num}
            </div>
          </FadeIn>

          {/* Name — typing effect */}
          <div style={{ marginTop: 26, marginBottom: 18 }}>
            <Typed
              text={agent.name}
              startFrame={20}
              style={{
                fontFamily: serif,
                fontSize: 168,
                fontWeight: 300,
                lineHeight: 1.0,
                color: BONE,
                fontStyle: "italic",
                letterSpacing: -2,
              }}
            />
          </div>

          {/* Tag line */}
          <FadeIn start={48}>
            <div style={{ fontFamily: mono, color: GOLD, fontSize: 22, letterSpacing: 3, marginBottom: 50 }}>
              {agent.tag}
            </div>
          </FadeIn>

          {/* Gold rule */}
          <FadeIn start={56}>
            <div style={{ width: 180, height: 2, background: GOLD, marginBottom: 48 }} />
          </FadeIn>

          {/* Blurb */}
          <FadeIn start={66}>
            <div style={{ fontFamily: serif, fontSize: 38, lineHeight: 1.35, color: BONE, maxWidth: 1300, fontWeight: 300 }}>
              {agent.blurb}
            </div>
          </FadeIn>

          {/* Punch line */}
          <FadeIn start={120}>
            <div style={{ fontFamily: serif, fontStyle: "italic", color: GOLD, fontSize: 34, marginTop: 36, lineHeight: 1.3 }}>
              {agent.punch}
            </div>
          </FadeIn>

          {/* Stats grid */}
          <FadeIn start={156}>
            <div
              style={{
                marginTop: 70,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 0,
                borderTop: `1px solid ${LINE}`,
                borderBottom: `1px solid ${LINE}`,
              }}
            >
              {agent.stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: "30px 28px",
                    borderRight: i < 3 ? `1px solid ${LINE}` : "none",
                  }}
                >
                  <div style={{ fontFamily: mono, fontSize: 14, color: GREY, letterSpacing: 2, marginBottom: 14 }}>
                    / {s.label.toUpperCase()}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                    <span style={{ fontFamily: serif, fontSize: 48, color: BONE, fontWeight: 400 }}>{s.value}</span>
                    {s.suffix && (
                      <span style={{ fontFamily: mono, fontSize: 14, color: GOLD, letterSpacing: 2 }}>{s.suffix}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </AbsoluteFill>

      {/* Bottom strip */}
      <div
        style={{
          position: "absolute",
          bottom: 90,
          left: 110,
          right: 110,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: mono,
          fontSize: 16,
          color: GREY,
          letterSpacing: 3,
        }}
      >
        <div>/ COMMAND CONSOLE</div>
        <div>akhara.co</div>
      </div>

      {/* Outro overlay */}
      <Sequence from={outroStart}>
        <AbsoluteFill
          style={{
            backgroundColor: VOID,
            opacity: outroOpacity,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ fontFamily: serif, fontStyle: "italic", color: GOLD, fontSize: 240, lineHeight: 1, fontWeight: 300 }}>A</div>
          <div style={{ width: 120, height: 2, background: GOLD, margin: "30px 0" }} />
          <div style={{ fontFamily: mono, color: GOLD, fontSize: 26, letterSpacing: 8 }}>AKHARA</div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
