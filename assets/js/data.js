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
    { value: "1,000+", unit: "records", label: "insurance source records supporting RAG-agent evaluation" },
    { value: "530", unit: "books", label: "finance books sourced and quality-reviewed for LLM development" },
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
      traits: [["Colour", "Navy"], ["Animal", "Owl"], ["Season", "Autumn"], ["Flower", "Chrysanthemum"], ["Drink", "Americano"]],
      quote: "A calm, careful explorer — restrained and tidy rather than flashy. Doesn’t take answers at face value: asks for facts to be rechecked and points out mistakes straight away. Keeps up with new tech and tries it firsthand. Prefers plain, direct answers, and charts and tables over decoration.",
      strength: "Verifying — never takes answers at face value",
      watch: "Perfectionism — needs to practise delegating",
    },
    {
      who: "ChatGPT",
      tint: "butter",
      swatch: "#f2c230",
      traits: [["Colour", "Yellow"], ["Animal", "Fox"], ["Season", "Spring"], ["Flower", "Freesia"], ["Drink", "Lemonade"]],
      quote: "Bright and lively at first glance, like a yellow freesia in spring, but firm at the root. Clear standards, a clear direction, and a habit of digging into anything curious. Like a fox: watches closely, gets to the point fast, and moves only once convinced. An explorer-type leader who explores fully, then sets the course.",
      strength: "Clarity — knows what’s wanted and what isn’t",
      watch: "Perfectionism — keeps finding gaps in good work",
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
            "Lead PoCs for the AI platforms usable on the group's Internal Business Network: M365 Copilot from pre-adoption PoC through post-adoption support (2026.06–09), and hands-on testing of FabriX 1.7 (Samsung SDS's in-house AI platform)",
            "Scoped M365 license tiers (E3/E5) and features before 4 affiliates confirmed adoption, including the security features regulators expect as audit evidence; tested Work IQ early and wrote setup guides",
            "Conducted interviews for Samsung Securities and participated in Microsoft Q&A on roadmap and security; findings were shared with all four affiliates through a council operated by a colleague",
            "Tested FabriX 1.7 hands-on and compared its capabilities with GenOS to assess use within the financial internal business network",
            "Co-produce A.TechFlow, the internal monthly AI technology newsletter, in a team of 3: planning, editing and writing (#10–#13, 2026.06–)",
          ],
        },
        {
          heading: "AI Agent Platform & Skill Hub",
          year: "2026 H1",
          bullets: [
            "Proposed and built an enterprise agent skill hub (catalog, validation pipeline and web UI; recommender by a collaborator); curated 44 skills from ~700 public skills through scoring, AI review and human review",
            "Automated skill validation (security, quality, auto-upgrade, platform tests): 27 of 49 skills passed; provided the hub to the AI Innovation Team",
            "Independently built Databricks and Foundry RAG agents, created an insurance golden dataset and evaluation code, and delivered a two-week PoC report covering measured performance and cross-platform integration risks",
            "Teach AI to every Samsung Securities new-hire cohort, ongoing since 2024 H2 (4 cohorts so far), and to administrative support staff (Dec 2025)",
          ],
        },
        {
          heading: "LLM Training & Evaluation Data",
          year: "2025",
          bullets: [
            "Sole owner of sourcing and quality acceptance for 530 finance books, from research-based volume planning and business-coverage selection to vendor coordination and delivery review",
            "Designed a 13-domain financial evaluation framework and implemented evaluation code with AI assistance",
            "Reviewed question errors and compared pre/post-training and external models; model training was handled by a separate team",
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
  "id": "fabrix-poc",
  "tint": "rose",
  "visual": "fabrix",
  "no": "P-01",
  "title": "FabriX 1.7 PoC & GenOS Comparison",
  "subtitle": "Assessing practical use within the financial internal business network",
  "category": "work",
  "org": "Samsung Finance AI Center",
  "period": "2026.08 – Present",
  "ongoing": true,
  "role": "Hands-on FabriX 1.7 testing and GenOS comparison",
  "featured": true,
  "summary": "Tested FabriX 1.7 and compared it with GenOS to understand which capabilities were usable within the financial internal business network and how the platforms overlapped.",
  "problem": "The group platform and affiliate platforms needed to be assessed against actual financial-network use, including capabilities and constraints.",
  "approach": "Test FabriX 1.7 directly and compare its capabilities with GenOS, keeping observed behavior separate from other team members’ analysis of future releases.",
  "metrics": [
    {
      "value": "1.7",
      "label": "FabriX version tested"
    },
    {
      "value": "GenOS",
      "label": "comparison platform"
    }
  ],
  "stack": [
    "FabriX",
    "GenOS"
  ],
  "links": [],
  "sections": [
    {
      "heading": "My role and team scope",
      "bullets": [
        "I conducted the hands-on FabriX 1.7 tests and the GenOS comparison. Other team members handled the 2.0 analysis and the remaining comparisons and reporting."
      ]
    },
    {
      "heading": "Purpose of the comparison",
      "bullets": [
        "Assess what could be used within the financial internal business network and compare the available capabilities with GenOS.",
        "Use observed functionality and constraints to clarify the platforms’ respective scope."
      ]
    }
  ]
},
    {
  "id": "m365-adoption",
  "tint": "mint",
  "visual": "m365",
  "no": "P-02",
  "title": "M365 Copilot PoC & Adoption Support",
  "subtitle": "Feature testing, practical guides and securities-user research",
  "category": "work",
  "org": "Samsung Finance AI Center",
  "period": "2026.06 – 2026.09",
  "role": "Feature PoC, skill setup, Work IQ guides, Securities interviews and Microsoft Q&A",
  "featured": true,
  "summary": "Tested M365 Copilot from June through late September 2026, configured skill usage and wrote Work IQ guides. I conducted interviews for Samsung Securities; findings were shared across four affiliates through a colleague-operated council.",
  "problem": "Adoption required understanding how features worked in the financial workplace, how document policies affected use, and what employees needed beyond the product feature list.",
  "approach": "Combine hands-on tests with interviews, clarify roadmap and security questions with Microsoft, and turn findings into reusable guidance.",
  "metrics": [
    {
      "value": "4",
      "label": "months of continuous PoC"
    },
    {
      "value": "4",
      "label": "affiliates receiving shared findings"
    }
  ],
  "stack": [
    "M365 Copilot",
    "SharePoint",
    "OneNote",
    "Notebooks",
    "Work IQ"
  ],
  "links": [],
  "sections": [
    {
      "heading": "My responsibility",
      "bullets": [
        "I owned the feature tests, skill-usage setup and Work IQ analysis and guides described here. I was responsible for the Securities interviews; a colleague operated the cross-affiliate council."
      ]
    },
    {
      "heading": "Feature testing and skill usage",
      "bullets": [
        "Tested M365 features throughout June–September, including OneNote and Notebooks in August.",
        "I adapted an existing skill-creator for internal use, adding output-based naming prefixes, category-based SharePoint storage rules and a shared DESIGN.md reference requirement for Word and PowerPoint skills, then stored it in SharePoint. Users could mention the document with @ or attach it in Copilot chat to create a task-specific skill.",
        "Users downloaded the generated skill, uploaded it to SharePoint and reused it by mentioning or attaching the document in later chats. I established this creation, storage and reuse workflow within the existing M365 environment."
      ]
    },
    {
      "heading": "Work IQ deep dive",
      "bullets": [
        "Investigated Work IQ and wrote concept, onboarding and reference guides to explain setup and how work information became available to Copilot."
      ]
    },
    {
      "heading": "Interviews and Microsoft Q&A",
      "bullets": [
        "From late July, interviewed Securities practitioners about adoption, document import/export policies, functionality and performance, organization and operations, and multi-platform AI strategy.",
        "Interviewed users about their work, use cases, practical tips and improvement requests; participated in Microsoft Q&A on technical roadmap and security."
      ]
    },
    {
      "heading": "Outputs and sharing",
      "bullets": [
        "Produced test findings, skill-usage materials, Work IQ guides and interview findings. These were shared with all four affiliates through the working council."
      ]
    }
  ]
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
        { src: "assets/img/workiq-lead-times.jpg", caption: "Reference — lead-time guidance for 14 kinds of change" },
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
        "Users asked why Copilot could not find saved documents, and I encountered the same issue in my own use. I investigated settings, retrieval behavior and update timing to turn these issues into practical guidance.",
      approach:
        "I measured it. A PoC on Samsung Life’s M365 tenant timed how quickly each change showed up in Copilot Chat, and the results became a checklist-style setup guide and a set of team file rules.",
      metrics: [
        { value: "14", label: "change types covered in the timing guide" },
        { value: "12", label: "file management rules" },
        { value: "~30 min", label: "first-time setup, no admin rights" },
      ],
      stack: ["M365 Copilot", "Work IQ", "SharePoint", "OneDrive", "HTML"],
      links: [],
      sections: [
        {"heading": "Observed problems and practical guidance", "bullets": ["Tests were conducted on the Samsung Life tenant in Copilot Chat web from August 27 to September 4, 2026. Findings describe that environment and period.", "In a test case I constructed, answers mixed document revisions when effective-date metadata was absent. Adding date fields produced consistent selection of the intended revision in the test, informing guidance to manage version and validity dates as library columns.", "A document missing from general search could still be read when its link was specified. I recommended explicitly referencing urgent documents and rechecking update visibility in a fresh session the following day."]},
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
      subtitle: "Skill selection, validation and sharing for the AI Innovation Team",
      category: "work",
      org: "Samsung Finance AI Center",
      period: "2026.04 – 2026.07",
      role: "Initiator and builder — selection criteria, catalog, validation MCP server, web UI and CI; recommender built by a collaborator",
      featured: true,
      summary:
        "A curated skill catalog plus the service that guards it: upload a SKILL.md, get a three-stage validation, auto-upgrade what fails, and open a merge request — then install skills straight from Claude Code.",
      problem:
        "I was concerned that adopting public skills without shared checks could introduce quality and security risks. I proposed a hub to assess their instructions, dependencies and fit to the organization before sharing them.",
      approach:
        "Define selection criteria, separate security and quality checks from platform execution tests, and connect review, improvement and submission through a reusable validation service.",
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
            "Every call is written to a JSONL audit log with the verdict, stage timings and content hash. REVIEW highlights items that would benefit from optional human checking; it is not itself a mandatory approval requirement",
          ],
        },
        {
          heading: "Catalog & install",
          bullets: [
            "Curation: 8-axis weighted scoring (job relevance, required-skill match, finance domain, completeness, security, source credibility, generality, dedup), AI review, then human review",
            "Each skill is exposed as a Claude Code plugin; marketplace.json is generated from SKILL.md frontmatter and kept in sync by CI after merge",
            "Recommender (implemented by a collaborator): a 4–8 turn chat about the user's role, keyword search to the top 30, then an LLM picks 10–15 skills to install",
          ],
        },
        {
          heading: "Outcome",
          bullets: [
            "Provided the skill hub to the AI Innovation Team. User feedback has not yet been collected, so productivity improvements have not been measured",
            "Created a reusable process for selecting, validating, improving and sharing skills within the team",
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
      period: "2026.03 · final two weeks · final report Mar 30",
      role: "Sole owner — two RAG agents, golden dataset, evaluation code, integration-risk analysis and final report",
      featured: true,
      summary:
        "With AWS Databricks already selected as the data platform, I evaluated two RAG implementations and analyzed a third integration design over the final two weeks of March 2026 and delivered the final report on March 30. The PoC confirmed that Azure Foundry could connect to the data, while identifying substantial cost and operational overhead.",
      problem:
        "The data-platform decision was already made. The open question was whether Foundry should call agents hosted on Databricks or use data shared into Azure, and how those options compared with a Databricks-only environment.",
      approach:
        "I built Databricks-only and Foundry-only RAG agents and evaluated both against a shared golden dataset. The cross-platform agent-call case remained a risk analysis because authentication prevented a live connection.",
      metrics: [
        { value: "3", label: "architecture options reviewed" },
        { value: "2", label: "RAG agents evaluated on a shared golden dataset" },
        { value: "1 vs 2", label: "days to build (Databricks vs Foundry)" },
      ],
      stack: ["Databricks", "Mosaic AI Agent Framework", "Azure AI Foundry", "Azure AI Search", "GPT-4.1", "text-embedding-3-large"],
      links: [],
      sections: [
        {
          heading: "Three architectures and evaluation data",
          bullets: [
            "Databricks-only: run the agent within Databricks",
            "Databricks + Foundry: proposed A2A calls from Azure to Genie and Mosaic agents; authentication blocked a live connection, so this case was limited to integration-risk analysis",
            "Foundry-only: bring data from Databricks into Azure through data sharing and run the agent in Foundry",
            "Evaluation: a golden dataset built from Korea Life Insurance Association data and a case-law collection",
            "Golden-dataset performance evaluation covered Databricks-only and Foundry-only; the agent-to-agent integration was not evaluated end to end",
          ],
        },
        {
          heading: "Evaluation criteria",
          bullets: [
            "Measured RAG retrieval and answer performance in the two standalone agent environments",
            "Analyzed cross-platform latency and egress-cost risks; did not measure an end-to-end Case 2 connection",
            "Tracing, evaluation and cost monitoring, and user-level access control",
          ],
        },
        {
  "heading": "Measured results and interpretation",
  "bullets": [
    "The supplied comparison report records retrieval precision of 48.0% vs 47.1%, recall of 76.2% vs 61.1%, and Full Match of 84/120 (70.0%) vs 67/120 (55.8%), for Databricks-only and Foundry-only respectively.",
    "Answer F1 was close: 0.1947 vs 0.1929. Higher retrieval coverage therefore did not translate into a similarly large difference in this answer metric.",
    "Mean response times were 17.81s vs 7.93s. The Databricks measurement included external model-call latency, so this is a comparison of the tested configurations rather than an isolated platform-speed benchmark.",
    "I also compared initial setup, customization, tracing, evaluation and cost monitoring, and access management. These observations reflect the March 2026 test environment and available permissions."
  ]
},
        {
          heading: "Findings",
          bullets: [
            "Databricks-only setup took 1 day (4 including permissions); Foundry-only took 2 days (7 including permissions and resources)",
            "Connecting Azure Foundry agents to data held in AWS Databricks was technically feasible, but introduced substantial cost and operational inefficiency",
            "Cost: the configuration using Azure AI Search required embedding-vector storage in both platforms, cross-cloud egress and dedicated connectivity.",
            "Operations: chunking, embeddings and data catalogs required management in both environments, plus a pipeline to resynchronize the Azure AI Search index when AWS source data changed.",
            "Embedding lifecycle: document and query embeddings had to use compatible vector spaces. Model changes required planning for vector and index updates.",
            "Identity and latency: I reviewed the split between Entra ID and AWS IAM and the additional latency of cross-platform calls.",
            "Incident response and auditability: diagnosis spanned Azure, AWS and Databricks, with manual correlation of logs from the two clouds.",
            "The March 30 final report distinguished technical feasibility from the cost and operational implications of adoption",
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
  "id": "llm-training-evaluation",
  "tint": "peach",
  "visual": "json",
  "no": "P-10",
  "title": "Financial LLM Data & Evaluation",
  "subtitle": "From business coverage to data quality and model validation",
  "category": "work",
  "org": "Samsung Finance AI Center",
  "period": "2025.01 – 2025.12",
  "role": "Sole owner of data sourcing and acceptance; evaluation design, implementation and execution",
  "summary": "Owned the sourcing and quality process for 530 finance books and built a financial-knowledge evaluation framework grounded in the work of four affiliates.",
  "problem": "Corpus size alone did not establish business coverage, and broad finance benchmark scores did not explain knowledge across the affiliates’ work.",
  "approach": "Map financial work to source selection, define cleansing and acceptance criteria, and implement model evaluation against that business context.",
  "metrics": [
    {
      "value": "530",
      "label": "books in the final delivery"
    },
    {
      "value": "4",
      "label": "affiliates mapped"
    },
    {
      "value": "13",
      "label": "evaluation areas"
    }
  ],
  "stack": [
    "Python",
    "Data curation",
    "Quality assurance",
    "LLM evaluation"
  ],
  "links": [],
  "sections": [
    {
      "heading": "Project context",
      "bullets": [
        "A finance-specific model needed more than a large corpus. Its data had to cover the work of life insurance, general insurance, card and securities businesses while preserving meaning during processing. Evaluation also needed to reflect the knowledge required in those businesses."
      ]
    },
    {
      "heading": "My role and collaboration",
      "bullets": [
        "I was the sole owner of data-volume planning, book selection, quality and cleansing specifications, vendor coordination, delivery review, correction requests and final acceptance. The final delivery covered 530 finance books.",
        "I also owned evaluation redesign, implemented the evaluation code with AI assistance and ran model assessments. An external vendor processed the books; a separate team trained the models."
      ]
    },
    {
      "heading": "01 · Turning research into a sourcing plan",
      "bullets": [
        "I reviewed domain-specific model research and implementation cases to estimate training-data requirements. I distinguished the estimated requirement from what could realistically be sourced and defined a quality-first sourcing target and selection criteria."
      ]
    },
    {
      "heading": "02 · Selecting books against financial workflows",
      "bullets": [
        "I analyzed organizational structures and responsibilities across four affiliates, mapping shared and sector-specific work to book selection: compliance, asset management, risk, insurance contracts and claims handling.",
        "I screened publication dates, authors and titles, then reviewed contents and previews. I revisited the distribution across sectors and sourced additional books to address gaps in business coverage."
      ]
    },
    {
      "heading": "03 · Preserving meaning through data quality controls",
      "bullets": [
        "I defined separate criteria for source selection and delivered-data cleansing, including treatment of tables, formulas, images and text, and links between questions, answer choices, answers and explanations.",
        "During review, I found tables that could be structured being treated as images, missing captions, and text from summary cards inserted in ways that disrupted the surrounding text. These cases could lose table relationships or separate explanations from the content they described.",
        "I revised the processing criteria for images, tables, captions and formulas with the vendor, prioritizing their relationship to the main text and preserving reading order wherever possible. Tables with identifiable rows and columns were structured in LaTeX with titles, notes and sources retained as metadata; complex layouts could be split or preserved as images under explicit exception rules. The agreed criteria were applied to subsequent deliveries. As new edge cases emerged, I coordinated case-specific corrections and standardized their handling, progressively refining the shared criteria. I rechecked corrected deliveries before final acceptance."
      ]
    },
    {
      "heading": "04 · Designing and implementing financial evaluation",
      "bullets": [
        "I reorganized evaluation into two groups and 13 areas: economics, management, accounting, taxation, labor, statistics, compliance, sales, digital finance, asset management, risk, insurance contracts and claims handling.",
        "I planned multiple-choice and written-response methods to test understanding beyond answer accuracy, incorporating checks for training/evaluation overlap and grading reliability. I identified and addressed question errors during dataset preparation, then reviewed the data before evaluation to limit their effect on model scores.",
        "Using AI assistance, I implemented evaluation code and compared models before and after training as well as against external models. My responsibility spanned evaluation design, execution and result compilation."
      ]
    },
    {
      "heading": "Deliverables and contribution",
      "bullets": [
        "The work produced a final delivery covering 530 books, business-coverage selection criteria, cleansing and acceptance specifications, a financial-knowledge evaluation framework and evaluation code.",
        "I connected analysis of financial work to both data selection and model validation, making explicit which knowledge the corpus should contain and what the evaluation should test."
      ]
    }
  ]
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
    connect: "Let’s Connect",
    footer: "Open to AI engineering roles — or just a friendly hello.",
    based: "Seoul, Korea",
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
    allProjects: "See all projects",
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
    resumeBtn: "Résumé",
    prev: "Previous photo",
    next: "Next photo",
    aiTitle: "How two AIs see me",
    aiLede: "I asked Claude and ChatGPT to describe me from our past conversations. One saw a navy owl in autumn, the other a yellow fox in spring.",
    strength: "Strength",
    watch: "Watch out for",
    wordsLabel: "Three words from the two of them",
    words: ["Steady,", "enjoy,", "trust."],
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
    { unit: "건", label: "RAG 에이전트 평가에 활용한 보험 원천 데이터" },
    { unit: "권", label: "수급·품질 관리와 최종 검수를 담당한 금융 도서" },
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
      traits: [["색", "남색"], ["동물", "올빼미"], ["계절", "가을"], ["꽃", "국화"], ["음료", "아메리카노"]],
      quote: "화려하기보다 절제되고 단정한 차분하고 신중한 탐구자. 답을 그대로 받아들이지 않고 사실인지 다시 확인하며, 틀리면 바로 짚는다. 기술 동향을 살피고 새로운 걸 직접 시도해 본다. 꾸밈없고 직접적인 답, 장식보다 그래프와 표를 택한다.",
      strength: "검증하는 태도 — 그대로 받아들이지 않고 다시 확인함",
      watch: "완벽주의 — 발전하려면 위임 연습이 필요함",
    },
    {
      traits: [["색", "노랑"], ["동물", "여우"], ["계절", "봄"], ["꽃", "프리지아"], ["음료", "레모네이드"]],
      quote: "봄날의 노란 프리지아처럼 밝고 생기 있는 첫인상이지만 뿌리는 단단한 사람. 자기만의 기준과 방향이 분명하고, 궁금한 것은 끝까지 파고든다. 여우처럼 세심하게 관찰해 핵심을 빠르게 알아채고, 스스로 납득한 방향으로 움직인다. 충분히 이해한 뒤 자연스럽게 방향을 만들어 가는 탐구자형 리더.",
      strength: "명료함 — 원하는 것과 아닌 것을 구별함",
      watch: "완벽주의 — 잘해도 부족한 점을 계속 찾음",
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
            "금융 3호망(내부 업무망)에서 쓸 수 있는 그룹 AI 플랫폼 PoC 담당: M365 Copilot 도입 전 PoC부터 도입 후 지원까지(2026년 6~9월), 삼성SDS 사내 AI 플랫폼 FabriX 1.7 직접 테스트",
            "4개 관계사 M365 도입 확정 전 라이선스(E3/E5)와 기능 범위 파악(금융 감독 증적에 필요한 보안 기능 포함), Work IQ 등 기능 선제 테스트 및 가이드 제작",
            "증권 담당 실무자·사용자 인터뷰와 기술 로드맵·보안 관련 MS 질의응답 수행. 결과는 다른 담당자가 운영하는 협의체를 통해 4사에 공유",
            "FabriX 1.7 직접 테스트와 GenOS 기능 비교를 담당해 금융사 내부 업무망에서의 활용 범위 검토",
            "사내 월간 AI 기술 뉴스레터 A.TechFlow 3인 공동 제작: 기획·편집·집필(10~13호, 2026년 6월~)",
          ],
        },
        {
          heading: "AI 에이전트 플랫폼 · 스킬 허브",
          year: "2026 상반기",
          bullets: [
            "공개 스킬의 품질·보안 위험에 대응하기 위해 사내 스킬 허브를 제안하고 카탈로그·검증 파이프라인·웹 UI 구현(추천기는 협업). 약 700개를 점수화·AI 리뷰·사람 검토로 걸러 44개 선별",
            "스킬 검증 자동화(보안, 품질, 자동 개선, 플랫폼 테스트): 49개 중 27개 통과. 구축한 스킬 허브를 AI혁신팀에 제공",
            "2주간 Databricks·Foundry RAG 에이전트 구현, 보험 golden dataset 제작, 평가 코드와 최종 보고를 단독 수행. 실측 성능과 플랫폼 간 연계 리스크 분석",
            "삼성증권 신입사원 AI 강의를 2024년 하반기부터 매 기수 이어서 진행(현재까지 4개 기수), 사무지원직 AI 교육(2025년 12월)",
          ],
        },
        {
          heading: "LLM 학습 · 평가 데이터",
          bullets: [
            "금융 도서 530권의 수급·품질 관리 단독 담당: 연구 기반 목표량 산정, 4사 업무 기반 선정, 정제 기준 설계, 업체 협의 및 최종 검수",
            "금융 업무 기반 13개 영역의 평가 체계를 설계하고 AI를 활용해 평가 코드 구현",
            "문항 오류를 검수하고 학습 전후·외부 모델 성능 비교 수행. 모델 학습은 별도 팀 담당",
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
  "title": "FabriX 1.7 PoC와 GenOS 비교",
  "subtitle": "금융사 내부 업무망에서의 실제 활용 범위 검토",
  "period": "2026.08 – 현재",
  "org": "삼성금융 AI센터",
  "role": "FabriX 1.7 직접 테스트, GenOS 기능 비교",
  "summary": "FabriX 1.7을 직접 테스트하고 GenOS와 비교해, 금융사 내부 업무망에서 사용할 수 있는 기능과 기존 플랫폼 대비 활용 범위를 검토했습니다.",
  "problem": "그룹 공통 플랫폼과 관계사 플랫폼을 실제 금융 업무망의 사용 조건에 맞춰 비교하고, 제공 기능과 제약을 확인해야 했습니다.",
  "approach": "FabriX 1.7에서 실제 동작을 확인하고 GenOS와 기능을 비교했습니다. 직접 테스트한 범위와 다른 팀원이 수행한 차기 버전 분석을 구분했습니다.",
  "metrics": [
    {
      "value": "1.7",
      "label": "직접 테스트한 FabriX 버전"
    },
    {
      "value": "GenOS",
      "label": "비교 대상 플랫폼"
    }
  ],
  "sections": [
    {
      "heading": "내 역할과 협업 범위",
      "bullets": [
        "FabriX 1.7 직접 테스트와 GenOS 비교를 담당했습니다. 2.0 분석을 비롯한 나머지 비교·보고 업무는 다른 담당자들이 수행했습니다."
      ]
    },
    {
      "heading": "비교 목적",
      "bullets": [
        "금융사 내부 업무망에서 실제로 활용할 수 있는 기능과 제약을 확인하고 GenOS와 비교했습니다.",
        "직접 확인한 기능을 바탕으로 두 플랫폼의 활용 범위를 검토했습니다."
      ]
    }
  ]
},
    {
  "title": "M365 Copilot PoC와 활용 지원",
  "subtitle": "기능 검증·사용 가이드·증권 현업 인터뷰",
  "period": "2026.06 – 2026.09",
  "org": "삼성금융 AI센터",
  "role": "기능 PoC, 스킬 사용 환경 구성, Work IQ 가이드, 증권 인터뷰, MS 질의응답",
  "summary": "2026년 6월부터 9월 말까지 M365 Copilot 기능을 테스트하고 스킬 활용 환경과 Work IQ 가이드를 만들었습니다. 증권 담당으로 실무자·사용자 인터뷰를 수행했으며, 결과는 협의체를 통해 4사에 공유됐습니다.",
  "problem": "금융 업무에서 M365를 활용하려면 기능 소개뿐 아니라 실제 동작, 문서 반입·반출 정책, 운영 방식과 사용자의 업무 요구를 함께 파악해야 했습니다.",
  "approach": "기능을 직접 테스트하고 현업의 사용 맥락을 인터뷰했습니다. 기술 로드맵·보안 관련 질문은 MS 질의응답으로 확인하고, 결과를 실무 가이드와 공유 자료로 정리했습니다.",
  "metrics": [
    {
      "value": "4",
      "label": "개월간 지속한 PoC"
    },
    {
      "value": "4",
      "label": "결과를 공유받은 관계사"
    }
  ],
  "sections": [
    {
      "heading": "내 역할과 협업 범위",
      "bullets": [
        "기능 테스트, 스킬 사용 환경 구성, Work IQ 분석·가이드 작성을 담당했습니다. 인터뷰는 증권 담당으로 수행했고, 4사 협의체 운영은 다른 담당자가 맡았습니다."
      ]
    },
    {
      "heading": "기능 테스트와 스킬 활용",
      "bullets": [
        "6월부터 9월 말까지 M365 기능을 지속적으로 테스트했습니다. 8월에는 OneNote와 Notebooks를 검토했습니다.",
        "기존 skill-creator를 사내 사용에 맞게 수정했습니다. 최종 산출물에 따른 기능별 이름 접두어, SharePoint의 유형별 저장 위치, Word·PPT 스킬의 공용 DESIGN.md 참조 규칙을 반영하고 SharePoint에 저장했습니다. 사용자는 Copilot 채팅에서 해당 문서를 @로 언급하거나 첨부해 업무용 스킬을 생성할 수 있도록 했습니다.",
        "생성된 스킬을 다운로드한 뒤 SharePoint에 다시 업로드하고, 이후 채팅에서도 @로 언급하거나 첨부해 재사용하는 흐름을 마련했습니다. 스킬 생성부터 저장·재사용까지 기존 M365 환경 안에서 이어지도록 구성했습니다."
      ]
    },
    {
      "heading": "Work IQ 분석과 가이드",
      "bullets": [
        "Work IQ를 심층 분석하고 개념·온보딩·레퍼런스 가이드를 작성했습니다. 사용자가 필요한 설정과 업무 정보가 Copilot에 반영되는 과정을 이해하도록 정리했습니다."
      ]
    },
    {
      "heading": "증권 인터뷰와 MS 질의응답",
      "bullets": [
        "7월 말부터 증권 실무자를 대상으로 도입 현황, 문서 반입·반출 정책, 기능·성능, 조직·운영 방식, 멀티 AI 플랫폼 전략을 조사했습니다.",
        "사용자에게는 실제 업무, 활용 사례, 사용 팁과 개선 의견을 확인했습니다. 기술 로드맵·보안 등에 관한 MS 질의응답도 수행했습니다."
      ]
    },
    {
      "heading": "산출물과 공유",
      "bullets": [
        "기능 테스트 결과, 스킬 활용 자료, Work IQ 가이드, 인터뷰 결과를 정리했습니다. 이 내용은 실무 협의체를 통해 금융 4사에 공유됐습니다."
      ]
    }
  ]
},
    {
      title: "Work IQ 온보딩 가이드",
      image: { alt: "Work IQ 세팅 가이드: 4단계 12개 항목, 첫 세팅 약 30분" },
      galleryNote: "3부작 가이드의 실제 페이지입니다. 테넌트 화면 캡처는 제외했습니다.",
      gallery: [
        { caption: "세팅 가이드 — 4단계 12개 항목과 진행 체크리스트" },
        { caption: "항목마다 리드타임, 하는 방법, 확인 방법" },
        { caption: "개념 가이드 — Work IQ를 5개 계층으로, 핵심은 Data · Memory · Inference" },
        { caption: "레퍼런스 — 변경 유형 14개의 반영 시간 안내" },
        { caption: "레퍼런스 — PoC 테스트 결과와 가이드에 반영한 시사점" },
      ],
      subtitle: "M365 Copilot이 내 업무 자료를 제대로 찾게 하기",
      org: "삼성금융 AI센터",
      role: "PoC 수행, 3부작 가이드 작성",
      summary: "Microsoft Work IQ의 구조와, Copilot이 내 업무 데이터로 답하게 하려면 무엇을 설정해야 하는지를 개념·세팅·레퍼런스 3부작으로 정리했습니다. 2026년 8~9월 생명 테넌트에서 수행한 테스트 결과와 관찰 내용을 반영했습니다.",
      problem: "사용자로부터 저장한 자료를 Copilot이 찾지 못한다는 문의를 받았고, 직접 사용하는 과정에서도 같은 문제를 경험했습니다. 설정·검색 동작·변경 반영 시간을 조사해 사용자가 따라 할 수 있는 가이드로 정리했습니다.",
      approach: "직접 쟀습니다. 삼성생명 M365 테넌트에서 PoC를 돌려 변경 사항별 Copilot Chat 반영 시간을 측정했고, 그 결과를 체크리스트형 세팅 가이드와 팀 파일 규칙으로 만들었습니다.",
      metrics: [
        { value: "14개", label: "반영 시간을 정리한 항목" },
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
            "2026.08.27~09.04 생명 테넌트·Copilot Chat 웹에서 6종의 테스트 수행. 관찰 결과는 해당 환경과 시점에 한정해 안내",
            "직접 구성한 개정본 구분 테스트: 판매개시일·종료일 정보가 없을 때 서로 다른 개정본이 섞인 답변을 관찰했습니다. 날짜 메타데이터를 추가한 뒤 해당 테스트에서 특정 개정본으로 답변이 일관되는 것을 확인하고, 버전·기간을 라이브러리 열로 관리하도록 안내했습니다.",
            "검색과 접근 구분: 일반 검색에서 찾지 못한 문서도 링크로 지정하면 읽을 수 있는 사례를 확인했습니다. 급한 문서는 직접 지정하고, 변경 반영 여부는 다음 날 새 세션에서 다시 확인하도록 가이드에 반영했습니다.",
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
      subtitle: "AI혁신팀을 위한 스킬 선별·검증·공유 체계",
      org: "삼성금융 AI센터",
      role: "최초 제안·기획·구현 — 선별 기준, 카탈로그, 검증 MCP 서버, 웹 UI, CI (추천기는 협업자가 구현)",
      summary: "선별한 스킬 카탈로그와 이를 지키는 검증 서비스입니다. SKILL.md를 올리면 3단계 검증을 거치고, 부족하면 자동 개선하고, 머지 요청까지 열어줍니다. 통과한 스킬은 Claude Code에서 바로 설치할 수 있습니다.",
      problem: "공개 스킬을 검증 없이 도입하면 품질 편차와 보안 위험이 발생할 수 있다고 판단했습니다. 스킬의 지침·의존성·업무 적합성을 검토하고 조직에서 공유하기 위한 스킬 허브를 먼저 제안했습니다.",
      approach: "직무에 맞는 스킬 선별 기준을 세우고, 보안·완성도·AI 정성 검증과 플랫폼 실행 검증을 구분했습니다. 검증·개선·재검증·제출을 연결하는 서비스와 웹 UI를 구현했습니다.",
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
            "모든 호출을 판정·단계별 소요 시간·콘텐츠 해시와 함께 JSONL 감사 로그로 기록. REVIEW는 사람이 선택적으로 추가 확인하면 좋은 항목을 안내하는 표시로 사용",
          ],
        },
        {
          heading: "카탈로그 · 설치",
          bullets: [
            "선별: 8개 축 가중치 점수(직무 관련성, 필요 스킬 매칭, 금융 도메인, 완성도, 보안, 출처 신뢰도, 범용성, 중복 제거) → AI 리뷰 → 사람 리뷰",
            "각 스킬을 Claude Code 플러그인으로 노출, SKILL.md frontmatter로 marketplace.json을 자동 생성하고 머지 후 CI가 동기화",
            "추천기(협업자 구현): 직무에 대해 4~8턴 대화 → 키워드 검색으로 상위 30개 → LLM이 설치할 10~15개 선택",
          ],
        },
        {
          heading: "결과",
          bullets: [
            "구축한 스킬 허브를 AI혁신팀에 제공했습니다. 사용자 피드백은 아직 수집하지 않아 업무 생산성 개선 효과는 측정하지 않았습니다",
            "팀에서 스킬을 선별·검증·개선·공유할 수 있는 공통 절차와 도구를 마련했습니다",
          ],
        },
      ],
    },
    {
      title: "클라우드 에이전트 아키텍처 PoC",
      subtitle: "RAG 에이전트, Databricks와 Microsoft Foundry 비교",
      org: "삼성금융 AI센터",
      period: "2026.03 · 마지막 2주 · 3월 30일 최종 보고",
      role: "단독 담당 — RAG 에이전트 2개 구현, golden dataset 제작, 평가 코드, 연계 리스크 분석, 최종 보고",
      summary: "데이터 플랫폼으로 이미 선정된 AWS Databricks와 Azure Foundry의 연계 방식과 성능을 2026년 3월 마지막 2주 동안 검증하고, 3월 30일 최종 보고했습니다. 단독 환경 2개의 RAG 성능을 평가하고, 인증 문제로 연결하지 못한 에이전트 간 연계 구성은 비용·운영 리스크를 분석했습니다.",
      problem: "Databricks 도입은 결정된 상태였습니다. 에이전트 플랫폼으로 Foundry를 사용할 경우 Databricks의 에이전트를 호출할지, 데이터만 Azure로 공유할지, 각 방식이 Databricks 단독 환경과 비교해 어떤 차이가 있는지 검증해야 했습니다.",
      approach: "Databricks 단독과 Foundry 단독 RAG 에이전트를 구현해 공통 golden dataset으로 평가했습니다. Databricks + Foundry의 에이전트 호출은 인증 문제로 실제 연결하지 못해 연계 리스크 분석까지 수행했습니다.",
      metrics: [{ label: "검토한 아키텍처" }, { label: "공통 golden dataset으로 평가한 RAG 에이전트" }, { label: "구축 일수 (Databricks vs Foundry)" }],
      sections: [
        {
          heading: "세 가지 구성과 평가데이터",
          bullets: [
            "Databricks 단독: Databricks 안에서 에이전트를 실행하는 환경",
            "Databricks + Foundry: Azure에서 Genie·Mosaic 에이전트를 A2A로 호출하는 구성 검토. 인증 문제로 실제 연결하지 못해 리스크 분석까지만 수행",
            "Foundry 단독: Databricks의 data sharing으로 데이터만 Azure로 가져와 Foundry에서 에이전트를 실행하는 환경",
            "평가데이터: 생명보험협회 데이터셋과 판례집을 기반으로 구성한 golden dataset",
            "golden dataset 평가는 Databricks 단독과 Foundry 단독에 수행. 에이전트 간 연계 구성의 종단 간 성능은 미검증",
          ],
        },
        {
          heading: "평가 기준",
          bullets: [
            "두 단독 에이전트 환경의 검색·답변 성능 평가",
            "플랫폼 간 지연과 egress 비용은 연계 리스크로 분석. Case 2의 종단 간 실측은 수행하지 않음",
            "트레이싱·평가·비용 모니터링, 사용자 단위 접근 제어",
          ],
        },
        {
  "heading": "실측 결과와 해석",
  "bullets": [
    "첨부 비교 보고서 기준, Databricks 단독과 Foundry 단독의 검색 Precision은 각각 48.0%·47.1%, Recall은 76.2%·61.1%, Full Match는 84/120건(70.0%)·67/120건(55.8%)이었습니다.",
    "답변 Answer F1은 0.1947·0.1929로 비슷했습니다. 검색에서 더 많은 정답 근거를 찾았다는 결과가 답변 유사도 지표의 큰 차이로 이어지지는 않았습니다.",
    "평균 응답 시간은 17.81초·7.93초였습니다. Databricks 측에는 외부 모델 호출 지연이 포함되어 있어, 플랫폼 자체 속도가 아닌 당시 구현 구성의 결과로 해석했습니다.",
    "초기 구축 난이도와 구현 자유도뿐 아니라 트레이싱, 평가·비용 모니터링, 사용자·데이터 접근 권한도 함께 비교했습니다. 관찰 결과는 2026년 3월 테스트 환경과 당시 부여된 권한 범위에 한정됩니다."
  ]
},
        {
          heading: "구축하며 확인한 점",
          bullets: [
            "Databricks 단독 구성은 1일(권한 포함 4일), Foundry 단독은 2일(권한·리소스 포함 7일) 소요",
            "Azure Foundry 에이전트에서 AWS Databricks의 데이터를 연계하는 것은 기술적으로 가능했지만, 비용과 운영 측면의 비효율성이 컸습니다",
            "비용: Azure AI Search를 사용하는 검토 구성에서는 양쪽 플랫폼의 임베딩 벡터 이중 적재, 클라우드 간 데이터 반출(egress), 전용선 비용을 고려해야 했습니다.",
            "운영: 청킹·임베딩·데이터 카탈로그의 이중 관리와 AWS 원본 변경에 따른 Azure AI Search 인덱스 재동기화 파이프라인이 필요했습니다.",
            "임베딩 모델: 저장된 문서 벡터와 검색 질의의 임베딩 모델이 호환되는지 관리해야 했습니다. 서로 다른 벡터 공간에서는 유사도 비교가 유효하지 않으며, 모델 변경 시 벡터·인덱스 갱신까지 고려해야 했습니다.",
            "인증과 지연: Entra ID와 AWS IAM의 서로 다른 인증체계, 플랫폼 간 호출에 따른 추가 지연을 검토했습니다.",
            "장애 대응과 감사추적: Azure·AWS·Databricks에 걸친 원인 분석과 두 클라우드 로그를 수동으로 조합하는 운영 부담을 확인했습니다.",
            "3월 30일 최종 보고에서 연계 가능 여부와 도입 시 감수해야 할 비용·운영 부담을 구분해 정리했습니다",
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
  "title": "금융 LLM 데이터 구축과 성능평가",
  "subtitle": "금융 업무 분석부터 데이터 품질 관리와 모델 검증까지",
  "org": "삼성금융 AI센터",
  "role": "데이터 수급·검수 전 과정 단독 담당, 평가 기획·코드 구현·실행",
  "summary": "금융 4사의 업무를 기준으로 도서 530권의 데이터 수급과 품질 관리를 담당하고, 금융지식 평가 체계와 코드를 구축했습니다.",
  "problem": "데이터의 양만으로는 금융 4사의 업무 지식이 충분히 담겼는지 알 수 없었고, 포괄적인 금융 점수만으로는 영역별 지식 수준을 확인하기 어려웠습니다.",
  "approach": "실제 금융 업무를 도서 선정 기준에 연결하고, 문맥을 보존하는 정제·검수 기준을 수립한 뒤 같은 업무 맥락에 맞춰 모델을 평가했습니다.",
  "metrics": [
    {
      "value": "530",
      "label": "최종 납품 도서"
    },
    {
      "value": "4",
      "label": "업무 범위를 분석한 관계사"
    },
    {
      "value": "13",
      "label": "평가 세부 영역"
    }
  ],
  "sections": [
    {
      "heading": "프로젝트 배경",
      "bullets": [
        "금융 특화 모델을 학습시키려면 데이터의 양뿐 아니라 생명·화재·카드·증권의 실제 업무를 얼마나 고르게 담는지, 정제 과정에서 지식과 문맥이 보존되는지를 함께 관리해야 했습니다. 학습 이후에는 금융 업무에 필요한 지식을 모델이 얼마나 갖췄는지 확인할 평가 체계도 필요했습니다."
      ]
    },
    {
      "heading": "내 역할과 협업 범위",
      "bullets": [
        "학습 데이터 목표량 산정, 도서 선정, 품질·정제 기준 설계, 외부 가공 업체와의 협의, 납품 검수와 수정 요청, 최종 인수까지 단독 담당했습니다. 최종 납품 규모는 금융 도서 530권입니다.",
        "평가 고도화 기획부터 AI를 활용한 평가 코드 구현과 성능평가까지 담당했습니다. 도서 가공은 외부 업체와 협업했으며, 모델 학습은 별도 팀이 수행했습니다."
      ]
    },
    {
      "heading": "01 · 연구를 데이터 수급 계획으로 연결",
      "bullets": [
        "도메인 특화 모델의 연구·구축 사례를 조사해 대상 모델의 학습에 필요한 데이터 규모를 추정했습니다. 이론적인 필요량과 현실적인 수급 가능량을 구분하고, 고품질 데이터를 우선 확보하는 목표와 선별 기준을 세웠습니다."
      ]
    },
    {
      "heading": "02 · 금융 4사 업무를 기준으로 도서 선정",
      "bullets": [
        "각 사의 조직도와 실제 업무 분장을 조사해 공통 업무와 업권별 고유 업무를 정리했습니다. 내부통제, 자산운용, 리스크관리, 보험계약, 보상처리 등 업무 영역을 도서 선정 기준에 연결했습니다.",
        "출간일·저자·제목으로 1차 검토한 뒤 목차와 미리보기로 내용의 적합성을 확인했습니다. 업권별 도서 분포와 부족 영역을 재검토하고 추가 도서를 발굴해 업무 커버리지를 보완했습니다."
      ]
    },
    {
      "heading": "03 · 금융 지식의 문맥을 보존하는 품질 관리",
      "bullets": [
        "도서 선정 기준과 납품 데이터의 정제 기준을 구분해 설계했습니다. 표·수식·이미지·본문의 처리 규칙과 문제·보기·정답·해설을 연결하는 기준을 마련했습니다.",
        "검수 과정에서 구조화할 수 있는 표까지 이미지로 처리되거나, 캡션이 누락되어 설명 대상과 연결되지 않는 문제를 발견했습니다. 본문 안의 요약 카드처럼 별도로 배치된 텍스트가 부적절한 위치에 삽입되어 읽는 흐름을 끊는 경우도 있었습니다.",
        "이러한 사례를 바탕으로 이미지·표·캡션·수식의 처리 기준을 재조정했습니다. 행·열을 구분할 수 있는 표는 LaTeX로 구조화하고 제목·주석·출처를 메타데이터로 연결하되, 복잡한 레이아웃은 분리하거나 이미지로 보존하도록 예외 기준도 마련했습니다. 각 요소를 추출하는 데 그치지 않고 본문과의 관계와 읽는 순서를 최대한 보존하도록 업체와 협의했습니다. 합의한 기준은 이후 납품분에도 공통 적용했습니다. 새로운 예외가 발견되면 사례별로 수정하고 처리 방식을 정규화하며 기준을 보완했고, 수정 결과를 재검수한 뒤 최종 인수했습니다."
      ]
    },
    {
      "heading": "04 · 금융 업무 기반 평가 체계와 코드 구현",
      "bullets": [
        "평가 범위를 금융기초·금융실무의 2개 대분류와 13개 세부 영역으로 재구성했습니다. 금융기초에는 경제·경영·회계·세무·노무·통계를, 금융실무에는 내부통제·영업·디지털·자산운용·리스크관리·보험계약·보상처리를 반영했습니다.",
        "객관식 정답률뿐 아니라 복수 정답과 주관식 등으로 지식 이해를 확인하는 평가 방식을 기획했습니다. 학습·평가 데이터의 중복 점검과 채점 신뢰성 확보를 평가 설계에 포함했습니다. 평가 문항의 오류는 데이터 구축 단계에서 발견·처리하고 검수를 거친 뒤 평가에 사용해, 문항 오류가 모델 점수에 미치는 영향을 줄였습니다.",
        "AI를 활용해 평가 코드를 구현하고 자체 모델의 학습 전후 및 외부 모델의 성능을 비교했습니다. 평가 기준을 정하는 일부터 실제 평가 실행과 결과 정리까지 담당했습니다."
      ]
    },
    {
      "heading": "산출물과 기여",
      "bullets": [
        "금융 도서 530권의 최종 납품 데이터, 업무 커버리지 기반 선정 기준, 유형별 정제·검수 기준, 금융지식 평가 체계와 평가 코드를 구축했습니다.",
        "금융 업무 분석을 데이터 선정과 모델 검증에 일관되게 연결했습니다. 데이터의 규모뿐 아니라 어떤 업무 지식을 담고 무엇을 검증할 것인지 설명할 수 있도록 했습니다."
      ]
    }
  ]
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
      connect: "Let’s Connect",
      footer: "AI 엔지니어 포지션 제안도, 가벼운 인사도 반갑습니다.",
      based: "서울",
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
      allProjects: "프로젝트 전체 보기",
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
      resumeBtn: "이력서",
      prev: "이전 사진",
      next: "다음 사진",
      aiTitle: "AI가 본 나",
      aiLede: "Claude와 ChatGPT에게 그동안의 대화를 바탕으로 저를 묘사해 달라고 했습니다. 한쪽은 가을의 남색 올빼미를, 다른 쪽은 봄의 노란 여우를 떠올렸습니다.",
      strength: "장점",
      watch: "조심할 점",
      wordsLabel: "두 AI가 남긴 세 단어",
      words: ["꾸준히,", "즐겨,", "믿어."],
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
    notFound: { h1: "없는 페이지입니다.", back: "홈으로 →" },
  },
};

// Deep merge: objects by key, arrays by index. `over` wins on scalars.
function mergeDeep(base, over) {
  if (over === undefined) return base;
  if (Array.isArray(base) && Array.isArray(over)) {
    // Translated prose is complete, while object arrays can contain partial overrides.
    if (over.every((item) => typeof item === "string")) return over;
    return over.map((item, i) => mergeDeep(base[i], item));
  }
  if (base && typeof base === "object" && over && typeof over === "object") {
    const out = { ...base };
    for (const k of Object.keys(over)) out[k] = mergeDeep(base[k], over[k]);
    return out;
  }
  return over;
}

window.SITE_I18N = { en, ko: mergeDeep(en, ko) };
