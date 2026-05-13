import { Composition, staticFile } from "remotion";
import { AgentIntro } from "./AgentIntro";
import { LandingPromo, calculateLandingPromoMetadata } from "./LandingPromo";
import { AGENTS } from "./agents";
import akharaPromoScenes from "../scenes/akhara-promo.json";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {AGENTS.map((agent) => (
        <Composition
          key={agent.id}
          id={`agent-${agent.id}`}
          component={AgentIntro}
          durationInFrames={30 * 14}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ agent, voiceoverUrl: null }}
        />
      ))}

      <Composition
        id="AgentIntro"
        component={AgentIntro}
        durationInFrames={30 * 14}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ agent: AGENTS[0], voiceoverUrl: null }}
      />

      <Composition
        id="LandingPromo"
        component={LandingPromo}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={akharaPromoScenes as any}
        calculateMetadata={calculateLandingPromoMetadata}
      />
    </>
  );
};
