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
  const introPic = document.querySelector(".intro-pic");
  const learnMoreBtn = document.getElementById("learnMoreBtn");

  function openIntro(){
    if (!introOverlay) return;
    introOverlay.classList.add("show");
    introOverlay.setAttribute("aria-hidden", "false");

    // retrigger animation on the picture
    if (introPic) {
      introPic.classList.remove("animate");
      void introPic.offsetWidth;
      introPic.classList.add("animate");
      introPic.addEventListener("animationend", function cleanup(){
        introPic.classList.remove("animate");
        introPic.removeEventListener("animationend", cleanup);
      });
    }
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

  // Learn more button - scroll to skills-preview
  learnMoreBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById("skills-preview");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeIntroFn();
    } else {
      window.location.href = "index.html#skills-preview";
    }
  });

  // Skill modal + skill data
  const skillModal = document.getElementById("skillModal");
  const closeSkillModal = document.getElementById("closeSkillModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalImpact = document.getElementById("modalImpact");

  const skillData = {
    sql: {
      title: "SQL",
      body: "I use SQL to design analytics-ready tables, tune complex queries (joins, window functions), and build aggregates for reports.",
      impact: "Where I used it: Devoir (MS SQL), Family Express (analytics), Capgemini/Vistex. Why: to create KPI datasets and speed up reporting queries; reduced run-time for several reports by rewriting heavy joins and adding targeted indexes."
    },
    python: {
      title: "Python ETL",
      body: "I build ETL scripts to ingest, clean, validate, and publish curated datasets for reporting and BI.",
      impact: "Where: Devoir, Family Express. Why: automated ingestion and repeatable transformations, added tests and validation to reduce data incidents."
    },
    cloud: {
      title: "Azure / AWS",
      body: "Experience with Azure Data Factory & Blob, and AWS Glue & S3 for orchestrating batch ingestion and processing.",
      impact: "Where: Devoir (ADF), Family Express (Glue). Why: moved jobs to managed cloud services for better scheduling, scaling and monitoring."
    },
    powerbi: {
      title: "Power BI",
      body: "I prepare model-ready datasets and KPI tables optimized for Power BI dashboards and stakeholder reporting.",
      impact: "Where: Devoir/Family Express. Why: improved dashboard responsiveness and enabled self-serve reports for business users."
    },
    redis: {
      title: "Redis",
      body: "I use Redis to cache frequently-used analytics results and reduce latency for dashboards.",
      impact: "Where: Family Express. Why: lower repeated query load and faster dashboard responses during peak hours."
    },
    langgraph: {
      title: "LangGraph",
      body: "I built workflows to generate structured AI insights from sales and analytics data.",
      impact: "Where: Family Express. Why: automated summary insights and structured outputs for reporting and decision-making."
    }
  };

  document.querySelectorAll(".skill-card").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-skill");
      const s = skillData[key] || {title:"Skill", body:"Details coming soon.", impact:""};
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

  // Contact form handling (Formspree XHR submission)
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const action = contactForm.getAttribute('action');
      if (!action) return alert('Please configure the form action endpoint.');
      const data = new FormData(contactForm);
      fetch(action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          contactForm.reset();
          if (contactSuccess) contactSuccess.style.display = 'block';
        } else {
          response.json().then(data => {
            alert(data.error || 'There was an error sending the message.');
          }).catch(()=> alert('There was an error sending the message.'));
        }
      }).catch(()=> alert('Network error. Please try again later.'));
    });
  }

  // Optional: open intro once on first visit
  const firstVisit = localStorage.getItem("firstVisitDone");
  if (!firstVisit) {
    setTimeout(() => openIntro(), 500);
    localStorage.setItem("firstVisitDone", "yes");
  }
})();
