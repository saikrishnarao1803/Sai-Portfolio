(function(){
  const root = document.documentElement;

  // Theme
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") root.classList.add("light");

  function setIcon(){
    const isLight = root.classList.contains("light");
    if (themeToggle) themeToggle.textContent = isLight ? "☀︎" : "☾";
  }
  setIcon();

  themeToggle?.addEventListener("click", () => {
    root.classList.toggle("light");
    localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
    setIcon();
  });

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Intro overlay
  const brandBtn = document.getElementById("brandBtn");
  const introOverlay = document.getElementById("introOverlay");
  const closeIntro = document.getElementById("closeIntro");

  function openIntro(){
    introOverlay?.classList.add("show");
    introOverlay?.setAttribute("aria-hidden", "false");
  }
  function closeIntroFn(){
    introOverlay?.classList.remove("show");
    introOverlay?.setAttribute("aria-hidden", "true");
  }

  brandBtn?.addEventListener("click", openIntro);
  closeIntro?.addEventListener("click", closeIntroFn);
  introOverlay?.addEventListener("click", (e) => {
    if (e.target === introOverlay) closeIntroFn();
  });

  // Skill modal
  const skillModal = document.getElementById("skillModal");
  const closeSkillModal = document.getElementById("closeSkillModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalImpact = document.getElementById("modalImpact");

  const skillData = {
    sql: {
      title: "SQL",
      body: "I use SQL for analytics, transformations, and performance tuning (joins, aggregates, window functions).",
      impact: "Where I used it: Devoir (MS SQL), Family Express (analytics), Capgemini/Vistex (enterprise reporting). Why: to generate KPI datasets and improve report speed."
    },
    python: {
      title: "Python ETL",
      body: "I build ETL scripts to ingest, clean, validate, and publish curated datasets for reporting.",
      impact: "Where: Devoir + Family Express. Why: reliable data pipelines, data quality checks, reusable transformations."
    },
    cloud: {
      title: "Azure / AWS",
      body: "Hands-on with Azure Data Factory + Blob and AWS Glue + S3 for ingestion and batch processing.",
      impact: "Where: Devoir (ADF/Blob), Family Express (Glue/S3). Why: scalable ingestion and scheduled processing."
    },
    powerbi: {
      title: "Power BI",
      body: "I prepare model-ready datasets and KPI tables for dashboards and business reviews.",
      impact: "Where: Devoir/Family Express. Why: decision-making dashboards, stakeholder reporting, KPI tracking."
    },
    redis: {
      title: "Redis",
      body: "I use Redis to cache frequently-used analytics results and reduce latency.",
      impact: "Where: Family Express project. Why: faster dashboard response time and reduced repeated query load."
    },
    langgraph: {
      title: "LangGraph",
      body: "I built workflows to generate structured AI insights from sales data and analytics.",
      impact: "Where: Family Express project. Why: automated insights, structured outputs for business reporting."
    }
  };

  document.querySelectorAll(".skill-card").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-skill");
      const s = skillData[key] || {title:"Skill", body:"", impact:""};
      if (modalTitle) modalTitle.textContent = s.title;
      if (modalBody) modalBody.textContent = s.body;
      if (modalImpact) modalImpact.textContent = s.impact;

      skillModal?.classList.add("show");
      skillModal?.setAttribute("aria-hidden", "false");
    });
  });

  function closeSkill(){
    skillModal?.classList.remove("show");
    skillModal?.setAttribute("aria-hidden", "true");
  }

  closeSkillModal?.addEventListener("click", closeSkill);
  skillModal?.addEventListener("click", (e) => {
    if (e.target === skillModal) closeSkill();
  });

  // Optional: open intro once on first visit
  const firstVisit = localStorage.getItem("firstVisitDone");
  if (!firstVisit) {
    setTimeout(() => openIntro(), 500);
    localStorage.setItem("firstVisitDone", "yes");
  }
})();
