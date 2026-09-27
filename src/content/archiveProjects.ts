export type ArchiveMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
};

export type ArchiveChapterId =
  | "complete-products"
  | "intelligent-systems"
  | "applied-systems-mobile"
  | "creative-coding";

export type ArchiveProjectDate = `${number}` | `${number}-${number}`;

export type ArchiveProject = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date?: ArchiveProjectDate;
  chapter: ArchiveChapterId;
  category: string;
  summary: string;
  learning: string;
  highlights: string[];
  technologies: string[];
  media: ArchiveMedia[];
  liveUrl?: string;
  githubLink?: string;
  featured?: boolean;
  personal?: boolean;
};

export const archiveIntro =
  "Before the larger products came smaller experiments: projects where I learned new technologies, tested ideas, and progressed from building individual features to complete systems.";

export const archiveChapters = [
  {
    id: "complete-products",
    number: "01",
    title: "Building Complete Products",
    summary:
      "Projects where separate skills started becoming whole systems: storefronts, admin tools, backends, data, integrations, and deployment.",
  },
  {
    id: "intelligent-systems",
    number: "02",
    title: "Exploring Intelligent Systems",
    summary:
      "Earlier AI and reasoning experiments focused on detection, language, datasets, and symbolic decision-making.",
  },
  {
    id: "applied-systems-mobile",
    number: "03",
    title: "Applied Systems & Mobile",
    summary:
      "Practical systems built around reservations, pilgrim assistance, operations, and information access.",
  },
  {
    id: "creative-coding",
    number: "04",
    title: "Design, Interaction & Creative Coding",
    summary:
      "Web, UI, and graphics experiments that explored interaction, personal expression, and visual programming.",
  },
] as const;

