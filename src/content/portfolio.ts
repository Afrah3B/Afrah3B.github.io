export type ProjectSlug = "banan" | "lud" | "rooting";

export const profile = {
  name: "Afrah Bawhab",
  role: "Software Engineer",
  tagline: "Turn uncertainty into working software.",
  intro:
    "I'm Afrah, a Software Engineer who turns unclear ideas and real-world problems into software people can actually use.",
  contact: {
    email: "afrahbawhab@gmail.com",
    linkedin: "https://www.linkedin.com/in/afrah-bawhab-0891a826a",
    github: "https://github.com/Afrah3B",
  },
};

export const proofMetrics = [
  { value: "300+", label: "Real Users" },
  { value: "50+", label: "Clients Served" },
  { value: "3", label: "Products Built from the Ground Up" },
];

export const selectedProjects = [
  {
    slug: "banan",
    index: "01",
    title: "Banan",
    headline: "Engineering a learning platform through real-world use.",
    description:
      "An EdTech platform that started with touch typing and evolved through real school usage into a broader learning experience involving adaptive learning and AI.\n\nI lead its technical development across application architecture, learning logic, testing, infrastructure, and deployment.",
    tags: ["Adaptive Learning", "AI", "Architecture", "Infrastructure"],
    cta: "Explore Banan",
    image: "/assets/projects/Banan_Landing.png",
    imageAlt: "Neutral placeholder for future Banan product screenshots.",
  },
  {
    slug: "lud",
    index: "02",
    title: "LUD",
    headline: "Turning fragmented operations into useful business systems.",
    description:
    "What started as a way to automate an accountant's spreadsheet work evolved into an operational platform helping restaurant businesses understand their data and manage increasingly complex workflows.\n\nI built the product from the ground up while working closely with the business behind it.",
    tags: ["Business Systems", "Data", "Automation", "Integrations"],
    cta: "Explore LUD",
    image: "/assets/projects/LUD_Landing.png",
    imageAlt: "Neutral placeholder for future LUD product screenshots.",
  },
  {
    slug: "rooting",
    index: "03",
    title: "Rooting",
    headline: "Learning to own a product end-to-end.",
    description:
    "My first complete e-commerce product - from customer and admin experiences to backend development, payments, delivery integrations, infrastructure, and deployment.\n\nIt was where I moved from learning individual technologies to understanding how an entire product fits together.",
    tags: ["E-commerce", "Full Stack", "Payments", "Cloud"],
    cta: "Explore Rooting",
    image: "/assets/projects/Rooting_Landing.png",
    imageAlt: "Neutral placeholder for future Rooting product screenshots.",
  },
] as const;

export const journey = [
  {
    project: "ROOTING",
    stage: "BUILD",
    question: "Can I take the whole product from idea to reality?",
  },
  {
    project: "LUD",
    stage: "UNDERSTAND",
    question:
      "Am I implementing the requested feature - or solving the underlying problem?",
  },
  {
    project: "BANAN",
    stage: "ENGINEER",
    question: "How should the system evolve as its users and complexity grow?",
  },
];

export const problems = [
  {
    number: "01",
    title: "Building from ambiguity",
    description:
      "Turning unclear ideas and messy requirements into systems that can actually be built and used.",
  },
  {
    number: "02",
    title: "Debugging beyond the symptom",
    description:
      "Following problems through code, data, and behavior until the underlying cause makes sense.",
  },
  {
    number: "03",
    title: "Engineering systems that evolve",
    description:
      "Balancing iteration with architecture, technical debt, performance, and reliability.",
  },
  {
    number: "04",
    title: "Understanding the business behind the software",
    description:
      "Looking beyond the requested feature to understand what the software actually needs to improve.",
  },
];

export const principles = [
  "Understand before optimizing.",
  "Debug causes, not symptoms.",
  "Ship to learn, not just to finish.",
  "Make complexity earn its place.",
  "Leave the system easier to understand than I found it.",
];

