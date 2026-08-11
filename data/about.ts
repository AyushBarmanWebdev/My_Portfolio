export interface MetadataItem {
  label: string;
  value: string;
  href?: string;
}

export interface Principle {
  number: string;
  title: string;
  points: string[];
}

export interface AboutData {
  header: {
    title: string;
    subtitle: string;
    metadata: MetadataItem[];
  };
  principles: Principle[];
}

export const about: AboutData = {
  header: {
    title: "System Blueprint",
    subtitle: "Full Stack Developer with Design Engineering",
    metadata: [
      { label: "NAME", value: "Ayush Barman" },
      { label: "AGE", value: "24" },
      { label: "EDUCATION", value: "B.TECH in Computer Science" },
      { label: "OCCUPATION", value: "Web Developer" },
      { label: "LOCATION", value: "Indore, MP" },
      {
        label: "EMAIL", value: "wwwkumarayush97@gmail.com",
        href: "mailto:wwwkumarayush97@gmail.com"
      },
      {
        label: "LINKEDIN", value: "linkedin.com/in/ayush-barman-b24b01239",
        href: "https://www.linkedin.com/in/ayush-barman-b24b01239"
      },
    ],
  },
  principles: [
    {
      number: "01",
      title: "ENGINEERING",
      points: [
        "Design first thinking for user interfaces.",
        "Clean architecture.",
        "Maintainable code.",
        "Performance-Oriented.",
      ],
    },
    {
      number: "02",
      title: "DESIGN",
      points: [
        "Implement user interfaces, animations, and layouts.",
        "Create, code, and maintain reusable UI components.",
        "Translate visual designs into developer-friendly module.",
        "Optimize interface performance and loading behavior.",
      ],
    },
    {
      number: "03",
      title: "FULL-STACK DEVELOPMENT",
      points: [
        "Frontend Development with UI/UX implementation.",
        "Backend Development with API design",
        "Database Management & Integration.",
        "Optimization for performance & user experience.",
      ],
    },
    {
      number: "04",
      title: "PRODUCT",
      points: [
        "Solve the problem before the implementation.",
        "Ship useful software.",
        "Iterate from real feedback."
      ],
    },
  ],
};
