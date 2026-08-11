export interface StackCategory {
  id: string;
  code: string;
  title: string;
  isActive?: boolean;
  items: string[];
}

export interface StackHeaderData {
  sectionNumber: string;
  label: string;
  title: string;
}

export const stackHeaderData: StackHeaderData = {
  sectionNumber: "03",
  label: "SYSTEM_CAPABILITIES",
  title: "Engineered Systems",
};

export const stackCategories: StackCategory[] = [
  {
    id: "frontend-systems",
    code: "SYS_01_CLIENT",
    title: "Frontend Systems",
    isActive: true,
    items: [
      "React 19 Server Nodes",
      "Next.js App Router",
      "Tailwind CSS v4",
      "Framer Motion Springs",
    ],
  },
  {
    id: "backend-engineering",
    code: "SYS_02_RUNTIME",
    title: "Backend Engineering",
    isActive: false,
    items: [
      "Go API proxies",
      "TypeScript / Node.js",
      "Rust Actix compiler",
      "gRPC / Protocol Buffers",
    ],
  },
  {
    id: "cloud-storage",
    code: "SYS_03_DATA",
    title: "Cloud & Storage",
    isActive: false,
    items: [
      "PostgreSQL index logs",
      "Redis memory keys",
      "Docker containers",
      "AWS cluster pipelines",
    ],
  },
  {
    id: "devops-tooling",
    code: "SYS_04_TOOLS",
    title: "DevOps & Tooling",
    isActive: false,
    items: [
      "Terraform declarative",
      "Git version actions",
      "Linux CLI bash scripting",
      "Webpack / ESBuild WASM",
    ],
  },
];
