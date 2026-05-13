import {
  AbsoluteFill,
  Sequence,
  Audio,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  CalculateMetadataFunction,
} from "remotion";
import { loadFont as loadFraunces } from "@remotion/google-fonts/Fraunces";
import { loadFont as loadGeistMono } from "@remotion/google-fonts/GeistMono";

const { fontFamily: serif } = loadFraunces();
const { fontFamily: mono } = loadGeistMono();

const VOID = "#050404";
const BONE = "#F2EDE4";
const GOLD = "#C9A84C";
const GOLD_DIM = "rgba(201,168,76,0.30)";
const GREY = "rgba(242,237,228,0.55)";
const LINE = "rgba(242,237,228,0.10)";

export type Scene =
  | { type: "title"; headline: string; subhead?: string; eyebrow?: string; duration: number }
  | {
      type: "imessage";
      messages: Array<{ from: "you" | "them"; text: string }>;
      duration: number;
    }
  | {
      type: "stat-block";
      label?: string;
      headline?: string;
      stats: Array<{ label: string; value: string; suffix?: string }>;
      caption?: string;
      duration: number;
    }
  | { type: "bullet-reveal"; headline?: string; bullets: string[]; duration: number }
  | { type: "quote"; text: string; attribution?: string; duration: number }
  | { type: "outro"; headline: string; tagline?: string; cta?: string; duration: number };

export type LandingPromoProps = {
  meta: { title: string; subtitle?: string; brand?: string };
  scenes: Scene[];
  voiceoverUrl?: string | null;
};

const Typed: React.FC<{
  text: string;
  startFrame?: number;
  charsPerFrame?: number;
  style?: React.CSSProperties;
}> = ({ text, startFrame = 0, charsPerFrame = 0.9, style }) => {
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
            width: "0.5em",
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

const FadeIn: React.FC<{
  start: number;
  duration?: number;
  y?: number;
  children: React.ReactNode;
}> = ({ start, duration = 18, y = 16, children }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ty = interpolate(frame, [start, start + duration], [y, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return <div style={{ opacity: o, transform: `translateY(${ty}px)` }}>{children}</div>;
};

const Chrome: React.FC<{ children: React.ReactNode; brand?: string }> = ({ children, brand }) => {
  const frame = useCurrentFrame();
  const borderOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ backgroundColor: VOID, color: BONE, fontFamily: serif }}>
      <div
        style={{
          position: "absolute",
          inset: 56,
          border: `1px solid ${GOLD_DIM}`,
          opacity: borderOpacity,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 110,
          fontFamily: mono,
          color: GOLD,
          fontSize: 22,
          letterSpacing: 4,
        }}
      >
        {brand ?? "AKHARA"}
        <span style={{ color: GREY, margin: "0 10px" }}>·</span>N°01
      </div>
      {children}
    </AbsoluteFill>
  );
};

