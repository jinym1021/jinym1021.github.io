// Single source of truth for everything shown on the site.
// Keep in sync with the resume (Resume_update_20260930_PoC.docx).
// `en` is the full dataset; `ko` (below) only overrides text and is deep-merged onto it.

const en = {
  profile: {
    name: "Jin Y. Moon",
    koreanName: "문예진",
    role: "AI Engineer",
    org: "Samsung Finance AI Center",
    location: "Seoul, Korea",
    email: "jinym1021@gmail.com",
    linkedin: "https://www.linkedin.com/in/yjmoon",
    github: "https://github.com/jinym1021",
    resume: "assets/Resume_JinYMoon.pdf",
    headline: "I make AI agents safe to ship inside a regulated company.",
    lede:
      "AI engineer at the Samsung Finance AI Center. I build agent platforms, RAG systems and LLM evaluation data for Samsung Life, Fire, Card and Securities — and I started as the data engineer who kept the pipelines running.",
  },

  // Headline numbers used on the home page ledger.
  ledger: [
    { value: "44", unit: "skills", label: "curated from ~700 public agent skills for the group skill hub" },
    { value: "27/49", unit: "passed", label: "skills cleared automated security & quality validation" },
    { value: "1,000+", unit: "records", label: "insurance disputes used to benchmark 3 RAG-agent architectures" },
    { value: "530+", unit: "books", label: "finance books structured into LLM training & evaluation data" },
  ],

  focus: [
    {
      no: "01",
      title: "Agent platforms & governance",
      body: "Skill hubs, architecture PoCs and the review process that lets agents reach production in finance.",
    },
    {
      no: "02",
      title: "LLM data & evaluation",
      body: "Domain training data and evaluation frameworks that can be read by skill and by business line, not one score.",
    },
    {
      no: "03",
      title: "Data engineering roots",
      body: "Two years running DW-to-Hadoop pipelines, Kafka/NiFi platforms and a production RAG QA service.",
    },
  ],

  principles: [
    {
      title: "The hard part is rarely the model",
      body: "Most failures I've seen live in the data, the evaluation or the operating environment. I start there.",
    },
    {
      title: "Measure before you choose",
      body: "Platform decisions get made on benchmarks with fixed conditions — same model, same data, same metrics.",
    },
    {
      title: "Governance is a product",
      body: "Security review, certification and rollout are features. If they're painful, people route around them.",
    },
  ],

  hobbies: [
    {
      icon: "camera",
      tint: "peach",
      title: "Photography",
      body: "A camera comes on every trip. Framing a shot makes me slow down and actually look at a place.",
      // Web copies live in assets/img/life/web/ (resized, EXIF/GPS stripped).
      cover: { src: "assets/img/life/web/dscf1555.jpg", alt: "Red sculpture reflected in a pool" },
      photos: [
        { src: "assets/img/life/web/dscf1548.jpg", alt: "Concrete walls framing a slice of sky" },
        { src: "assets/img/life/web/dscf2248.jpg", alt: "Paddleboards on a mountain lake" },
        { src: "assets/img/life/web/dscf1648.jpg", alt: "Pink dusk sky over a hillside" },
        { src: "assets/img/life/web/dscf1944.jpg", alt: "Castle above cherry blossoms" },
        { src: "assets/img/life/web/dscf2564.jpg", alt: "Stone steps down to a sunlit sea" },
        { src: "assets/img/life/web/dscf1678.jpg", alt: "Skylit atrium with people walking below" },
      ],
    },
    {
      icon: "dive",
      tint: "sky",
      title: "Scuba diving",
      body: "Underwater there are no notifications and nothing to optimise — just breathing, buoyancy and whatever swims past.",
      cover: { src: "assets/img/life/web/img_2597.jpg", alt: "Diving beside a sea turtle" },
      photos: [],
    },
  ],

  // How Claude and ChatGPT described me from past conversations.
  aiViews: [
    {
      who: "Claude",
      tint: "periwinkle",
      swatch: "#1f2a5a",
      traits: [["Colour", "Navy"], ["Animal", "Fox"], ["Season", "Autumn"]],
      quote: "Goal-driven and strategic. Wants numbers, sources and names exactly right, and pushes back on answers that are wrong or overly cautious. Short, direct, no decoration.",
      strength: "Thoroughness and follow-through",
      watch: "High standards can tip into perfectionism",
    },
    {
      who: "ChatGPT",
      tint: "butter",
      swatch: "#f2c230",
      traits: [["Colour", "Yellow"], ["Animal", "Fox"], ["Season", "Spring"], ["Flower", "Freesia"], ["Drink", "Lemonade"]],
      quote: "Bright on the surface, firm at the root. An explorer-type leader: digs until something makes sense, then sets the direction.",
      strength: "Clarity — telling what’s wanted from what isn’t",
      watch: "Keeps finding gaps even when the work is already good",
    },
  ],

  experience: [
    {
      org: "Samsung Finance AI Center",
      note: "Seconded from Samsung Securities · based at Samsung Life · working across Life, Fire, Card and Securities",
      role: "AI Engineer",
      location: "Seoul",
      start: "2025.01",
      end: "Present",
      groups: [
        {
          heading: "AI Platform PoC Lead",
          year: "2026 H2 – now",
          bullets: [
            "Lead PoCs for the AI platforms usable on the group's Internal Business Network: M365 Copilot from pre-adoption PoC through post-adoption support (2026.07–09), and FabriX (Samsung SDS's in-house AI platform) across its 1.7 and 2.0 updates",
            "Scoped M365 license tiers (E3/E5) and features before 4 affiliates confirmed adoption, including the security features regulators expect as audit evidence; tested Work IQ early and wrote setup guides",
            "Set up a working council across 4 affiliates to share how each handles policy and find issues to tackle jointly; after adoption, interviewed owners and power users and escalated common issues to Microsoft",
            "Tested FabriX 1.7 usability and new features (including MCP integration with Confluence) and projected 2.0 features from the vendor briefing; reported, then benchmarked it against affiliates' own AI platforms (GenOS, AWS) with capabilities scored",
            "Co-produce A.TechFlow, the internal monthly AI technology newsletter, in a team of 3: planning, editing and writing (#10–#13, 2026.06–)",
          ],
        },
        {
          heading: "AI Agent Platform & Skill Hub",
          year: "2026 H1",
          bullets: [
            "Built an enterprise skill hub for AI agents (catalog, recommender, audit pipeline); curated 44 skills from ~700 public skills via weighted scoring, AI review and human review",
            "Automated skill validation (security, quality, auto-upgrade, platform tests): 27 of 49 skills passed; reported to the Center Head, shaping certified-skill governance and group-wide rollout",
            "Benchmarked 3 RAG-agent architectures (Databricks, Databricks + MS Foundry, Foundry) on 1,000+ insurance dispute records for accuracy, latency and cost",
            "Teach AI to every Samsung Securities new-hire cohort, ongoing since 2024 H2 (4 cohorts so far), and to administrative support staff (Dec 2025)",
          ],
        },
        {
          heading: "LLM Training & Evaluation Data",
          year: "2025",
          bullets: [
            "Converted 530+ finance books into structured JSON with metadata, QA pairs and quality checks",
            "Built a multidimensional evaluation taxonomy with MCQ, short-answer, similarity and LLM-judge scoring",
            "Automated dataset versioning, prompt/answer audits and reproducible scoring",
          ],
        },
      ],
    },
    {
      org: "Samsung Securities",
      role: "Data Engineer",
      location: "Seoul",
      start: "2023.01",
      end: "2024.12",
      groups: [
        {
          bullets: [
            "Operated DW-to-Hadoop pipelines, tuned Hive/Impala partitioning, and managed CDSW, NiFi and Kafka",
            "Executed production validation for a real-time top-traded stocks ranking service",
            "Operated an internal RAG-based LLM QA service (300+ daily transactions, 130+ users)",
            "Co-led onboarding for 37 new hires (Jan–Feb 2024)",
          ],
        },
      ],
    },
    {
      org: "Samsung Securities",
      role: "Data Engineering Intern",
      location: "Seoul",
      start: "2022.07",
      end: "2022.12",
      groups: [
        {
          bullets: [
            "Automated DB anomaly reporting; built a financial word dictionary raising stemmer accuracy from 10% to 42%",
          ],
        },
      ],
    },
  ],

  education: [
    {
      school: "Sogang University",
      detail: "B.E. in Data Science · B.A. in Economics (Financial Economics) · Graduated Cum Laude",
      location: "Seoul",
      period: "2017.03 – 2022.08",
    },
    {
      school: "University of San Francisco",
      detail: "Exchange Student",
      location: "San Francisco, CA",
      period: "2020.01 – 2020.05",
    },
  ],

  activities: [
    {
      org: "BOAZ (Bigdata Union Club)",
      role: "President",
      period: "2021.01 – 2022.01",
      detail: "Led weekly data engineering sessions for 51 members (ML to Kafka & Spark); reviewed 11 NLP papers",
    },
  ],

  writing: {
    name: "A.TechFlow",
    blurb: "Internal monthly AI technology newsletter, made by a team of three. I’ve co-planned, edited and written it since #10.",
    issues: [
      { no: "#13", date: "2026.09", title: "How far has AI come, and what can we call intelligence?", summary: "After the AGI claims: how the bar for intelligence is shifting, and what organisations should prepare for." },
      { no: "#12", date: "2026.08", title: "Loop engineering and graph engineering", summary: "Two ways to hand AI a whole task instead of steering it turn by turn — and when to use which." },
      { no: "#11", date: "2026.07", title: "Has development really got faster with AI?", summary: "Why coding sped up but delivery didn’t, and how AI-DLC (process) and BMAD (roles) close the gap." },
      { no: "#10", date: "2026.06", title: "Agentic AI security: making it a power we can control", summary: "Whose identity an agent acts under, which tools it may use, where it must stop, and what record it leaves." },
    ],
  },

  teaching: [
    { date: "2024 H2 –", title: "AI lectures for every new-hire cohort, Samsung Securities", detail: "2024 H2 · 2025 H1 · 2025 H2 · 2026 H1 cohorts" },
    { date: "2025.12", title: "AI training for administrative support staff" },
    { date: "2024.01–02", title: "Co-led onboarding for 37 new hires" },
  ],

  skills: [
    { label: "Core", items: ["Python — Advanced", "MySQL — Advanced", "Linux — Intermediate", "Docker — Intermediate"] },
    { label: "AI & LLM", items: ["RAG / Agentic RAG", "LLM evaluation", "Agent skills (SKILL.md)", "MCP", "Hybrid search", "PII masking (NER)"] },
    { label: "Platforms", items: ["Databricks", "Azure AI Foundry", "M365 Copilot", "Hadoop · Hive · Impala", "Kafka · NiFi", "Cloudera CDSW"] },
    { label: "Web", items: ["FastAPI", "React", "Next.js", "PostgreSQL", "Docker Compose"] },
    { label: "Languages", items: ["Korean — Native", "English — Intermediate"] },
  ],

  projects: [
    {
      id: "fabrix-poc",
      tint: "rose",
      visual: "fabrix",
      no: "P-01",
      title: "FabriX Platform PoC",
      subtitle: "What the group's own AI platform can do on the Internal Business Network",
      category: "work",
      org: "Samsung Finance AI Center",
      period: "2026.08 – Present",
      ongoing: true,
      role: "PoC lead — hands-on testing, feature analysis, benchmarking, reporting",
      featured: true,
      summary:
        "Testing FabriX, the Samsung SDS AI platform the group runs on its Internal Business Network, through its 1.7 and 2.0 updates, and scoring it against the AI platforms affiliates run on their own (GenOS and AWS).",
      problem:
        "FabriX had been in use since 2024 and was moving through a 1.7 update toward 2.0. Affiliates also ran AI platforms of their own, and nobody had one picture of what FabriX could actually do inside a financial network or where it overlapped with what they already had.",
      approach:
        "Test 1.7 hands-on, project 2.0 from the vendor briefing, map every capability against the constraints of a regulated network, and score FabriX against GenOS and AWS.",
      metrics: [
        { value: "1.7", label: "tested hands-on" },
        { value: "2.0", label: "features projected ahead of release" },
        { value: "2", label: "affiliate platforms benchmarked (GenOS, AWS)" },
      ],
      stack: ["FabriX", "GenOS", "AWS", "MCP", "Confluence"],
      links: [],
      sections: [
        {
          heading: "FabriX 1.7 testing",
          bullets: [
            "Tested 1.7 usability and new features, including an MCP connection from the FabriX portal to Confluence",
            "Flagged gaps specific to financial closed networks: package access for builds, external model access, and overlap with platforms affiliates already run",
          ],
        },
        {
          heading: "FabriX 2.0 analysis",
          bullets: [
            "Projected 2.0 capabilities from the vendor briefing: prompt / workflow / ADK agent builders, marketplace and agent directory, model gateway, user-permission pass-through and governance",
            "Next: review the 2.0 upgrade hands-on once it ships",
          ],
        },
        {
          heading: "Output",
          bullets: [
            "Report on 1.7 testing and the expected 2.0 features",
            "Benchmark of FabriX against the AI platforms affiliates run on their own (GenOS, AWS), with capabilities scored",
          ],
        },
      ],
    },
    {
      id: "m365-adoption",
      tint: "mint",
      visual: "m365",
      no: "P-02",
      title: "M365 Copilot Adoption & Support",
      subtitle: "From pre-adoption PoC to post-adoption support across four affiliates",
      category: "work",
      org: "Samsung Finance AI Center",
      period: "2026.07 – 2026.09",
      role: "PoC lead — license and feature scoping, testing, guides, council, adoption support",
      featured: true,
      summary:
        "Scoped and tested M365 Copilot before four financial affiliates committed to it, then supported them after adoption through interviews and a joint working council.",
      problem:
        "Relaxed SaaS rules made M365 Copilot usable on financial firms' Internal Business Network, and four affiliates were weighing adoption without a clear view of licenses, features or how the others were handling policy.",
      approach:
        "Get ahead of the adoption decision: scope licenses and features, test them hands-on and write guides, then bring the four affiliates to one table to share policy and tackle common issues, before adoption and after.",
      metrics: [
        { value: "4", label: "affiliates in the joint working council" },
        { value: "E3/E5", label: "license tiers mapped to audit needs" },
        { value: "2", label: "phases: pre-adoption PoC, post-adoption support" },
      ],
      stack: ["M365 Copilot", "Work IQ", "Copilot Studio", "SharePoint", "Microsoft Purview"],
      links: [],
      sections: [
        {
          heading: "Pre-adoption PoC",
          bullets: [
            "Scoped license tiers and features before Life, Fire, Card and Securities confirmed adoption",
            "Mapped E3 vs E5 security features (DLP, log retention) to what regulators expect as audit evidence",
            "Tested Work IQ and other features early and turned the results into setup guides for employees",
            "Set up a working council across the four affiliates to share how each handles policy and find issues to tackle jointly",
          ],
        },
        {
          heading: "Post-adoption support",
          bullets: [
            "Interviewed M365 owners at each affiliate on usage scope, open issues and support needs",
            "Interviewed power users on which apps they use, how work changed and where Copilot still falls short",
            "Used the council to share issues across affiliates and escalate common ones to Microsoft",
          ],
        },
        {
          heading: "Output",
          bullets: [
            "Work IQ onboarding guide for employees",
            "A skill-sharing framework for M365 Copilot on SharePoint, carried over from the Skill Hub",
          ],
        },
      ],
    },
    {
      id: "workiq-guide",
      no: "P-03",
      tint: "sky",
      visual: "image",
      image: { src: "assets/img/workiq-setup-guide.jpg", alt: "Work IQ setup guide: four steps, twelve items, about 30 minutes" },
      galleryNote: "Pages from the three guides (in Korean). Screenshots of the tenant itself are left out.",
      gallery: [
        { src: "assets/img/workiq-setup-guide.jpg", caption: "Setup guide — four steps, twelve items, a progress checklist" },
        { src: "assets/img/workiq-setup-step.jpg", caption: "Each item: lead time, how to do it, and how to check it worked" },
        { src: "assets/img/workiq-architecture.jpg", caption: "Concept guide — Work IQ in five layers, Data · Memory · Inference at the core" },
        { src: "assets/img/workiq-lead-times.jpg", caption: "Reference — measured lead times for 14 kinds of change" },
        { src: "assets/img/workiq-poc-results.jpg", caption: "Reference — PoC test results and what they mean for the guide" },
      ],
      title: "Work IQ Onboarding Guide",
      subtitle: "Getting M365 Copilot to actually find your work",
      category: "work",
      org: "Samsung Finance AI Center",
      period: "2026.08 – 2026.09",
      role: "Ran the PoC and wrote the three-part guide",
      summary:
        "A three-part guide (concept, setup, reference) that explains Microsoft Work IQ and what employees need to set up so Copilot answers from their own work data, backed by measured lead times.",
      problem:
        "The most common Copilot question was “I saved it, so why can’t it find it?” Nobody knew how long profile, OneDrive or SharePoint changes took to reach Copilot, or which file habits helped.",
      approach:
        "I measured it. A PoC on Samsung Life’s M365 tenant timed how quickly each change showed up in Copilot Chat, and the results became a checklist-style setup guide and a set of team file rules.",
      metrics: [
        { value: "14", label: "lead times measured" },
        { value: "12", label: "file management rules" },
        { value: "~30 min", label: "first-time setup, no admin rights" },
      ],
      stack: ["M365 Copilot", "Work IQ", "SharePoint", "OneDrive", "HTML"],
      links: [],
      sections: [
        {
          heading: "Concept",
          bullets: [
            "Work IQ explained as three layers (Data, Memory, Inference), plus the API surface and governance around them",
            "Where it sits next to Fabric IQ, Foundry IQ and Web IQ",
          ],
        },
        {
          heading: "Setup guide",
          bullets: [
            "4 steps, 12 items: settings, profile, OneDrive, SharePoint; each with lead time, why it matters and how to check",
            "Built-in progress checklist, so people can work through it on their own",
          ],
        },
        {
          heading: "Reference",
          bullets: [
            "Lead-time cheat sheet: e.g. new OneNote pages searchable in ~2 minutes, new SharePoint documents visible to colleagues the next day",
            "File rules written to be pasted straight into a team notice",
            "6 PoC tests run between 2026.08.27 and 09.04",
          ],
        },
      ],
    },
    {
      id: "skill-hub",
      tint: "lilac",
      visual: "image",
      galleryNote: "Captured from a local offline build of the web UI; the AI-review stage is not shown.",
      image: { src: "assets/img/skillhub-browse.jpg", alt: "Skill Marketplace: team skill library with category filters" },
      gallery: [
        { src: "assets/img/skillhub-browse.jpg", caption: "Skill library — the active catalog by team and category" },
        { src: "assets/img/skillhub-detail.jpg", caption: "Skill detail — version, path, validation status and the rendered SKILL.md" },
        { src: "assets/img/skillhub-validate.jpg", caption: "Upload & validate — SkillSpector static analysis and the 100-point quantitative score on a weak sample skill" },
      ],
      no: "P-04",
      title: "Agent Skill Hub",
      subtitle: "A validated skill marketplace for the group's AI agents",
      category: "work",
      org: "Samsung Finance AI Center",
      period: "2026.04 – 2026.07",
      role: "Owner — catalog, validation MCP server, web UI, recommender, CI",
      featured: true,
      summary:
        "A curated skill catalog plus the service that guards it: upload a SKILL.md, get a three-stage validation, auto-upgrade what fails, and open a merge request — then install skills straight from Claude Code.",
      problem:
        "Public agent skills passed 10,000 with no shared bar for quality, security or fit to financial work. Every team was either re-reviewing the same skills or installing them unreviewed.",
      approach:
        "Curate a small, relevant set; make validation a tool anyone can call; and publish only what passes, through the same Git review flow engineers already use.",
      metrics: [
        { value: "44", label: "curated from ~700 public skills" },
        { value: "27 / 49", label: "passed automated validation" },
        { value: "28", label: "active skills in 7 categories today" },
        { value: "184", label: "commits of 223 across both repos" },
      ],
      stack: ["FastMCP", "FastAPI", "React", "SkillSpector", "GitLab API", "Claude Code plugins", "LiteLLM", "Docker Compose", "nginx"],
      links: [],
      sections: [
        {
          heading: "Validation service",
          bullets: [
            "FastMCP server with four tools — validate_skill, validate_skill_archive, upgrade_skill, submit_skill — behind a FastAPI web proxy and nginx",
            "Three stages run in parallel: SkillSpector static analysis for prompt injection, data exfiltration and risky code; a 100-point quantitative score (frontmatter, description, body, structure, portability, reviewability); and an AI review by Claude, Codex and Gemini",
            "Zip uploads let the scorer see references/, scripts/ and assets/, not just SKILL.md",
            "Failed skills are auto-upgraded and re-validated instead of discarded: 18 passed first, 9 more after upgrade",
          ],
        },
        {
          heading: "Publishing",
          bullets: [
            "submit_skill re-validates, then opens a GitLab merge request as the submitting user; non-PASS skills can be forced through with a [FORCE] tag and the reason attached",
            "Every call is written to a JSONL audit log with the verdict, stage timings and content hash",
          ],
        },
        {
          heading: "Catalog & install",
          bullets: [
            "Curation: 8-axis weighted scoring (job relevance, required-skill match, finance domain, completeness, security, source credibility, generality, dedup), AI review, then human review",
            "Each skill is exposed as a Claude Code plugin; marketplace.json is generated from SKILL.md frontmatter and kept in sync by CI after merge",
            "Recommender: a 4–8 turn chat about the user's role, keyword search to the top 30, then an LLM picks 10–15 skills to install",
          ],
        },
        {
          heading: "Outcome",
          bullets: [
            "Reported to the Center Head, setting the direction for certified-skill governance and a security-review agreement across affiliates",
            "Extended into a skill-sharing framework for M365 Copilot on SharePoint",
          ],
        },
      ],
    },
    {
      id: "agent-architecture-poc",
      tint: "periwinkle",
      visual: "arch",
      no: "P-05",
      title: "Cloud Agent Architecture PoC",
      subtitle: "Databricks vs. Microsoft Foundry for RAG agents",
      category: "work",
      org: "Samsung Finance AI Center",
      period: "2026.02 – 2026.03",
      role: "Built all three variants and the comparison framework",
      featured: true,
      summary:
        "The same RAG agent built three ways over insurance dispute data, to inform where the group's agents should live relative to its data platform.",
      problem:
        "Should agents run next to the data (Databricks), on the model platform (Foundry), or split across both? Each option had advocates and no shared numbers.",
      approach:
        "I fixed the model, embeddings, reranker and search strategy, then built the agent three times and defined how to compare them on quality, operations and cost.",
      metrics: [
        { value: "3", label: "architectures compared" },
        { value: "1,047", label: "case-law & dispute records" },
        { value: "1 vs 2", label: "days to build (Databricks vs Foundry)" },
      ],
      stack: ["Databricks", "Mosaic AI Agent Framework", "Azure AI Foundry", "Azure AI Search", "GPT-4.1", "text-embedding-3-large"],
      links: [],
      sections: [
        {
          heading: "Setup",
          bullets: [
            "Data: 360 insurance case-law records and 687 FSS dispute cases, plus a golden Q&A set",
            "Fixed conditions across architectures: GPT-4.1, text-embedding-3-large, reranker, BM25 + vector hybrid search",
          ],
        },
        {
          heading: "Evaluation criteria",
          bullets: [
            "Retrieval quality, answer accuracy and hallucination rate",
            "Latency, including cross-platform overhead, and egress cost",
            "Tracing, evaluation and cost monitoring, and user-level access control",
          ],
        },
        {
          heading: "Findings",
          bullets: [
            "Databricks-only setup took 1 day (4 including permissions); Foundry-only took 2 days (7 including permissions and resources)",
            "Delta Sharing was not recommended due to instability, so cross-platform data movement needed a different path",
          ],
        },
      ],
    },
    {
      id: "agent-framework-benchmark",
      no: "P-06",
      tint: "peach",
      visual: "bench",
      title: "Agent Framework Benchmark",
      subtitle: "effgen vs. LangGraph for financial-analysis agents",
      category: "work",
      org: "Samsung Finance AI Center",
      period: "2026.03",
      role: "Designed the benchmark, built both agents, wrote the report",
      summary:
        "The same financial-analysis agent built on effgen and on LangGraph, run across 5 models and 9 tasks to see what each framework trades off.",
      problem:
        "Newer agent frameworks promise lower token costs than LangGraph, but the claims came from different prompts, tools and models, so nothing was comparable.",
      approach:
        "Only the framework changed. System prompt, tools (calculator, Python REPL, web search), API backend and 9 finance tasks, from simple calculations to company comparisons and injected failures, were shared.",
      metrics: [
        { value: "10.5×", label: "fewer tokens with effgen" },
        { value: "40 vs 28", label: "successful runs of 45 (LangGraph vs effgen)" },
        { value: "1.9×", label: "slower with effgen" },
      ],
      stack: ["Python", "effgen", "LangGraph", "OpenRouter"],
      links: [],
      sections: [
        {
          heading: "Setup",
          bullets: [
            "5 models: Gemini 3.1 Flash-Lite, Qwen3.5 9B and 122B, gpt-oss 20B and 120B",
            "9 tasks across simple, moderate, complex and error-recovery tiers",
            "Measured tokens, latency, tool calls and success rate per task",
          ],
        },
        {
          heading: "Findings",
          bullets: [
            "effgen kept complex tasks cheap; LangGraph’s ReAct loop averaged 261K tokens on the company-comparison task",
            "Most effgen failures were gpt-oss runs hitting max iterations: a prompt-format mismatch, not a framework limit",
            "Recommendation: effgen when token cost dominates, LangGraph when stable operation matters",
          ],
        },
      ],
    },
    {
      id: "ai-center-portal",
      no: "P-07",
      tint: "sage",
      visual: "portal",
      title: "AI Center Portal Prototype",
      subtitle: "One front door for the center’s projects, agents and models",
      category: "work",
      org: "Samsung Finance AI Center",
      period: "2026.01 – 2026.04",
      role: "Designed in Figma and built the prototype",
      summary:
        "A clickable portal prototype that puts the AI Center’s projects, agents, model benchmarks and shared assets in one place.",
      problem:
        "Information about the center’s AI projects, agents, models and reusable assets was spread across separate channels, so it was hard to see what already existed.",
      approach:
        "I laid out the information architecture in Figma, then built a working React prototype with sample data to test the flows end to end.",
      metrics: [],
      stack: ["Figma", "React", "Vite", "Recharts", "Radix UI"],
      links: [],
      sections: [
        {
          heading: "Screens",
          bullets: [
            "Monitoring dashboard: projects by team with AI maturity level, status and progress",
            "Agent dashboard with per-agent and per-task detail pages",
            "Model leaderboard with benchmark metric explanations and a model request form",
            "Marketplace for data, apps, Python libraries, agents and MCP servers, with an admin view",
            "News, wiki, feedback and an AI playground",
          ],
        },
      ],
    },
    {
      id: "ask-insurance",
      tint: "butter",
      visual: "image",
      image: { src: "assets/img/ask-insurance-answer.jpg", alt: "Ask-Insurance answer screen with issue cards and the cited policy excerpt" },
      video: "CeUxDt1vyEo",
      galleryNote: "Frames from the MVP demo video. Demo accounts and personas use synthetic data.",
      gallery: [
        { src: "assets/img/ask-insurance-home.jpg", caption: "Home — describe the situation before a claim or after a denial" },
        { src: "assets/img/ask-insurance-mydata.jpg", caption: "MyData — the user's policies, pulled in before the chat starts" },
        { src: "assets/img/ask-insurance-questions.jpg", caption: "Clarifying questions — only the facts that change the outcome" },
        { src: "assets/img/ask-insurance-privacy-step.jpg", caption: "Work steps — the privacy guardrail runs before evidence and answer" },
        { src: "assets/img/ask-insurance-answer.jpg", caption: "Answer — issue cards with a cited policy excerpt and a link to the original" },
        { src: "assets/img/ask-insurance-answer-b.jpg", caption: "Burn-scar scenario — what to check and why, with sources" },
      ],
      figures: [
        { src: "assets/img/ask-insurance-architecture.jpg", caption: "Architecture: MyData + query understanding → agentic orchestrator (dispute-case and policy agents, sufficiency check, clarifying loop) → issues, checklist and cited sources. The persona is synthetic." },
        { src: "assets/img/ask-insurance-flow.jpg", caption: "User flow: situation → my coverage → issue diagnosis → clarifying questions → result." },
      ],
      no: "P-08",
      title: "Ask-Insurance (물어보험)",
      subtitle: "Explaining likely claim-denial issues before patients file",
      category: "side",
      org: "2026 Financial AI Challenge · Financial Security Institute",
      period: "2026.08 – 2026.09",
      roleTag: "Planning lead",
      role: "Planning lead in a 4-person team — owned the proposal; also built the PII guardrail",
      featured: true,
      summary:
        "An agentic RAG service that reads a patient's situation against their own policy and past dispute cases, then shows the issues an insurer is likely to raise — and the documents to prepare — with links to the source text.",
      problem:
        "Insurance made up 49% of Korea's 128,419 financial complaints in 2025, and 58.6% of those were about whether and how much to pay. Claimants read their policy in everyday language; insurers judge it by disease codes, clause definitions and precedent.",
      approach:
        "Structure the user's story, retrieve similar FSS dispute cases and the matching clauses of their policy, ask only the questions that change the outcome, and answer with issues, a document checklist and cited originals — never a payout verdict.",
      metrics: [
        { value: "18,090", label: "KCD disease codes structured" },
        { value: "89%", label: "name recall in the PII guardrail" },
        { value: "0", label: "blocked identifiers leaked" },
        { value: "7.6ms", label: "guardrail latency per sentence" },
      ],
      stack: ["LangGraph", "gpt-4o-mini", "text-embedding-3-small", "Milvus", "Hybrid search (RRF)", "KoELECTRA-small", "spaCy", "FastAPI", "Next.js"],
      links: [
        { label: "Demo video", url: "https://youtu.be/CeUxDt1vyEo" },
        { label: "Live MVP", url: "https://ask-insurance-app.println.kr" },
        { label: "Backend", url: "https://github.com/ask-insurance/ask-insurance-server", private: true },
        { label: "Frontend", url: "https://github.com/ask-insurance/ask-insurance-front", private: true },
      ],
      sections: [
        {
          heading: "My role: planning",
          bullets: [
            "Owned the competition proposal from first draft to submission, and wrote the privacy section of the MVP functional specification",
            "Helped narrow four team ideas down to one: a gap between how claimants read their policy and how insurers judge it, for patients without medical or legal background, before and after a claim",
            "Fact-checked every statistic against the FSS source tables — insurance at 49% of financial complaints, 58.6% about payment decisions — and corrected figures that did not hold up",
            "Verified the differentiation claims cell by cell against existing apps and found a direct competitor missing from the comparison",
            "Reviewed the proposal and spec from the judges' point of view and revised through versions 4.7 to 5.2 before submission",
            "Defined demo persona 1 (moyamoya disease with a CI policy) and designed the MyData-based consultation flow",
          ],
        },
        {
          heading: "Also built: privacy guardrail",
          bullets: [
            "Unique identifiers are blocked before anything is stored or sent to the model; names, phone numbers and emails are replaced with placeholders so the consultation can continue",
            "Compared PII detectors (Presidio vs. OPF) and chose KoELECTRA-small with spaCy tokenization for Korean names",
            "Evaluation: name recall 178/200 (89.0%), 0/40 false positives on normal insurance questions, 21/21 label recall, 0 blocked items leaked, 7.6 ms per sentence",
          ],
        },
        {
          heading: "How it answers",
          bullets: [
            "A LangGraph orchestrator splits the work into query understanding, LLM-as-judge re-ranking, policy analysis, issue diagnosis, a sufficiency check and action guidance",
            "Hybrid search on Milvus merges vector and keyword results with RRF; the top 10 candidates are re-ranked down to 5",
            "A Corrective-RAG-style check decides between re-searching, asking the user, or answering — capped at 2 re-searches and 3 questions per round",
            "The model returns only excerpt IDs; the server matches them to the original text and drops any citation it cannot verify",
          ],
        },
        {
          heading: "Data",
          bullets: [
            "KCD: crawled 22 chapters breadth-first into 18,090 codes and 43,948 terms, so everyday disease names match the medical terms in cases and policies",
            "Disputes: FSS casebooks (OCR with Qwen2.5-VL), FSS decisions (HWP) and court rulings, split into facts, claims, judgment and conclusion",
            "Policies: insurer terms parsed clause by clause with tables preserved; 216 dispute cases reviewed to find recurring medical issues",
          ],
        },
      ],
    },
    {
      id: "orbit",
      tint: "mint",
      visual: "image",
      galleryNote: "All screens use sample data.",
      image: { src: "assets/img/orbit-directory.jpg", alt: "orbit Alumni Directory screen with sample profiles" },
      gallery: [
        { src: "assets/img/orbit-profile.jpg", caption: "My Profile — import from LinkedIn, then add skills and interests" },
        { src: "assets/img/orbit-directory.jpg", caption: "Directory — search and filter alumni by role, skills and mission" },
        { src: "assets/img/orbit-profile-detail.jpg", caption: "Profile Detail — career and interests before reaching out" },
        { src: "assets/img/orbit-feed.jpg", caption: "Activity Feed — job changes, new skills and projects" },
        { src: "assets/img/orbit-network.jpg", caption: "Network map (coming soon)" },
        { src: "assets/img/orbit-synergy.jpg", caption: "Synergy Simulator (coming soon)" },
      ],
      no: "P-09",
      title: "orbit",
      subtitle: "A networking platform for TechCamp alumni, built around purpose",
      category: "side",
      org: "TechCamp Korea 2026 · U.S. Embassy Seoul",
      period: "2026.05 – 2026.06",
      roleTag: "Planner · Developer",
      role: "Planner & developer — product scope, user flow, LinkedIn sync, activity feed, admin tools, deployment",
      featured: true,
      summary:
        "Find alumni by role, skills and mission, check what they are working on, then reach out — a private directory that stays current through LinkedIn sync.",
      problem:
        "After an event, most connections fade: people change jobs, profiles go stale, and there is no easy way to find the one alumnus who fits what you want to build next.",
      approach:
        "Make every profile searchable by role, skills and interests, keep it fresh from LinkedIn, and show enough context — career, current work, collaboration availability — to start a conversation with a reason.",
      metrics: [
        { value: "4", label: "core features live" },
        { value: "5", label: "step onboarding flow" },
        { value: "13", label: "commits merged" },
      ],
      stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "MinIO", "Auth0", "Docker Compose", "nginx"],
      links: [
        { label: "Live site", url: "https://www.alumni-network.kr/" },
        { label: "GitHub", url: "https://github.com/TechCamp-Orbit/alumni-network", private: true },
      ],
      sections: [
        {
          heading: "What it does",
          bullets: [
            "My Profile: paste a LinkedIn URL to import basics, then add skills, interests and whether you are open to collaborate",
            "Directory: search by keyword and filter by role, skills and mission",
            "Profile Detail: see someone's career and interests before reaching out by email or Instagram",
            "Activity Feed: job changes, new skills and project news from alumni in one timeline",
            "Onboarding: sign up → admin approval → LinkedIn sync → complete profile → search by purpose",
          ],
        },
        {
          heading: "My role: planning",
          bullets: [
            "Framed the problem with the team: after the event, connections fade because profiles go stale and there is no way to search by purpose",
            "Shaped the core flow — explore, check, connect — and the feature scope: My Profile, Directory, Profile Detail and Activity Feed now, network map and Synergy Simulator next",
            "Designed onboarding around keeping data fresh: sign up → approval → LinkedIn sync → complete profile → search by purpose",
          ],
        },
        {
          heading: "My role: development",
          bullets: [
            "LinkedIn profile scraper with database integration, plus a sync API that keeps member profiles current",
            "Activity feed: backend scraping and feed API, connected to the frontend",
            "Admin allowlist flow: CSV upload and export, inline editing",
            "Avatar upload in profile editing; fixed LinkedIn URLs entered at signup not persisting",
            "Production Docker Compose deployment with nginx and certbot",
          ],
        },
        {
          heading: "Next",
          bullets: [
            "Network map that shows who is connected to whom",
            "Synergy Simulator: pick 2–4 alumni and get a synergy score and project ideas",
          ],
        },
      ],
    },
    {
      id: "llm-training-evaluation",
      tint: "peach",
      visual: "json",
      no: "P-10",
      title: "LLM Training & Evaluation Data",
      subtitle: "Finance-domain data and an evaluation framework",
      category: "work",
      org: "Samsung Finance AI Center",
      period: "2025.01 – 2025.12",
      role: "Data pipeline, evaluation taxonomy, scoring automation",
      summary:
        "Training and evaluation data for a finance LLM built from 530+ domain books, with evaluation that goes beyond a single 'finance' label.",
      problem:
        "A single 'finance' benchmark score couldn't tell the four affiliates whether a model was good at insurance underwriting, tax, or compliance.",
      approach:
        "Structure the source books into training data, then redesign evaluation so results read by domain and by skill.",
      metrics: [
        { value: "530+", label: "finance books structured" },
        { value: "4", label: "affiliates' domains mapped" },
      ],
      stack: ["Python", "Data curation", "QA generation", "LLM-as-judge"],
      links: [],
      sections: [
        {
          heading: "Training data",
          bullets: [
            "Converted 530+ finance books into structured JSON with metadata and QA pairs, with deduplication and quality checks",
            "Mapped domain coverage across Samsung Life, Fire, Card and Securities to prioritize gaps",
          ],
        },
        {
          heading: "Evaluation framework",
          bullets: [
            "Fundamentals: economics, accounting, taxation, labor law, statistics",
            "Practices: compliance, risk management, asset management, insurance, digital finance",
            "Methods: multi-answer MCQ, short-answer, similarity-based grading, LLM-assisted win-rate",
            "Automated dataset versioning, prompt/answer audits and scoring reproducibility",
          ],
        },
      ],
    },
    {
      id: "llm-qa-service",
      tint: "sky",
      visual: "chat",
      no: "P-11",
      title: "Internal LLM QA Service",
      subtitle: "RAG over internal regulations and manuals",
      category: "work",
      org: "Samsung Securities",
      period: "2023 – 2024",
      role: "Service operations",
      summary:
        "Operated an LLM QA service with RAG over internal regulations, manuals and welfare documents, plus translation and summarization.",
      problem: "Employees needed answers buried in long internal documents.",
      approach: "RAG over regulations, manuals and welfare documents, with Korean–English translation and summarization.",
      metrics: [
        { value: "300+", label: "daily transactions" },
        { value: "130+", label: "users" },
      ],
      stack: ["LLM", "RAG", "Python"],
      links: [],
      sections: [
        {
          heading: "Operations",
          bullets: [
            "RAG over internal regulations, manuals and employee welfare documents",
            "Korean–English translation and document summarization",
          ],
        },
      ],
    },
    {
      id: "data-platform",
      tint: "sage",
      visual: "pipeline",
      no: "P-12",
      title: "Data Platform Operations",
      subtitle: "Enterprise pipelines and analytics platforms",
      category: "work",
      org: "Samsung Securities",
      period: "2023 – 2024",
      role: "Pipeline & platform owner",
      summary: "Ran the pipelines and platforms behind Samsung Securities' internal analytics.",
      problem: "Analysts and a production LLM service depended on data arriving on time and queries staying fast.",
      approach: "Daily ownership of DW-to-Hadoop pipelines and the platforms analysts worked on.",
      metrics: [{ value: "10→42%", label: "stemmer accuracy (intern project)" }],
      stack: ["Hadoop", "Hive", "Impala", "Kafka", "NiFi", "Cloudera CDSW", "Docker"],
      links: [],
      sections: [
        {
          heading: "Pipelines",
          bullets: [
            "Operated enterprise pipelines from DW to Hadoop with daily monitoring",
            "Production validation for a real-time top-traded stocks ranking service",
            "Tuned Hive/Impala partitioning to speed up queries and reduce resource use",
          ],
        },
        {
          heading: "Platforms",
          bullets: ["Managed Cloudera CDSW, NiFi and Kafka", "Standardized the analysis environment with Docker images"],
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Page copy (static text in the HTML pages). Values may contain inline HTML.
// ---------------------------------------------------------------------------
en.ui = {
  nav: { home: "Home", about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
  chrome: {
    brandTag: "AI Engineer · Seoul",
    theme: "Toggle colour theme",
    lang: "KO",
    langLabel: "Switch to Korean",
    menu: "Menu",
    top: "Back to top",
    footer: "Open to AI engineering roles.",
    resume: "Résumé PDF",
    work: "Work",
    side: "Side project",
    ongoing: "Ongoing",
  },
  titles: {
    home: "Jin Y. Moon — AI Engineer",
    about: "About — Jin Y. Moon",
    experience: "Experience — Jin Y. Moon",
    projects: "Projects — Jin Y. Moon",
    contact: "Contact — Jin Y. Moon",
    404: "Not found — Jin Y. Moon",
  },
  home: {
    intro: "I’m Jin, an AI Engineer at <a href=\"experience.html\">Samsung Finance AI Center.</a> I build AI agents and platforms that hold up inside a regulated company.",
    sub: "Leading AI platform PoCs · On secondment from <a href=\"experience.html\">Samsung Securities</a>",
    photoAlt: "Portrait of Jin Y. Moon",
    workTitle: "Selected work",
    readCase: "Read case study",
    allProjects: "See all 12 projects",
    alsoTitle: "Writing, teaching & community",
    alsoLede: "Things I do besides building.",
    now: "Now", nowV: "AI Engineer &amp; PoC lead, Samsung Finance AI Center",
  },
  about: {
    eyebrow: "About",
    h1: "Data engineer first, AI engineer now.",
    p1: "I started at Samsung Securities running the pipelines and platforms that analysts — and a production LLM service — depended on. That background shapes how I work on AI now: most of the hard problems are in the data, the evaluation and the operating environment, not the model.",
    p2: "Since 2025 I’ve been seconded from Securities to the Samsung Finance AI Center, based at Samsung Life, where I work across Samsung Life, Fire, Card and Securities. I build LLM training and evaluation data, run architecture PoCs that turn into platform decisions, and set up shared assets such as a verified skill hub for AI agents.",
    p3: "Outside of work I build with small teams — a private alumni network for TechCamp Korea 2026, and an insurance-claims assistant for the 2026 Financial AI Challenge — and I teach: AI lectures for new hires and, back at university, weekly data engineering sessions as president of BOAZ.",
    p4: "Away from work, travel is how I recharge. I bring a camera everywhere, and if there’s sea nearby, I go under it.",
    photoAlt: "Portrait of Jin Y. Moon",
    caption: "Jin Y. Moon · 문예진 · Seoul",
    how: "How I work", howH: "Three things I keep coming back to.",
    skills: "Skills", skillsH: "Tools I use in production, not just in tutorials.",
    education: "Education",
    leadership: "Leadership",
    offClock: "Off the clock",
    shots: "Photos I’ve taken",
    aiTitle: "How two AIs see me",
    aiLede: "I asked Claude and ChatGPT to describe me from our past conversations. They disagreed on the colour. Both said fox.",
    strength: "Strength",
    watch: "Watch out for",
    wordsLabel: "ChatGPT’s three words for me",
    words: ["Enough.", "Enjoy.", "Trust."],
    aiClose: "Both flagged perfectionism. I’m working on it — that’s partly what the diving is for.",
  },
  experience: {
    eyebrow: "Experience",
    h1: "Four years of data and AI in finance.",
    lede: "At Samsung Securities since 2023, on secondment to the group’s Samsung Finance AI Center since 2025. Same employer, widening scope: one company's pipelines, then four affiliates' AI platforms.",
    writing: "Writing",
    teaching: "Teaching &amp; enablement",
    teachingH: "Getting people to actually use what we build.",
  },
  projects: {
    eyebrow: "Projects",
    h1: "Things I’ve built.",
    lede: "Company work from the AI Center and Samsung Securities, plus team projects built outside of work. Internal projects are described at the level I can share publicly.",
    all: "All", work: "Work", side: "Side projects",
    filterLabel: "Filter projects",
  },
  project: {
    crumbs: "Projects",
    context: "Context", period: "Period", role: "My role", links: "Links",
    internal: "Internal — details on request",
    private: "private",
    problem: "The problem", approach: "The approach", stack: "Stack", flow: "At a glance", demo: "Demo", screens: "Screens", sample: "All screens use sample data.",
    prev: "Previous", next: "Next",
    notFound: "Project not found.", back: "Back to all projects →",
  },
  contact: {
    eyebrow: "Contact",
    h1: "Let’s talk.",
    lede: "Hiring for AI engineering, LLM platforms or applied RAG work? I'd like to hear about it.",
    resume: "Résumé", resumeV: "Download PDF",
    based: "Based in", basedV: "Seoul, Korea · KST (UTC+9)",
  },
  notFound: { h1: "This page doesn’t exist.", back: "Back home →" },
};

// ---------------------------------------------------------------------------
// Korean overrides. Arrays merge by index, so only text fields are listed.
// ---------------------------------------------------------------------------
const ko = {
  profile: {
    role: "AI 엔지니어",
    org: "삼성금융 AI센터",
    location: "서울",
  },

  ledger: [
    { unit: "개", label: "공개 에이전트 스킬 약 700개 중 그룹 스킬 허브용으로 선별" },
    { unit: "통과", label: "보안·품질 자동 검증을 통과한 스킬" },
    { unit: "건", label: "RAG 에이전트 아키텍처 3종 벤치마크에 쓴 보험 분쟁 데이터" },
    { unit: "권", label: "LLM 학습·평가 데이터로 구조화한 금융 도서" },
  ],

  focus: [
    { title: "에이전트 플랫폼과 거버넌스", body: "스킬 허브, 아키텍처 PoC, 그리고 금융사 안에서 에이전트가 실제 운영까지 갈 수 있게 하는 검토 체계." },
    { title: "LLM 데이터와 평가", body: "도메인 학습 데이터, 그리고 점수 하나가 아니라 역량별·업권별로 읽을 수 있는 평가 체계." },
    { title: "데이터 엔지니어링", body: "DW→Hadoop 파이프라인, Kafka/NiFi 플랫폼, 운영 중인 RAG QA 서비스를 2년간 맡았습니다." },
  ],

  principles: [
    { title: "어려운 문제는 대개 모델 밖에 있다", body: "지금까지 본 실패는 대부분 데이터, 평가, 운영 환경에서 나왔습니다. 그래서 거기서부터 봅니다." },
    { title: "고르기 전에 잰다", body: "플랫폼 결정은 같은 모델, 같은 데이터, 같은 지표로 조건을 고정한 벤치마크로 내립니다." },
    { title: "거버넌스도 제품이다", body: "보안 검토, 인증, 배포도 기능입니다. 번거로우면 사람들은 돌아갑니다." },
  ],

  hobbies: [
    {
      title: "사진",
      body: "여행엔 늘 카메라를 챙깁니다. 한 장면을 고르다 보면 그곳을 천천히, 제대로 보게 됩니다.",
      cover: { alt: "물에 비친 빨간 조형물" },
      photos: [
        { alt: "콘크리트 벽 사이로 보이는 하늘" },
        { alt: "산 아래 호숫가의 패들보드" },
        { alt: "언덕 위로 물든 분홍빛 노을" },
        { alt: "벚꽃 위로 보이는 성" },
        { alt: "햇빛 부서지는 바다로 내려가는 돌계단" },
        { alt: "천창 아래를 걷는 사람들" },
      ],
    },
    {
      title: "스쿠버다이빙",
      body: "물속에는 알림도, 최적화할 것도 없습니다. 호흡과 부력, 그리고 곁을 지나가는 것들만 있습니다.",
      cover: { alt: "바다거북 옆에서 다이빙하는 모습" },
    },
  ],

  aiViews: [
    {
      traits: [["색", "남색"], ["동물", "여우"], ["계절", "가을"]],
      quote: "목표가 뚜렷하고 전략적으로 움직이는 사람. 수치와 출처, 고유명사를 정확히 지키길 원하고, 틀리거나 지나치게 조심스러운 답에는 바로 반박한다. 말은 짧고 직설적이며 꾸밈을 싫어한다.",
      strength: "꼼꼼함과 실행력",
      watch: "기준이 높은 만큼 완벽주의로 흐를 수 있음",
    },
    {
      traits: [["색", "노랑"], ["동물", "여우"], ["계절", "봄"], ["꽃", "프리지아"], ["음료", "레모네이드"]],
      quote: "겉은 밝고 산뜻하지만 뿌리는 단단한 사람. 궁금한 것은 끝까지 파고들고, 충분히 이해한 뒤 자연스럽게 방향을 만들어 가는 탐구자형 리더.",
      strength: "명료함 — 원하는 것과 아닌 것을 분명히 구별함",
      watch: "이미 충분히 잘하고 있는데도 부족한 부분을 계속 찾음",
    },
  ],

  experience: [
    {
      org: "삼성금융 AI센터",
      note: "삼성증권에서 파견 · 삼성생명 소재 · 생명·화재·카드·증권 4사 업무",
      role: "AI 엔지니어",
      location: "서울",
      end: "현재",
      groups: [
        {
          heading: "AI 플랫폼 PoC 담당",
          year: "2026 하반기 – 현재",
          bullets: [
            "금융 3호망(내부 업무망)에서 쓸 수 있는 그룹 AI 플랫폼 PoC 담당: M365 Copilot 도입 전 PoC부터 도입 후 지원까지(2026년 7~9월), 삼성SDS 사내 AI 플랫폼 FabriX의 1.7·2.0 업데이트 분석",
            "4개 관계사 M365 도입 확정 전 라이선스(E3/E5)와 기능 범위 파악(금융 감독 증적에 필요한 보안 기능 포함), Work IQ 등 기능 선제 테스트 및 가이드 제작",
            "4개 관계사 실무 협의체를 마련해 정책 대응 방식을 공유하고 공동 대응할 이슈 발굴, 도입 후에는 담당자·파워유저 인터뷰와 Microsoft 이슈 에스컬레이션",
            "FabriX 1.7 사용성·신규 기능 테스트(Confluence MCP 연결 포함), 설명회 내용 기반으로 2.0 기능 분석·예상 정리 후 보고, 관계사 자체 AI 플랫폼(GenOS, AWS)과 비교해 기능성 수치화",
            "사내 월간 AI 기술 뉴스레터 A.TechFlow 3인 공동 제작: 기획·편집·집필(10~13호, 2026년 6월~)",
          ],
        },
        {
          heading: "AI 에이전트 플랫폼 · 스킬 허브",
          year: "2026 상반기",
          bullets: [
            "AI 에이전트용 사내 스킬 허브 구축(카탈로그, 추천, 감사 파이프라인). 공개 스킬 약 700개를 가중치 점수, AI 리뷰, 사람 리뷰로 걸러 44개 선별",
            "스킬 검증 자동화(보안, 품질, 자동 개선, 플랫폼 테스트): 49개 중 27개 통과. 센터장 보고를 거쳐 인증 스킬 거버넌스와 그룹 전사 확산 방향 수립",
            "RAG 에이전트 아키텍처 3종(Databricks, Databricks + MS Foundry, Foundry)을 보험 분쟁 데이터 1,000건 이상으로 정확도·지연·비용 비교",
            "삼성증권 신입사원 AI 강의를 2024년 하반기부터 매 기수 이어서 진행(현재까지 4개 기수), 사무지원직 AI 교육(2025년 12월)",
          ],
        },
        {
          heading: "LLM 학습 · 평가 데이터",
          bullets: [
            "금융 도서 530권 이상을 메타데이터, QA 쌍, 품질 검사를 갖춘 구조화 JSON으로 변환",
            "객관식, 단답형, 유사도, LLM-judge 채점을 포함한 다차원 평가 체계 설계",
            "데이터셋 버전 관리, 프롬프트·정답 감사, 재현 가능한 채점 자동화",
          ],
        },
      ],
    },
    {
      org: "삼성증권",
      role: "데이터 엔지니어",
      location: "서울",
      groups: [
        {
          bullets: [
            "DW→Hadoop 파이프라인 운영, Hive/Impala 파티션 튜닝, CDSW·NiFi·Kafka 관리",
            "실시간 거래 상위 종목 랭킹 서비스 운영 검증 수행",
            "사내 RAG 기반 LLM QA 서비스 운영 (일 300건 이상, 사용자 130명 이상)",
            "신입사원 37명 온보딩 공동 리드(2024년 1~2월)",
          ],
        },
      ],
    },
    {
      org: "삼성증권",
      role: "데이터 엔지니어링 인턴",
      location: "서울",
      groups: [
        { bullets: ["DB 이상 리포트 자동화, 금융 용어 사전을 만들어 형태소 분석(stemmer) 정확도 10% → 42% 개선"] },
      ],
    },
  ],

  education: [
    { school: "서강대학교", detail: "빅데이터사이언스 공학사 · 경제학 학사(금융경제) · 우등 졸업(Cum Laude)", location: "서울" },
    { school: "University of San Francisco", detail: "교환학생", location: "미국 샌프란시스코" },
  ],

  activities: [
    { org: "BOAZ (빅데이터 연합 동아리)", role: "회장", detail: "회원 51명 대상 주간 데이터 엔지니어링 세션 운영(ML부터 Kafka·Spark까지), NLP 논문 11편 리뷰" },
  ],

  writing: {
    blurb: "사내 월간 AI 기술 뉴스레터. 3명이 함께 만들며, 저는 10호부터 기획·편집·집필에 참여하고 있습니다.",
    issues: [
      { title: "AI는 어디까지 왔고, 무엇을 지능이라 부를 수 있을까", summary: "AGI 선언 이후 지능의 기준은 어떻게 바뀌고 있고, 조직은 무엇을 준비해야 하는가." },
      { title: "루프 엔지니어링과 그래프 엔지니어링", summary: "AI와 일일이 대화하지 않고 일을 끝까지 맡기는 두 가지 설계 방식, 그리고 언제 무엇을 고를지." },
      { title: "AI 시대의 개발, 정말 빨라졌다고 할 수 있을까?", summary: "코딩은 빨라졌는데 개발은 제자리인 이유와, 이를 절차로 푸는 AI-DLC·역할로 푸는 BMAD." },
      { title: "에이전틱 AI 보안: 통제 가능한 힘으로 만들기", summary: "에이전트가 누구의 이름으로, 어떤 도구를 어디까지 쓰고, 어디서 멈추며, 어떤 기록을 남겨야 하는가." },
    ],
  },

  teaching: [
    { date: "2024 하반기~", title: "삼성증권 신입사원 AI 강의 (매 기수)", detail: "24년 하반기 · 25년 상반기 · 25년 하반기 · 26년 상반기 입사자" },
    { title: "사무지원직 대상 AI 교육" },
    { title: "신입사원 37명 온보딩 공동 리드" },
  ],

  skills: [
    { label: "Core", items: ["Python — 상급", "MySQL — 상급", "Linux — 중급", "Docker — 중급"] },
    {},
    {},
    {},
    { label: "언어", items: ["한국어 — 모국어", "영어 — 중급"] },
  ],

  projects: [
    {
      title: "FabriX 플랫폼 PoC",
      subtitle: "그룹 자체 AI 플랫폼이 내부 업무망에서 할 수 있는 일",
      period: "2026.08 – 현재",
      org: "삼성금융 AI센터",
      role: "PoC 담당 — 기능 테스트, 기능 분석, 비교 평가, 보고",
      summary: "그룹이 3호망(내부 업무망)에서 쓰는 삼성SDS AI 플랫폼 FabriX를 1.7과 2.0 업데이트에 맞춰 테스트하고, 관계사 자체 AI 플랫폼(GenOS, AWS)과 비교해 기능성을 수치화했습니다.",
      problem: "FabriX는 2024년부터 쓰고 있었고 1.7을 거쳐 2.0 업데이트를 앞두고 있었습니다. 관계사마다 자체 AI 플랫폼도 따로 운영하고 있어서, 금융망 안에서 FabriX가 실제로 무엇을 할 수 있는지, 기존 플랫폼과 어디서 겹치는지 한눈에 보여주는 자료가 없었습니다.",
      approach: "1.7을 직접 써 보고, 설명회 내용으로 2.0을 예상 분석하고, 모든 기능을 규제망 제약에 대입한 뒤 관계사 플랫폼인 GenOS, AWS와 점수로 비교했습니다.",
      metrics: [{ label: "직접 테스트" }, { label: "출시 전 기능 예상 분석" }, { label: "관계사 플랫폼과 비교(GenOS, AWS)" }],
      sections: [
        {
          heading: "FabriX 1.7 테스트",
          bullets: [
            "1.7 사용성·신규 기능 테스트(포털–Confluence MCP 연결 포함)",
            "금융 폐쇄망 특유의 공백 정리: 빌드용 패키지 확보, 외부 모델 사용, 관계사가 이미 운영 중인 플랫폼과의 중복",
          ],
        },
        {
          heading: "FabriX 2.0 분석",
          bullets: [
            "설명회 내용을 바탕으로 2.0 기능 분석·예상: 프롬프트·워크플로우·ADK 에이전트 빌더, 마켓플레이스와 에이전트 디렉터리, 모델 게이트웨이, 사용자 권한 상속, 거버넌스",
            "다음 단계: 2.0 업그레이드 후 직접 검토",
          ],
        },
        {
          heading: "산출물",
          bullets: [
            "1.7 테스트와 2.0 예상 기능 보고",
            "관계사 자체 AI 플랫폼(GenOS, AWS)과 FabriX를 비교한 기능성 수치화",
          ],
        },
      ],
    },
    {
      title: "M365 Copilot 도입 및 지원",
      subtitle: "4개 관계사, 도입 전 PoC부터 도입 후 지원까지",
      period: "2026.07 – 2026.09",
      org: "삼성금융 AI센터",
      role: "PoC 담당 — 라이선스·기능 범위 파악, 기능 테스트, 가이드, 협의체, 도입 후 지원",
      summary: "4개 금융 관계사가 도입을 확정하기 전에 M365 Copilot을 먼저 파악·테스트하고, 도입 후에는 인터뷰와 공동 실무 협의체로 관계사를 지원했습니다.",
      problem: "SaaS 규제 완화로 M365 Copilot을 금융사 3호망(내부 업무망)에서 쓸 수 있게 됐지만, 4개 관계사는 라이선스와 기능 범위, 서로의 정책 대응 방식을 모른 채 도입을 검토하고 있었습니다.",
      approach: "도입 결정보다 한발 앞서 라이선스와 기능 범위를 파악하고 직접 테스트해 가이드로 만들었습니다. 그리고 4개 관계사를 한자리에 모아 도입 전후로 정책과 공통 이슈를 공유했습니다.",
      metrics: [{ label: "관계사 공동 실무 협의체" }, { label: "라이선스를 감독 증적 기준으로 매핑" }, { label: "단계: 도입 전 PoC, 도입 후 지원" }],
      sections: [
        {
          heading: "도입 전 PoC",
          bullets: [
            "생명·화재·카드·증권 도입 확정 전 라이선스와 기능 범위 파악",
            "E3와 E5 보안 기능(DLP, 로그 보존)을 금융 감독 증적 요구사항과 대조",
            "Work IQ 등 기능을 선제 테스트하고 결과를 임직원용 세팅 가이드로 제작",
            "4개 관계사 실무 협의체 마련: 관계사별 정책 대응 방식 공유, 공동 대응할 이슈 발굴",
          ],
        },
        {
          heading: "도입 후 지원",
          bullets: [
            "관계사별 M365 담당자 인터뷰: 사용 범위, 미해결 이슈, 지원 요청사항",
            "파워유저 인터뷰: 주로 쓰는 앱, 업무 방식 변화, Copilot이 아직 못 채우는 부분",
            "협의체로 관계사 간 이슈를 공유하고 공통 이슈는 Microsoft에 에스컬레이션",
          ],
        },
        {
          heading: "산출물",
          bullets: [
            "임직원용 Work IQ 온보딩 가이드",
            "스킬 허브에서 이어진 SharePoint 기반 M365 Copilot 스킬 공유 체계",
          ],
        },
      ],
    },
    {
      title: "Work IQ 온보딩 가이드",
      image: { alt: "Work IQ 세팅 가이드: 4단계 12개 항목, 첫 세팅 약 30분" },
      galleryNote: "3부작 가이드의 실제 페이지입니다. 테넌트 화면 캡처는 제외했습니다.",
      gallery: [
        { caption: "세팅 가이드 — 4단계 12개 항목과 진행 체크리스트" },
        { caption: "항목마다 리드타임, 하는 방법, 확인 방법" },
        { caption: "개념 가이드 — Work IQ를 5개 계층으로, 핵심은 Data · Memory · Inference" },
        { caption: "레퍼런스 — 변경 유형 14개의 실측 리드타임" },
        { caption: "레퍼런스 — PoC 테스트 결과와 가이드에 반영한 시사점" },
      ],
      subtitle: "M365 Copilot이 내 업무 자료를 제대로 찾게 하기",
      org: "삼성금융 AI센터",
      role: "PoC 수행, 3부작 가이드 작성",
      summary: "Microsoft Work IQ의 구조와, Copilot이 내 업무 데이터로 답하게 하려면 무엇을 설정해야 하는지를 개념·세팅·레퍼런스 3부작으로 정리했습니다. 모든 권장 사항은 실측 리드타임에 근거합니다.",
      problem: "Copilot 관련 질문 1위는 “저장했는데 왜 안 나와요?”였습니다. 프로필·OneDrive·SharePoint 변경이 Copilot에 반영되기까지 얼마나 걸리는지, 어떤 파일 습관이 도움이 되는지 아무도 몰랐습니다.",
      approach: "직접 쟀습니다. 삼성생명 M365 테넌트에서 PoC를 돌려 변경 사항별 Copilot Chat 반영 시간을 측정했고, 그 결과를 체크리스트형 세팅 가이드와 팀 파일 규칙으로 만들었습니다.",
      metrics: [
        { value: "14개", label: "측정한 리드타임 항목" },
        { value: "12개", label: "파일 관리 규칙" },
        { value: "약 30분", label: "첫 세팅 시간, 관리자 권한 불필요" },
      ],
      sections: [
        {
          heading: "개념 이해하기",
          bullets: [
            "Work IQ를 Data·Memory·Inference 3계층과 API 표면, 거버넌스로 설명",
            "Fabric IQ·Foundry IQ·Web IQ와의 관계 정리",
          ],
        },
        {
          heading: "세팅 가이드",
          bullets: [
            "4단계 12개 항목: 설정, 프로필, OneDrive, SharePoint — 항목마다 리드타임, 이유, 확인 방법",
            "혼자 따라 할 수 있도록 진행 체크리스트 내장",
          ],
        },
        {
          heading: "레퍼런스",
          bullets: [
            "리드타임 요약표: 예) OneNote 새 페이지는 약 2분 뒤 검색, SharePoint 새 문서는 다음 날부터 동료에게 노출",
            "팀 공지에 그대로 붙여 쓸 수 있는 파일 관리 규칙",
            "2026.08.27~09.04 PoC 테스트 6종",
          ],
        },
      ],
    },
    {
      title: "에이전트 스킬 허브",
      galleryNote: "웹 UI를 로컬 오프라인으로 띄워 캡처했습니다. AI 리뷰 단계는 제외했습니다.",
      image: { alt: "Skill Marketplace: 카테고리 필터가 있는 팀 스킬 라이브러리" },
      gallery: [
        { caption: "스킬 라이브러리 — 팀·카테고리별 활성 카탈로그" },
        { caption: "스킬 상세 — 버전, 경로, 검증 상태, 렌더링된 SKILL.md" },
        { caption: "업로드 & 검증 — 부족한 예시 스킬에 대한 SkillSpector 정적 분석과 100점 정량 점수" },
      ],
      subtitle: "그룹 AI 에이전트를 위한 검증된 스킬 마켓플레이스",
      org: "삼성금융 AI센터",
      role: "담당 — 카탈로그, 검증 MCP 서버, 웹 UI, 추천기, CI",
      summary: "선별한 스킬 카탈로그와 이를 지키는 검증 서비스입니다. SKILL.md를 올리면 3단계 검증을 거치고, 부족하면 자동 개선하고, 머지 요청까지 열어줍니다. 통과한 스킬은 Claude Code에서 바로 설치할 수 있습니다.",
      problem: "공개 에이전트 스킬은 1만 개를 넘었지만 품질·보안·금융 업무 적합성에 대한 공통 기준이 없었습니다. 팀마다 같은 스킬을 다시 검토하거나, 검토 없이 설치하고 있었습니다.",
      approach: "관련 있는 스킬만 작게 선별하고, 누구나 호출할 수 있는 검증 도구를 만들고, 엔지니어가 이미 쓰는 Git 리뷰 흐름으로 통과한 스킬만 배포했습니다.",
      metrics: [{ label: "공개 스킬 약 700개 중 선별" }, { label: "자동 검증 통과" }, { label: "현재 활성 스킬 (7개 카테고리)" }, { label: "두 저장소 커밋 223개 중 내 커밋" }],
      sections: [
        {
          heading: "검증 서비스",
          bullets: [
            "validate_skill, validate_skill_archive, upgrade_skill, submit_skill 4개 도구를 가진 FastMCP 서버, 앞단에 FastAPI 웹 프록시와 nginx",
            "3단계 병렬 검증: 프롬프트 인젝션·데이터 유출·위험 코드를 보는 SkillSpector 정적 분석, 100점 정량 점수(frontmatter·설명·본문·구조·이식성·검토 용이성), Claude·Codex·Gemini AI 리뷰",
            "zip 업로드 시 SKILL.md뿐 아니라 references/, scripts/, assets/까지 채점에 반영",
            "탈락한 스킬은 버리지 않고 자동 개선 후 재검증: 1차 통과 18개, 개선 후 9개 추가 통과",
          ],
        },
        {
          heading: "배포",
          bullets: [
            "submit_skill이 재검증 후 제출자 본인 명의로 GitLab 머지 요청을 생성, PASS가 아니면 [FORCE] 표시와 사유를 붙여 강제 제출 가능",
            "모든 호출을 판정·단계별 소요 시간·콘텐츠 해시와 함께 JSONL 감사 로그로 기록",
          ],
        },
        {
          heading: "카탈로그 · 설치",
          bullets: [
            "선별: 8개 축 가중치 점수(직무 관련성, 필요 스킬 매칭, 금융 도메인, 완성도, 보안, 출처 신뢰도, 범용성, 중복 제거) → AI 리뷰 → 사람 리뷰",
            "각 스킬을 Claude Code 플러그인으로 노출, SKILL.md frontmatter로 marketplace.json을 자동 생성하고 머지 후 CI가 동기화",
            "추천기: 직무에 대해 4~8턴 대화 → 키워드 검색으로 상위 30개 → LLM이 설치할 10~15개 선택",
          ],
        },
        {
          heading: "결과",
          bullets: [
            "센터장 보고를 통해 인증 스킬 거버넌스와 관계사 간 보안 검토 합의의 방향을 정함",
            "SharePoint 기반 M365 Copilot 스킬 공유 체계로 확장",
          ],
        },
      ],
    },
    {
      title: "클라우드 에이전트 아키텍처 PoC",
      subtitle: "RAG 에이전트, Databricks와 Microsoft Foundry 비교",
      org: "삼성금융 AI센터",
      role: "세 가지 구성 모두 구축, 비교 기준 설계",
      summary: "보험 분쟁 데이터 위에 같은 RAG 에이전트를 세 가지 방식으로 만들어, 그룹 에이전트를 데이터 플랫폼과 어떤 관계로 둘지 판단할 근거를 만들었습니다.",
      problem: "에이전트를 데이터 옆(Databricks)에 둘지, 모델 플랫폼(Foundry)에 둘지, 둘로 나눌지. 각 안마다 지지하는 쪽은 있었지만 함께 볼 숫자는 없었습니다.",
      approach: "모델, 임베딩, 리랭커, 검색 방식을 고정하고 에이전트를 세 번 만든 뒤, 품질·운영·비용 측면의 비교 기준을 정했습니다.",
      metrics: [{ label: "아키텍처 비교" }, { label: "판례·분쟁 사례 데이터" }, { label: "구축 일수 (Databricks vs Foundry)" }],
      sections: [
        {
          heading: "구성",
          bullets: [
            "데이터: 보험 판례 360건, 금융감독원 분쟁조정 사례 687건, 골든 Q&A 세트",
            "모든 구성에 동일 조건 적용: GPT-4.1, text-embedding-3-large, 리랭커, BM25 + 벡터 하이브리드 검색",
          ],
        },
        {
          heading: "평가 기준",
          bullets: [
            "검색 품질, 답변 정확도, 환각 비율",
            "플랫폼 간 오버헤드를 포함한 지연 시간, egress 비용",
            "트레이싱·평가·비용 모니터링, 사용자 단위 접근 제어",
          ],
        },
        {
          heading: "구축하며 확인한 점",
          bullets: [
            "Databricks 단독 구성은 1일(권한 포함 4일), Foundry 단독은 2일(권한·리소스 포함 7일) 소요",
            "Delta Sharing은 불안정해 권장되지 않아, 플랫폼 간 데이터 이동은 다른 경로가 필요했음",
          ],
        },
      ],
    },
    {
      title: "에이전트 프레임워크 벤치마크",
      subtitle: "금융 분석 에이전트, effgen과 LangGraph 비교",
      org: "삼성금융 AI센터",
      role: "벤치마크 설계, 두 에이전트 구현, 리포트 작성",
      summary: "같은 금융 분석 에이전트를 effgen과 LangGraph로 각각 만들고, 5개 모델 × 9개 태스크로 돌려 프레임워크별 장단을 비교했습니다.",
      problem: "새 에이전트 프레임워크들은 LangGraph보다 토큰을 덜 쓴다고 했지만, 근거마다 프롬프트·도구·모델이 달라 비교할 수 없었습니다.",
      approach: "프레임워크만 바꿨습니다. 시스템 프롬프트, 도구(계산기, Python REPL, 웹 검색), API 백엔드, 단순 계산부터 기업 비교·오류 주입까지 9개 금융 태스크를 모두 동일하게 뒀습니다.",
      metrics: [
        { label: "effgen의 토큰 절감" },
        { label: "45회 중 성공 (LangGraph vs effgen)" },
        { label: "effgen이 느린 정도" },
      ],
      sections: [
        {
          heading: "설정",
          bullets: [
            "모델 5종: Gemini 3.1 Flash-Lite, Qwen3.5 9B·122B, gpt-oss 20B·120B",
            "태스크 9개: 단순·중간·복잡·오류 복구 난이도",
            "태스크별 토큰, 지연 시간, 툴 호출 수, 성공률 측정",
          ],
        },
        {
          heading: "결과",
          bullets: [
            "복잡한 태스크에서 effgen이 토큰을 크게 아낌 — LangGraph ReAct 루프는 기업 비교 태스크에서 평균 261K 토큰 소모",
            "effgen 실패는 대부분 gpt-oss 계열의 max iterations 도달 — 프레임워크 한계보다 프롬프트 형식 불일치가 원인",
            "권고: 토큰 비용이 우선이면 effgen, 안정적 운영이 우선이면 LangGraph",
          ],
        },
      ],
    },
    {
      title: "AI센터 포털 프로토타입",
      subtitle: "센터의 과제·에이전트·모델을 한곳에서",
      org: "삼성금융 AI센터",
      role: "Figma 설계, 프로토타입 구현",
      summary: "AI센터의 과제, 에이전트, 모델 벤치마크, 공용 자산을 한곳에 모은 클릭 가능한 포털 프로토타입입니다.",
      problem: "센터의 AI 과제, 에이전트, 모델, 재사용 자산 정보가 여러 채널에 흩어져 있어 무엇이 이미 있는지 알기 어려웠습니다.",
      approach: "Figma로 정보 구조를 먼저 잡고, 샘플 데이터로 실제 흐름을 확인할 수 있는 React 프로토타입을 만들었습니다.",
      sections: [
        {
          heading: "화면",
          bullets: [
            "모니터링 대시보드: 팀별 과제의 AI 성숙도, 상태, 진행률",
            "에이전트 대시보드와 에이전트·태스크 상세",
            "벤치마크 지표 설명과 모델 추가 요청이 있는 모델 리더보드",
            "데이터·애플리케이션·파이썬 라이브러리·에이전트·MCP 마켓플레이스와 관리자 화면",
            "뉴스, 위키, 피드백, AI 플레이그라운드",
          ],
        },
      ],
    },
    {
      title: "물어보험 (Ask-Insurance)",
      image: { alt: "쟁점 카드와 인용된 약관 발췌문이 보이는 물어보험 답변 화면" },
      galleryNote: "MVP 시연 영상에서 캡처했습니다. 시연 계정과 인물은 가상 데이터입니다.",
      gallery: [
        { caption: "홈 — 청구 전이든 지급거절 후든 상황을 적어서 시작" },
        { caption: "마이데이터 — 상담 전에 가입 보험을 불러옴" },
        { caption: "확인 질문 — 결과를 바꾸는 사실만 추가로 질문" },
        { caption: "작업 과정 — 근거 준비와 답변 전에 개인정보 보호가 먼저 적용" },
        { caption: "답변 — 쟁점 카드, 인용된 약관 발췌문, 원문 링크" },
        { caption: "화상 흉터 시나리오 — 확인할 점과 이유를 근거와 함께 안내" },
      ],
      figures: [
        { caption: "아키텍처: 마이데이터와 질의 이해 → 에이전틱 오케스트레이터(분쟁사례·약관 에이전트, 정보 충분성 판단, 확인 질문 루프) → 쟁점·체크리스트·근거 원문. 등장 인물은 가상 페르소나입니다." },
        { caption: "이용 흐름: 질병 발생 → 내 상황 입력 → 쟁점 진단 → 확인 질문 → 결과" },
      ],
      subtitle: "청구 전에 환자에게 거절 가능 쟁점을 알려주는 서비스",
      org: "2026 금융 AI Challenge · 금융보안원",
      roleTag: "기획 리드",
      role: "4인 팀 기획 리드 — 기획서 총괄 · 개인정보 가드레일 개발",
      summary: "환자의 상황을 본인이 가입한 약관, 과거 분쟁 사례와 대조해 보험사가 문제 삼을 만한 쟁점과 준비할 서류를 원문 근거와 함께 보여주는 에이전틱 RAG 서비스입니다.",
      problem: "2025년 금융민원 128,419건 중 보험이 49%였고, 그중 58.6%가 보험금을 주느냐, 얼마를 주느냐에 관한 것이었습니다. 소비자는 약관을 일상어로 읽고, 보험사는 질병코드·조항 정의·선례로 판단합니다.",
      approach: "사용자의 이야기를 구조화하고, 유사한 금감원 분쟁 사례와 가입 약관의 해당 조항을 찾고, 결과를 바꾸는 질문만 추가로 물은 뒤 쟁점·서류 체크리스트·원문 근거로 답합니다. 지급 여부는 단정하지 않습니다.",
      metrics: [{ label: "KCD 질병코드 구조화" }, { label: "개인정보 가드레일 이름 재현율" }, { label: "차단 대상 유출" }, { label: "문장당 가드레일 지연" }],
      links: [{ label: "시연 영상" }, { label: "MVP 바로가기" }, {}, {}],
      sections: [
        {
          heading: "내 역할: 기획",
          bullets: [
            "공모전 기획서를 초안부터 제출까지 맡고, MVP 기능명세서의 개인정보·민감정보 처리 파트 작성",
            "팀원 4명의 아이디어를 하나로 좁히는 데 참여: 의료·법률 지식이 없는 환자가 청구 전후에 겪는, 소비자와 보험사 간 약관 해석의 간극",
            "기획서의 모든 수치를 금감원 원문 표와 대조해 검증 — 금융민원 중 보험 49%, 그중 지급 판단 58.6% — 맞지 않는 수치는 수정",
            "기존 서비스 대비 차별성 주장을 비교표 셀 단위로 검증하고, 비교에서 빠진 직접 경쟁 서비스를 찾아냄",
            "심사위원 관점에서 기획서·기능명세서를 검토하고 v4.7부터 v5.2까지 개정해 제출",
            "시연 페르소나 1(모야모야병, CI보험) 정의, 마이데이터 기반 상담 흐름 설계",
          ],
        },
        {
          heading: "개발도 맡은 부분: 개인정보 가드레일",
          bullets: [
            "고유식별정보는 저장·모델 전달 전에 차단하고, 이름·전화번호·이메일은 자리표시자로 바꿔 상담이 이어지게 함",
            "개인정보 탐지기(Presidio vs. OPF)를 비교하고, 한국어 이름 탐지에 KoELECTRA-small + spaCy 토큰화 조합을 채택",
            "평가: 이름 재현율 178/200 (89.0%), 정상 보험 질문 오탐 0/40, 라벨 재현율 21/21, 차단 대상 유출 0건, 문장당 7.6ms",
          ],
        },
        {
          heading: "답을 만드는 방식",
          bullets: [
            "LangGraph 오케스트레이터가 질의 이해, LLM-as-a-Judge 재순위화, 약관 분석, 쟁점 진단, 정보 충분성 검증, 행동 안내로 단계를 나눔",
            "Milvus에서 벡터·키워드 검색 결과를 RRF로 합치고, 후보 10개를 재순위화해 5개로 좁힘",
            "Corrective RAG 방식의 충분성 검증으로 재검색·추가 질문·답변 중 경로를 선택 (재검색 최대 2회, 회차당 질문 최대 3개)",
            "모델은 발췌문 ID만 반환하고, 서버가 원문과 대조해 확인되지 않은 인용은 제거",
          ],
        },
        {
          heading: "데이터",
          bullets: [
            "KCD: 22개 대분류를 너비 우선 탐색으로 수집해 질병코드 18,090개, 표제어 43,948개로 구조화 — 일상 병명을 사례·약관의 의학 용어와 연결",
            "분쟁 사례: 금감원 분쟁조정사례집(Qwen2.5-VL OCR), 분쟁조정결정례(HWP), 법원 판례를 사실관계·주장·판단·결론으로 분리",
            "약관: 보험사 약관을 표를 보존한 조문 단위로 파싱, 분쟁조정사례 216건을 검토해 반복되는 의료 쟁점 도출",
          ],
        },
      ],
    },
    {
      galleryNote: "모든 화면은 샘플 데이터입니다.",
      image: { alt: "샘플 프로필이 보이는 orbit 동문 디렉터리 화면" },
      gallery: [
        { caption: "My Profile — LinkedIn에서 가져오고 기술·관심사 추가" },
        { caption: "Directory — 역할·기술·미션으로 동문 검색과 필터" },
        { caption: "Profile Detail — 연락 전에 경력과 관심사 확인" },
        { caption: "Activity Feed — 직무 변경, 새 기술, 프로젝트 소식" },
        { caption: "관계 시각화 (준비 중)" },
        { caption: "Synergy Simulator (준비 중)" },
      ],
      subtitle: "목적 기반으로 연결되는 TechCamp 동문 네트워킹 플랫폼",
      org: "TechCamp Korea 2026 · 주한미국대사관",
      roleTag: "기획 · 개발",
      role: "기획 · 개발 — 제품 범위, 사용자 흐름, LinkedIn 동기화, 활동 피드, 관리자 기능, 배포",
      summary: "역할·기술·미션으로 동문을 찾고, 지금 무엇을 하는지 확인한 뒤 연결을 시작합니다. LinkedIn 동기화로 최신 상태가 유지되는 폐쇄형 디렉터리입니다.",
      problem: "행사가 끝나면 대부분의 인연은 사라집니다. 소속과 역할은 바뀌고, 프로필은 금방 낡고, 지금 하려는 일에 맞는 동문 한 명을 찾기가 어렵습니다.",
      approach: "모든 프로필을 역할·기술·관심사로 검색할 수 있게 하고, LinkedIn으로 최신화하고, 경력·현재 맥락·협업 가능 여부까지 보여줘 이유 있는 연결을 시작하게 했습니다.",
      metrics: [{ label: "핵심 기능 운영 중" }, { label: "단계 온보딩" }, { label: "커밋 반영" }],
      links: [{ label: "서비스 바로가기" }, {}],
      sections: [
        {
          heading: "주요 기능",
          bullets: [
            "My Profile: LinkedIn URL로 기본 정보를 가져오고 기술·관심사·협업 가능 여부를 입력",
            "Directory: 키워드 검색과 역할·기술·미션 필터로 동문 탐색",
            "Profile Detail: 연락 전에 상대의 경력과 관심사를 확인하고 이메일·Instagram으로 연결",
            "Activity Feed: 동문의 직무 변경, 새 기술, 프로젝트 소식을 한 타임라인에서 확인",
            "온보딩: 가입 → 승인 확인 → LinkedIn 연동 → 프로필 완성 → 목적 기반 탐색",
          ],
        },
        {
          heading: "내 역할: 기획",
          bullets: [
            "팀과 함께 문제 정의: 행사 후 프로필이 낡고 목적으로 검색할 방법이 없어 인연이 흩어진다",
            "탐색 → 확인 → 연결의 핵심 흐름과 기능 범위 설계: 지금은 My Profile·Directory·Profile Detail·Activity Feed, 다음은 관계 시각화·Synergy Simulator",
            "데이터가 계속 최신으로 유지되도록 온보딩 설계: 가입 → 승인 → LinkedIn 연동 → 프로필 완성 → 목적 기반 탐색",
          ],
        },
        {
          heading: "내 역할: 개발",
          bullets: [
            "LinkedIn 프로필 스크래퍼와 DB 연동, 회원 프로필을 최신으로 유지하는 동기화 API",
            "활동 피드: 백엔드 스크래핑과 피드 API, 프론트엔드 연결",
            "관리자 허용 목록: CSV 업로드·내보내기, 인라인 편집",
            "프로필 편집의 아바타 업로드, 가입 시 입력한 LinkedIn URL이 저장되지 않던 문제 수정",
            "nginx·certbot을 포함한 운영 Docker Compose 배포",
          ],
        },
        {
          heading: "다음 단계",
          bullets: [
            "누가 누구와 연결돼 있는지 보여주는 관계 시각화",
            "Synergy Simulator: 동문 2~4명을 고르면 시너지 점수와 프로젝트 아이디어 제안",
          ],
        },
      ],
    },
    {
      title: "LLM 학습 · 평가 데이터",
      subtitle: "금융 도메인 데이터와 평가 체계",
      org: "삼성금융 AI센터",
      role: "데이터 파이프라인, 평가 체계, 채점 자동화",
      summary: "금융 도서 530권 이상으로 만든 금융 LLM 학습·평가 데이터, 그리고 '금융'이라는 라벨 하나로 끝나지 않는 평가 체계.",
      problem: "'금융' 벤치마크 점수 하나로는 모델이 보험 심사를 잘하는지, 세무를 잘하는지, 준법을 잘하는지 4개 관계사가 알 수 없었습니다.",
      approach: "원천 도서를 학습 데이터로 구조화하고, 결과를 도메인별·역량별로 읽을 수 있게 평가를 다시 설계했습니다.",
      metrics: [{ label: "금융 도서 구조화" }, { label: "관계사 도메인 매핑" }],
      sections: [
        {
          heading: "학습 데이터",
          bullets: [
            "금융 도서 530권 이상을 메타데이터·QA 쌍을 갖춘 구조화 JSON으로 변환, 중복 제거와 품질 검사",
            "생명·화재·카드·증권의 도메인 커버리지를 매핑해 빈 영역 우선순위 선정",
          ],
        },
        {
          heading: "평가 체계",
          bullets: [
            "기초: 경제, 회계, 세무, 노동법, 통계",
            "실무: 준법, 리스크 관리, 자산운용, 보험, 디지털 금융",
            "방식: 복수 정답 객관식, 단답·서술형, 유사도 채점, LLM 보조 승률",
            "데이터셋 버전 관리, 프롬프트·정답 감사, 채점 재현성 자동화",
          ],
        },
      ],
    },
    {
      title: "사내 LLM QA 서비스",
      subtitle: "사내 규정·매뉴얼 대상 RAG",
      org: "삼성증권",
      role: "서비스 운영",
      summary: "사내 규정, 매뉴얼, 복지 문서를 대상으로 한 RAG 기반 LLM QA 서비스와 번역·요약 기능을 운영했습니다.",
      problem: "직원들이 찾는 답은 긴 사내 문서 깊숙이 묻혀 있었습니다.",
      approach: "규정·매뉴얼·복지 문서 RAG에 한영 번역과 요약을 더했습니다.",
      metrics: [{ label: "일 처리 건수" }, { label: "사용자" }],
      sections: [
        { heading: "운영", bullets: ["사내 규정, 매뉴얼, 복지 문서 대상 RAG", "한영 번역과 문서 요약"] },
      ],
    },
    {
      title: "데이터 플랫폼 운영",
      subtitle: "전사 파이프라인과 분석 플랫폼",
      org: "삼성증권",
      role: "파이프라인·플랫폼 담당",
      summary: "삼성증권 사내 분석을 떠받치는 파이프라인과 플랫폼을 운영했습니다.",
      problem: "분석가와 운영 중인 LLM 서비스 모두 데이터가 제때 들어오고 쿼리가 빨라야 했습니다.",
      approach: "DW→Hadoop 파이프라인과 분석가들이 쓰는 플랫폼을 매일 책임지고 운영했습니다.",
      metrics: [{ label: "형태소 분석 정확도 (인턴 과제)" }],
      sections: [
        {
          heading: "파이프라인",
          bullets: [
            "DW→Hadoop 전사 파이프라인 운영과 일일 모니터링",
            "실시간 거래 상위 종목 랭킹 서비스 운영 검증",
            "Hive/Impala 파티션 튜닝으로 쿼리 속도 개선과 리소스 절감",
          ],
        },
        { heading: "플랫폼", bullets: ["Cloudera CDSW, NiFi, Kafka 관리", "Docker 이미지로 분석 환경 표준화"] },
      ],
    },
  ],

  ui: {
    nav: { home: "홈", about: "소개", experience: "경력", projects: "프로젝트", contact: "연락처" },
    chrome: {
      brandTag: "AI 엔지니어 · 서울",
      theme: "색상 테마 전환",
      lang: "EN",
      langLabel: "영어로 보기",
      menu: "메뉴",
      top: "맨 위로",
      footer: "AI 엔지니어 포지션을 찾고 있습니다.",
      resume: "이력서 PDF",
      work: "업무",
      side: "사이드 프로젝트",
      ongoing: "진행 중",
    },
    titles: {
      home: "문예진 — AI 엔지니어",
      about: "소개 — 문예진",
      experience: "경력 — 문예진",
      projects: "프로젝트 — 문예진",
      contact: "연락처 — 문예진",
      404: "페이지 없음 — 문예진",
    },
    home: {
      intro: "안녕하세요, <a href=\"experience.html\">삼성금융 AI센터</a>의 AI 엔지니어 문예진입니다. 규제가 촘촘한 금융사 안에서도 제대로 굴러가는 AI 에이전트와 플랫폼을 만듭니다.",
      sub: "AI 플랫폼 PoC 담당 · <a href=\"experience.html\">삼성증권</a>에서 파견 근무 중",
      photoAlt: "문예진 사진",
      workTitle: "대표 작업",
      readCase: "자세히 보기",
      allProjects: "프로젝트 12개 전체 보기",
      alsoTitle: "글쓰기 · 강의 · 커뮤니티",
      alsoLede: "만드는 일 말고 하는 일들.",
      now: "현재", nowV: "AI 엔지니어 · PoC 담당, 삼성금융 AI센터",
    },
    about: {
      eyebrow: "소개",
      h1: "데이터 엔지니어로 시작해, 지금은 AI 엔지니어.",
      p1: "삼성증권에서 분석가들과 운영 중인 LLM 서비스가 의존하는 파이프라인과 플랫폼을 맡으며 일을 시작했습니다. 그 경험이 지금 AI를 다루는 방식을 만들었습니다. 어려운 문제는 대부분 모델이 아니라 데이터, 평가, 운영 환경에 있다는 것입니다.",
      p2: "2025년부터는 삼성생명에 있는 삼성금융 AI센터에 파견되어 생명·화재·카드·증권을 함께 봅니다. LLM 학습·평가 데이터를 만들고, 플랫폼 결정으로 이어지는 아키텍처 PoC를 진행하고, AI 에이전트용 검증 스킬 허브 같은 공용 자산을 만듭니다.",
      p3: "회사 밖에서는 작은 팀과 함께 만듭니다. TechCamp Korea 2026의 폐쇄형 동문 네트워크, 2026 금융 AI Challenge의 보험 청구 도우미가 그 예입니다. 가르치는 일도 합니다. 신입사원 AI 강의를 하고, 대학 시절에는 BOAZ 회장으로 매주 데이터 엔지니어링 세션을 열었습니다.",
      p4: "일을 떠나면 여행으로 충전합니다. 어디든 카메라를 들고 가고, 근처에 바다가 있으면 들어갑니다.",
      photoAlt: "문예진 사진",
      caption: "문예진 · Jin Y. Moon · 서울",
      how: "일하는 방식", howH: "자꾸 돌아가게 되는 세 가지.",
      skills: "스킬", skillsH: "튜토리얼이 아니라 실제 운영에서 쓰는 도구들.",
      education: "학력",
      leadership: "리더십",
      offClock: "일 밖의 나",
      shots: "직접 찍은 사진",
      aiTitle: "AI가 본 나",
      aiLede: "Claude와 ChatGPT에게 그동안의 대화를 바탕으로 저를 묘사해 달라고 했습니다. 색은 엇갈렸고, 동물은 둘 다 여우였습니다.",
      strength: "장점",
      watch: "조심할 점",
      wordsLabel: "ChatGPT가 남긴 세 단어",
      words: ["충분해,", "즐겨,", "믿어."],
      aiClose: "둘 다 완벽주의를 짚었습니다. 그래서 요즘은 물속에서 여유를 연습합니다.",
    },
    experience: {
      eyebrow: "경력",
      h1: "금융 데이터와 AI, 4년.",
      lede: "2023년부터 삼성증권 소속이고, 2025년부터 그룹의 삼성금융 AI센터에 파견되어 일하고 있습니다. 소속은 그대로, 범위는 한 회사의 파이프라인에서 네 관계사의 AI 플랫폼으로 넓어졌습니다.",
      writing: "글쓰기",
      teaching: "강의 · 교육",
      teachingH: "만든 것을 사람들이 실제로 쓰게 하는 일.",
    },
    projects: {
      eyebrow: "프로젝트",
      h1: "제가 만든 것들.",
      lede: "AI센터와 삼성증권에서 한 업무, 그리고 회사 밖에서 팀으로 만든 프로젝트입니다. 사내 프로젝트는 공개 가능한 수준까지만 적었습니다.",
      all: "전체", work: "업무", side: "사이드 프로젝트",
      filterLabel: "프로젝트 필터",
    },
    project: {
      crumbs: "프로젝트",
      context: "소속", period: "기간", role: "역할", links: "링크",
      internal: "사내 프로젝트 — 요청 시 설명",
      private: "비공개",
      problem: "문제", approach: "접근", stack: "스택", flow: "한눈에 보기", demo: "시연 영상", screens: "화면", sample: "모든 화면은 샘플 데이터입니다.",
      prev: "이전", next: "다음",
      notFound: "프로젝트를 찾을 수 없습니다.", back: "전체 프로젝트로 →",
    },
    contact: {
      eyebrow: "연락처",
      h1: "이야기 나눠요.",
      lede: "AI 엔지니어링, LLM 플랫폼, RAG 실무 포지션을 채용 중이라면 편하게 연락 주세요.",
      resume: "이력서", resumeV: "PDF 다운로드",
      based: "위치", basedV: "서울 · KST (UTC+9)",
    },
    notFound: { h1: "없는 페이지입니다.", back: "홈으로 →" },
  },
};

// Deep merge: objects by key, arrays by index. `over` wins on scalars.
function mergeDeep(base, over) {
  if (over === undefined) return base;
  if (Array.isArray(base) && Array.isArray(over)) return base.map((b, i) => mergeDeep(b, over[i]));
  if (base && typeof base === "object" && over && typeof over === "object") {
    const out = { ...base };
    for (const k of Object.keys(over)) out[k] = mergeDeep(base[k], over[k]);
    return out;
  }
  return over;
}

window.SITE_I18N = { en, ko: mergeDeep(en, ko) };
