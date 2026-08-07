export interface WorkspaceTab {
  id: "preview" | "impl" | "arch" | "metric";
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

export interface PreviewContent {
  headerLeft: string;
  headerRight: string;
  headerRightColor: string;
  lines: string[];
  card?: {
    name: string;
    bio: string;
    subText: string;
  };
  footerLeft: string;
  footerRight: string;
}

export interface MetricItem {
  label: string;
  value: string;
  isAccent: boolean;
}

export interface WorkspaceContent {
  preview: PreviewContent;
  impl: TokenLine[];
  arch: {
    title: string;
    lines: TokenLine[];
  };
  metric: MetricItem[];
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
  workspaceTitle: string;
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
    fileName: "json_workshop_parser.rs",
    fileExtension: "rs",
    fileExtensionColor: "text-rose-400",
    title: "JSON Workshop",
    description: "A high-performance web utility built to parse, query, and validate massive JSON files on the client side. By writing a custom Rust parser compiled to WebAssembly (WASM), we sidestep standard JavaScript main-thread blocking loops.",
    architectureHighlights: [
      "Multi-threaded Web Workers parsing 50MB files under 100ms.",
      "Zero garbage collection latency spikes using WASM memory allocations.",
      "Fast JSON schema trees parsing paths without full AST reconstruction.",
    ],
    technologies: ["RUST / WASM", "NEXT.JS 15", "WEB WORKERS", "TAILWIND"],
    links: {
      source: "#",
      demo: "#",
    },
    headerStatus: {
      text: "LIVE_DEPLOYED",
      isLive: true,
    },
    workspaceTitle: "WASM_BUFFER",
    workspaceVersionOrCost: {
      label: "VER",
      value: "1.0.4",
    },
    workspaceTabs: [
      { id: "preview", label: "PREVIEW", extension: "rs", extensionColor: "text-rose-400" },
      { id: "impl", label: "CODE", extension: "rs", extensionColor: "text-rose-400" },
      { id: "arch", label: "ARCHITECTURE", extension: "rs", extensionColor: "text-rose-400" },
      { id: "metric", label: "METRIC", extension: "rs", extensionColor: "text-rose-400" },
    ],
    workspaceContent: {
      preview: {
        headerLeft: "PARSER_UI: ACTIVE",
        headerRight: "READY",
        headerRightColor: "text-emerald-400",
        lines: [
          "▼ root",
          '  "status": "success",',
          '  "latency": "0.08ms",',
          '  ▼ "bufferAllocations": [',
          '    {"id": 0, "size": "12.4kb", "active": true},',
          '    {"id": 1, "size": "500MB", "active": false}',
          "  ]",
        ],
        footerLeft: "FPS: 60.00",
        footerRight: "NODES: 1,402",
      },
      impl: [
        {
          tokens: [
            { text: "pub fn ", className: "text-emerald-500" },
            { text: "alloc_wasm_heap", className: "text-teal-400" },
            { text: "(len: usize) {" }
          ]
        },
        {
          indent: 4,
          tokens: [{ text: "let mut ptr = Vec::with_capacity(len);" }]
        },
        {
          indent: 4,
          tokens: [{ text: "// Prevent standard allocations", className: "text-zinc-700" }]
        },
        {
          indent: 4,
          tokens: [{ text: "let raw = ptr.as_mut_ptr();" }]
        },
        {
          indent: 4,
          tokens: [{ text: "std::mem::forget(ptr);" }]
        },
        {
          indent: 4,
          tokens: [{ text: "raw" }]
        },
        {
          tokens: [{ text: "}" }]
        }
      ],
      arch: {
        title: "// SYSTEM DATA STREAM",
        lines: [
          {
            tokens: [
              { text: "Browser File UI", className: "text-white font-bold" },
              { text: " ───► ", className: "text-zinc-800" },
              { text: "Worker Thread", className: "text-emerald-400 font-bold" }
            ]
          },
          {
            indent: 14,
            tokens: [{ text: "│ (WASM heap pipeline)", className: "text-zinc-700" }]
          },
          {
            indent: 14,
            tokens: [{ text: "▼", className: "text-zinc-700" }]
          },
          {
            tokens: [
              { text: "Rust Parser", className: "text-emerald-400 font-bold" },
              { text: " ──────► ", className: "text-zinc-800" },
              { text: "Validation Tree AST", className: "text-white font-bold" }
            ]
          }
        ],
      },
      metric: [
        { label: "Lighthouse Perf", value: "100 / 100", isAccent: true },
        { label: "Parsing speed", value: "500MB/sec", isAccent: false },
        { label: "Accessibility", value: "100 / 100", isAccent: true },
        { label: "WASM Size", value: "12.4kb", isAccent: false },
      ],
    },
    footerMetrics: {
      left: "ALLOCS: ZERO_OVERHEAD",
      right: "GC: DISABLED",
    },
  },
  {
    id: "codebook",
    fileName: "codebook_compiler.tsx",
    fileExtension: "tsx",
    fileExtensionColor: "text-blue-400",
    title: "CodeBook",
    description: "An interactive shared developer workspace and sandboxed compilation environment. Built to help teams pair program concurrently and test JS/TypeScript execution in real time.",
    architectureHighlights: [
      "ESBuild WASM engine performing bundle compiles in the client under 15ms.",
      "WebSockets syncing document state changes with < 8ms peer latency.",
      "Secure postMessage sandbox execution context inside framed pages.",
    ],
    technologies: ["ESBUILD WASM", "WEBSOCKETS", "REACT", "POSTGRES"],
    links: {
      source: "#",
      demo: "#",
    },
    headerStatus: {
      text: "LIVE_DEPLOYED",
      isLive: true,
    },
    workspaceTitle: "COMPILER_BUNDLE",
    workspaceVersionOrCost: {
      label: "STATE",
      value: "IDLE",
    },
    workspaceTabs: [
      { id: "preview", label: "PREVIEW", extension: "tsx", extensionColor: "text-blue-400" },
      { id: "impl", label: "CODE", extension: "tsx", extensionColor: "text-blue-400" },
      { id: "arch", label: "ARCHITECTURE", extension: "tsx", extensionColor: "text-blue-400" },
      { id: "metric", label: "METRIC", extension: "tsx", extensionColor: "text-blue-400" },
    ],
    workspaceContent: {
      preview: {
        headerLeft: "COMPILER_CONSOLE: LIVE",
        headerRight: "READY",
        headerRightColor: "text-blue-400",
        lines: [
          "> npm run compile",
          "Target: esbuild_engine.wasm",
          "✔ Bundled 14 files into bundle.js [15ms]",
          "> starting websocket channel...",
          "✔ Sync active: 2 active clients",
        ],
        footerLeft: "PEERS: 02",
        footerRight: "STATE: SYNCED",
      },
      impl: [
        {
          tokens: [
            { text: "import ", className: "text-emerald-500" },
            { text: "{ bundle } " },
            { text: "from ", className: "text-emerald-500" },
            { text: "'esbuild-wasm'", className: "text-teal-400" },
            { text: ";" }
          ]
        },
        {
          tokens: [
            { text: "async fn ", className: "text-rose-500" },
            { text: "build(code: string) {" }
          ]
        },
        {
          indent: 4,
          tokens: [
            { text: "const out = " },
            { text: "await ", className: "text-emerald-500" },
            { text: "bundle({" }
          ]
        },
        {
          indent: 8,
          tokens: [
            { text: "entry: " },
            { text: "'index.js'", className: "text-teal-400" },
            { text: "," }
          ]
        },
        {
          indent: 8,
          tokens: [{ text: "minify: true," }]
        },
        {
          indent: 4,
          tokens: [{ text: "});" }]
        },
        {
          indent: 4,
          tokens: [
            { text: "return ", className: "text-emerald-500" },
            { text: "out.code;" }
          ]
        },
        {
          tokens: [{ text: "}" }]
        }
      ],
      arch: {
        title: "// SYSTEM DATA STREAM",
        lines: [
          {
            tokens: [
              { text: "Workspace UI", className: "text-white font-bold" },
              { text: " ───► ", className: "text-zinc-800" },
              { text: "WebSocket sync", className: "text-emerald-400 font-bold" },
              { text: " ◄──► ", className: "text-zinc-800" },
              { text: "Peers", className: "text-white font-bold" }
            ]
          },
          {
            indent: 12,
            tokens: [{ text: "│ (Realtime synchrony)", className: "text-zinc-700" }]
          },
          {
            indent: 12,
            tokens: [{ text: "▼", className: "text-zinc-700" }]
          },
          {
            tokens: [
              { text: "WASM ESBuild", className: "text-emerald-400 font-bold" },
              { text: " ───► ", className: "text-zinc-800" },
              { text: "Framed Sandbox", className: "text-white font-bold" }
            ]
          }
        ],
      },
      metric: [
        { label: "Sync Latency", value: "< 8ms", isAccent: true },
        { label: "Compile Time", value: "14.2ms", isAccent: false },
        { label: "Concurrent Limit", value: "5,000 / node", isAccent: false },
        { label: "Lighthouse Perf", value: "98 / 100", isAccent: true },
      ],
    },
    footerMetrics: {
      left: "BUNDLER: ACTIVE",
      right: "LATENCY: 14.2ms",
    },
  },
  {
    id: "linkedin",
    fileName: "linkedin_feed_indexing.sql",
    fileExtension: "sql",
    fileExtensionColor: "text-amber-400",
    title: "LinkedIn Clone",
    description: "A full-stack network replication model built to evaluate feed distribution queries. Focuses on cache warming pipelines and relational indices to test fetch performance limits under simulated user structures.",
    architectureHighlights: [
      "PostgreSQL indexes reducing feed retrieval query times to 18ms.",
      "Redis cache warming strategies achieving a 96.8% key hit ratio.",
      "Concurrent client connection pipelines using Express socket listeners.",
    ],
    technologies: ["POSTGRESQL", "REDIS CACHE", "EXPRESS NODE", "REACT"],
    links: {
      source: "#",
      demo: "#",
    },
    headerStatus: {
      text: "SANDBOX_STAGING",
      isLive: false,
    },
    workspaceTitle: "DB_QUERY_ANALYZE",
    workspaceVersionOrCost: {
      label: "COST",
      value: "0.15",
    },
    workspaceTabs: [
      { id: "preview", label: "PREVIEW", extension: "sql", extensionColor: "text-amber-400" },
      { id: "impl", label: "CODE", extension: "sql", extensionColor: "text-amber-400" },
      { id: "arch", label: "ARCHITECTURE", extension: "sql", extensionColor: "text-amber-400" },
      { id: "metric", label: "METRIC", extension: "sql", extensionColor: "text-amber-400" },
    ],
    workspaceContent: {
      preview: {
        headerLeft: "FEED_COMPILER: ACTIVE",
        headerRight: "SANDBOX",
        headerRightColor: "text-amber-400",
        lines: ["[User Feed compilation trace]"],
        card: {
          name: "@Ayush Barman",
          bio: "Full Stack Developer With Design Engineering...",
          subText: "1h · postgres_indexing=enabled",
        },
        footerLeft: "INDEX_HITS: 96.8%",
        footerRight: "RECORDS: 1M",
      },
      impl: [
        {
          tokens: [{ text: "CREATE INDEX CONCURRENTLY", className: "text-rose-500" }]
        },
        {
          indent: 4,
          tokens: [{ text: "idx_posts_user_feed ON posts(" }]
        },
        {
          indent: 8,
          tokens: [{ text: "user_id," }]
        },
        {
          indent: 8,
          tokens: [
            { text: "created_at " },
            { text: "DESC", className: "text-rose-500" }
          ]
        },
        {
          indent: 4,
          tokens: [
            { text: ") " },
            { text: "WHERE ", className: "text-rose-500" },
            { text: "status = " },
            { text: "'active'", className: "text-teal-400" },
            { text: ";" }
          ]
        }
      ],
      arch: {
        title: "// SYSTEM DATA STREAM",
        lines: [
          {
            tokens: [
              { text: "React Client Feed", className: "text-white font-bold" },
              { text: " ───► ", className: "text-zinc-800" },
              { text: "Express Gateway", className: "text-emerald-400 font-bold" }
            ]
          },
          {
            indent: 14,
            tokens: [{ text: "│ (PostgreSQL query joins)", className: "text-zinc-700" }]
          },
          {
            indent: 14,
            tokens: [{ text: "▼", className: "text-zinc-700" }]
          },
          {
            tokens: [
              { text: "Redis Cache warming", className: "text-emerald-400 font-bold" },
              { text: " ◄───► ", className: "text-zinc-800" },
              { text: "Relational DB Node", className: "text-white font-bold" }
            ]
          }
        ],
      },
      metric: [
        { label: "Feed latency", value: "18ms", isAccent: true },
        { label: "Redis Hit Ratio", value: "96.8%", isAccent: false },
        { label: "DB Index load", value: "1,000,000 rows", isAccent: false },
        { label: "Explain cost", value: "0.15ms", isAccent: true },
      ],
    },
    footerMetrics: {
      left: "SCAN: INDEX_SCAN",
      right: "INDEX: idx_posts_user_feed",
    },
  },
];
