export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  role: string;
  technologies: string[];
  highlights: string[];
  featured?: boolean;
  image?: string;
  images?: string[];
  links?: {
    live?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: "servirx",
    title: "ServiRx",
    category: "PHARMACY ERP / SAAS",
    period: "2025 — PRESENT",

    description:
      "A pharmacy ERP and SaaS platform covering inventory, purchasing, sales, reporting, staff management, subscriptions, distributors, customers, and pharmacy operations.",

    role: "Backend-focused Full Stack Developer",

    technologies: [
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "React",
      "Redis",
      "AWS S3",
      "Razorpay",
    ],

    highlights: [
      "Designed and evolved the PostgreSQL data layer across core pharmacy workflows.",
      "Built major sales, purchase, inventory, reporting, subscription, RBAC, and admin APIs.",
      "Implemented dynamic permissions, E-PIN security, plan-based feature gating, and reusable frontend security hooks.",
      "Built reporting and export workflows with CSV, XLSX, and PDF generation.",
      "Built bulk data workflows including opening-stock import supporting up to 1,000 rows.",
      "Coordinated feature scope, deadlines, delegation, and PR reviews across the development team.",
      "Delivered the product to production on July 1, 2026.",
    ],

    featured: true,

    image: "/images/projects/servirx.webp",

    images: [
      "/images/projects/servirx.webp",
      "/images/projects/warehouse.webp",
      "/images/projects/servirx-admin.webp",
      "/images/projects/servirx-sales.webp",
    ],
  },

  {
    id: "medicine-panel",
    title: "Medicine Panel",
    category: "MASTER DATA / BACKEND SYSTEM",
    period: "2025 — PRESENT",

    description:
      "A centralized medicine master-data system that powers medicine information used by ServiRx and maintains a growing catalog of pharmaceutical records.",

    role: "Backend Developer",

    technologies: [
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "React",
      "Ant Design",
    ],

    highlights: [
      "Built medicine catalog APIs and structured medicine master data workflows.",
      "Implemented medicine quality-control approval and rejection workflows.",
      "Designed database structures for medicine categories, dose forms, warning tags, and schedule types.",
      "Worked with a catalog containing 80k+ medicine records.",
      "Built integration APIs connecting the medicine master system with ServiRx.",
    ],

    image: "/images/projects/medicine-panel.webp",
  },

  {
    id: "instavolt",
    title: "Instavolt",
    category: "EV CHARGING PLATFORM",
    period: "2023 — 2025",

    description:
      "An EV charging software platform covering charging operations, station management, administrative workflows, and real-time charger events.",

    role: "Junior Backend Developer",

    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "REST APIs",
      "Webhooks",
    ],

    highlights: [
      "Developed backend features for an EV charging platform.",
      "Worked with PostgreSQL data across charging and administrative workflows.",
      "Integrated CPO software through webhooks for real-time charging events.",
      "Developed administrative modules for charging operations.",
      "Worked across backend APIs and supporting admin-panel functionality.",
    ],

    image: "/images/projects/instavolt.webp",
  },
];