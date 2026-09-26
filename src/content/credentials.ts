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
    description: "...",
    skills: [],
    featured: false,
  },
  {
    id: "KidHappiness",
    title: "Kid Happiness",
    issuer: "Traraf Alkhier",
    category: "community",
    issuedAt: "2019-11",
    image: "/certificates/KidHappiness.jpeg",
    description: "...",
    skills: [],
    featured: false,
  },
  {
    id: "GreenFingerprint",
    title: "Green Fingerprint",
    issuer: "Traraf Alkhier ",
    category: "community",
    issuedAt: "2021-01",
    image: "/certificates/GreenFingerprint.png",
    description: "...",
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
    description: "...",
    skills: ["Software Development"],
    featured: false,
  },
  {
    id: "ML&DS",
    title: "Complete Machine Learning & Data Science Bootcamp",
    issuer: "Udemy",
    category: "course",
    issuedAt: "2023-08",
    image: "/certificates/ML_DS.jpg",
    description: "...",
    skills: ["Software Development"],
    featured: false,
  },
  {
    id: "BackendREST_API",
    title: "Build a Backend REST API with Python & Django - Advanced",
    issuer: "Udemy",
    category: "course",
    issuedAt: "2023-12",
    image: "/certificates/BackendREST_API.jpg",
    description: "...",
    skills: ["Software Development"],
    featured: false,
  },
  {
    id: "AWS_Cloud_Practitioner",
    title: "AWS Cloud Practitioner ",
    issuer: "Saudi Digital Academy",
    category: "course",
    issuedAt: "2024-02",
    image: "/certificates/AWS_Cloud_Practitioner.jpg",
    description: "...",
    skills: ["Software Development"],
    featured: false,
  },
  {
    id: "EnrichmentPrograms&ELearning",
    title: "Enrichment Programs & E-Learning",
    issuer: "Mawhiba",
    category: "course",
    issuedAt: "2016-08",
    image: "/certificates/EnrichmentPrograms&ELearning.png",
    description: "...",
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
    description: "...",
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
    description: "...",
    skills: [],
    featured: false,
  },
  {
    id: "SDA_DevOps",
    title: "DevOps Bootcamp",
    issuer: "Saudi Digital Academy & Integrify",
    category: "course",
    issuedAt: "2025-05",
    image: "/certificates/SDA_DevOps.png",
    description: "...",
    skills: [],
    featured: true,
  },
];

// Add real records here after placing their images in public/certificates/.
// See CREDENTIALS.md for the minimal entry format and maintenance workflow.
export const credentials: Credential[] = [
  {
    id: "IBMFullStackSoftwareDeveloper",
    title: "IBM Full Stack Software Developer",
    issuer: "Coursera",
    category: "professional",
    issuedAt: "2023-08",
    image: "/certificates/IBM_software_developer.jpg",
    description: "...",
    skills: ["Software Development"],
    featured: true,
  },
  {
    id: "Bachelor",
    title: "Bachelor' in Computer Science",
    issuer: "Umm Al-Qura University",
    category: "academic",
    issuedAt: "2023-11",
    image: "/certificates/Bachelor.png",
    description: "...",
    skills: [],
    featured: true,
  },
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