// Add project assets under public/projects/<slug>/ and update the media entries below.
// Missing images or videos are handled by the UI with an intentional fallback state.
export const archiveProjects: ArchiveProject[] = [
  {
    id: "interactive-dashboard",
    slug: "interactive-dashboard",
    title: "Interactive Dashboard",
    subtitle: "Real-time data visualization dashboard",
    chapter: "complete-products",
    category: "Data visualization",
    date: "2024-08",
    summary:
      "A real-time data dashboard with interactive charts, filtering, and customizable views.",
    learning:
      "This project strengthened my approach to presenting changing data in interfaces that are easy to scan and explore.",
    highlights: [
      "Interactive charts",
      "Live data patterns",
      "Filtering and customizable views",
    ],
    technologies: ["React", "Chart.js", "Firebase"],
    media: [
      {
        type: "image",
        src: "/assets/projects/interactive_dashboard/dashboard_1.png",
        alt: "Interactive dashboard charts",
      },
      {
        type: "image",
        src: "/assets/projects/interactive_dashboard/dashboard_2.png",
        alt: "Interactive dashboard charts",
      },
      {
        type: "image",
        src: "/assets/projects/interactive_dashboard/dashboard_3.png",
        alt: "Interactive dashboard charts",
      },
    ],
    featured: true,
  },
  {
    id: "e-commerce",
    slug: "e-commerce",
    title: "E-commerce",
    subtitle: "Full-stack e-commerce system",
    chapter: "complete-products",
    category: "Full-stack system",
    date: "2024-10",
    summary:
      "A full-stack e-commerce system with a customer storefront, administration interface, backend API, and database.",
    learning:
      "The project connected frontend interfaces, backend APIs, and database design in one working application.",
    highlights: ["Customer storefront", "Administration interface", "Backend API", "Database"],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    media: [
      {
        type: "image",
        src: "/assets/projects/e_commerce/e-commerce-pic (1).png",
        alt: "E-commerce interface",
      },
      {
        type: "image",
        src: "/assets/projects/e_commerce/e-commerce-pic (2).png",
        alt: "E-commerce interface",
      },
      {
        type: "image",
        src: "/assets/projects/e_commerce/e-commerce-pic (3).png",
        alt: "E-commerce interface",
      },
      {
        type: "image",
        src: "/assets/projects/e_commerce/e-commerce-pic (4).png",
        alt: "E-commerce interface",
      },
      {
        type: "image",
        src: "/assets/projects/e_commerce/e-commerce-pic (5).png",
        alt: "E-commerce interface",
      },
    ],
  },
  {
    id: "hima",
    slug: "hima",
    title: "Hima",
    subtitle: "AI-assisted crowd management concept",
    chapter: "intelligent-systems",
    category: "AI concept",
    date: "2023",
    summary:
      "An AI-assisted crowd management concept covering density detection, resource distribution, monitoring, and dataset preparation.",
    learning:
      "Hima explored how computer vision could support crowd planning and monitoring workflows.",
    highlights: [
      "Crowd density detection",
      "Officer and resource distribution",
      "Crowd monitoring",
      "Dataset preparation",
    ],
    technologies: ["Python", "Flutter", "Dart", "Firebase", "Roboflow"],
    media: [
      {
        type: "image",
        src: "/assets/projects/hima/hima.jpg",
        alt: "Hima crowd management concept",
      },
    ],
    featured: true,
  },
  {
    id: "sentences-recognizer",
    slug: "sentences-recognizer",
    title: "Sentences Recognizer",
    subtitle: "Arabic NLP and machine-learning experiment",
    chapter: "intelligent-systems",
    category: "NLP experiment",
    date: "2023",
    summary:
      "An Arabic sentence-recognition experiment that applied NLP and machine-learning techniques and reached approximately 89% accuracy.",
    learning:
      "The project introduced me to language-focused ML experimentation and evaluation.",
    highlights: [
      "Arabic sentence recognition",
      "NLP and ML experimentation",
      "Approximately 89% accuracy",
    ],
    technologies: ["Python"],
    media: [
      {
        type: "image",
        src: "/assets/projects/nlp/nlpModeltest.jpg",
        alt: "Sentences Recognizer experiment",
      },
    ],
  },
  {
    id: "character-recognizer",
    slug: "character-recognizer",
    title: "Character Recognizer",
    subtitle: "Rule-based character-matching experiment",
    chapter: "intelligent-systems",
    category: "Logic programming",
    date: "2023",
    summary:
      "A rule-based Prolog application that matched questionnaire responses and personality traits to One Piece characters.",
    learning:
      "It was a playful way to understand symbolic reasoning and rule-based programming.",
    highlights: [
      "Questionnaire-based reasoning",
      "Personality trait matching",
      "Symbolic and rule-based programming",
    ],
    technologies: ["Prolog"],
    media: [
      {
        type: "image",
        src: "/assets/projects/characterReco/onepiece.png",
        alt: "Character Recognizer questionnaire",
      },
      {
        type: "image",
        src: "/assets/projects/characterReco/charreco.jpg",
        alt: "Character Recognizer questionnaire",
      },
      {
        type: "video",
        src: "/assets/projects/characterReco/charReco.mp4",
        alt: "Character Recognizer questionnaire",
      },
    ],
  },
  {
    id: "alnorain",
    slug: "alnorain",
    title: "Alnorain - النورين",
    subtitle: "Pilgrim assistance application",
    chapter: "applied-systems-mobile",
    category: "Mobile application",
    date: "2022",
    summary:
      "A pilgrim assistance application that organizes information about holy locations, suggested visit schedules, hotels, markets, and transportation.",
    learning:
      "Alnorain focused on organizing practical information into a mobile experience for a specific journey.",
    highlights: [
      "Holy location information",
      "Suggested visit scheduling",
      "Hotels and markets",
      "Transportation information",
    ],
    technologies: ["Java", "MySQL"],
    media: [
      {
        type: "image",
        src: "/assets/projects/alnorain/alnorain.jpg",
        alt: "Alnorain pilgrim assistance app",
      },
      {
        type: "image",
        src: "/assets/projects/alnorain/alnorain2.jpg",
        alt: "Alnorain pilgrim assistance app",
      },
      {
        type: "image",
        src: "/assets/projects/alnorain/alnorain3.jpg",
        alt: "Alnorain pilgrim assistance app",
      },
    ],
  },
  {
    id: "hotel-management-system",
    slug: "hotel-management-system",
    title: "Hotel Management System",
    subtitle: "Reservation and hotel operations system",
    chapter: "applied-systems-mobile",
    category: "Operations system",
    date: "2022",
    summary:
      "A hotel reservation and operations system with frontend and backend development, reservation management, and operational tracking.",
    learning:
      "The project helped me practice structuring operational workflows and database-backed application logic.",
    highlights: [
      "Hotel reservation management",
      "Operational tracking",
      "Frontend and backend development",
    ],
    technologies: ["Java", "MySQL"],
    media: [
      {
        type: "image",
        src: "/assets/projects/hotel/hotel.jpg",
        alt: "Hotel Management System interface",
      },
      {
        type: "video",
        src: "/assets/projects/hotel/hotelSystem.mp4",
        alt: "Hotel Management System interface",
      },
    ],
  },
  {
    id: "athar",
    slug: "athar",
    title: "Athar - أثر من القرآن",
    subtitle: "Personal web experience",
    chapter: "creative-coding",
    category: "Personal web",
    date: "2024-05",
    summary:
      "A personal web experience for sharing Quran verses and reflecting on their impact.",
    learning:
      "Athar explored how web technology could support reflection and editorial expression, not only utility.",
    highlights: [
      "Quran verse sharing",
      "Personal editorial experience",
      "Firebase-backed web interaction",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    media: [
      {
        type: "image",
        src: "/assets/projects/Athar/Atharfront.jpg",
        alt: "Athar Quran verse sharing experience",
      },
      {
        type: "image",
        src: "/assets/projects/Athar/addAthar.jpg",
        alt: "Athar Quran verse sharing experience",
      },
      {
        type: "image",
        src: "/assets/projects/Athar/allAthar.jpg",
        alt: "Athar Quran verse sharing experience",
      },
    ],
    featured: true,
    personal: true,
  },
  {
    id: "gameso",
    slug: "gameso",
    title: "Gameso",
    subtitle: "UI/UX exploration for game commerce",
    chapter: "creative-coding",
    category: "UI/UX exploration",
    date: "2022",
    summary:
      "A game marketplace concept exploring purchasing decisions, reuse of unused games, and UI/UX principles.",
    learning:
      "Gameso was an early design exercise in shaping a marketplace experience around user decisions.",
    highlights: [
      "Game marketplace experience",
      "Purchasing decisions",
      "Reuse of unused games",
      "UI/UX principles",
    ],
    technologies: ["Wix"],
    media: [
      {
        type: "image",
        src: "/assets/projects/gameso/gameso.jpg",
        alt: "Gameso marketplace interface",
      },
      {
        type: "image",
        src: "/assets/projects/gameso/gameso2.jpg",
        alt: "Gameso marketplace interface",
      },
      {
        type: "image",
        src: "/assets/projects/gameso/gameso3.jpg",
        alt: "Gameso marketplace interface",
      },
    ],
  },
  {
    id: "badan",
    slug: "badan",
    title: "Badan - بدن",
    subtitle: "Interactive sports discovery website",
    chapter: "creative-coding",
    category: "Interactive web",
    date: "2022",
    summary:
      "An interactive sports discovery website that helps users explore suitable sports through testing and analysis.",
    learning:
      "Badan helped me practice turning user input into a guided interactive web experience.",
    highlights: [
      "Sports discovery",
      "Interactive testing",
      "Simple analysis flow",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    media: [
      {
        type: "image",
        src: "/assets/projects/badan/badan.jpg",
        alt: "Badan sports discovery website",
      },
      {
        type: "video",
        src: "/assets/projects/badan/badan.mp4",
        alt: "Badan sports discovery website",
      },
    ],
  },
  {
    id: "minecraft-graphics",
    slug: "minecraft-graphics",
    title: "Minecraft Graphics",
    subtitle: "Computer graphics experiment",
    chapter: "creative-coding",
    category: "Graphics experiment",
    date: "2021",
    summary:
      "A computer graphics experiment focused on 3D rendering, animation, and visual programming concepts.",
    learning:
      "This project made graphics programming feel tangible through rendering and animation practice.",
    highlights: ["3D graphics", "Animation", "Visual programming exploration"],
    technologies: ["C++"],
    media: [
      {
        type: "image",
        src: "/assets/projects/minecraft/minecraft.png",
        alt: "Minecraft-inspired graphics experiment",
      },
      {
        type: "video",
        src: "/assets/projects/minecraft/CGProject.mp4",
        alt: "Minecraft-inspired graphics experiment",
      },
    ],
  },
];

export const archiveMeta = `${archiveProjects.length} projects · Web · Mobile · AI · Data · Graphics`;

const archiveProjectDatePattern = /^\d{4}(?:-(?:0[1-9]|1[0-2]))?$/;

function getArchiveProjectDateValue(date?: ArchiveProjectDate) {
  if (!date) {
    return null;
  }

  if (!archiveProjectDatePattern.test(date)) {
    throw new Error(
      `Invalid archive project date "${date}". Use YYYY or YYYY-MM.`,
    );
  }

  const [year, month = "00"] = date.split("-");
  return Number(year) * 12 + Number(month);
}

export function formatArchiveProjectDate(date: ArchiveProjectDate) {
  const value = getArchiveProjectDateValue(date);

  if (value === null || !date.includes("-")) {
    return date;
  }

  const [year, month] = date.split("-");
  const monthLabel = new Intl.DateTimeFormat("en", {
    month: "short",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(Number(year), Number(month) - 1, 1)));

  return `${monthLabel} ${year}`;
}

function compareArchiveProjectsByDate(a: ArchiveProject, b: ArchiveProject) {
  const aDate = getArchiveProjectDateValue(a.date);
  const bDate = getArchiveProjectDateValue(b.date);

  if (aDate === null && bDate === null) {
    return a.title.localeCompare(b.title);
  }

  if (aDate === null) {
    return 1;
  }

  if (bDate === null) {
    return -1;
  }

  return bDate - aDate || a.title.localeCompare(b.title);
}

archiveProjects.forEach((project) => {
  getArchiveProjectDateValue(project.date);
});

export const archivePreviewProjects = archiveProjects.filter((project) =>
  ["hima", "sentences-recognizer", "athar", "interactive-dashboard"].includes(
    project.slug,
  ),
);

export function getArchiveProject(slug: string) {
  return archiveProjects.find((project) => project.slug === slug);
}

export function getProjectsByChapter(chapter: ArchiveChapterId) {
  return archiveProjects
    .filter((project) => project.chapter === chapter)
    .sort(compareArchiveProjectsByDate);
}
