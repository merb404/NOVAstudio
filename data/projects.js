export const projects = [
  {
    slug: "arbor-finance",
    title: "Arbor",
    category: "Product Design · Fintech",
    year: "2026",
    palette: ["#CFFF5C", "#0F1320"],
    summary: "A personal finance app that turns spending data into a weekly conversation instead of a monthly panic.",
    overview:
      "Arbor's founders came to us with a working prototype and a problem: users opened the app once, felt overwhelmed by charts, and never came back. We were asked to redesign the core experience around a single question — what should I actually do this week — rather than a dashboard of everything at once.",
    challenge:
      "Financial data is dense by nature, and the existing app tried to show all of it at once. Onboarding took eleven screens, and fewer than a third of new users reached their first weekly summary.",
    solution:
      "We restructured the app around one weekly digest, moved detailed reporting behind a secondary tab, and rebuilt onboarding as three screens with a single decision each. Typography and colour were tuned so the one number that mattered on any given screen was always the largest thing on it.",
    tools: ["Figma", "React Native", "Framer Motion", "Lucide Icons"],
    results: [
      "Onboarding completion up from 34% to 78%",
      "Weekly active return rate roughly doubled in the first month",
      "Support tickets about \"where do I see my balance\" dropped to near zero",
    ],
  },
  {
    slug: "kindred-marketplace",
    title: "Kindred",
    category: "Web Development · Marketplace",
    year: "2025",
    palette: ["#FF6B4A", "#0F1320"],
    summary: "A marketplace connecting local makers with buyers in their own neighbourhood, built for weekend browsing.",
    overview:
      "Kindred wanted a marketplace that felt more like wandering a Saturday market than scrolling a warehouse catalogue. The brief called for a browsing-first experience, with search as a secondary path rather than the default entry point.",
    challenge:
      "Existing marketplace templates pushed every product into identical grid cells, which flattened the handmade, one-of-a-kind feeling the founders wanted buyers to associate with the brand.",
    solution:
      "We built a variable-width card system driven entirely by data, so a maker's featured piece could run large while smaller items sat in a denser row beside it — without a single hard-coded layout. Category pages were rebuilt as curated shelves rather than filtered lists.",
    tools: ["React", "Tailwind CSS", "React Router", "Framer Motion"],
    results: [
      "Average session length increased by 64%",
      "Maker sign-ups grew 3x in the quarter after launch",
      "Mobile checkout completion improved by 22 percentage points",
    ],
  },
  {
    slug: "loom-collective",
    title: "Loom Studio",
    category: "Brand Identity · Photography",
    year: "2025",
    palette: ["#F5F2EA", "#0F1320"],
    summary: "A portfolio site and visual identity for a five-person photography collective working across three cities.",
    overview:
      "Loom is five photographers who share a studio but shoot in very different styles — editorial, documentary, and product work. They needed one site that could hold all of it without sanding down what made each photographer's eye distinct.",
    challenge:
      "A single shared template risked making every photographer's work look the same. A fully custom page per photographer risked losing any sense of a shared studio.",
    solution:
      "We designed one flexible grid system with five configurable variables — image scale, spacing, caption placement, colour accent, and type weight — so each photographer could set their own defaults while staying inside the same structural grid.",
    tools: ["React", "Tailwind CSS", "Framer Motion", "Figma"],
    results: [
      "Studio-wide enquiry rate up 40% in the first two months",
      "Three of five photographers booked directly through the new contact flow",
      "Site now used as the studio's default portfolio in client pitches",
    ],
  },
  {
    slug: "northwind-robotics",
    title: "Northwind Robotics",
    category: "Product Design · Web Development",
    year: "2026",
    palette: ["#CFFF5C", "#161B2C"],
    summary: "A product site for an early-stage robotics startup explaining a genuinely technical product to a non-technical buyer.",
    overview:
      "Northwind builds warehouse automation hardware. Their previous site read like an engineering spec sheet, which was accurate but did nothing to help a warehouse operations manager understand what would change on their floor.",
    challenge:
      "The team's instinct was to lead with technical specification — payload capacity, battery cycle life, sensor arrays. Useful information, but not what convinces a buyer to book a demo.",
    solution:
      "We restructured the homepage around a single before-and-after moment on the warehouse floor, pushed specification into a dedicated technical page for buyers who wanted it, and used restrained motion to demonstrate the robot's path-planning rather than describe it in prose.",
    tools: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    results: [
      "Demo requests up 3.4x in the quarter after launch",
      "Average time on homepage increased from 40 seconds to 2 minutes 10 seconds",
      "Technical spec page became the second most-visited page, by buyer choice rather than default",
    ],
  },
];
