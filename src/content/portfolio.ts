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
    dateTo: "present",
    tags: ["Business Systems", "Data", "Automation", "Integrations"],
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
    tags: ["E-commerce", "Full Stack", "Payments", "Cloud"],
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
    logo: "/assets/projects/banan/banan_logo.png",
    dateTo: "present",
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
      "Banan began with touch typing. Afrah learned the skill at university and later taught it to other students. A year after she graduated, Banan's founder contacted her after seeing touch typing listed on her portfolio. They began using technology and AI to help students learn more effectively, and the product later expanded into a broader learning platform.",
    challenge:
      "The first version was built quickly to get something usable in front of real students. As the product grew, early architectural decisions became harder to extend safely.",
    decisions: [
      "Strengthened the system incrementally through architecture, testing, caching, documentation, containerization, CI/CD, and deployment improvements.",
      "Changed the adaptive-learning approach from moving students backward to preserving normal progress and generating targeted practice.",
      "Treated freshness and correctness as part of performance work rather than separate concerns.",
    ],
    stories: [
      {
        title: "Weakness should not erase progress",
        body: "After adaptive learning and generated practice were introduced, generated and standard lessons followed different paths. An incorrect condition prevented some standard lesson completions from persisting, so students could finish a lesson, reload, and find that their progress had moved backward. Beyond fixing the condition, the product lesson was clear: weaknesses should trigger focused practice, not remove earned progress.",
      },
      {
        title: "Performance without correctness is not an optimization",
        body: "Caching improved performance, but static caching was introduced where the data required stronger freshness guarantees. The system became faster while risking stale information, reframing the question as: how stale is this data allowed to become?",
      },
    ],
    outcomes: [
      "Used across 6 schools.",
      "One school has 200+ students.",
      "School pilots revealed real product and engineering problems.",
    ],
    ending:
      "Shipping quickly can be the right choice when the goal is learning, and temporary technical debt can be acceptable. At other stages, strengthening the system matters more than adding another feature. Recognizing the current stage is part of the engineering work.",
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
    dateTo: "present",
    tags: ["Business Systems", "Data", "Automation", "Integrations"],
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
      "LUD began when an accountant struggled to extract useful information from multiple Excel files. Afrah proposed software that could perform the calculations and reduce repetitive work. The first version presented the calculated results for each delivery platform.",
    challenge:
      "Working closely with the accountant revealed a broader problem. Restaurants needed more than calculations; they needed operational information that explained what was happening and supported better decisions.",
    decisions: [
      "Built the system from the ground up while translating evolving business requirements into product workflows.",
      "Kept the product principle clear: give businesses better information and tools to act, without promising outcomes the software cannot control.",
      "Designed around the reality that business rules and calculations change.",
    ],
    stories: [
      {
        title: "Recovery became a product requirement",
        body: "Early in LUD, the database setup lacked an adequate backup strategy, and the infrastructure failed. The customer base was still small enough to rebuild the database, but the incident made backup and recovery business requirements rather than infrastructure checkboxes.",
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
    tags: ["E-commerce", "Full Stack", "Payments", "Cloud"],
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
      "Rooting was Afrah's first complete e-commerce project. It began as a deliberate attempt to move beyond learning individual programming skills and understand what it takes to create a complete real-world product.",
    challenge:
      "The first version followed a full-stack e-commerce tutorial. The second was rebuilt around Rooting's actual business requirements, turning a learning exercise into a production application.",
    decisions: [
      "Built the customer storefront, administration tools, frontend, backend, database, payments, delivery integrations, infrastructure, and deployment.",
      "Evaluated payment and delivery options not only by integration difficulty, but by what made sense for the business.",
      "Applied infrastructure and cloud concepts from a Saudi Digital Academy DevOps program to deploy and operate the application using AWS.",
    ],
    stories: [
      {
        title: "The work expanded one problem at a time",
        body: "Rooting showed that building a complete product does not require understanding every part of the system before starting. It requires understanding the next problem well enough to solve it, then expanding from there.",
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
} satisfies Record<ProjectSlug, CaseStudy>;
