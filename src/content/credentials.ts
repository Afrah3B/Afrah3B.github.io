export const credentialCategories = [
  "academic",
  "professional",
  "course",
  "community",
] as const;

export type CredentialCategory = (typeof credentialCategories)[number];

export type Credential = {
  id: string;
  title: string;
  issuer: string;
  category: CredentialCategory;
  issuedAt: string;
  image: string;
  description?: string;
  skills?: string[];
  featured?: boolean;
};

export const categoryLabels: Record<CredentialCategory, string> = {
  academic: "Academic",
  professional: "Professional",
  course: "Courses & Programs",
  community: "Community & Volunteering",
};

const community: Credential[] = [
  {
    id: "Etaam2020",
    title: "Etaam",
    issuer: "Etaam",
    category: "community",
    issuedAt: "2020-11",
    image: "/certificates/Etaam2020.jpeg",
    description:
      "Volunteered in Makkah serving pilgrims and visitors of the Grand Mosque, helping distribute meals and support guests during their visit.",
    skills: [],
    featured: false,
  },
  {
    id: "KidHappiness",
    title: "Farhat Tifl",
    issuer: "Traraf Alkhier",
    category: "community",
    issuedAt: "2019-11",
    image: "/certificates/KidHappiness.jpeg",
    description:
      "Volunteered in a World Children's Day initiative dedicated to creating a joyful experience for children through interactive activities, including face painting, games, and entertainment.",
    skills: [],
    featured: false,
  },
  {
    id: "GreenFingerprint",
    title: "Basmatek Khadra",
    issuer: "Traraf Alkhier ",
    category: "community",
    issuedAt: "2021-01",
    image: "/certificates/GreenFingerprint.png",
    description:
      "Led and managed a volunteer environmental initiative focused on raising awareness of planting and cultivation, coordinating the event and its volunteers from planning through execution.",
    skills: [],
    featured: false,
  },
];
const courses: Credential[] = [
  {
    id: "DartFlutterCompleteGuide",
    title: "Dart & Flutter: The Complete Developer Guide",
    issuer: "Udemy",
    category: "course",
    issuedAt: "2023-12",
    image: "/certificates/dart_flutter.jpg",
    description:
      "Hands-on training in building cross-platform mobile applications with Dart and Flutter, covering application architecture, state management, navigation, APIs, and persistent data.",
    skills: [
      "Flutter",
      "Dart",
      "Mobile Development",
      "State Management",
      "REST APIs",
    ],
    featured: false,
  },
  {
    id: "ML&DS",
    title: "Complete Machine Learning & Data Science Bootcamp",
    issuer: "Udemy",
    category: "course",
    issuedAt: "2023-08",
    image: "/certificates/ML_DS.jpg",
    description:
      "Practical introduction to the machine learning workflow, from preparing and exploring data to building, evaluating, and improving predictive models with Python.",
    skills: [
      "Machine Learning",
      "Data Science",
      "Python",
      "Data Analysis",
      "Model Evaluation",
    ],
    featured: false,
  },
  {
    id: "BackendREST_API",
    title: "Build a Backend REST API with Python & Django — Advanced",
    issuer: "Udemy",
    category: "course",
    issuedAt: "2023-12",
    image: "/certificates/BackendREST_API.jpg",
    description:
      "Advanced backend development focused on designing, building, testing, and deploying REST APIs with Python and Django, including authentication, databases, and containerized development.",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "Backend Development",
      "Docker",
    ],
    featured: false,
  },
  {
    id: "AWS_Cloud_Practitioner",
    title: "AWS Cloud Practitioner",
    issuer: "Saudi Digital Academy",
    category: "course",
    issuedAt: "2024-02",
    image: "/certificates/AWS_Cloud_Practitioner.jpg",
    description:
      "Foundational cloud training covering AWS services, cloud architecture concepts, security, pricing, and the operational principles behind running workloads in the cloud.",
    skills: [
      "AWS",
      "Cloud Computing",
      "Cloud Architecture",
      "Cloud Security",
    ],
    featured: false,
  },
  {
    id: "EnrichmentPrograms&ELearning",
    title: "Enrichment Programs & E-Learning",
    issuer: "Mawhiba",
    category: "course",
    issuedAt: "2016-08",
    image: "/certificates/EnrichmentPrograms&ELearning.png",
    description:
      "Early enrichment program focused on developing analytical thinking, independent learning, and problem-solving through structured educational experiences.",
    skills: [],
    featured: false,
  },
  {
    id: "STEM",
    title: "STEM",
    issuer: "Mawhiba",
    category: "course",
    issuedAt: "2017-03",
    image: "/certificates/STEM.png",
    description:
      "Early interdisciplinary STEM program exploring scientific and technical problem-solving through applied learning across science, technology, engineering, and mathematics.",
    skills: [],
    featured: false,
  },
  {
    id: "GameDevelopment",
    title: "Game Development",
    issuer: "Google Developer Student Clubs",
    category: "course",
    issuedAt: "2024-12",
    image: "/certificates/GamingDevelopmentBootcamp.png",
    description:
      "Practical introduction to game development, exploring the development process and core concepts behind building interactive game experiences.",
    skills: [
      "Game Development",
      "Game Design",
    ],
    featured: false,
  },
  {
    id: "SDA_DevOps",
    title: "DevOps Bootcamp",
    issuer: "Saudi Digital Academy & Integrify",
    category: "course",
    issuedAt: "2025-05",
    image: "/certificates/SDA_DevOps.png",
    description:
      "Intensive DevOps training focused on modern software delivery, infrastructure, automation, containerization, CI/CD, cloud environments, and operating applications beyond development.",
    skills: [
      "DevOps",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Cloud Infrastructure",
      "Automation",
    ],
    featured: true,
  },
];

