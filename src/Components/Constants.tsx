
export const projects = [
  {
    name: "RoyCares",
    badge: "Professional",
    badgeClass: "bg-gray-100 text-gray-700",
    iconBg: "bg-violet-100",
    iconColor: "#534AB7",
    desc: "Lifestyle adjustment and recovery system that helps users progress through structured sections, complete self-assessments, and engage in therapy sessions. The platform provides personalized insights, guided video content for reflection, and supports psychiatrist-led recovery sessions",
    role: [
      "Designed RESTful APIs with CodeIgniter 4 for backend functionality",
      "Integrated PostgreSQL with optimized queries for efficient data retrieval",
      "Built modules for progress tracking, assessments, and therapy sessions",
    ],
    stack: ["PHP", "CodeIgniter 4", "PostgreSQL", "Git"],
    link: null,
  },
  {
    name: "Logemanns",
    badge: "Professional",
    badgeClass: "bg-gray-100 text-gray-700",
    iconBg: "bg-teal-100",
    iconColor: "#0F6E56",
    desc: "Redesigned and upgraded an interactive learning platform used for swallowing disorder assessment and training. Migrated the backend from CodeIgniter 2 to CodeIgniter 4, introducing a modern API-driven structure for improved data handling.",
    role: [
      "Migrated backend CI2 → CI4 with improved performance and security",
      "Implemented JWT authentication for secure session management",
      "Restructured database queries to reduce response time",
    ],
    stack: ["PHP", "CodeIgniter 4", "PostgreSQL", "JWT"],
    link: null,
  },
  {
    name: "Expixo",
    badge: "AI / Personal",
    badgeClass: "bg-blue-100 text-blue-800",
    iconBg: "bg-blue-100",
    iconColor: "#185FA5",
    desc: "AI-powered food expiry tracker. Scan any food packet, Gemini Vision reads the expiry date automatically, and you get reminded before anything expires.",
    role: [],
    stack: ["React", "FastAPI", "Supabase", "Gemini Vision", "Tailwind", "Vite"],
    link: "https://expixo.vercel.app",
  },
];