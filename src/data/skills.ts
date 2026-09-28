export type SkillGroup = {
    title: string;
    description: string;
    skills: string[];
  };
  
  export const skillGroups: SkillGroup[] = [
    {
      title: "Backend",
      description:
        "Building APIs, business logic, integrations, and backend services for production applications.",
      skills: [
        "Node.js",
        "Express",
        "TypeScript",
        "REST APIs",
        "Prisma",
        "Webhooks",
      ],
    },
  
    {
      title: "Databases",
      description:
        "Designing relational data models and working with production application data.",
      skills: [
        "PostgreSQL",
        "Prisma ORM",
        "MongoDB",
        "Database Design",
        "Migrations",
      ],
    },
  
    {
      title: "Frontend",
      description:
        "Delivering backend-led full-stack features across business applications.",
      skills: [
        "React",
        "Ant Design",
        "SCSS Modules",
        "JavaScript",
        "TypeScript",
      ],
    },
  
    {
      title: "Infrastructure & Services",
      description:
        "Working with supporting services used by production application workflows.",
      skills: [
        "Redis",
        "AWS S3",
        "Razorpay",
        "MSG91",
        "WhatsApp APIs",
      ],
    },
  
    {
      title: "Engineering",
      description:
        "System-level responsibilities that go beyond individual feature implementation.",
      skills: [
        "RBAC",
        "Authentication",
        "Authorization",
        "API Architecture",
        "Data Workflows",
        "CSV Imports",
        "Reporting",
      ],
    },
  ];