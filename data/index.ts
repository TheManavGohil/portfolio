export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Achievements", link: "#achievements" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client satisfaction and client collaboration. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "my Tech-Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Fullstack Modern Code Editor and Compiler",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MatchIQ - AI Candidate Matching Engine",
    des: "An Explainable AI-powered recruitment engine designed to scale to 100k+ candidates. Features semantic section matching, multi-facet scoring, and Groq LLaMA-generated evidence-backed match explanations with strengths and fit recommendations.",
    img: "/matchIQ.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/postgresql.svg",
      "/dock.svg",
    ],
    link: "https://docs.google.com/videos/d/18rbkdbpGqp9-R1yrElWckuPWuf0ez5T4zVk5D7A7JnA/edit?usp=sharing",
    linkText: "Watch Demo Video",
  },
  {
    id: 2,
    title: "ChromaGenz - AI Color Palette Platform",
    des: "AI-powered color scheme generator utilizing Groq LLaMA 3.3 70B and K-Means clustering. Generate harmonious, WCAG-accessible palettes from prompts, images, and URLs with live website previews and color blindness simulations.",
    img: "/chromagenz.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/fm.svg",
      "/re.svg",
    ],
    link: "https://chromagenz.vercel.app/",
    linkText: "View Live Site",
  },
  {
    id: 3,
    title: "ShipSack - Automated CI/CD & Cloud Deployer",
    des: "A Vercel-like cloud deployment PaaS. Automatically clones Git repositories, executes isolated containerized builds in Docker, uploads build artifacts to AWS S3, and routes traffic via dynamic subdomains with DynamoDB status tracking.",
    img: "/shipsack.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/dock.svg",
      "/node.png",
    ],
    link: "https://github.com/TheManavGohil/ShipSack",
    linkText: "View on GitHub",
  },
  {
    id: 4,
    title: "ArtVistas - 3D Immersive Virtual Museum",
    des: "A futuristic virtual museum and digital art gallery breaking physical and geographic barriers. Features interactive 3D exhibition hall navigation, story-driven artwork walkthroughs, and high-performance visual animations.",
    img: "/p10.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/three.svg",
      "/gsap.svg",
      "/vite.svg",
    ],
    link: "https://artvistas.vercel.app/",
    linkText: "Check Live Site",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Manav was an incredible experience. His technical expertise and problem-solving skills are exceptional. He consistently delivered high-quality code and was always responsive to feedback. His attention to detail and commitment to best practices made our project a success.",
    name: "Sarah Chen",
    title: "Lead Developer at TechInnovate",
  },
  {
    quote:
      "Manav's ability to translate complex requirements into elegant solutions is remarkable. His full-stack development skills and modern tech stack knowledge helped us build a robust application. His collaborative approach and clear communication made the development process smooth and efficient.",
    name: "David Kumar",
    title: "Product Manager at DigitalSolutions",
  },
  {
    quote:
      "Manav is a talented developer who brings creativity and technical excellence to every project. His expertise in React, Next.js, and Three.js helped us create an immersive user experience. His dedication to writing clean, maintainable code is truly impressive.",
    name: "Emily Rodriguez",
    title: "CTO at CreativeTech",
  },
  {
    quote:
      "Collaborating with Manav was a pleasure. His deep understanding of web technologies and ability to implement complex features with ease made him an invaluable team member. His portfolio projects showcase his versatility and technical prowess.",
    name: "Alex Thompson",
    title: "Senior Developer at WebCraft",
  },
  {
    quote:
      "Manav's portfolio demonstrates his strong foundation in both frontend and backend development. His projects like ArtVistas and KiranaMart showcase his ability to create sophisticated, user-friendly applications. His technical skills and problem-solving abilities are truly outstanding.",
    name: "Priya Sharma",
    title: "Technical Lead at InnovateLabs",
  },{
    quote:
      "Manav's proactive mindset and eagerness to learn made a huge difference in our development cycle. He quickly adapted to new tools and technologies and contributed valuable insights during team discussions. His strong work ethic and dedication are commendable.",
    name: "Rohan Mehta",
    title: "Engineering Manager at CodeCatalyst",
  },
  {
    quote:
      "Having Manav on the team meant consistently high-quality results. His UI/UX sensibility combined with his technical acumen helped us deliver a polished product that users loved. He strikes the perfect balance between creativity and precision.",
    name: "Anika Verma",
    title: "Design Lead at PixelForge",
  },
  {
    quote:
      "Manav impressed us with his ability to handle real-world challenges with confidence. Whether it was debugging a tough backend issue or optimizing the frontend performance, he always found efficient solutions. A true asset to any tech team.",
    name: "Jason Lee",
    title: "Full-Stack Architect at DevSphere",
  },
  
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "ThatsMyJob",
    roleType: "Full-Stack SDE",
    typeColor: "#38bdf8",
    duration: "Jul 2025 – Dec 2025",
    location: "Remote",
    period: "2025",
    isCurrent: false,
    desc: [
      "Independently developed a complete web platform from scratch featuring four distinct portals with robust access management, OAuth authentication, and Google Meet integration.",
      "Utilized Next.js, PostgreSQL, Cloudinary, and Vercel to build a scalable and production-ready platform.",
      "Integrated SaaSlogic for managing subscription lifecycles, billing, and automated tier provisioning seamlessly.",
      "Deployed the website live at marketplace.thatsmyjob.in and contributed to the ThatsMyJob Beta mobile application using React Native."
    ],
    skills: ["Next.js", "PostgreSQL", "Cloudinary", "Vercel", "OAuth", "SaaSlogic", "React Native"],
    thumbnail: "/thatsmyjob.png",
  },
  {
    id: 2,
    title: "Machine Learning Systems Intern",
    company: "RAI Tracker Ltd.",
    roleType: "ML Systems",
    typeColor: "#fb923c",
    duration: "Apr 2026 – Jun 2026",
    location: "Greater London, England, United Kingdom",
    period: "2026",
    isCurrent: false,
    desc: [
      "Developed an LLM evaluation pipeline to assess models across 12 Responsible AI dimensions, including reliability and accountability, using Azure OpenAI APIs for systematic testing.",
      "Built the operational backbone of a RAG chatbot by containerizing PostgreSQL, ChromaDB, Arize Phoenix, and Prometheus with Docker.",
      "Implemented Prometheus instrumentation and Grafana dashboards for pipeline latency, agent performance, token usage, retrieval metrics, and service health observability."
    ],
    skills: ["Azure OpenAI", "LangGraph", "ChromaDB", "Docker", "Prometheus", "Grafana", "RAG"],
    thumbnail: "/RAIT.png",
  },
  {
    id: 3,
    title: "DevOps Intern",
    company: "ARCON",
    roleType: "DevOps & Infrastructure",
    typeColor: "#c084fc",
    duration: "Jun 2026 – Present",
    location: "Mumbai · On-site",
    period: "2026",
    isCurrent: true,
    desc: [
      "Engineered a distributed Windows server & process monitoring suite to provide real-time visibility into process and resource health across the server fleet, collecting telemetry every 30s with TimescaleDB analytics, automated alerts, heap profiling, process controls, and WinRM self-healing.",
      "Engineered a Jenkins multi-environment build pipeline consolidating 48 individual pipelines (4 environments × 12 projects) into a single job, introducing parallel batched UI builds that reduced build time from 36 to 12 minutes (67% reduction).",
      "Developed a centralized database backup & restoration utility enabling developers to perform MySQL and MSSQL backup operations via a web interface, eliminating manual server access."
    ],
    skills: ["Jenkins", "TimescaleDB", "WinRM", "Docker", "PowerShell", "CI/CD Pipelines", "MySQL/MSSQL"],
    thumbnail: "/arcon.png",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Co-Founder & Tech Web-Dev Head",
    organization: "DJS CodeAI (AI Club of DJSCE)",
    period: "Jun 2025 – Jun 2026",
    badge: "Club Leadership & Founding",
    badgeColor: "from-purple-500 to-indigo-600",
    image: "/codeverse.png",
    description:
      "Co-founded DJS CodeAI, the official artificial intelligence club of Dwarkadas J. Sanghvi College of Engineering. Led and mentored a 10-member technical team, overseeing end-to-end web architecture, deployment, and digital initiatives.",
    highlights: [
      "Architected and deployed the official club platform (djscodeai.in) and mentor–mentee portal (portal.djscodeai.in) with end-to-end SEO optimization.",
      "Organized the flagship hackathon 'CodeVerse' (codeverse.djscodeai.in), managing 32 competing teams through multi-round challenges.",
      "Engineered a Bug-Solving Marathon for 12 shortlisted teams across 12 private repos, with GitHub webhooks, real-time leaderboards, and an LLM-powered commit verifier."
    ],
    tags: ["Leadership", "Next.js", "System Architecture", "Webhooks", "LLM Verifier", "Community"],
    link: "https://codeverse.djscodeai.in",
    linkText: "Visit CodeVerse",
    category: "Leadership",
  },
  {
    id: 2,
    title: "2nd Runner-Up — Codeshastra 12",
    organization: "Dwarkadas J. Sanghvi College of Engineering",
    period: "Apr 2025",
    badge: "🏆 2nd Runner-Up Hackathon",
    badgeColor: "from-amber-400 to-orange-500",
    image: "/codeshastra.png",
    description:
      "Secured 2nd Runner-Up with Team Bazinga! at Codeshastra 12 by engineering 'PujaVerify' — an offline-first trust and verification platform connecting pandits and devotees with transparent digital visibility.",
    highlights: [
      "Offline-first architecture built for real temple environments with low or unstable connectivity.",
      "In-app recording and live streaming for complete ritual transparency, backed by smart background synchronization.",
      "AI-driven ritual verification for authenticity, paired with a multi-language voice assistant for pandits.",
      "Adapted under high pressure after a pre-hackathon storage failure forced a complete fresh Ubuntu setup on day one."
    ],
    tags: ["AI Verification", "Offline-First", "Live Streaming", "Voice Assistant", "Full-Stack"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7453406675102744577/",
    linkText: "View LinkedIn Post",
    category: "Hackathon Win",
  },
  {
    id: 3,
    title: "2nd Runner-Up — Frontend Arena",
    organization: "Rajiv Gandhi Institute of Technology (RGIT)",
    period: "2025",
    badge: "🏆 2nd Runner-Up Hackathon",
    badgeColor: "from-fuchsia-500 to-purple-600",
    image: "/p10.png",
    description:
      "Secured 2nd Runner-Up with Team Lazarus at RGIT's Frontend Arena by building 'ArtVistas' — a futuristic, immersive virtual museum and digital art gallery.",
    highlights: [
      "Interactive 3D virtual museum navigation allowing users to explore exhibition halls as if physically present.",
      "Rich story-driven artwork walkthroughs, curated historical collections (e.g. 'The Rise of Rome'), and audio guides.",
      "Enhanced accessibility features breaking geographic barriers for art lovers and individuals with physical disabilities.",
      "High-performance visual animations crafted using React, Three.js, GSAP, and Framer Motion."
    ],
    tags: ["Three.js", "3D Virtual Tour", "GSAP", "Framer Motion", "React", "Tailwind CSS"],
    link: "https://artvistas.vercel.app/",
    linkText: "Explore ArtVistas Live",
    category: "Hackathon Win",
  },
  {
    id: 4,
    title: "Top 5 Track Finalists — HACKANOVA 2025",
    organization: "Thakur College of Engineering",
    period: "2025",
    badge: "🌟 Top 5 Finalist (350+ Teams)",
    badgeColor: "from-cyan-400 to-blue-600",
    image: "/hackanova.png",
    description:
      "Emerged as Top 5 in our track and overall Finalists among 350+ teams in a grueling 36-hour hackathon, creating an AI-powered Indian Sign Language (ISL) detection and accessibility platform.",
    highlights: [
      "Real-time Hindi and English alphabet/word sign language recognition for inclusive communication.",
      "Custom sign language training engine allowing users to record and train custom gestures on the fly.",
      "Interactive gamified learning modules designed to make sign language learning intuitive and engaging.",
      "End-to-end computer vision and web pipeline evaluated by industry jury for real-world assistive impact."
    ],
    tags: ["Computer Vision", "Indian Sign Language", "Accessibility", "AI/ML", "Interactive Gaming"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7303756743065399298/",
    linkText: "View LinkedIn Post",
    category: "Hackathon Finalist",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/TheManavGohil",
  },
  {
    id: 2,
    img: "/leetcode.svg",
    link: "https://leetcode.com/u/ManavGohil/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/manavgohil?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];