const TitleScene: React.FC<{ scene: Extract<Scene, { type: "title" }> }> = ({ scene }) => {
  return (
    <AbsoluteFill
      style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 140px" }}
    >
      <div style={{ width: "100%", maxWidth: 1500, textAlign: "left" }}>
        {scene.eyebrow && (
          <FadeIn start={4}>
            <div style={{ fontFamily: mono, color: GOLD, fontSize: 24, letterSpacing: 6, marginBottom: 28 }}>
              {scene.eyebrow}
            </div>
          </FadeIn>
        )}
        <Typed
          text={scene.headline}
          startFrame={12}
          style={{
            fontFamily: serif,
            fontSize: 140,
            lineHeight: 1.04,
            fontWeight: 300,
            fontStyle: "italic",
            color: BONE,
            letterSpacing: -2,
            display: "block",
          }}
        />
        {scene.subhead && (
          <FadeIn start={48}>
            <div
              style={{
                marginTop: 40,
                fontFamily: serif,
                fontSize: 42,
                color: GOLD,
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              {scene.subhead}
            </div>
          </FadeIn>
        )}
      </div>
    </AbsoluteFill>
  );
};

const IMessageScene: React.FC<{ scene: Extract<Scene, { type: "imessage" }> }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const perMsgFrames = 22;
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 280px",
        flexDirection: "column",
        gap: 18,
      }}
    >
      {scene.messages.map((msg, i) => {
        const start = 8 + i * perMsgFrames;
        const o = interpolate(frame, [start, start + 14], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const ty = interpolate(frame, [start, start + 14], [22, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const isYou = msg.from === "you";
        return (
          <div
            key={i}
            style={{
              opacity: o,
              transform: `translateY(${ty}px)`,
              alignSelf: isYou ? "flex-end" : "flex-start",
              maxWidth: "70%",
              padding: "20px 30px",
              borderRadius: 30,
              fontSize: 36,
              fontFamily: serif,
              fontWeight: 300,
              lineHeight: 1.3,
              background: isYou ? GOLD : "rgba(242,237,228,0.10)",
              color: isYou ? VOID : BONE,
            }}
          >
            {msg.text}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const StatBlockScene: React.FC<{ scene: Extract<Scene, { type: "stat-block" }> }> = ({ scene }) => {
  return (
    <AbsoluteFill
      style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 140px" }}
    >
      <div style={{ width: "100%", maxWidth: 1500 }}>
        {scene.label && (
          <FadeIn start={4}>
            <div style={{ fontFamily: mono, color: GOLD, fontSize: 24, letterSpacing: 6, marginBottom: 22 }}>
              / {scene.label.toUpperCase()}
            </div>
          </FadeIn>
        )}
        {scene.headline && (
          <FadeIn start={12}>
            <div
              style={{
                fontFamily: serif,
                fontStyle: "italic",
                fontSize: 76,
                lineHeight: 1.1,
                color: BONE,
                fontWeight: 300,
                marginBottom: 50,
                letterSpacing: -1,
              }}
            >
              {scene.headline}
            </div>
          </FadeIn>
        )}
        <FadeIn start={24}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(scene.stats.length, 4)}, 1fr)`,
              borderTop: `1px solid ${LINE}`,
              borderBottom: `1px solid ${LINE}`,
            }}
          >
            {scene.stats.map((s, i) => {
              const start = 36 + i * 8;
              return (
                <FadeIn key={i} start={start} duration={20} y={20}>
                  <div
                    style={{
                      padding: "34px 28px",
                      borderRight: i < scene.stats.length - 1 ? `1px solid ${LINE}` : "none",
                    }}
                  >
                    <div style={{ fontFamily: mono, fontSize: 14, color: GREY, letterSpacing: 2, marginBottom: 14 }}>
                      / {s.label.toUpperCase()}
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                      <span style={{ fontFamily: serif, fontSize: 56, color: BONE, fontWeight: 400 }}>
                        {s.value}
                      </span>
                      {s.suffix && (
                        <span style={{ fontFamily: mono, fontSize: 16, color: GOLD, letterSpacing: 2 }}>
                          {s.suffix}
                        </span>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </FadeIn>
        {scene.caption && (
          <FadeIn start={80}>
            <div
              style={{
                marginTop: 28,
                fontFamily: serif,
                fontStyle: "italic",
                color: GOLD,
                fontSize: 28,
              }}
            >
              {scene.caption}
            </div>
          </FadeIn>
        )}
      </div>
    </AbsoluteFill>
  );
};

const BulletRevealScene: React.FC<{ scene: Extract<Scene, { type: "bullet-reveal" }> }> = ({ scene }) => {
  return (
    <AbsoluteFill
      style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 140px" }}
    >
      <div style={{ width: "100%", maxWidth: 1500 }}>
        {scene.headline && (
          <FadeIn start={4}>
            <div
              style={{
                fontFamily: serif,
                fontStyle: "italic",
                fontSize: 84,
                lineHeight: 1.05,
                color: BONE,
                fontWeight: 300,
                marginBottom: 56,
                letterSpacing: -1,
              }}
            >
              {scene.headline}
            </div>
          </FadeIn>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {scene.bullets.map((b, i) => {
            const start = 22 + i * 14;
            return (
              <FadeIn key={i} start={start} duration={20} y={18}>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 34,
                    color: BONE,
                    letterSpacing: 1,
                    paddingLeft: 28,
                    borderLeft: `2px solid ${GOLD}`,
                  }}
                >
                  {b}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const QuoteScene: React.FC<{ scene: Extract<Scene, { type: "quote" }> }> = ({ scene }) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 200px",
        flexDirection: "column",
      }}
    >
      <FadeIn start={6} duration={28}>
        <div
          style={{
            fontFamily: serif,
            fontStyle: "italic",
            fontSize: 112,
            lineHeight: 1.1,
            color: GOLD,
            fontWeight: 300,
            textAlign: "center",
            letterSpacing: -1,
          }}
        >
          “{scene.text}”
        </div>
      </FadeIn>
      {scene.attribution && (
        <FadeIn start={40}>
          <div
            style={{
              marginTop: 44,
              fontFamily: mono,
              color: GREY,
              fontSize: 22,
              letterSpacing: 4,
            }}
          >
            — {scene.attribution.toUpperCase()}
          </div>
        </FadeIn>
      )}
    </AbsoluteFill>
  );
};

const OutroScene: React.FC<{ scene: Extract<Scene, { type: "outro" }> }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const markScale = spring({ frame, fps, config: { damping: 200, mass: 0.6 } });
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: serif,
          fontStyle: "italic",
          color: GOLD,
          fontSize: 280,
          lineHeight: 1,
          fontWeight: 300,
          transform: `scale(${markScale})`,
        }}
      >
        A
      </div>
      <FadeIn start={18}>
        <div style={{ width: 140, height: 2, background: GOLD, margin: "26px 0" }} />
      </FadeIn>
      <FadeIn start={26}>
        <div
          style={{
            fontFamily: mono,
            color: GOLD,
            fontSize: 30,
            letterSpacing: 10,
          }}
        >
          {scene.headline.toUpperCase()}
        </div>
      </FadeIn>
      {scene.tagline && (
        <FadeIn start={40}>
          <div
            style={{
              marginTop: 28,
              fontFamily: serif,
              fontStyle: "italic",
              color: BONE,
              fontSize: 34,
              fontWeight: 300,
            }}
          >
            {scene.tagline}
          </div>
        </FadeIn>
      )}
      {scene.cta && (
        <FadeIn start={56}>
          <div
            style={{
              marginTop: 36,
              padding: "16px 32px",
              border: `1px solid ${GOLD}`,
              fontFamily: mono,
              color: GOLD,
              fontSize: 18,
              letterSpacing: 4,
            }}
          >
            {scene.cta.toUpperCase()}
          </div>
        </FadeIn>
      )}
    </AbsoluteFill>
  );
};

const renderScene = (scene: Scene) => {
  switch (scene.type) {
    case "title":
      return <TitleScene scene={scene} />;
    case "imessage":
      return <IMessageScene scene={scene} />;
    case "stat-block":
      return <StatBlockScene scene={scene} />;
    case "bullet-reveal":
      return <BulletRevealScene scene={scene} />;
    case "quote":
      return <QuoteScene scene={scene} />;
    case "outro":
      return <OutroScene scene={scene} />;
  }
};

export const LandingPromo: React.FC<LandingPromoProps> = ({ meta, scenes, voiceoverUrl }) => {
  const { fps } = useVideoConfig();
  let cursor = 0;
  return (
    <Chrome brand={meta.brand}>
      {voiceoverUrl && <Audio src={voiceoverUrl} />}
      {scenes.map((scene, i) => {
        const frames = Math.max(1, Math.round(scene.duration * fps));
        const seq = (
          <Sequence key={i} from={cursor} durationInFrames={frames}>
            {renderScene(scene)}
          </Sequence>
        );
        cursor += frames;
        return seq;
      })}
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
        <div>{meta.subtitle ?? "akhara.co"}</div>
      </div>
    </Chrome>
  );
};

export const calculateLandingPromoMetadata: CalculateMetadataFunction<LandingPromoProps> = ({ props }) => {
  const fps = 30;
  const totalSec = props.scenes.reduce((s, x) => s + x.duration, 0);
  return { durationInFrames: Math.max(1, Math.ceil(totalSec * fps)) };
};
