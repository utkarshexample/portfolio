/* ============================================================
   Content for utkarshexample.github.io/portfolio
   ------------------------------------------------------------
   Everything on the page renders from this one file.
   To add a role (e.g. Toyota): copy an entry in EXPERIENCE,
   fill in the fields, done. Entries with an empty `title`
   are hidden until you fill them in.
   ============================================================ */

const SITE = {
  name: "Utkarsh Aman",
  role: "Senior Software Engineer",
  location: "Kitchener, Ontario",
  timezone: "America/Toronto",
  email: "utkars.aman@icloud.com",
  github: "https://github.com/utkarshexample",

  hero: {
    eyebrow: "Utkarsh Aman — Senior Software Engineer",
    headline: "I like solving hard problems with software.",
    subline:
      "Senior engineer, currently at Toyota. Real-time systems, honest metrics, things I build for fun.",
    cta: { label: "Say hi on GitHub", href: "https://github.com/utkarshexample" },
  },

  metrics: [
    { value: "40%", label: "API latency cut", note: "Redux Saga → RTK Query migration" },
    { value: "71%", label: "enrollment lift", note: "Angular onboarding flow" },
    { value: "30%", label: "claims processing gain", note: "UiPath RPA team" },
    { value: "98%", label: "test coverage", note: "Jest, e-commerce platform" },
  ],

  experience: [
    // ← Toyota goes here when details are shared. Empty title = hidden.
    {
      company: "Toyota",
      title: "",
      location: "",
      period: "2026 — Present",
      points: [],
    },
    {
      company: "Invisible AI",
      title: "Senior Software Engineer",
      location: "San Francisco, California",
      period: "Jan 2025 – 2026",
      points: [
        "Real-time data pipelines with WebSockets and React ECharts for live dashboard analytics.",
        "Replay Booth UI for real-time 3D camera footage on AWS EC2.",
        "Migrated Redux Saga to RTK Query — 40% API latency cut.",
        "Canvas-based annotation tools for multi-user collaboration.",
        "Internationalization (i18n) across the charting UI.",
      ],
    },
    {
      company: "Co-operators",
      title: "Analyst Intern",
      location: "Kitchener, Ontario",
      period: "Jan 2024 – Apr 2024",
      points: [
        "Led RPA team building UiPath solutions — 30% increase in claims processing.",
        "Broke epics into user stories the team could actually ship.",
        "Wrote API docs and setup guides that cut redundant API calls.",
      ],
    },
    {
      company: "Deloitte US-India",
      title: "Senior Software Developer",
      location: "New Delhi, India",
      period: "May 2021 – Apr 2023",
      points: [
        "Customer onboarding flow and one-click sign-up dashboard in Angular — 71% enrollment lift.",
        "One-click auto-pay enrollment — 13% more auto-pay users.",
        "Upgraded front-end services to Angular 11 with local caching — 40% faster component loads.",
        "Payments and billing flow with Angular and iFrame.",
        "Prototyped on AWS Lambda before integrating into the main stack.",
        "Feature flags in .NET 6 across multiple Exelon brands.",
        "Led a team of 4 — scope, task distribution, delivery.",
      ],
    },
    {
      company: "Freelance / Early work",
      title: "Software Developer",
      location: "Hyderabad, Telangana",
      period: "Aug 2018 – May 2021",
      points: [
        "Migrated AngularJS to Angular 4 — 40% faster page loads.",
        "Owned product, listing, and checkout pages for an e-commerce site.",
        "Front-ends in React, Redux, and Angular; back-ends in .NET.",
        "98% Jest test coverage — Spot Awards for it.",
      ],
    },
  ],

  lab: [
    {
      name: "Pi-powered home assistant",
      status: "in progress",
      note: "Raspberry Pi 4 with camera, mic, and speaker — a JARVIS-style voice assistant for the apartment.",
    },
    {
      name: "Home Assistant + robot vacuum",
      status: "planned",
      note: "Roborock Q7 L5 wired into Home Assistant for automations.",
    },
  ],

  stack: [
    { group: "Frontend", items: ["React", "Angular", "TypeScript", "JavaScript"] },
    { group: "Backend", items: ["C#", ".NET", "ASP.NET Core"] },
    { group: "Data", items: ["SQL", "NoSQL"] },
    { group: "Cloud & Infra", items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"] },
    { group: "Tools", items: ["Git", "GitHub", "GitLab"] },
  ],

  about:
    "I'm a software developer who likes front-end engineering and the problems that come with real-time data. My background is in Computer Applications and Mobile Solution Development (Conestoga College, Waterloo). I've built e-commerce platforms, feature flag systems, and live analytics dashboards. I like work you can measure.",

  education: [
    {
      school: "Conestoga College",
      program: "Post-Graduate Diploma, Mobile Solution Development",
      location: "Waterloo, Canada",
      period: "2023 – 2024",
    },
    {
      school: "Guru Gobind Singh Indraprastha University",
      program: "Bachelor of Computer Application",
      location: "New Delhi, India",
      period: "2015 – 2018",
    },
  ],

  personal: {
    title: "Off the clock",
    lines: ["F1 — the only sport I follow.", "Sim racing on a Logitech G29, plus PS5.", "Probably debugging something."],
  },
};
