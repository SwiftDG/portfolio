export const projectFilters = [
  "All",
  "Software",
  "AI / ML",
  "Engineering",
  "Hackathons",
];

export const projects = [
  {
    slug: "swift",
    name: "Swift",
    category: "Education platform",
    filters: ["Software", "AI / ML"],
    year: "2026",
    role: "Owner · full-stack developer",
    summary:
      "An academic platform for UNILAG engineering students combining structured course materials, testing and AI-assisted question generation.",
    contribution:
      "Independently rebuilt and maintain the platform across the frontend, authentication, database, course-material workflow, quiz system and AI-assisted question-generation backend.",
    evidence: "Several students",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase", "FastAPI"],
    live: "https://swift-md.vercel.app/",
    source: "https://github.com/SwiftDG/SWIFT-MD",
  },
  {
    slug: "crxray",
    name: "CrxRay",
    category: "Developer tooling",
    filters: ["Software", "AI / ML", "Hackathons"],
    year: "2026",
    role: "Hackathon project",
    summary:
      "A developer-focused project built for the Tech Literacy Network Hackathon, designed around making technical systems easier to inspect and understand.",
    contribution:
      "Worked on the product as part of the hackathon team, including implementation and preparation of the working demo and submission.",
    evidence: "TLN Hackathon 2026",
    stack: ["Web development", "Applied AI"],
    live: null,
    source: null,
  },
  {
    slug: "vouch",
    name: "Vouch",
    category: "Financial reputation",
    filters: ["Software", "Hackathons"],
    year: "2026",
    role: "Frontend engineer · hackathon team",
    summary:
      "A portable trust profile for informal businesses that turns transaction behaviour into a clearer financial-reputation signal.",
    contribution:
      "Built the trader-facing interface, including the dashboard, score visualisation, tier progression and live server-sent-event updates. I did not build the scoring model or the entire product.",
    evidence: "63rd of 1,600 · Squad Hackathon 3.0",
    stack: ["React", "TypeScript", "Supabase", "SSE"],
    live: "https://vouchsignal.vercel.app/",
    source: "https://github.com/SwiftDG/vouch-signal",
  },
  {
    slug: "urban-brand-creatives",
    name: "Urban Brand Creatives",
    category: "Business website",
    filters: ["Software"],
    year: "2026",
    role: "Web developer",
    summary:
      "A client-facing website for a Nigerian creative agency, designed to communicate its services, work and route prospective clients toward inquiries.",
    contribution:
      "Built the production web experience and supporting lead-generation workflow.",
    evidence: "Client-facing production build",
    stack: ["React", "Next.js", "TypeScript"],
    live: "https://urban-brand-creatives.vercel.app/",
    source: "https://github.com/SwiftDG/urban-brand-creatives",
  },
  {
    slug: "resonance",
    name: "Resonance",
    category: "AI product intelligence",
    filters: ["Software", "AI / ML", "Hackathons"],
    year: "2026",
    role: "Frontend engineer · four-person team",
    summary:
      "A two-agent product-intelligence system for product rating and audience segmentation.",
    contribution:
      "Built the frontend interface and implemented Firebase Authentication and Firestore persistence for the team product.",
    evidence: "Authentication + persistence",
    stack: ["React", "Vite", "Firebase", "FastAPI", "Groq"],
    live: "https://project-resonance.vercel.app",
    source: null,
  },
  {
    slug: "nexstore",
    name: "NexStore",
    category: "Storefront frontend",
    filters: ["Software"],
    year: "2026",
    role: "Frontend developer · solo project",
    summary:
      "A responsive storefront demo with searchable products, category filters and a persistent sample bag.",
    contribution:
      "Built the storefront interface and its browsing and bag interactions. The catalogue is sample content, with no real orders or payments.",
    evidence: "Responsive multi-page demo",
    stack: ["React", "Vite", "CSS"],
    live: "https://itsnexstore.vercel.app/",
    source: "https://github.com/SwiftDG/nexstore-ui",
  },
  {
    slug: "pepper-table",
    name: "Pepper Table",
    category: "Restaurant website concept",
    filters: ["Software"],
    year: "2026",
    role: "Frontend developer · solo project",
    summary:
      "A responsive restaurant website concept with a sample Nigerian menu, dish search and category filters.",
    contribution:
      "Built the multi-page frontend and menu interactions. This is a concept, not an operating restaurant or ordering service.",
    evidence: "Multi-page static frontend",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://pepper-table-site.vercel.app/",
    source: "https://github.com/SwiftDG/pepper-table-site",
  },
  {
    slug: "commonwell-church",
    name: "Commonwell Church",
    category: "Church website concept",
    filters: ["Software"],
    year: "2026",
    role: "Frontend developer · solo project",
    summary:
      "A four-page website concept for an imagined church community, with first-visit information and filtered community pathways.",
    contribution:
      "Built the responsive pages and interactive details using plain HTML, CSS and JavaScript. The congregation and programme information are illustrative.",
    evidence: "Four-page static frontend",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://commonwell-church.vercel.app/",
    source: "https://github.com/SwiftDG/commonwell-church",
  },
  {
    slug: "graphsense",
    name: "GraphSense",
    category: "Engineering visualisation",
    filters: ["Engineering", "Hackathons"],
    year: "2026",
    role: "Team Sync · MATLAB project",
    summary:
      "An engineering and mathematical visualisation project developed during a UNILAG MathWorks bootcamp.",
    contribution:
      "Worked with Team Sync on the MATLAB-based solution and its presentation.",
    evidence: "1st place · UNILAG MathWorks bootcamp",
    stack: ["MATLAB", "Engineering analysis", "Visualisation"],
    live: null,
    source: null,
  },
  {
    slug: "fraud-detection",
    name: "Fraud Detection",
    category: "Applied machine learning",
    filters: ["AI / ML"],
    year: "2026",
    role: "ML engineer · ECX project",
    summary:
      "A comparative machine-learning study for detecting fraudulent card transactions in a highly imbalanced dataset.",
    contribution:
      "Engineered features, applied SMOTE, compared classification models and evaluated performance on a separate test set.",
    evidence: "568K transactions · 99.97% recall",
    stack: ["Python", "pandas", "scikit-learn", "XGBoost", "SMOTE"],
    live: null,
    source: "https://github.com/SwiftDG/credit-card-fraud-detection",
  },
  {
    slug: "klova",
    name: "Klova",
    category: "Process engineering",
    filters: ["Engineering", "Hackathons"],
    year: "2026",
    role: "Team CHG · PIDEC 1.0",
    summary:
      "A chemical-engineering competition project developed through multiple technical assessment stages for PIDEC 1.0.",
    contribution:
      "Worked as part of Team CHG on the engineering solution and competition deliverables.",
    evidence: "90.5/100 Stage 1 · 4th of 10 national finalists",
    stack: ["Chemical engineering", "Process analysis", "Technical presentation"],
    live: null,
    source: null,
  },
];
