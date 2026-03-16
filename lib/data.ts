import {
  Target, Users, Gauge, RefreshCw,
  Shield, AlertTriangle, Compass,
  Stethoscope, Heart, Leaf, Users2,
  Eye, FileText, BarChart3, Award,
  Zap, Globe, Building2, Scale,
} from "lucide-react"
import type {
  Principle, Experience, DeliveryArea, Commitment,
  PolicyArea, RegionalPerspective, StatItem, TrackRecord,
  EngagementPrinciple,
} from "./types"

/* ──────────────────────────────────────────────
   Section 01 — Vision
   ────────────────────────────────────────────── */

export const PRINCIPLES: Principle[] = [
  {
    icon: Target,
    title: "Act Earlier",
    description:
      "Prevention before crisis. The UN must shift from reactive responses to anticipatory action. Early warning systems exist—what is missing is the political will and operational capacity to act on them before situations deteriorate beyond recovery.",
  },
  {
    icon: Users,
    title: "Engage Across Divides",
    description:
      "Impartial diplomacy that speaks with all parties, not just some. In a world of deepening polarization, the UN's unique value lies in its ability to maintain channels of communication that no single state can replicate.",
  },
  {
    icon: Gauge,
    title: "Deliver for People",
    description:
      "Practical results that matter to states and citizens alike. The measure of UN success is not the number of resolutions passed, but the tangible improvements in human security, health, food, and dignity.",
  },
  {
    icon: RefreshCw,
    title: "Institutional Renewal",
    description:
      "A UN that runs itself with discipline, transparency, and merit. Internal reform is not optional—it is the foundation of external credibility. Staff deserve a workplace of integrity; member states deserve an institution that performs.",
  },
]

/* ──────────────────────────────────────────────
   Section 02 — Dangerous World
   ────────────────────────────────────────────── */

export const EXPERIENCES: Experience[] = [
  {
    icon: Shield,
    title: "Zaporizhzhia: Into the Fire",
    description:
      "In 2022, Grossi personally led the first IAEA mission to Zaporizhzhia—Europe's largest nuclear plant—crossing the front line under active fire. His convoy was attacked in the gray zone. He established permanent monitoring while shells fell nearby, negotiating access with both Moscow and Kyiv. 'I have to maintain this operation,' he says. 'It is very important for peace and security in the world.'",
  },
  {
    icon: AlertTriangle,
    title: "Iran: Doors Others Closed",
    description:
      "When the JCPOA collapsed and tensions peaked, Grossi kept verification channels open. He traveled to Tehran repeatedly, meeting Iran's highest leadership while upholding inspection standards. After the 2025 Israeli strikes, he negotiated renewed access to facilities. Iran still holds 400kg of 60%-enriched uranium—almost military grade. 'Inspectors must restart work,' Grossi insists.",
  },
  {
    icon: Compass,
    title: "Chernobyl: The Sarcophagus Crisis",
    description:
      "In early 2025, a drone attack compromised Chernobyl's protective sarcophagus, threatening to release radioactive contamination. Grossi's team assessed the damage over months. 'The sarcophagus's insulation capacity is compromised,' he reported. 'The repair must be extended to ensure protection.' Even 40 years later, nuclear dangers require constant vigilance.",
  },
]

export const CAREER_STATS = [
  {
    stat: "40",
    title: "Years in Diplomacy",
    description: "Joined Argentina\u2019s Foreign Ministry in 1985. Ambassador to Austria. Chief of Cabinet at OPCW. First Latin American to lead the IAEA. PhD in International Relations from Geneva.",
  },
  {
    stat: "2019",
    title: "IAEA Director General",
    description: "Elected December 2019. Led the agency through COVID, the Ukraine war, Iran tensions, and the return of nuclear deterrence rhetoric. Re-elected for a second term.",
  },
  {
    stat: "1st",
    title: "Latin American IAEA Chief",
    description: "First from the region since the agency\u2019s founding in 1957. Also first to serve two consecutive terms as president of the Nuclear Suppliers Group.",
  },
]

/* ──────────────────────────────────────────────
   Section 03 — With Everybody
   ────────────────────────────────────────────── */

export const ENGAGEMENT_PRINCIPLES: EngagementPrinciple[] = [
  {
    number: "01",
    title: "Neutrality Is Not Passivity",
    description:
      "Impartiality is what creates reach and usefulness. It is the operating system of effective multilateralism. A Secretary-General who is seen as aligned with one camp loses the ability to mediate, facilitate, or convene. Neutrality is not weakness—it is the source of the office's unique power.",
  },
  {
    number: "02",
    title: "Access Without Alignment",
    description:
      "Engaging everyone is not endorsing everyone. The UN must be able to talk to all parties while standing for its principles. This requires the discipline to separate dialogue from approval, and the skill to maintain relationships that others have abandoned. Grossi has proven this can be done.",
  },
  {
    number: "03",
    title: "Facts Before Positions",
    description:
      "Serious diplomacy is grounded in verification, restraint, and credibility—not declarations made for domestic audiences. The IAEA's authority comes from its technical rigor. The Secretary-General's authority must come from the same commitment to truth over convenience.",
  },
]

