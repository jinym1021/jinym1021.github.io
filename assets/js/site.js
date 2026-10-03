// Shared chrome (header, footer, theme, language) + per-page renderers.
// Each page sets <body data-page="..."> and provides empty mount points.
// Static copy uses data-i18n="section.key" and is filled from SITE_I18N[lang].ui.

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => root.querySelectorAll(sel);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // Bold numbers inside bullets so figures stand out (years excluded).
  const hl = (s) =>
    esc(s).replace(
      /(?<![\w\-.])(~?\d[\d,]*(?:\.\d+)?\+?%?(?:\s?(?:→|to)\s?\d+%)?(?:\sof\s\d+)?)(?![\w\-])/g,
      (m) => (/^(19|20)\d\d$/.test(m) ? m : `<strong>${m}</strong>`)
    );
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  // ---------------------------------------------------------------- theme
  const THEME_KEY = "jym-theme";
  const setTheme = (t) => (t ? document.documentElement.setAttribute("data-theme", t) : document.documentElement.removeAttribute("data-theme"));
  setTheme(store.get(THEME_KEY));
  const currentTheme = () =>
    document.documentElement.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  // ------------------------------------------------------------- language
  // Priority: ?lang= in URL → saved choice → browser language.
  const LANG_KEY = "jym-lang";
  const pick = (v) => (v === "ko" || v === "en" ? v : null);
  let lang =
    pick(new URLSearchParams(location.search).get("lang")) ||
    pick(store.get(LANG_KEY)) ||
    ((navigator.language || "").toLowerCase().startsWith("ko") ? "ko" : "en");

  const page = document.body.dataset.page;
  const active = page === "project" ? "projects" : page;
  const header = document.createElement("header");
  header.className = "site-header";
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.id = "connect";
  const toTop = document.createElement("button");
  toTop.className = "to-top";
  toTop.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 15l6-6 6 6"/></svg>`;
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  addEventListener("scroll", () => toTop.classList.toggle("show", scrollY > 600), { passive: true });
  document.body.prepend(header);
  document.body.append(footer, toTop);

  const LOGO = `
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--accent-2)"/></linearGradient></defs>
      <rect x="2" y="2" width="36" height="36" rx="11" fill="none" stroke="url(#lg)" stroke-width="3.2"/>
      <path d="M24 12v11.5a5 5 0 0 1-9.6 2" fill="none" stroke="url(#lg)" stroke-width="3.2" stroke-linecap="round"/>
    </svg>`;

  let S, P, U;

  function renderChrome() {
    const nav = [
      ["index.html", "home"],
      ["about.html", "about"],
      ["experience.html", "experience"],
      ["projects.html", "projects"],
    ];
    const links = nav.map(([h, k]) => `<a href="${h}" ${k === active ? 'aria-current="page"' : ""}>${U.nav[k]}</a>`).join("");
    header.innerHTML = `
      <div class="wrap">
        <a class="logo" href="index.html" aria-label="${esc(P.name)}">${LOGO}</a>
        <nav class="nav">${links}</nav>
        <button class="hdr-btn" id="lang" aria-label="${U.chrome.langLabel}" lang="${lang === "ko" ? "en" : "ko"}">${U.chrome.lang}</button>
        <button class="hdr-btn" id="theme" aria-label="${U.chrome.theme}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 0 0 16z" fill="currentColor"/></svg>
        </button>
        <button class="hdr-btn burger" id="menu" aria-label="${U.chrome.menu}" aria-expanded="false"><span></span></button>
      </div>
      <nav class="overlay">${links}</nav>`;
    toTop.setAttribute("aria-label", U.chrome.top);
    $("#theme").addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      setTheme(next);
      store.set(THEME_KEY, next);
    });
    $("#menu").addEventListener("click", (e) => {
      const open = document.body.classList.toggle("menu-open");
      e.currentTarget.setAttribute("aria-expanded", open);
    });
    $("#lang").addEventListener("click", () => {
      lang = lang === "ko" ? "en" : "ko";
      store.set(LANG_KEY, lang);
      // Drop ?lang= so the saved choice wins on the next navigation.
      const url = new URL(location.href);
      if (url.searchParams.has("lang")) { url.searchParams.delete("lang"); history.replaceState(null, "", url); }
      render();
    });

    footer.innerHTML = `
      <div class="wrap">
        <h2 class="connect-title">${U.chrome.connect}</h2>
        <p class="connect-line">${U.chrome.footer}</p>
        <a class="connect-mail" href="mailto:${P.email}">${esc(P.email)}</a>
        <div class="socials">
          <a href="${P.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
          <a href="${P.github}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>
          <a href="${P.resume}" target="_blank" rel="noopener" aria-label="${U.chrome.resume}">${ICONS.resume}</a>
        </div>
        <p class="copy">© 2026 ${esc(P.name)} · ${U.chrome.based}</p>
      </div>`;
  }

  // Fill static copy and simple profile bindings.
  function renderStatic() {
    const get = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), U);
    $$("[data-i18n]").forEach((el) => {
      const v = get(el.dataset.i18n);
      if (v !== undefined) el.innerHTML = v;
    });
    $$("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, path] = pair.split(":");
        const v = get(path);
        if (v !== undefined) el.setAttribute(attr, v);
      });
    });
    $$("[data-bind]").forEach((el) => (el.textContent = P[el.dataset.bind]));
    $$("[data-href]").forEach((el) => {
      const k = el.dataset.href;
      el.href = k === "email" ? `mailto:${P.email}` : P[k];
    });
    if (U.titles[page]) document.title = U.titles[page];
  }

  // Line icons for the hobby cards.
  const ICONS = {
    camera: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M6 16a3 3 0 0 1 3-3h6l3-5h12l3 5h6a3 3 0 0 1 3 3v21a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"/><circle cx="24" cy="25" r="8"/><circle cx="36.5" cy="19" r="1.2" fill="currentColor" stroke="none"/></svg>`,
    dive: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 20c0-3 2.5-5 6-5h20c3.5 0 6 2 6 5v5c0 3-2 5-5 5h-3.5a3 3 0 0 1-2.7-1.7l-.6-1.2a2.4 2.4 0 0 0-4.4 0l-.6 1.2a3 3 0 0 1-2.7 1.7H11c-3 0-5-2-5-5z"/><path d="M42 10v18a6 6 0 0 1-6 6h-2"/><circle cx="40" cy="6" r="1.4"/><path d="M4 42c3 0 3-2 6-2s3 2 6 2 3-2 6-2 3 2 6 2 3-2 6-2 3 2 6 2"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zm7 0h3.8v1.5h.05c.53-1 1.84-1.9 3.78-1.9 4.04 0 4.37 2.5 4.37 5.8v5.6h-4v-5c0-1.2-.02-2.8-1.7-2.8-1.7 0-1.97 1.33-1.97 2.7v5.1H10z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>`,
    resume: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>`,
  };

  // ------------------------------------------------------------- mocks
  // Illustrative UI for each project panel. Labels only — no internal data.
  const bar = (title) => `<div class="win-bar"><i></i><i></i><i></i><b>${title}</b></div>`;
  const sk = (w) => `<span class="sk ${w}"></span>`;
  const MOCKS = {
    fabrix: () => `
      <div class="win">${bar("FabriX · capability benchmark")}
        <div class="win-body">
          <div class="m-row m-head" style="grid-template-columns:1.4fr 1fr 1fr"><span>Capability</span><span>FabriX 1.7.1</span><span>GenOS</span></div>
          ${["Agent builder", "Internal systems / MCP", "Model gateway", "Governance &amp; audit"].map((r) => `
          <div class="m-row" style="grid-template-columns:1.4fr 1fr 1fr"><span style="color:var(--ink)">${r}</span>${sk("w70")}${sk("w55")}</div>`).join("")}
          <div class="m-row"><span class="badge ok">1.7.1 tested · GenOS compared</span></div>
        </div>
      </div>`,
    m365: () => `
      <div class="win">${bar("M365 Copilot · adoption")}
        <div class="win-body">
          <div class="m-row m-head" style="grid-template-columns:1.4fr 1fr 1fr"><span>Feature</span><span>E3</span><span>E5</span></div>
          ${["Copilot Chat", "Work IQ", "DLP", "Log retention"].map((r) => `
          <div class="m-row" style="grid-template-columns:1.4fr 1fr 1fr"><span style="color:var(--ink)">${r}</span>${sk("w55")}${sk("w70")}</div>`).join("")}
          <div class="m-row" style="grid-template-columns:repeat(4,auto) 1fr;gap:8px">${["Life", "Fire", "Card", "Securities"].map((a) => `<span class="badge hot">${a}</span>`).join("")}<span></span></div>
        </div>
      </div>`,
    skills: () => `
      <div class="win">${bar("Skill Hub")}
        <div class="win-body">
          <div style="display:flex;gap:28px;align-items:end;margin-bottom:18px">
            <div><div class="big-num">44</div><div>curated</div></div>
            <div><div class="big-num">27/49</div><div>passed validation</div></div>
          </div>
          <div class="m-grid" style="grid-template-columns:repeat(3,1fr)">
            ${[["ok", "Passed"], ["ok", "Passed"], ["hot", "Upgraded"], ["ok", "Passed"], ["", "Review"], ["ok", "Passed"]].map(([c, t]) => `
            <div class="m-card"><span class="badge ${c}">${t}</span>${sk("w85")}${sk("w55")}</div>`).join("")}
          </div>
        </div>
      </div>`,
    arch: () => `
      <div class="win">${bar("3 designs reviewed · 2 agents evaluated")}
        <div class="win-body m-grid" style="grid-template-columns:repeat(3,1fr)">
          ${[["Databricks", ["Vector Search", "Agent", "Evaluated"]], ["Databricks + Foundry", ["A2A design review", "Authentication blocked", "Not connected"]], ["Foundry", ["AI Search", "Foundry Agent", "Evaluated"]]].map(([h, ns]) => `
          <div class="m-card"><b style="color:var(--ink)">${h}</b>${ns.map((n) => `<div class="node" style="font-size:12px">${n}</div>`).join('<div class="arrow" style="text-align:center">↓</div>')}</div>`).join("")}
        </div>
      </div>`,
    directory: () => `
      <div class="win orbit">${bar("TECHCAMP ALUMNI COMMUNITY")}
        <div class="win-body">
          <div class="m-card" style="grid-template-columns:auto 1fr;align-items:center;margin-bottom:14px"><span style="color:var(--muted)">⌕</span>${sk("w40")}</div>
          ${[0, 1, 2, 3].map((i) => `
          <div class="m-row" style="grid-template-columns:auto 1fr auto"><span class="avatar"></span><div style="display:grid;gap:7px">${sk(i % 2 ? "w55" : "w40")}${sk(i % 2 ? "w70" : "w85")}</div><span class="badge ${i < 2 ? "ok" : ""}">${i < 2 ? "LinkedIn synced" : "Open to collab"}</span></div>`).join("")}
        </div>
      </div>`,
    leadtime: () => `
      <div class="win">${bar("Work IQ · lead time")}
        <div class="win-body">
          <div class="m-row m-head" style="grid-template-columns:1.6fr 1fr"><span>Change</span><span>Shows up in Copilot</span></div>
          ${[["Work IQ toggle", "Instant", "ok"], ["New OneNote page", "~2 min", "ok"], ["Profile → colleagues", "~1 day", ""], ["New SharePoint doc → colleagues", "Next day", ""], ["Permission revoked", "≤ 3 min", "ok"]].map(([k, v, c]) => `
          <div class="m-row" style="grid-template-columns:1.6fr 1fr"><span style="color:var(--ink)">${k}</span><span class="badge ${c}">${v}</span></div>`).join("")}
        </div>
      </div>`,
    json: () => `
      <div class="win">${bar("finance_qa.jsonl")}
        <div class="win-body code">{
  <span class="k">"source"</span>: <span class="s">"book_0421"</span>,
  <span class="k">"domain"</span>: <span class="s">"insurance"</span>,
  <span class="k">"skill"</span>: <span class="s">"compliance"</span>,
  <span class="k">"question"</span>: <span class="s">"…"</span>,
  <span class="k">"answer"</span>: <span class="s">"…"</span>,
  <span class="k">"eval"</span>: [<span class="s">"mcq"</span>, <span class="s">"short"</span>, <span class="s">"llm_judge"</span>]
}</div>
      </div>`,
    chat: () => `
      <div class="win">${bar("Internal QA")}
        <div class="win-body" style="display:grid;gap:12px">
          <div class="bubble me">Where is the travel expense policy?</div>
          <div class="bubble" style="display:grid;gap:7px">${sk("w85")}${sk("w70")}${sk("w40")}</div>
          <div class="bubble me">Translate this summary to English</div>
          <div class="bubble" style="display:grid;gap:7px">${sk("w70")}${sk("w55")}</div>
        </div>
      </div>`,
    pipeline: () => `
      <div class="win">${bar("Data platform")}
        <div class="win-body" style="display:grid;gap:18px">
          <div class="flow"><span class="node">DW</span><span class="arrow">→</span><span class="node">NiFi · Kafka</span><span class="arrow">→</span><span class="node">Hadoop</span><span class="arrow">→</span><span class="node">Hive · Impala</span></div>
          <div class="m-grid" style="grid-template-columns:repeat(3,1fr)">${["Daily loads", "Partitions", "CDSW"].map((t) => `<div class="m-card"><b style="color:var(--ink)">${t}</b>${sk("w85")}${sk("w55")}</div>`).join("")}</div>
        </div>
      </div>`,
    image: (p) => `<div class="shot"><div class="shot-bar" aria-hidden="true"><span class="shot-controls"><i></i><i></i><i></i></span><span class="shot-title">${esc(p.title)}</span></div><img src="${p.image.src}" alt="${esc(p.image.alt)}" loading="lazy"/></div>`,
  };
  const visual = (p) => (MOCKS[p.visual] ? MOCKS[p.visual](p) : "");

  const tags = (p) =>
    `${p.ongoing ? `<span class="pill live">${U.chrome.ongoing}</span>` : ""}<span class="pill">${p.category === "work" ? U.chrome.work : U.chrome.side}</span>${p.roleTag ? `<span class="pill role">${esc(p.roleTag)}</span>` : ""}<span class="pill">${p.period}</span>`;

  const panel = (p) => `
    <a class="panel reveal" href="project.html?id=${p.id}" style="--tint:var(--${p.tint})">
      <h3 class="p-title">${esc(p.title)}</h3>
      <p class="p-sub">${esc(p.subtitle)}</p>
      <div class="p-tags">${tags(p)}</div>
      <span class="more">${U.home.readCase} <span class="arr">→</span></span>
      <div class="stage">${visual(p)}</div>
    </a>`;

  const jobs = (items) =>
    items.map((x) => `
      <article class="job reveal">
        <div class="when">${x.start} — ${esc(x.end)}<br/>${esc(x.location)}</div>
        <div>
          <h3>${esc(x.role)}</h3>
          <div class="org">${esc(x.org)}</div>
          ${x.note ? `<div class="org-note">${esc(x.note)}</div>` : ""}
          ${x.groups.map((g) => `
            ${g.heading ? `<h4>${esc(g.heading)}${g.year ? `<span class="yr">${esc(g.year)}</span>` : ""}</h4>` : '<div style="height:20px"></div>'}
            <ul class="bullets">${g.bullets.map((b) => `<li>${hl(b)}</li>`).join("")}</ul>`).join("")}
        </div>
      </article>`).join("");

  const listItem = (t, d, when) =>
    `<div class="list-item"><div><div class="t">${t}</div>${d ? `<div class="d">${d}</div>` : ""}</div><div class="when">${when || ""}</div></div>`;

  // ------------------------------------------------------------ renderers
  let filter = "all";
  const R = {
    home() {
      $("#featured").innerHTML = S.projects.filter((p) => p.featured).map(panel).join("");
      const W = S.writing;
      $("#also").innerHTML =
        listItem(esc(W.name), esc(W.blurb), `${W.issues[W.issues.length - 1].date}–`) +
        S.teaching.map((t) => listItem(esc(t.title), t.detail ? esc(t.detail) : "", esc(t.date))).join("") +
        S.activities.map((a) => listItem(`${esc(a.role)}, ${esc(a.org)}`, hl(a.detail), a.period)).join("");
    },

    about() {
      const tints = ["rose", "periwinkle", "butter"];
      $("#principles").innerHTML = S.principles.map((p, i) => `
        <div class="soft-card reveal" style="--tint:var(--${tints[i % 3]})"><h3>${esc(p.title)}</h3><p>${esc(p.body)}</p></div>`).join("");
      $("#skills").innerHTML = S.skills.map((s) => `
        <div class="skill-row"><div class="k">${esc(s.label)}</div><div class="chips">${s.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`).join("");
      $("#education").innerHTML = S.education.map((e) => listItem(esc(e.school), esc(e.detail), e.period)).join("");
      $("#activities").innerHTML = S.activities.map((a) => listItem(`${esc(a.role)}, ${esc(a.org)}`, hl(a.detail), a.period)).join("");

      const A = U.about;
      const img = (ph) => `<img src="${ph.src}" alt="${esc(ph.alt || "")}" loading="lazy"/>`;
      // A hobby with extra photos gets a swipeable slider instead of a single cover.
      const cover = (h) => {
        const all = [h.cover, ...h.photos].filter(Boolean);
        if (all.length < 2) return all.length ? `<div class="hobby-cover">${img(all[0])}</div>` : "";
        return `
          <div class="hobby-cover slider">
            <div class="slides">${all.map((ph) => `<figure>${img(ph)}</figure>`).join("")}</div>
            <button class="slide-btn prev" aria-label="${A.prev}">‹</button>
            <button class="slide-btn next" aria-label="${A.next}">›</button>
            <div class="dots">${all.map((_, k) => `<i${k ? "" : ' class="on"'}></i>`).join("")}</div>
          </div>`;
      };
      $("#hobbies").innerHTML = S.hobbies.map((h) => `
        <div class="soft-card hobby reveal" style="--tint:var(--${h.tint})">
          <span class="hobby-icon" aria-hidden="true">${ICONS[h.icon]}</span>
          <h3>${esc(h.title)}</h3><p>${esc(h.body)}</p>
          ${cover(h)}
        </div>`).join("");
      $$("#hobbies .slider").forEach((sl) => {
        const track = $(".slides", sl);
        const dots = $$(".dots i", sl);
        const at = () => Math.round(track.scrollLeft / track.clientWidth);
        const go = (i) => track.scrollTo({ left: ((i + dots.length) % dots.length) * track.clientWidth, behavior: "smooth" });
        $(".prev", sl).onclick = () => go(at() - 1);
        $(".next", sl).onclick = () => go(at() + 1);
        track.addEventListener("scroll", () => dots.forEach((d, k) => d.classList.toggle("on", k === at())), { passive: true });
      });
      $("#ai-views").innerHTML = S.aiViews.map((v) => `
        <div class="soft-card ai-card reveal" style="--tint:var(--${v.tint})">
          <div class="ai-who"><span class="swatch" style="background:${v.swatch}"></span>${esc(v.who)}</div>
          <dl class="traits">${v.traits.map(([k, t]) => `<div><dt>${esc(k)}</dt><dd>${esc(t)}</dd></div>`).join("")}</dl>
          <blockquote>${esc(v.quote)}</blockquote>
          <dl class="ai-notes"><div><dt>${A.strength}</dt><dd>${esc(v.strength)}</dd></div><div><dt>${A.watch}</dt><dd>${esc(v.watch)}</dd></div></dl>
        </div>`).join("");
      $("#ai-words").innerHTML = `
        <div class="lbl">${A.wordsLabel}</div>
        <p class="words">${A.words.map((w) => `<span>${esc(w)}</span>`).join(" ")}</p>
        <p class="close">${A.aiClose}</p>`;
    },

    experience() {
      $("#timeline").innerHTML = jobs(S.experience);
      const W = S.writing;
      $("#writing").innerHTML =
        `<p class="lede" style="margin:0 0 28px"><strong>${esc(W.name)}</strong> — ${esc(W.blurb)}</p>` +
        W.issues.map((w) => listItem(`<span class="muted">${w.no}</span> ${esc(w.title)}`, esc(w.summary), w.date)).join("");
      $("#teaching").innerHTML = S.teaching.map((t) => listItem(esc(t.title), t.detail ? esc(t.detail) : "", esc(t.date))).join("");
    },

    projects() {
      const grid = $("#grid");
      const btns = $$(".filters button");
      const count = (c) => S.projects.filter((p) => c === "all" || p.category === c).length;
      const draw = (f) => {
        filter = f;
        grid.innerHTML = S.projects.filter((p) => f === "all" || p.category === f).map(panel).join("");
        btns.forEach((b) => b.setAttribute("aria-pressed", b.dataset.f === f));
        observe();
      };
      btns.forEach((b) => {
        b.innerHTML = `${U.projects[b.dataset.f]}<span class="count">${count(b.dataset.f)}</span>`;
        b.onclick = () => draw(b.dataset.f);
      });
      draw(filter);
    },

    project() {
      const T = U.project;
      // Old links: the Work IQ guide is now part of the M365 Copilot PoC case study.
      const MOVED = { "workiq-guide": "m365-adoption" };
      const raw = new URLSearchParams(location.search).get("id");
      const id = MOVED[raw] || raw;
      const i = S.projects.findIndex((p) => p.id === id);
      const p = S.projects[i];
      const root = $("#case");
      if (!p) {
        root.innerHTML = `<section class="page-head wrap"><h1 class="page-title">${T.notFound}</h1><p class="lede"><a class="more" href="projects.html">${T.back}</a></p></section>`;
        return;
      }
      document.title = `${p.title} — ${lang === "ko" ? "문예진" : P.name}`;
      const prev = S.projects[(i - 1 + S.projects.length) % S.projects.length];
      const next = S.projects[(i + 1) % S.projects.length];
      const links = p.links.length
        ? p.links.map((l) => (l.private ? `<span class="muted">${esc(l.label)} (${T.private})</span>` : `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`)).join("<br/>")
        : `<span class="muted">${T.internal}</span>`;
      if (p.caseStudy) {
        root.innerHTML = insuranceCase(p, T, links, prev, next);
        return;
      }
      root.innerHTML = editorialCase(p, T, links, prev, next);
    },
  };

  function editorialCase(p, T, links, prev, next) {
    const ko = lang === "ko";
    const shot = (g, eager = false) => `<a class="story-browser" href="${g.src}" target="_blank" rel="noopener"><img src="${g.src}" alt="${esc(g.caption || g.alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}/></a>`;
    const gallery = p.gallery || [];
    const hero = p.image ? `<div class="story-cover ${gallery.length > 1 ? '' : 'story-cover-single'}">${gallery.length > 1 ? `<div class="story-cover-back">${shot(gallery.find(g => g.src !== p.image.src) || gallery[0])}</div>` : ''}<div class="story-cover-front">${shot(p.image, true)}</div></div>` : `<div class="story-concept">${visual(p)}<p class="story-note">${ko ? '프로젝트의 핵심 구성을 설명하기 위한 개념 시각화입니다.' : 'Concept illustration of the project scope.'}</p></div>`;
    const chapter = (n, title, body) => `<section class="story-copy"><span class="story-index">${n}</span><h2>${esc(title)}</h2><p>${esc(body)}</p></section>`;
    return `<article class="insurance-story editorial-story" style="--story-tint:var(--${p.tint});--story-soft:var(--${p.tint})">
      <header class="story-hero"><div class="wrap"><a class="story-back" href="projects.html">← ${T.crumbs}</a><p class="story-eyebrow">${esc(p.org)}</p><h1>${esc(p.title)}</h1><p class="story-deck">${esc(p.subtitle)}</p>${hero}${p.galleryNote ? `<p class="story-note">${esc(p.galleryNote)}</p>` : ''}</div></header>
      <div class="wrap story-overview"><div><p class="story-eyebrow">${ko ? '프로젝트 개요' : 'OVERVIEW'}</p><h2>${esc(p.subtitle)}</h2><p>${esc(p.summary)}</p></div><dl class="story-facts"><div><dt>${T.role}</dt><dd>${esc(p.role)}</dd></div><div><dt>${T.period}</dt><dd>${esc(p.period)}</dd></div><div><dt>${T.context}</dt><dd>${esc(p.org)}</dd></div><div><dt>${T.links}</dt><dd>${links}</dd></div></dl></div>
      ${chapter('01', T.problem, p.problem)}
      <div class="story-band">${chapter('02', T.approach, p.approach)}</div>
      ${gallery.length ? `<section class="story-copy"><span class="story-index">03</span><h2>${T.screens}</h2>${p.galleryNote ? `<p>${esc(p.galleryNote)}</p>` : ''}</section>${gallery.map((g,i) => `<section class="story-feature ${i % 2 ? 'story-feature-reverse' : ''}"><div class="story-feature-text"><span class="story-eyebrow">${String(i + 1).padStart(2,'0')} / ${T.screens}</span><h2>${esc(g.caption)}</h2></div><figure>${shot(g)}</figure></section>`).join('')}` : ''}
      ${(p.figures || []).map(f => `<figure class="story-wide"><img src="${f.src}" alt="${esc(f.caption)}" loading="lazy"/><figcaption>${esc(f.caption)}</figcaption></figure>`).join('')}
      ${p.video ? `<section class="story-demo"><div class="story-copy"><h2>${T.demo}</h2></div><div class="story-wide video"><iframe src="https://www.youtube-nocookie.com/embed/${p.video}" title="${esc(p.title)} — ${esc(T.demo)}" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div></section>` : ''}
      <div class="story-details">${p.sections.map((section,i) => `<section class="story-detail"><div><span class="story-index">${String(i + (gallery.length ? 4 : 3)).padStart(2,'0')}</span><h2>${esc(section.heading)}</h2></div><ul class="bullets">${section.bullets.map(b=>`<li>${hl(b)}</li>`).join('')}</ul></section>`).join('')}</div>
      ${p.metrics && p.metrics.length ? `<section class="story-results"><div class="wrap"><p class="story-eyebrow">${ko ? '프로젝트 기록' : 'PROJECT IN NUMBERS'}</p><h2>${ko ? '규모와 주요 수치' : 'Scope & key figures'}</h2><div class="story-metrics">${p.metrics.map(m=>`<div><strong>${esc(m.value)}</strong><p>${esc(m.label)}</p></div>`).join('')}</div></div></section>` : ''}
      <section class="story-copy"><h2>${T.stack}</h2><div class="chips">${p.stack.map(t=>`<span class="chip">${esc(t)}</span>`).join('')}</div></section>
      <nav class="pager wrap" aria-label="${ko ? '다른 프로젝트' : 'Other projects'}"><a href="project.html?id=${prev.id}" style="--tint:var(--${prev.tint})"><span class="lbl">← ${T.prev}</span><span class="t">${esc(prev.title)}</span></a><a href="project.html?id=${next.id}" style="--tint:var(--${next.tint})"><span class="lbl">${T.next} →</span><span class="t">${esc(next.title)}</span></a></nav>
    </article>`;
  }

  // Editorial case study: real product screens paired with the existing evidence.
  function insuranceCase(p, T, links, prev, next) {
    const ko = lang === "ko";
    const copy = p.caseStudy;
    const screen = (g, eager = false) => `<a class="story-browser" href="${g.src}" target="_blank" rel="noopener"><span class="story-browser-bar" aria-hidden="true"><i></i><i></i><i></i><span>Ask-Insurance</span></span><img src="${g.src}" alt="${esc(g.caption)}" width="1518" height="946" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}/></a>`;
    const chapter = (n, title, body) => `<section class="story-copy"><span class="story-index">${n}</span><h2>${esc(title)}</h2>${body}</section>`;
    return `<article class="insurance-story">
      <header class="story-hero"><div class="wrap">
        <a class="story-back" href="projects.html">← ${T.crumbs}</a>
        <p class="story-eyebrow">FINANCIAL AI CHALLENGE · 2026</p>
        <h1>${esc(p.title)}</h1><p class="story-deck">${esc(copy.deck)}</p>
        <div class="story-cover"><div class="story-cover-back">${screen(p.gallery[0])}</div><div class="story-cover-front">${screen(p.gallery[4], true)}</div></div>
        <p class="story-note">${esc(p.galleryNote)}</p>
      </div></header>
      <div class="wrap story-overview"><div><p class="story-eyebrow">OVERVIEW</p><h2>${esc(copy.overview)}</h2><p>${esc(p.summary)}</p></div>
        <dl class="story-facts"><div><dt>${T.role}</dt><dd>${esc(p.role)}</dd></div><div><dt>${T.period}</dt><dd>${esc(p.period)}</dd></div><div><dt>${T.context}</dt><dd>${esc(p.org)}</dd></div><div><dt>${T.links}</dt><dd>${links}</dd></div></dl></div>
      ${chapter('01', T.problem, `<p>${esc(p.problem)}</p>`)}
      <div class="story-band">${chapter('02', copy.decision, `<p>${esc(p.approach)}</p><blockquote>${esc(copy.principle)}</blockquote>`)}
      <figure class="story-wide"><img src="${p.figures[1].src}" alt="${esc(p.figures[1].caption)}" loading="lazy"/><figcaption>${esc(p.figures[1].caption)}</figcaption></figure></div>
      ${chapter('03', copy.experience, `<p>${esc(copy.experienceIntro)}</p>`)}
      ${copy.steps.map((step, i) => `<section class="story-feature ${i % 2 ? 'story-feature-reverse' : ''}"><div class="story-feature-text"><span class="story-eyebrow">${String(i + 1).padStart(2, '0')} / ${ko ? '사용자 경험' : 'THE EXPERIENCE'}</span><h2>${esc(step.title)}</h2><p>${esc(step.body)}</p></div><figure>${screen(p.gallery[step.image])}<figcaption>${esc(p.gallery[step.image].caption)}</figcaption></figure></section>`).join('')}
      <section class="story-demo"><div class="story-copy"><span class="story-index">04</span><h2>${T.demo}</h2></div><div class="story-wide video"><iframe src="https://www.youtube-nocookie.com/embed/${p.video}" title="${esc(p.title)} — ${esc(T.demo)}" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div></section>
      ${chapter('05', copy.behind, `<p>${esc(copy.behindIntro)}</p>`)}
      <figure class="story-wide"><img src="${p.figures[0].src}" alt="${esc(p.figures[0].caption)}" loading="lazy"/><figcaption>${esc(p.figures[0].caption)}</figcaption></figure>
      <figure class="story-wide story-privacy">${screen(p.gallery[3])}<figcaption>${esc(p.gallery[3].caption)}</figcaption></figure>
      <div class="story-details">${p.sections.map(s => `<section class="story-detail"><h2>${esc(s.heading)}</h2><ul class="bullets">${s.bullets.map(b => `<li>${hl(b)}</li>`).join('')}</ul></section>`).join('')}</div>
      <section class="story-results"><div class="wrap"><p class="story-eyebrow">${ko ? '구현 및 평가' : 'IMPLEMENTATION & EVALUATION'}</p><h2>${esc(copy.results)}</h2><div class="story-metrics">${p.metrics.map(m => `<div><strong>${esc(m.value)}</strong><p>${esc(m.label)}</p></div>`).join('')}</div><p class="story-note">${esc(copy.resultNote)}</p></div></section>
      <section class="story-copy"><h2>${T.stack}</h2><div class="chips">${p.stack.map(t => `<span class="chip">${esc(t)}</span>`).join('')}</div></section>
      <nav class="pager wrap" aria-label="${ko ? '다른 프로젝트' : 'Other projects'}"><a href="project.html?id=${prev.id}" style="--tint:var(--${prev.tint})"><span class="lbl">← ${T.prev}</span><span class="t">${esc(prev.title)}</span></a><a href="project.html?id=${next.id}" style="--tint:var(--${next.tint})"><span class="lbl">${T.next} →</span><span class="t">${esc(next.title)}</span></a></nav>
    </article>`;
  }

  // ------------------------------------------------------------ reveal
  let io;
  function observe() {
    const els = $$(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("in"));
    io = io || new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
  }

  // ------------------------------------------------------------ render
  function render() {
    S = window.SITE_I18N[lang];
    P = S.profile;
    U = S.ui;
    document.documentElement.lang = lang;
    document.body.classList.remove("menu-open");
    renderChrome();
    renderStatic();
    if (R[page]) R[page]();
    // Content already on screen after a language switch shouldn't fade in again.
    if (render.done) $$(".reveal").forEach((e) => e.classList.add("in"));
    render.done = true;
    observe();
  }
  render();
})();
