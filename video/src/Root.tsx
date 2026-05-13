import { Composition } from "remotion";
import { AgentIntro } from "./AgentIntro";
import { AGENTS } from "./agents";

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

      {/* Generic composition for ad-hoc renders */}
      <Composition
        id="AgentIntro"
        component={AgentIntro}
        durationInFrames={30 * 14}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ agent: AGENTS[0], voiceoverUrl: null }}
      />
    </>
  );
};
