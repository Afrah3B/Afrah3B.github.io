import type { ProjectDate, ProjectDateTo } from "../utils/projectDates";

export type ProjectSlug = "banan" | "lud" | "rooting";

export type ProjectImage = {
  src: string;
  alt?: string;
  caption?: string;
};

type CaseStudy = {
  slug: ProjectSlug;
  title: string;
  role: string;
  type?: string;
  focus: string;
  logo?: string;
  dateFrom: ProjectDate;
  dateTo?: ProjectDateTo;
  tags?: readonly string[];
  images?: readonly ProjectImage[];
  question: string;
  positioning: string;
  overview: string;
  challenge: string;
  decisions: readonly string[];
  stories: readonly {
    title: string;
    body: string;
  }[];
  outcomes: readonly string[];
  ending: string;
  next: ProjectSlug;
};

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
      "An EdTech platform that began with touch typing and evolved through use in schools into a broader learning experience with adaptive learning and AI.\n\nI lead its technical development across application architecture, learning logic, testing, infrastructure, and deployment.",
    dateFrom: {
      month: "08",
      year: "2025",
    },
    dateTo: "present",
    tags: ["Adaptive Learning", "AI", "Architecture", "Infrastructure"],
    cta: "Explore Banan",
    image: "/assets/projects/banan/Banan_Landing.png",
    imageAlt: "Banan learning platform landing page.",
  },
  {
    slug: "lud",
    index: "02",
    title: "LUD",
    headline: "Turning fragmented operations into useful business systems.",
    description:
      "What began as spreadsheet automation for an accountant evolved into an operations platform that helps restaurant businesses understand their data and manage complex workflows.\n\nI built the product from the ground up in close collaboration with the business behind it.",
    dateFrom: {
      month: "05",
      year: "2025",
    },
    dateTo: {
      month:"08",
      year:"2025"
    },
    tags: ["Business Systems", "Data Engineering", "Automation"],
    cta: "Explore LUD",
    image: "/assets/projects/lud/LUD_Landing.png",
    imageAlt: "LUD business operations platform landing page.",
  },
  {
    slug: "rooting",
    index: "03",
    title: "Rooting",
    headline: "Learning to own a product end-to-end.",
    description:
      "My first complete e-commerce product, spanning the customer storefront, administration, backend development, payments, delivery integrations, infrastructure, and deployment.\n\nThe project moved me from learning individual technologies to understanding how a complete product fits together.",
    dateFrom: {
      month: "12",
      year: "2024",
    },
    dateTo: {
      month: "05",
      year: "2025",
    },
    tags: ["Full Stack", "Payments", "Cloud", "Integration"],
    cta: "Explore Rooting",
    image: "/assets/projects/rooting/Rooting_Landing.png",
    imageAlt: "Rooting e-commerce landing page.",
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
      "Am I implementing the requested feature, or solving the underlying problem?",
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
    type: "EdTech platform",
    focus: "Engineering Judgment",
    dateFrom: {
      month: "01",
      year: "2025",
    },
    dateTo: "present",
    logo: "/assets/projects/banan/banan_logo.png",
    tags: ["Adaptive Learning", "AI", "Architecture", "Infrastructure"],
    images: [
      {
        src: "/assets/projects/banan/Banan_Landing.png",
        alt: "Banan learning platform landing interface",
        caption: "Learning platform entry point and brand direction.",
      },
      {
        src: "/assets/projects/banan/banan_ui (1).png",
        alt: "Banan learner dashboard showing progress, completed lessons, and typing performance",
        caption: "Learner progress and typing-performance dashboard.",
      },
      {
        src: "/assets/projects/banan/banan_ui (2).png",
        alt: "Banan administration dashboard showing schools, students, instructors, and adoption analytics",
        caption: "Administration overview and platform-adoption analytics.",
      },
      {
        src: "/assets/projects/banan/banan_ui (3).png",
        alt: "Banan student assessment summary with level, achievements, and lesson statistics",
        caption: "Student assessment, achievement, and progress summary.",
      },
      {
        src: "/assets/projects/banan/banan_ui (4).png",
        alt: "Banan course catalog with touch-typing and programming courses",
        caption: "Course catalog spanning touch typing and programming.",
      },
    ],
    question:
      "How should a real system evolve as users, complexity, and responsibility grow?",
    positioning:
      "A learning platform that began with touch typing and evolved through real-world school use.",
    overview:
      "Banan began with touch typing. I learned the skill at university, later taught it to other students, and was contacted by Banan's founder after he saw it on my portfolio. What started as a focused way to help students learn more effectively with technology and AI became a real school-facing learning platform, and my responsibility grew with it.",
    challenge:
      "The first version was intentionally built quickly so we could learn from real students instead of guessing in isolation. That speed was useful early on, but as usage and product complexity increased, some early architectural choices became harder to extend safely.",
    decisions: [
      "Shifted the engineering work from proving the idea to making the product safer to change, using better structure, tests, documentation, deployment practices, and infrastructure improvements where they reduced real risk.",
      "Changed the adaptive-learning approach so weakness generated targeted practice instead of moving students backward and erasing legitimate progress.",
      "Treated freshness and correctness as part of performance work, especially when caching data that teachers and students rely on.",
    ],
    stories: [
      {
        title: "Weakness should not erase progress",
        body: "After adaptive learning and generated practice were introduced, generated and standard lessons followed different paths. An incorrect condition prevented some standard lesson completions from persisting, so students could finish a lesson, reload, and find that their progress had moved backward. The fix was technical, but the larger product principle mattered more: weakness should trigger focused practice, not erase earned progress.",
      },
      {
        title: "Performance without correctness is not an optimization",
        body: "Caching improved response time, but static caching was introduced where the data needed stronger freshness guarantees. The system became faster while risking stale information, which changed the question from whether something could be cached to how fresh that data needed to be.",
      },
    ],
    outcomes: [
      "Used across 6 schools.",
      "400+ students.",
    ],
    ending:
      "Engineering judgment includes recognizing the product's current maturity: when shipping quickly creates useful learning, and when strengthening the system matters more than adding another feature.",
    next: "lud",
  },
  lud: {
    slug: "lud",
    title: "LUD",
    role: "Software Engineer",
    type: "Business operations platform",
    focus: "Business & Product Thinking",
    logo: "/assets/projects/lud/lud_logo.png",
    dateFrom: {
      month: "09",
      year: "2024",
    },
    dateTo: {
      month:"08",
      year:"2025"
    },
    tags: ["Business Systems", "Data Engineering", "Automation"],
    images: [
      {
        src: "/assets/projects/lud/LUD_Landing.png",
        alt: "LUD operational platform landing interface",
        caption: "A business operations product shaped around reporting and workflow clarity.",
      },
      {
        src: "/assets/projects/lud/lud_ui (1).png",
        alt: "LUD store dashboard showing applications, account details, and operational indicators",
        caption: "Store overview with account and operational indicators.",
      },
      {
        src: "/assets/projects/lud/lud_ui (2).png",
        alt: "LUD operations dashboard comparing delivery-platform performance across branches",
        caption: "Delivery-platform and branch performance analysis.",
      },
      {
        src: "/assets/projects/lud/lud_ui (3).png",
        alt: "LUD solutions page describing menu engineering and financial accounting features",
        caption: "Product solutions for menu engineering and financial accounting.",
      },
      {
        src: "/assets/projects/lud/lud_ui (4).png",
        alt: "LUD onboarding form requesting business and branch details",
        caption: "Business onboarding and account setup form.",
      },
    ],
    question:
      "Am I solving the requested feature or the underlying business problem?",
    positioning:
      "An operational platform that grew from spreadsheet automation into business tooling.",
    overview:
      "LUD began with an accountant trying to extract useful information from multiple Excel files. The first request was calculation-heavy, so I proposed software that could automate the repeated work and present results for each delivery platform.",
    challenge:
      "Working closely with the accountant revealed the larger opportunity. Restaurants did not only need faster calculations; they needed a clearer view of what was happening operationally, across delivery platforms, branches, menu performance, and financial workflows.",
    decisions: [
      "Translated evolving and sometimes messy business requirements into usable workflows for reporting, onboarding, accounting, delivery-platform analysis, and menu engineering.",
      "Kept the product principle clear: give businesses better information and tools to act, without promising outcomes the software cannot control.",
      "Designed around the reality that business rules, calculations, and operational questions change as the client understands the product more clearly.",
    ],
    stories: [
      {
        title: "Recovery became a product requirement",
        body: "Early in LUD, the database setup did not have an adequate backup strategy, and an infrastructure failure exposed that weakness. The customer base was still small enough to rebuild the database, but the incident changed how I treated reliability: backup and recovery became business requirements, not infrastructure checkboxes.",
      },
    ],
    outcomes: [
      "LUD currently has more than 20 clients.",
      "The product grew from Excel automation into workflows for reporting, onboarding, accounting, delivery-platform analysis, and menu engineering.",
    ],
    ending:
      "The first problem a client describes is not always the problem worth solving.",
    next: "rooting",
  },
  rooting: {
    slug: "rooting",
    title: "Rooting",
    role: "Software Engineer",
    type: "E-commerce product",
    focus: "End-to-End Ownership",
    logo: "/assets/projects/rooting/rooting_logo.png",
    dateFrom: {
      month: "01",
      year: "2023",
    },
    dateTo: {
      month: "08",
      year: "2024",
    },
    tags: ["Full Stack", "Payments", "Cloud", "Integration"],
    images: [
      {
        src: "/assets/projects/rooting/Rooting_Landing.png",
        alt: "Rooting e-commerce landing interface",
        caption: "The complete product experience, from storefront to operations.",
      },
      {
        src: "/assets/projects/rooting/rooting_ui (1).png",
        alt: "Rooting administration interface showing the product inventory",
        caption: "Administration interface for product inventory.",
      },
      {
        src: "/assets/projects/rooting/rooting_ui (2).png",
        alt: "Rooting mobile storefront showing products in the mat category",
        caption: "Mobile product-category storefront.",
      },
    ],
    question: "Can I build and ship the whole thing?",
    positioning:
      "A first complete e-commerce product built to understand real-world product ownership.",
    overview:
      "Rooting was my first complete e-commerce product. It began as a deliberate attempt to move beyond learning individual programming skills and understand how a real product works when the pieces have to fit together.",
    challenge:
      "The first version followed a full-stack e-commerce tutorial. After that, I rebuilt the product around Rooting's actual business requirements, turning the tutorial foundation into a shipped application with real operations behind it.",
    decisions: [
      "Owned the full delivery boundary: customer experience, administration, backend, data, payments, delivery integrations, infrastructure, and deployment.",
      "Evaluated payment and delivery options by business suitability, not integration difficulty alone.",
      "Applied infrastructure and cloud concepts from a Saudi Digital Academy DevOps program to deploy and operate the application using AWS.",
    ],
    stories: [
      {
        title: "The work expanded one problem at a time",
        body: "Rooting moved from a storefront into the less visible work that makes commerce usable: product administration, payment flow, delivery integration, deployment, and day-to-day operation. Each layer forced a different kind of decision, and the lesson was to understand the next boundary clearly enough to own it before expanding further.",
      },
    ],
    outcomes: [
      "Built and shipped a complete e-commerce product with storefront and administration workflows.",
      "Implemented real payment and delivery integrations.",
      "Deployed and operated the application on AWS.",
      "Established genuine end-to-end product ownership across product, engineering, infrastructure, and operations.",
    ],
    ending:
      "Rooting taught me how to take a product from idea to operation. Later projects added the other half of that lesson: as scale and responsibility grow, knowing when to slow down and design deliberately matters too.",
    next: "banan",
  },
} satisfies Record<ProjectSlug, CaseStudy>;
