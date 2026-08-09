export interface WorkspaceTab {
  id: "ui" | "impl" | "arch" | "specs";
  label: string;
  extension: string;
  extensionColor: string;
}

export interface Token {
  text: string;
  className?: string;
}

export interface TokenLine {
  indent?: number; // spacing class or padding pixels
  tokens: Token[];
}

export interface PreviewImage {
  src: string;
  alt: string;
  label: string;
}

export interface PreviewContent {
  images: PreviewImage[];
}

export interface SpecItem {
  label: string;
  value: string;
  isAccent?: boolean;
}

export interface WorkspaceContent {
  ui: PreviewContent;
  impl: TokenLine[];
  arch: {
    title: string;
    lines: TokenLine[];
  };
  specs: SpecItem[];
}

export interface Project {
  id: string;
  fileName: string;
  fileExtension: string;
  fileExtensionColor: string;
  title: string;
  description: string;
  architectureHighlights: string[];
  technologies: string[];
  links: {
    source: string;
    demo: string;
  };
  headerStatus: {
    text: string;
    isLive: boolean;
  };
  workspaceVersionOrCost: {
    label: string;
    value: string;
  };
  workspaceTabs: WorkspaceTab[];
  workspaceContent: WorkspaceContent;
  footerMetrics: {
    left: string;
    right: string;
  };
}

