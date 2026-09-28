export type Experience = {
    period: string;
    role: string;
    company: string;
    context: string;
    description: string;
    highlights: string[];
  };
  
  export const experience: Experience[] = [
    {
      period: "2025 — Present",
      role: "MERN Stack Developer",
      company: "Serviots",
      context: "ServiRx / Medicine Panel",
      description:
        "Backend-focused full-stack development across a pharmacy ERP, centralized medicine data platform, and shared mobile backend.",
      highlights: [
        "Owned major backend modules across sales, purchasing, inventory, reporting, subscriptions, RBAC, and administration.",
        "Designed and evolved the PostgreSQL schema supporting the ServiRx ERP.",
        "Worked across backend and frontend repositories to deliver major features end-to-end.",
        "Participated in feature scoping, implementation planning, deadline estimation, and technical coordination.",
        "Delegated smaller implementation tasks and conducted blocking PR reviews across the web team.",
        "Helped deliver ServiRx to production on July 1, 2026.",
      ],
    },
  
    {
      period: "2023 — 2025",
      role: "Junior Backend Developer",
      company: "Tatvasoft",
      context: "Instavolt",
      description:
        "Backend development for an EV charging software platform, working primarily with Node.js, TypeScript, Express, and PostgreSQL.",
      highlights: [
        "Developed backend features for charging operations and administrative workflows.",
        "Worked with PostgreSQL data models for charging sessions, stations, and platform operations.",
        "Integrated CPO software through webhooks for real-time charging events.",
        "Contributed to admin panel modules and charging-related workflows.",
      ],
    },
  
    {
      period: "Jan — Jul 2023",
      role: "Software Development Intern",
      company: "Tatvasoft",
      context: "Software Development",
      description:
        "Started professional software development through a structured engineering internship.",
      highlights: [
        "Built the foundation for production backend development.",
        "Worked within an established engineering team and development workflow.",
        "Transitioned into a full-time junior backend role after the internship.",
      ],
    },
  ];