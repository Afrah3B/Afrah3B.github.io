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

export type ArchiveProject = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year?: string;
  chapter: ArchiveChapterId;
  category: string;
  summary: string;
  learning: string;
  highlights: string[];
  technologies: string[];
  media: ArchiveMedia[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  personal?: boolean;
};

export const archiveIntro =
  "Before larger products, there were smaller experiments - projects where I learned new technologies, tested ideas, and gradually moved from building features to building complete systems.";

export const archiveMeta = "12 projects · Web · Mobile · AI · Data · Graphics";

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
    summary:
      "A dashboard experiment around interactive charts, live data, filtering, and customizable views.",
    learning:
      "This project sharpened how I think about turning changing data into interfaces people can scan and explore.",
    highlights: [
      "Interactive charts",
      "Live data patterns",
      "Filtering and customizable views",
    ],
    technologies: ["React", "Chart.js", "Firebase"],
    media: [
      { type: "image", src: "/assets/projects/interactive_dashboard/dashboard_1.png", alt: "Interactive dashboard charts" },
      { type: "image", src: "/assets/projects/interactive_dashboard/dashboard_2.png", alt: "Interactive dashboard charts" },
      { type: "image", src: "/assets/projects/interactive_dashboard/dashboard_3.png", alt: "Interactive dashboard charts" },
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
    summary:
      "An earlier full-stack e-commerce system with customer frontend, admin frontend, backend, and database work.",
    learning:
      "It helped connect frontend screens, backend APIs, and database structure into one working application.",
    highlights: ["Customer frontend", "Admin frontend", "Backend", "Database"],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    media: [
      { type: "image", src: "/assets/projects/e_commerce/e-commerce-pic (1).png", alt: "E-commerce interface" },
      { type: "image", src: "/assets/projects/e_commerce/e-commerce-pic (2).png", alt: "E-commerce interface" },
      { type: "image", src: "/assets/projects/e_commerce/e-commerce-pic (3).png", alt: "E-commerce interface" },
      { type: "image", src: "/assets/projects/e_commerce/e-commerce-pic (4).png", alt: "E-commerce interface" },
      { type: "image", src: "/assets/projects/e_commerce/e-commerce-pic (5).png", alt: "E-commerce interface" },
    ],
  },
  {
    id: "hima",
    slug: "hima",
    title: "Hima",
    subtitle: "AI-assisted crowd management concept",
    chapter: "intelligent-systems",
    category: "AI concept",
    summary:
      "An AI-assisted crowd management concept exploring crowd density detection, resource distribution, monitoring, and dataset preparation.",
    learning:
      "Hima was an exploration of how computer vision ideas could support planning and monitoring workflows.",
    highlights: [
      "Crowd density detection",
      "Officer and resource distribution",
      "Crowd monitoring",
      "Dataset preparation",
    ],
    technologies: ["Python", "Flutter", "Dart", "Firebase", "Roboflow"],
    media: [
      { type: "image", src: "/assets/projects/hima/hima.jpg", alt: "Hima crowd management concept" },
    ],
    featured: true,
  },
  {
    id: "sentences-recognizer",
    slug: "sentences-recognizer",
    title: "Sentences Recognizer",
    subtitle: "Arabic NLP / machine-learning experiment",
    chapter: "intelligent-systems",
    category: "NLP experiment",
    summary:
      "An Arabic sentence recognition experiment focused on NLP and machine-learning practice, reaching approximately 89% accuracy.",
    learning:
      "The project introduced me to language-focused ML experimentation and evaluation.",
    highlights: ["Arabic sentence recognition", "NLP / ML experimentation", "Approximately 89% accuracy"],
    technologies: ["Python"],
    media: [{ type: "image", src: "/assets/projects/nlp/nlpModeltest.jpg", alt: "Sentences Recognizer experiment" }],
  },
  {
    id: "character-recognizer",
    slug: "character-recognizer",
    title: "Character Recognizer",
    subtitle: "Rule-based character recognition experiment",
    chapter: "intelligent-systems",
    category: "Logic programming",
    summary:
      "A rule-based Prolog experiment that matched questionnaire answers and personality traits with One Piece characters.",
    learning:
      "It was a playful way to understand symbolic reasoning and rule-based programming.",
    highlights: [
      "Questionnaire-based reasoning",
      "Personality trait matching",
      "Symbolic / rule-based programming",
    ],
    technologies: ["Prolog"],
    media: [
      { type: "image", src: "/assets/projects/characterReco/onepiece.png", alt: "Character Recognizer questionnaire" },
      { type: "image", src: "/assets/projects/characterReco/charreco.jpg", alt: "Character Recognizer questionnaire" },
      { type: "video", src: "/assets/projects/characterReco/charReco.mp4", alt: "Character Recognizer questionnaire" },
    ],
  },
  {
    id: "alnorain",
    slug: "alnorain",
    title: "Alnorain - النورين",
    subtitle: "Pilgrim assistance application",
    chapter: "applied-systems-mobile",
    category: "Mobile application",
    summary:
      "A pilgrim assistance application with information about holy locations, suggested visit scheduling, hotels, markets, and transportation information.",
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
      { type: "image", src: "/assets/projects/alnorain/alnorain.jpg", alt: "Alnorain pilgrim assistance app" },
      { type: "image", src: "/assets/projects/alnorain/alnorain2.jpg", alt: "Alnorain pilgrim assistance app" },
      { type: "image", src: "/assets/projects/alnorain/alnorain3.jpg", alt: "Alnorain pilgrim assistance app" },
    ],
  },
  {
    id: "hotel-management-system",
    slug: "hotel-management-system",
    title: "Hotel Management System",
    subtitle: "Reservation and hotel operations system",
    chapter: "applied-systems-mobile",
    category: "Operations system",
    summary:
      "A hotel reservation and operations system involving frontend/backend programming, reservation management, and operational tracking.",
    learning:
      "The project helped me practice structuring operational workflows and database-backed application logic.",
    highlights: ["Hotel reservation management", "Operational tracking", "Frontend/backend programming"],
    technologies: ["Java", "MySQL"],
    media: [
      { type: "image", src: "/assets/projects/hotel/hotel.jpg", alt: "Hotel Management System interface" },
      { type: "video", src: "/assets/projects/hotel/hotelSystem.mp4", alt: "Hotel Management System interface" },
    ],
  },
  {
    id: "athar",
    slug: "athar",
    title: "Athar - أثر من القرآن",
    subtitle: "Personal web experience",
    chapter: "creative-coding",
    category: "Personal web",
    summary:
      "A personal web experience for sharing Quran verses and the impact they can leave.",
    learning:
      "Athar was more personal and editorial: a way to use web technology for reflection, not only utility.",
    highlights: ["Quran verse sharing", "Personal editorial experience", "Firebase-backed web interaction"],
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    media: [
      { type: "image", src: "/assets/projects/Athar/Atharfront.jpg", alt: "Athar Quran verse sharing experience" },
      { type: "image", src: "/assets/projects/Athar/addAthar.jpg", alt: "Athar Quran verse sharing experience" },
      { type: "image", src: "/assets/projects/Athar/allAthar.jpg", alt: "Athar Quran verse sharing experience" },
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
    summary:
      "A game marketplace concept exploring purchasing decisions, reuse of unused games, and UI/UX principles.",
    learning:
      "Gameso was an early design exercise in shaping a marketplace experience around user decisions.",
    highlights: ["Game marketplace experience", "Purchasing decisions", "Reuse of unused games", "UI/UX principles"],
    technologies: ["Wix"],
    media: [
      { type: "image", src: "/assets/projects/gameso/gameso.jpg", alt: "Gameso marketplace interface" },
      { type: "image", src: "/assets/projects/gameso/gameso2.jpg", alt: "Gameso marketplace interface" },
      { type: "image", src: "/assets/projects/gameso/gameso3.jpg", alt: "Gameso marketplace interface" },
    ],
  },
  {
    id: "badan",
    slug: "badan",
    title: "Badan - بدن",
    subtitle: "Interactive sports discovery website",
    chapter: "creative-coding",
    category: "Interactive web",
    summary:
      "An interactive sports discovery website designed to help users explore suitable sports through testing and analysis.",
    learning:
      "Badan helped me practice turning user input into a guided interactive web experience.",
    highlights: ["Sports discovery", "Interactive testing", "Simple analysis flow"],
    technologies: ["HTML", "CSS", "JavaScript"],
    media: [
      { type: "image", src: "/assets/projects/badan/badan.jpg", alt: "Badan sports discovery website" },
      { type: "video", src: "/assets/projects/badan/badan.mp4", alt: "Badan sports discovery website" },
    ],
  },
  {
    id: "minecraft-graphics",
    slug: "minecraft-graphics",
    title: "Minecraft Graphics",
    subtitle: "Computer graphics experiment",
    chapter: "creative-coding",
    category: "Graphics experiment",
    summary:
      "A computer graphics experiment exploring 3D graphics, animation, and visual programming concepts.",
    learning:
      "This project made graphics programming feel tangible through rendering and animation practice.",
    highlights: ["3D graphics", "Animation", "Visual programming exploration"],
    technologies: ["C++"],
    media: [
      { type: "image", src: "/assets/projects/minecraft/minecraft.png", alt: "Minecraft-inspired graphics experiment" },
      { type: "video", src: "/assets/projects/minecraft/CGProject.mp4", alt: "Minecraft-inspired graphics experiment" },
    ],
  },
];

export const archivePreviewProjects = archiveProjects.filter((project) =>
  ["hima", "sentences-recognizer", "athar", "interactive-dashboard"].includes(project.slug),
);

export function getArchiveProject(slug: string) {
  return archiveProjects.find((project) => project.slug === slug);
}

export function getProjectsByChapter(chapter: ArchiveChapterId) {
  return archiveProjects.filter((project) => project.chapter === chapter);
}