export const projects: Project[] = [
  {
    id: "json",
    fileName: "json_workshop.tsx",
    fileExtension: "tsx",
    fileExtensionColor: "text-blue-400",
    title: "JSON Workshop - Formatter & Validator",
    description: "A modern developer tool for formatting, validating, and inspecting JSON with a clean editor-first experience. Built with Astro, Monaco Editor, and Tailwind CSS, focusing on speed, usability, and polished developer workflows.",
    architectureHighlights: [
      "Monaco Editor integration with a custom developer-focused interface.",
      "Client-side JSON formatting and validation with instant feedback.",
      "Modular Astro component architecture for scalable feature development."
    ],
    technologies: ["ASTRO", "MONACO_EDITOR", "TAILWIND_CSS", "TYPESCRIPT"],
    links: {
      source: "https://github.com/AyushBarmanWebdev/JSON-Workshop",
      demo: "https://jsonworkshop.com/",
    },
    headerStatus: {
      text: "LIVE",
      isLive: true,
    },
    workspaceVersionOrCost: {
      label: "VER",
      value: "1.0",
    },
    workspaceTabs: [
      { id: "ui", label: "UI", extension: "tsx", extensionColor: "text-blue-400" },
      { id: "impl", label: "IMPLEMENTATION", extension: "tsx", extensionColor: "text-blue-400" },
      { id: "arch", label: "ARCHITECTURE", extension: "tsx", extensionColor: "text-blue-400" },
      { id: "specs", label: "SPECS", extension: "tsx", extensionColor: "text-blue-400" },
    ],
    workspaceContent: {
      ui: {
        images: [
          {
            src: "/projects/json-workshop/favicon.svg",
            alt: "JSON Workshop",
            label: "Favicon"
          },
          {
            src: "/projects/json-workshop/home.png",
            alt: "Home",
            label: "Home"
          },
          {
            src: "/projects/json-workshop/contact.png",
            alt: "Contact",
            label: "Contact"
          },
          {
            src: "/projects/json-workshop/about.png",
            alt: "About",
            label: "About"
          },
          {
            src: "/projects/json-workshop/privacy-policy.png",
            alt: "Privacy Policy",
            label: "Privacy Policy"
          },
          {
            src: "/projects/json-workshop/terms.png",
            alt: "Terms",
            label: "Terms"
          },
        ],
      },
      impl: [
        {
          tokens: [
            { text: "const ", className: "text-rose-400" },
            { text: "value = ", className: "text-zinc-400" },
            { text: "JSON.parse", className: "text-emerald-400" },
            { text: "(", className: "text-amber-400" },
            { text: "editor.getValue", className: "text-zinc-400" },
            { text: "()", className: "text-amber-400" },
            { text: ");", className: "text-amber-400" }
          ]
        },
        {
          tokens: [
            { text: "const ", className: "text-rose-400" },
            { text: "formatted = ", className: "text-zinc-400" },
            { text: "JSON.stringify", className: "text-emerald-400" },
            { text: "(", className: "text-amber-400" },
            { text: "value, null, 2", className: "text-zinc-400" },
            { text: ");", className: "text-amber-400" }
          ]
        },
        {
          tokens: [
            { text: "editor.setValue", className: "text-emerald-400" },
            { text: "(", className: "text-amber-400" },
            { text: "formatted", className: "text-zinc-400" },
            { text: ");", className: "text-amber-400" }
          ]
        },
        {
          tokens: [
            { text: "// Validate before applying changes", className: "text-zinc-600" }
          ]
        }
      ],
      arch: {
        title: "// REQUEST / DATA FLOW",
        lines: [
          {
            tokens: [
              { text: "User Input", className: "text-white font-bold" },
              { text: " ───► ", className: "text-zinc-700" },
              { text: "Monaco Editor", className: "text-blue-400 font-bold" },
            ]
          },
          {
            indent: 34,
            tokens: [
              { text: "├──► ", className: "text-zinc-700" },
              { text: "JSON Formatter", className: "text-emerald-400 font-bold" }
            ]
          },
          {
            indent: 34,
            tokens: [
              { text: "└──► ", className: "text-zinc-700" },
              { text: "JSON Validator", className: "text-emerald-400 font-bold" }
            ]
          },
          {
            indent: 54,
            tokens: [
              { text: "│" },
              { text: " Validation Result", className: "text-zinc-400" }
            ]
          },
          {
            indent: 54,
            tokens: [
              { text: "▼" }
            ]
          },
          {
            indent: 44,
            tokens: [
              { text: "Editor Feedback", className: "text-white font-bold" }
            ]
          }
        ]
      },
      specs: [
        { label: "TYPE", value: "DEVELOPER_TOOL", isAccent: true },
        { label: "FRAMEWORK", value: "ASTRO", isAccent: true },
        { label: "EDITOR", value: "MONACO_EDITOR", isAccent: true },
        { label: "VALIDATION", value: "CLIENT_SIDE", isAccent: true },
        { label: "STATUS", value: "LIVE", isAccent: true },
      ],
    },
    footerMetrics: {
      left: "FORMATTER: READY",
      right: "EDITOR: MONACO",
    },
  },
  {
    id: "codebook",
    fileName: "codebook_compiler.html",
    fileExtension: "html",
    fileExtensionColor: "text-rose-400",
    title: "CodeBook - Handwriting Online Compiler",
    description: "An online code editor supporting both typing and handwriting input. Users can write code on a digital canvas, convert handwriting to source code using OCR, and execute programs directly in the browser.",
    architectureHighlights: [
      "Canvas-based handwriting input powered by OCR recognition.",
      "Judge0 API integration for multi-language code execution.",
      "Interactive editor supporting typing and handwritten workflows."
    ],
    technologies: ["HTML/CSS", "JAVASCRIPT", "TAILWIND_CSS", "NODE", "JUDGE0_API", "OCR"],
    links: {
      source: "https://github.com/AyushBarmanWebdev/codebook-mvp",
      demo: "https://codebook-5glo.onrender.com/",
    },
    headerStatus: {
      text: "LIVE",
      isLive: true,
    },
    workspaceVersionOrCost: {
      label: "VER",
      value: "1.0.1",
    },
    workspaceTabs: [
      { id: "ui", label: "UI", extension: "html", extensionColor: "text-rose-400" },
      { id: "impl", label: "IMPLEMENTATION", extension: "html", extensionColor: "text-rose-400" },
      { id: "arch", label: "ARCHITECTURE", extension: "html", extensionColor: "text-rose-400" },
      { id: "specs", label: "SPECS", extension: "html", extensionColor: "text-rose-400" },
    ],
    workspaceContent: {
      ui: {
        images: [
          {
            src: "/projects/codebook/android-chrome-512x512.png",
            alt: "Codebook Icon",
            label: "Icon"
          },
          {
            src: "/projects/codebook/Screenshot 2026-04-07 132536.png",
            alt: "Langauge Selection",
            label: "Languages"
          },
          {
            src: "/projects/codebook/Screenshot 2026-04-07 132606.png",
            alt: "Compiler",
            label: "Editor"
          }
        ]
      },
      impl: [
        {
          tokens: [
            { text: "const ", className: "text-rose-400" },
            { text: "recognizedText = ", className: "text-zinc-400" },
            { text: "await ", className: "text-rose-400" },
            { text: "recognizeCode", className: "text-emerald-400" },
            { text: "(", className: "text-amber-400" },
            { text: "canvas", className: "text-zinc-400" },
            { text: ");", className: "text-amber-400" }
          ]
        },
        {
          tokens: [
            { text: "setCode", className: "text-emerald-400" },
            { text: "(", className: "text-amber-400" },
            { text: "recognizedText", className: "text-zinc-400" },
            { text: ")", className: "text-amber-400" }
          ]
        },
        {
          tokens: [
            { text: "// Submit source to Judge0", className: "text-zinc-600" }
          ]
        },
        {
          tokens: [
            { text: "const ", className: "text-rose-400" },
            { text: "result = ", className: "text-zinc-400" },
            { text: "await ", className: "text-rose-400" },
            { text: "executeCode", className: "text-emerald-400" },
            { text: "(", className: "text-amber-400" },
            { text: "code, language", className: "text-zinc-400" },
            { text: ");", className: "text-amber-400" },
          ]
        }
      ],
      arch: {
        title: "// CODE EXECUTION FLOW",
        lines: [
          {
            tokens: [
              { text: "User", className: "text-white font-bold" },
              { text: " ───► ", className: "text-zinc-700" },
              { text: "Select Language", className: "text-emerald-400 font-bold" },
              { text: " ───► ", className: "text-zinc-700" },
              { text: "Input Mode", className: "text-white font-bold" },
              { text: " ───► ", className: "text-zinc-700" },
              { text: " Handwriting ", className: "text-emerald-400 font-bold" },
            ],
          },
          {
            indent: 56,
            tokens: [
              { text: "│", className: "text-zinc-700" },
              { text: "                  │", className: "text-zinc-700" },
            ]
          },
          {
            indent: 56,
            tokens: [
              { text: "▼", className: "text-zinc-700" },
              { text: "                 ▼", className: "text-zinc-700" },
            ]
          },
          {
            indent: 54,
            tokens: [
              { text: "Typing", className: "text-emerald-400 font-bold" },
              { text: "   ───►    ", className: "text-zinc-700" },
              { text: "OCR", className: "text-white font-bold" },
            ]
          },
          {
            indent: 82,
            tokens: [
              { text: "│", className: "text-zinc-700" },
            ]
          },
          {
            indent: 82,
            tokens: [
              { text: "▼", className: "text-zinc-700" },
            ]
          },
          {
            indent: 3,
            tokens: [
              { text: "Output ", className: "text-emerald-400 font-bold" },
              { text: " ◄─── ", className: "text-zinc-700" },
              { text: "Judge0 API ", className: "text-white font-bold" },
              { text: " ◄─── ", className: "text-zinc-700" },
              { text: "Execution ", className: "text-white font-bold" },
              { text: " ◄─── ", className: "text-zinc-700" },
              { text: "Source Code", className: "text-emerald-400 font-bold" },
            ]
          }
        ],
      },
      specs: [
        { label: "TYPE", value: "COMPILER", isAccent: true },
        { label: "FRAMEWORK", value: "HTML_CSS_JAVASCRIPT", isAccent: true },
        { label: "INPUT", value: "TYPING_AND_HANDWRITING", isAccent: true },
        { label: "EDITOR", value: "CANVAS_API", isAccent: true },
        { label: "LANGUAGES", value: "14+", isAccent: true },
        { label: "OCR", value: "TESSERACT.JS", isAccent: true },
        { label: "EXECUTION", value: "JUDGE0_API", isAccent: true },
        { label: "STATUS", value: "LIVE", isAccent: true },
      ],
    },
    footerMetrics: {
      left: "OCR: READY",
      right: "EXECUTER: ONLINE",
    },
  },
  {
    id: "linkedin",
    fileName: "linkedin_ui_enhanced.jsx",
    fileExtension: "jsx",
    fileExtensionColor: "text-amber-400",
    title: "LinkedIn UI (Enhanced)",
    description: "A responsive LinkedIn-inspired social platform built to practice full-stack application architecture, authentication, feeds, reusable UI systems, and scalable component design.",
    architectureHighlights: [
      "JWT authentication and protected application routes.",
      "REST APIs for posts, comments, likes, and user management.",
      "Reusable React component architecture with responsive layouts."
    ],
    technologies: ["REACT", "TAILWIND_CSS", "EXPRESS", "NODE", "MONGO_DB", "JWT_AUTHENTICATION"],
    links: {
      source: "https://github.com/AyushBarmanWebdev/LinkedIn-UI",
      demo: "https://linked-in-ui.vercel.app/",
    },
    headerStatus: {
      text: "LIVE",
      isLive: true,
    },
    workspaceVersionOrCost: {
      label: "VER",
      value: "1.0",
    },
    workspaceTabs: [
      { id: "ui", label: "UI", extension: "jsx", extensionColor: "text-amber-400" },
      { id: "impl", label: "IMPLEMENTATION", extension: "jsx", extensionColor: "text-amber-400" },
      { id: "arch", label: "ARCHITECTURE", extension: "jsx", extensionColor: "text-amber-400" },
      { id: "specs", label: "SPECS", extension: "jsx", extensionColor: "text-amber-400" },
    ],
    workspaceContent: {
      ui: {
        images: [
          {
            src: "/projects/linked-in-ui/preview.png.jpeg",
            alt: "Landing Page",
            label: "Landing"
          },
          {
            src: "/projects/linked-in-ui/login.png.png",
            alt: "Login Page",
            label: "Login"
          },
          {
            src: "/projects/linked-in-ui/signup.png.png",
            alt: "Signup Page",
            label: "Signup"
          },
          {
            src: "/projects/linked-in-ui/hero.png.png",
            alt: "Hero Page",
            label: "Hero"
          },
          {
            src: "/projects/linked-in-ui/footer.png.png",
            alt: "Footer Page",
            label: "Footer"
          }
        ]
      },
      impl: [
        {
          tokens: [
            { text: "const ", className: "text-rose-400" },
            { text: "createPost = ", className: "text-zinc-400" },
            { text: "async ", className: "text-rose-400" },
            { text: "(", className: "text-amber-400" },
            { text: "content", className: "text-zinc-400" },
            { text: ") ", className: "text-amber-400" },
            { text: "=> ", className: "text-zinc-400" },
            { text: "{", className: "text-amber-400" }
          ]
        },
        {
          indent: 4,
          tokens: [
            { text: "const ", className: "text-rose-400" },
            { text: "response = ", className: "text-zinc-400" },
            { text: "await ", className: "text-rose-400" },
            { text: "fetch", className: "text-emerald-400" },
            { text: "(", className: "text-amber-400" },
            { text: "`$", className: "text-rose-400" },
            { text: "{", className: "text-amber-400" },
            { text: "API_URL", className: "text-zinc-400" },
            { text: "}", className: "text-amber-400" },
            { text: "/posts`, ", className: "text-zinc-400" },
            { text: "{", className: "text-amber-400" }
          ]
        },
        {
          indent: 8,
          tokens: [
            { text: "method: ", className: "text-zinc-400" },
            { text: "\"POST\"", className: "text-emerald-400" },
            { text: ",", className: "text-zinc-400" }
          ]
        },
        {
          indent: 8,
          tokens: [
            { text: "body: ", className: "text-zinc-400" },
            { text: "JSON.stringify", className: "text-emerald-400" },
            { text: "(", className: "text-amber-400" },
            { text: "content", className: "text-zinc-400" },
            { text: ")", className: "text-amber-400" }
          ]
        },
        {
          indent: 4,
          tokens: [
            { text: ");", className: "text-amber-400" }
          ]
        },
        {
          tokens: [
            { text: "}", className: "text-amber-400" }
          ]
        }
      ],
      arch: {
        title: "// APPLICATION DATA FLOW",
        lines: [
          {
            tokens: [
              { text: "USER", className: "text-white font-bold" },
              { text: " ───► ", className: "text-zinc-700" },
              { text: "React Client", className: "text-emerald-400 font-bold" },
              { text: " ───► ", className: "text-zinc-700" },
              { text: "Express API", className: "text-emerald-400 font-bold" },
              { text: " ───► ", className: "text-zinc-700" },
              { text: "MongoDB", className: "text-emerald-400 font-bold" },
            ],
          },
          {
            indent: 25,
            tokens: [
              { text: "│                   │", className: "text-zinc-700" },
            ],
          },
          {
            indent: 25,
            tokens: [
              { text: "├──► ", className: "text-zinc-700" },
              { text: "Auth", className: "text-white font-bold" },
              { text: "        ├──► ", className: "text-zinc-700" },
              { text: "Auth Routes", className: "text-white font-bold" },
            ],
          },
          {
            indent: 25,
            tokens: [
              { text: "├──► ", className: "text-zinc-700" },
              { text: "Feed", className: "text-white font-bold" },
              { text: "        ├──► ", className: "text-zinc-700" },
              { text: "Post Routes", className: "text-white font-bold" },
            ],
          },
          {
            indent: 25,
            tokens: [
              { text: "├──► ", className: "text-zinc-700" },
              { text: "Posts", className: "text-white font-bold" },
              { text: "       ├──► ", className: "text-zinc-700" },
              { text: "Comment Routes", className: "text-white font-bold" },
            ],
          },
          {
            indent: 25,
            tokens: [
              { text: "├──► ", className: "text-zinc-700" },
              { text: "Comments", className: "text-white font-bold" },
              { text: "    ├──► ", className: "text-zinc-700" },
              { text: "User Routes", className: "text-white font-bold" },
            ],
          },
          {
            indent: 25,
            tokens: [
              { text: "└──► ", className: "text-zinc-700" },
              { text: "Profile", className: "text-white font-bold" },
              { text: "     └──► ", className: "text-zinc-700" },
              { text: "Profile Routes", className: "text-white font-bold" },
            ],
          },
        ],
      },
      specs: [
        { label: "TYPE", value: "SOCIAL_PLATFORM", isAccent: true },
        { label: "FRONTEND", value: "REACT", isAccent: true },
        { label: "BACKEND", value: "NODE_AND_EXPRESS", isAccent: true },
        { label: "DATABASE", value: "MONGO_DB", isAccent: true },
        { label: "AUTH", value: "JWT", isAccent: true },
        { label: "STATUS", value: "LIVE", isAccent: true },
      ],
    },
    footerMetrics: {
      left: "AUTH: JWT",
      right: "API: CONNECTED",
    },
  },
];