export const caseStudies = {
  banan: {
    slug: "banan",
    title: "Banan",
    role: "CTO / Software Engineer",
    focus: "Engineering Judgment",
    question:
      "How should a real system evolve as users, complexity, and responsibility grow?",
    positioning:
      "A learning platform that began with touch typing and evolved through real-world school use.",
    overview:
      "Banan started with touch typing. Afrah learned touch typing at university, later taught it to other students, and a year after graduating was contacted by Banan's founder after he saw touch typing listed on her portfolio. They collaborated on using technology and AI to help students learn the skill more effectively, and the product later evolved into a broader learning platform.",
    challenge:
      "The first version was built quickly to get something usable in front of real students. As the product grew, early architectural decisions became harder to extend safely.",
    decisions: [
      "Progressively strengthened the system through improved architecture, testing, caching, documentation, containerization, CI/CD, and deployment practices.",
      "Shifted adaptive learning direction from moving students backward to preserving normal progress and generating targeted practice.",
      "Treated freshness and correctness as part of performance work rather than separate concerns.",
    ],
    stories: [
      {
        title: "Weakness should not erase progress.",
        body: "After adaptive learning and generated practice were introduced, generated lessons and normal lessons were handled differently. An incorrect condition caused some normal lesson completions not to persist correctly, so students could complete lessons, reload, and find progress had moved backward. Fixing the condition mattered, but the larger product lesson mattered too: weakness should create focused practice, not take earned progress away.",
      },
      {
        title: "Performance without correctness is not an optimization.",
        body: "Caching improved performance, but static caching was introduced in an area where data required stronger freshness guarantees. The system could become faster while presenting stale information, which made the real question: how stale is this data allowed to become?",
      },
    ],
    outcomes: [
      "Used across 6 schools.",
      "One school has 200+ students.",
      "School pilots exposed real product and engineering problems.",
    ],
    ending:
      "Sometimes shipping quickly is the correct decision because the goal is learning. Sometimes temporary technical debt is acceptable. Sometimes adding another feature is less valuable than strengthening the system underneath it. Knowing which stage you're in is part of the engineering.",
    next: "lud",
  },
  lud: {
    slug: "lud",
    title: "LUD",
    role: "Software Engineer",
    focus: "Business & Product Thinking",
    question:
      "Am I solving the requested feature or the underlying business problem?",
    positioning:
      "An operational platform that grew from spreadsheet automation into business tooling.",
    overview:
      "LUD began because an accountant struggled to produce useful numbers from multiple Excel files. Afrah suggested building software that could perform the calculations and reduce repetitive work. The first version displayed calculations and numbers for each delivery platform.",
    challenge:
      "Working closely with the accountant exposed a larger problem. Restaurants did not only need calculations; they needed better operational information to understand what was happening and make better decisions.",
    decisions: [
      "Built the system from the ground up while working closely with business requirements.",
      "Kept the product principle clear: give businesses better information and tools to act, without promising outcomes the software cannot control.",
      "Designed around the reality that business rules and calculations change.",
    ],
    stories: [
      {
        title: "Recovery became a product requirement.",
        body: "Early in LUD, the system relied on a database setup without an adequate backup strategy. The database infrastructure failed. The customer base was still small enough that the database could be rebuilt, but afterward backup and recovery became business requirements rather than infrastructure checkboxes.",
      },
    ],
    outcomes: ["LUD currently has more than 20 clients."],
    ending:
      "The first problem a client describes is not always the problem worth solving.",
    next: "rooting",
  },
  rooting: {
    slug: "rooting",
    title: "Rooting",
    role: "Software Engineer",
    focus: "End-to-End Ownership",
    question: "Can I build and ship the whole thing?",
    positioning:
      "A first complete e-commerce product built to understand real-world product ownership.",
    overview:
      "Rooting was Afrah's first complete e-commerce project. It began as a deliberate attempt to move beyond learning individual programming skills and understand what it takes to create a complete real-world product.",
    challenge:
      "Version 1 followed a full-stack e-commerce tutorial. Version 2 was rebuilt and adapted around the actual needs of the Rooting business: tutorial to real requirements to production application.",
    decisions: [
      "Owned storefront, administration, frontend, backend, database, customer experience, payments, delivery integrations, infrastructure, and deployment.",
      "Evaluated payment and delivery options not only by integration difficulty, but by what made sense for the business.",
      "Applied infrastructure and cloud concepts from a Saudi Digital Academy DevOps program to deploy and operate the application using AWS.",
    ],
    stories: [
      {
        title: "The work expanded one problem at a time.",
        body: "Rooting taught that building a complete product does not require understanding every part of the system before starting. It requires understanding the next problem well enough to solve it, then expanding from there.",
      },
    ],
    outcomes: [
      "The customer base remained small because sales and marketing were not the primary focus.",
      "The value of the project was professional growth and end-to-end ownership.",
    ],
    ending:
      "Later projects added the other half of the lesson: as systems and stakes grow, knowing when to slow down and design deliberately matters too.",
    next: "banan",
  },
};