export const TRACK_RECORDS: TrackRecord[] = [
  {
    title: "Moscow and Kyiv",
    description: "In the first weeks of Russia's invasion, Grossi went to Moscow. Then to Kyiv. Then to Zaporizhzhia itself, crossing the front line. When asked why he talks to Putin: \"Who else am I going to talk to? The conflict is there.\" Both capitals accepted his presence.",
  },
  {
    title: "Tehran Under Maximum Pressure",
    description: "After the 2025 Israeli strikes on Iranian facilities, inspectors were blocked. Grossi negotiated renewed access—meeting Supreme Leader Khamenei directly. Iran holds 400kg of near-weapons-grade uranium. The verification dialogue continues only because he kept the channel open.",
  },
  {
    title: "Critics Prove the Method",
    description: "Pro-Ukrainians call him pro-Russian. Pro-Russians call him pro-Ukrainian. Pro-Israel and pro-Iran lobbies each claim bias. For Grossi, this symmetry proves the approach works. An impartial broker will be attacked by all sides. That's the job.",
  },
  {
    title: "Personal Cost",
    description: "Death threats. Round-the-clock security. His convoy attacked in the gray zone near Zaporizhzhia. Grossi continues working because the alternative—abandoning crisis zones to avoid risk—is worse. \"One must not give in to threats.\"",
  },
]

/* ──────────────────────────────────────────────
   Section 04 — For Everybody
   ────────────────────────────────────────────── */

export const DELIVERY_AREAS: DeliveryArea[] = [
  {
    icon: Stethoscope,
    title: "Rays of Hope: Cancer Care",
    description:
      "A flagship initiative bringing cancer diagnosis and treatment to over 40 countries with little or no access to radiation therapy. Not a program on paper—actual equipment deployed, actual oncologists trained, actual patients treated. This is what delivery looks like.",
    stat: "40+",
    statLabel: "Countries Reached",
  },
  {
    icon: Heart,
    title: "Food Security & Agriculture",
    description:
      "Technical cooperation on nuclear applications for agriculture, helping nations feed their populations sustainably. From soil fertility to pest control to food preservation—practical technologies that improve lives at scale across developing nations.",
    stat: "160+",
    statLabel: "Active Projects",
  },
  {
    icon: Leaf,
    title: "Clean Energy Transition",
    description:
      "Supporting countries navigating the energy transition with nuclear power expertise, environmental monitoring, and climate science. Helping nations reduce emissions while meeting growing energy demand—the defining challenge of our era.",
    stat: "70+",
    statLabel: "Nations Supported",
  },
  {
    icon: Users2,
    title: "Gender Parity: From 28% to 52%",
    description:
      "Women in Nuclear awarded Grossi the 2025 Changemaker of Distinction Award. He increased women in leadership from 28% to 52%—true parity. The Marie Sklodowska-Curie and Lise Meitner Programmes now bring women scientists from developing nations into nuclear fields worldwide.",
    stat: "52%",
    statLabel: "Women in Leadership",
  },
]

export const GENDER_ACHIEVEMENTS = [
  "28% to 52% women in senior management",
  "2025 Changemaker of Distinction Award",
  "International Gender Champion",
]

/* ──────────────────────────────────────────────
   Section 05 — Transparency
   ────────────────────────────────────────────── */

export const COMMITMENTS: Commitment[] = [
  {
    icon: Eye,
    title: "Full Financial Disclosure",
    description: "Complete transparency on personal finances, potential conflicts, and outside interests. If member states are asked to trust the Secretary-General, they deserve to know there are no hidden entanglements.",
  },
  {
    icon: FileText,
    title: "Public Documents & Positions",
    description: "All major speeches, statements, and policy positions freely accessible and searchable. Decisions should be explainable. Positions should be documented. Transparency is not optional.",
  },
  {
    icon: BarChart3,
    title: "Performance Metrics",
    description: "Clear benchmarks for measuring institutional effectiveness, reported annually and honestly. The UN cannot demand accountability from member states while exempting itself from scrutiny.",
  },
  {
    icon: Award,
    title: "Merit-Based Appointments",
    description: "Commitment to qualification over politics in all senior appointments. The Secretariat must be staffed by the best people available, regardless of nationality or political patronage.",
  },
]

export const DOCUMENTS = [
  { title: "Vision Statement", type: "PDF", date: "2025" },
  { title: "Governance Reform Proposal", type: "PDF", date: "2025" },
  { title: "Financial Disclosure", type: "PDF", date: "2025" },
  { title: "Career Summary", type: "PDF", date: "2025" },
]

export const MANAGEMENT_PRIORITIES = [
  "Clear strategic priorities, publicly stated",
  "Reduced duplication across agencies",
  "Faster crisis response mechanisms",
]

export const METRICS = [
  { label: "Speed", description: "Response time to emerging crises" },
  { label: "Reach", description: "Access to all parties in all conflicts" },
  { label: "Results", description: "Tangible outcomes for people and states" },
]

/* ──────────────────────────────────────────────
   Section 06 — Policy Platform
   ────────────────────────────────────────────── */

