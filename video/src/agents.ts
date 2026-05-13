export type AgentStat = {
  label: string;
  value: string;
  suffix?: string;
};

export type Agent = {
  id: string;
  num: string;
  name: string;
  tag: string;
  tier: "DEPARTMENT" | "DEPARTMENT+" | "SOVEREIGN";
  blurb: string;
  punch: string;
  stats: [AgentStat, AgentStat, AgentStat, AgentStat];
  avatar?: string;
};

export const AGENTS: Agent[] = [
  {
    id: "architect",
    num: "01",
    name: "the architect",
    tag: "/ OPERATIONS · ONBOARDING",
    tier: "DEPARTMENT",
    blurb: "The first hire. Walks every new client through the 9-step onboarding, sets KPIs, builds the operating cadence.",
    punch: "Replaces an ops manager. Closes the loop in 7 days.",
    stats: [
      { label: "Replaces", value: "3–5", suffix: "ROLES" },
      { label: "Onboarding", value: "9", suffix: "STEPS" },
      { label: "Outcome", value: "CLOSED", suffix: "WON" },
      { label: "Speed", value: "7", suffix: "DAYS" },
    ],
  },
  {
    id: "closer",
    num: "02",
    name: "the closer",
    tag: "/ INBOUND · BOOKING",
    tier: "DEPARTMENT",
    blurb: "Answers every inbound lead in under 90 seconds. Books, qualifies, reschedules, never sleeps.",
    punch: "800+ conversations a day. Replaces a 15-person front desk.",
    stats: [
      { label: "Replaces", value: "15–20", suffix: "ROLES" },
      { label: "Response", value: "<90", suffix: "SEC" },
      { label: "Volume", value: "800+", suffix: "/ DAY" },
      { label: "Live in", value: "7–14", suffix: "DAYS" },
    ],
  },
  {
    id: "operator",
    num: "03",
    name: "the operator",
    tag: "/ PATIENT SUPPORT · RECALL",
    tier: "DEPARTMENT",
    blurb: "Holds patient relationships post-treatment. Recall, follow-up, satisfaction, win-back.",
    punch: "Lifts recall by eighteen percent inside two weeks.",
    stats: [
      { label: "Replaces", value: "10–15", suffix: "ROLES" },
      { label: "Touches", value: "600+", suffix: "/ DAY" },
      { label: "Recall", value: "+18%", suffix: "RECALL" },
      { label: "Live in", value: "14", suffix: "DAYS" },
    ],
  },
  {
    id: "strategist",
    num: "04",
    name: "the strategist",
    tag: "/ CONTENT · MARKETING",
    tier: "DEPARTMENT",
    blurb: "Writes the calendar. Posts. Reels scripts. Email sequences. Brand voice locked, twenty minutes of owner input a week.",
    punch: "Fifteen-plus posts a week. Twenty minutes from you.",
    stats: [
      { label: "Replaces", value: "5–8", suffix: "ROLES" },
      { label: "Output", value: "15+", suffix: "POSTS/WK" },
      { label: "Owner time", value: "20", suffix: "MIN/WK" },
      { label: "Live in", value: "30", suffix: "DAYS" },
    ],
  },
  {
    id: "conductor",
    num: "05",
    name: "the conductor",
    tag: "/ DIRECTOR-CLASS · DEPARTMENT+ ONLY",
    tier: "DEPARTMENT+",
    blurb: "The director above the four. Reads the weekly KPI sheet, calls the audibles, files the report. The owner reads one document.",
    punch: "Holds variance inside fifteen percent of plan, every week.",
    stats: [
      { label: "Replaces", value: "4–6", suffix: "MGRS" },
      { label: "Cadence", value: "WEEKLY" },
      { label: "Variance", value: "±15%", suffix: "KPI" },
      { label: "Model", value: "OPUS", suffix: "4.7" },
    ],
  },
  {
    id: "scout",
    num: "06",
    name: "the scout",
    tag: "/ PROSPECT INTELLIGENCE · SOVEREIGN ONLY",
    tier: "SOVEREIGN",
    blurb: "The hunter. Researches candidate accounts daily — Sales Navigator, AmSpa filings, capital-raise news. Produces a weekly intelligence dossier per prospect.",
    punch: "Replaces an SDR and a researcher. Twenty-four hour signal.",
    stats: [
      { label: "Replaces", value: "2–3", suffix: "SDRS" },
      { label: "Dossiers", value: "WEEKLY" },
      { label: "Signal", value: "24H", suffix: "FRESH" },
      { label: "Model", value: "SONNET", suffix: "4.6" },
    ],
  },
  {
    id: "editor",
    num: "07",
    name: "the editor",
    tag: "/ STRUCTURE · COPY · SOVEREIGN ONLY",
    tier: "SOVEREIGN",
    blurb: "The architect of every artifact. Edits proposals, audit Loom scripts, content, briefs. Holds the house voice. Final reader before anything leaves.",
    punch: "Catches structural drift before it ships.",
    stats: [
      { label: "Replaces", value: "2", suffix: "EDITORS" },
      { label: "Coverage", value: "100%" },
      { label: "Turnaround", value: "<2H" },
      { label: "Model", value: "OPUS", suffix: "4.7" },
    ],
  },
  {
    id: "producer",
    num: "08",
    name: "the producer",
    tag: "/ MEDIA · MOTION · SOVEREIGN ONLY",
    tier: "SOVEREIGN",
    blurb: "Owns the visual stack. Krea prompts, motion edits, thumbnail discipline, cover art. Five finished pieces a week, every week.",
    punch: "Replaces a media team. Krea plus CapCut, on rails.",
    stats: [
      { label: "Replaces", value: "2–4", suffix: "MEDIA" },
      { label: "Output", value: "5/WK" },
      { label: "Stack", value: "KREA", suffix: "+CAPCUT" },
      { label: "Model", value: "SONNET", suffix: "4.6" },
    ],
  },
  {
    id: "voice",
    num: "09",
    name: "the voice",
    tag: "/ AI VOICE · ELEVENLABS · SOVEREIGN ONLY",
    tier: "SOVEREIGN",
    blurb: "House voice on tap. Audit Looms, video VO, voice avatar. ElevenLabs Creator tier — twenty-two dollars a month, one voice per client.",
    punch: "A hundred minutes of voice every month. Always on brand.",
    stats: [
      { label: "Engine", value: "11LABS", suffix: "CREATOR" },
      { label: "Cost", value: "$22", suffix: "/MO" },
      { label: "Voices", value: "1/CLIENT" },
      { label: "Capacity", value: "100MIN", suffix: "/MO" },
    ],
  },
  {
    id: "vault",
    num: "10",
    name: "the vault",
    tag: "/ INSTITUTIONAL MEMORY · SOVEREIGN ONLY",
    tier: "SOVEREIGN",
    blurb: "Institutional memory. Every decision, every brief, every prior answer — indexed and queryable from Slack. Two days to onboard a net-new agent.",
    punch: "Memory that does not leave when staff do.",
    stats: [
      { label: "Replaces", value: "5–8", suffix: "ROLES" },
      { label: "New agent", value: "2", suffix: "DAYS NEW" },
      { label: "Persistence", value: "∞", suffix: "PERSIST" },
      { label: "Surface", value: "SLACK", suffix: "QUERY" },
    ],
  },
];

export const getAgent = (id: string): Agent => {
  const a = AGENTS.find((x) => x.id === id);
  if (!a) throw new Error(`Unknown agent: ${id}`);
  return a;
};