const professional: Credential[] = [
  {
    id: "IBMFullStackSoftwareDeveloper",
    title: "IBM Full Stack Software Developer Professional Certificate",
    issuer: "IBM",
    category: "professional",
    issuedAt: "2023-08",
    image: "/certificates/IBM_software_developer.jpg",
    description:
      "Professional certification covering the end-to-end development of modern web applications, from frontend interfaces and backend services to databases, cloud deployment, containers, and software engineering practices.",
    skills: [
      "Full-Stack Development",
      "REST APIs",
      "Databases",
      "Cloud Computing",
      "Docker",
      "Git & GitHub",
      "Software Engineering",
    ],
    featured: true,
  },
];
const academic: Credential[] = [
  {
    id: "Bachelor",
    title: "Bachelor's Degree in Computer Science",
    issuer: "Umm Al-Qura University",
    category: "academic",
    issuedAt: "2023-11",
    image: "/certificates/Bachelor.png",
    description:
      "Academic foundation in computer science spanning software development, algorithms, data structures, databases, computer systems, and the principles behind designing and solving computational problems.",
    skills: [
      "Computer Science",
      "Software Engineering",
      "Data Structures & Algorithms",
      "Database Systems",
      "Object-Oriented Programming",
      "Problem Solving",
    ],
    featured: true,
  },
];

// Add real records here after placing their images in public/certificates/.
// See CREDENTIALS.md for the minimal entry format and maintenance workflow.
export const credentials: Credential[] = [
  ...academic,
  ...professional,
  ...courses,
  ...community,
];

export function sortCredentials(items: readonly Credential[]) {
  return [...items].sort((a, b) => b.issuedAt.localeCompare(a.issuedAt));
}

export function getCredentialYear(issuedAt: string) {
  return issuedAt.slice(0, 4);
}

export function groupCredentialsByYear(items: readonly Credential[]) {
  return sortCredentials(items).reduce<Record<string, Credential[]>>(
    (groups, credential) => {
      const year = getCredentialYear(credential.issuedAt);
      (groups[year] ??= []).push(credential);
      return groups;
    },
    {},
  );
}

export function formatCredentialDate(issuedAt: string) {
  const [year, month] = issuedAt.split("-");
  if (!month) return year;
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(Number(year), Number(month) - 1, 1)));
}

export function getCredentialCounts(items: readonly Credential[]) {
  return credentialCategories.reduce<Record<CredentialCategory, number>>(
    (counts, category) => ({
      ...counts,
      [category]: items.filter((item) => item.category === category).length,
    }),
    { academic: 0, professional: 0, course: 0, community: 0 },
  );
}

export function getCredentialPreviews(items: readonly Credential[], limit = 3) {
  const sorted = sortCredentials(items);
  const featured = sorted.filter((item) => item.featured);
  const remaining = sorted.filter((item) => !item.featured);
  return [...featured, ...remaining].slice(0, limit);
}