export const POLICY_AREAS: PolicyArea[] = [
  {
    icon: Shield,
    title: "Peace and Security",
    subtitle: "From Commentary to Action",
    proposals: [
      "Deploy UN presence to conflict zones before full escalation—not after",
      "Strengthen the Secretary-General's good offices with dedicated crisis response capacity",
      "Reform peacekeeping mandates to match operational realities on the ground",
      "Establish direct communication channels with all parties in active conflicts",
    ],
    quote: "The UN must be present where conflicts are, not comment from afar.",
  },
  {
    icon: Zap,
    title: "Nuclear Risk Reduction",
    subtitle: "Grossi's Core Expertise",
    proposals: [
      "Reinforce global non-proliferation architecture with strengthened verification",
      "Establish safety zones around nuclear facilities in conflict areas",
      "Lead dialogue on new arms control frameworks for a multipolar era",
      "Support states in peaceful nuclear energy transition with IAEA model",
    ],
    quote: "Nuclear risks are rising. We cannot afford to wait for the next crisis.",
  },
  {
    icon: Globe,
    title: "Climate and Development",
    subtitle: "Delivery Over Declarations",
    proposals: [
      "Accelerate clean energy support for developing nations—technical, not just financial",
      "Integrate climate action across all UN agencies, not siloed programs",
      "Expand models like Rays of Hope: tangible projects with measurable impact",
      "Bridge North-South divide with practical cooperation, not lectures",
    ],
    quote: "The Global South needs partners, not patrons.",
  },
  {
    icon: Building2,
    title: "Institutional Reform",
    subtitle: "Merit and Results",
    proposals: [
      "Appoint senior staff based on qualification, not political patronage",
      "Set clear performance metrics for all UN agencies and report publicly",
      "Reduce bureaucratic overlap and accelerate crisis response times",
      "Build workplace culture of integrity—zero tolerance for harassment",
    ],
    quote: "The UN must demand of itself what it demands of member states.",
  },
  {
    icon: Users,
    title: "Inclusion and Representation",
    subtitle: "Proven Track Record",
    proposals: [
      "Continue gender parity achievements: from 28% to 52% at IAEA, now UN-wide",
      "Expand programs like Marie Sklodowska-Curie for developing nation scientists",
      "Ensure Global South voices in senior leadership—not token appointments",
      "Merit-based selection: vision and experience over identity quotas",
    ],
    quote: "I increased women in leadership from 28% to 52%. These are facts, not words.",
  },
  {
    icon: Scale,
    title: "Multilateral System",
    subtitle: "Rebuilding Trust",
    proposals: [
      "Demonstrate UN utility through concrete results that matter to states",
      "Maintain impartiality as the foundation of the office's unique value",
      "Speak truth to all parties—even when uncomfortable",
      "Earn credibility through delivery, not rhetoric",
    ],
    quote: "The UN's authority must be earned through performance.",
  },
]

/* ──────────────────────────────────────────────
   Section 07 — Global South
   ────────────────────────────────────────────── */

export const PERSPECTIVES: RegionalPerspective[] = [
  {
    region: "Latin America",
    title: "First from the Region",
    description:
      "In nearly 80 years of the IAEA, no Latin American had led the agency. Grossi changed that in 2019. Now he seeks to bring the same perspective to the UN—an institution where no Secretary-General has come from Latin America since Javier Pérez de Cuéllar (Peru, 1982-1991).",
  },
  {
    region: "Africa",
    title: "Rays of Hope",
    description:
      "Grossi's flagship cancer care initiative has reached 40+ African nations with little access to radiation therapy. Not studies—actual equipment, trained oncologists, patients treated. 'The Global South needs partners, not patrons,' he says.",
  },
  {
    region: "Asia-Pacific",
    title: "Nuclear Cooperation",
    description:
      "From Busan to Bangkok, Grossi has built IAEA technical cooperation across the region. Honorary doctorates from universities in South Korea, Vietnam, and the Philippines reflect relationships built through delivery, not diplomacy alone.",
  },
  {
    region: "Middle East",
    title: "Engaged with All",
    description:
      "Iran, Israel, Saudi Arabia, UAE—Grossi maintains working relationships across the region's deepest divides. 'Some call me a Zionist puppet, others the opposite,' he notes. That is precisely the point.",
  },
]

export const GLOBAL_SOUTH_STATS: StatItem[] = [
  { value: "40+", label: "Years as a diplomat from Argentina" },
  { value: "1st", label: "Latin American IAEA Director General" },
  { value: "40+", label: "African nations reached by Rays of Hope" },
  { value: "6+", label: "Honorary degrees from Global South universities" },
]

/* ──────────────────────────────────────────────
   CTA Section
   ────────────────────────────────────────────── */

export const CTA_NEXT_STEPS = [
  { label: "Share with Your Delegation", desc: "Forward the vision to decision-makers in your mission" },
  { label: "Request a Briefing", desc: "Detailed policy positions available for permanent missions" },
  { label: "Follow the Campaign", desc: "Stay informed on developments and endorsements" },
]
