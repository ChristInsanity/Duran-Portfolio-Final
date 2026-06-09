function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu || !icon) return;
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", icon.classList.contains("open") ? "true" : "false");
}

function initNavbarEffects() {
  const navbars = document.querySelectorAll("#desktop-nav, #hamburger-nav");
  const navLinks = document.querySelectorAll("[data-page-link]");
  const currentPage = document.body.dataset.page || "home";

  function updateScrolledState() {
    navbars.forEach((nav) => {
      nav.classList.toggle("nav-scrolled", window.scrollY > 20);
    });
  }

  function updateActiveLink() {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.pageLink === currentPage);
    });
  }

  updateScrolledState();
  updateActiveLink();
  window.addEventListener("scroll", () => {
    updateScrolledState();
  }, { passive: true });

  document.querySelectorAll(".menu-links a").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      if (!menu || !icon || !menu.classList.contains("open")) return;
      menu.classList.remove("open");
      icon.classList.remove("open");
      icon.setAttribute("aria-expanded", "false");
    });
  });
}

function initHeroTyping() {
  const typedTarget = document.querySelector("#typed-text");
  if (!typedTarget || typeof Typed === "undefined") return;

  new Typed("#typed-text", {
    strings: [
      "Hi, I'm Christian Dave Duran",
      "Aspiring Web Developer",
      "A 3rd-Year BSIT Student from DNSC"
    ],
    typeSpeed: 72,
    backSpeed: 42,
    backDelay: 1400,
    loop: true,
    showCursor: false
  });
}

function initRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.01
  });

  revealItems.forEach((item) => observer.observe(item));
}

function prepareRevealItems() {
  document
    .querySelectorAll(".about-info-card, .tech-category-card, .contact-card, .contact-form")
    .forEach((item) => item.classList.add("reveal"));
}

const projectSections = [
  {
    label: "FOUNDATION PROJECTS",
    title: "First Year Projects",
    projects: [
      {
        id: "photography-website",
        number: "01",
        category: "First Year Projects",
        title: "Photography Website",
        image: "./assets/Photography.png",
        description: "A Google Sites photo album website built around composition techniques and introductory computing outputs.",
        overview: "A Google Sites photo album website built around composition techniques and introductory computing outputs.",
        features: ["Presented photography outputs in a structured web album", "Applied introductory web publishing concepts", "Organized visual work around composition techniques"],
        technologies: ["Google Sites", "Photography", "IT111"],
        links: [{ label: "Visit Project", url: "https://sites.google.com/dnsc.edu.ph/7-pics-11-works/home?authuser=2" }]
      },
      {
        id: "short-film",
        number: "02",
        category: "First Year Projects",
        title: "Short Film",
        image: "./assets/Blood-Drive-Poster.png",
        description: "Suspense-themed multimedia production project developed for introductory computing and creative media activities.",
        overview: "Suspense-themed multimedia production project developed for introductory computing and creative media activities.",
        features: ["Planned a creative multimedia concept", "Produced visual materials for the project presentation", "Practiced storytelling through digital media"],
        technologies: ["Video Production", "Canva", "IT111"],
        links: [{ label: "Watch Video", url: "https://drive.google.com/drive/folders/1Rh3dyNtpz3bse1VNP77jhs_1emPEiLgj?fbclid=IwZXh0bgNhZW0CMTAAAR3g5PYeb0tTTMUEui13Y_G1o4yVZvSjGN_ka3P3wAYQHEUNS4i0yp-gLlw_aem_AfZQVCQEq1Gfc8GD_HwNMfNtfXhGg0C7BvL_BbrnZMy1e3SLbPFMHzgWnw3Q0Ulhcg4jI9LuwSmIHItU9ukuwNUR" }]
      },
      {
        id: "cp1-crud-system",
        number: "03",
        category: "First Year Projects",
        title: "Computer Programming 1 CRUD System",
        image: "./assets/crud_1.0.png",
        description: "Desktop CRUD application demonstrating foundational programming concepts.",
        overview: "Desktop CRUD application demonstrating foundational programming concepts.",
        features: ["Created basic create, read, update, and delete operations", "Practiced input handling and program flow", "Applied foundational data management logic"],
        technologies: ["CRUD", "Programming Fundamentals", "CP1"],
        links: [{ label: "Visit Project", url: "https://github.com/" }]
      },
      {
        id: "cp2-crud-system",
        number: "04",
        category: "First Year Projects",
        title: "Computer Programming 2 CRUD System",
        image: "./assets/Prog2_CRUD.png",
        description: "Java Swing CRUD application with improved functionality and event handling.",
        overview: "Java Swing CRUD application with improved functionality and event handling.",
        features: ["Built a desktop interface using Java Swing", "Connected user events to CRUD actions", "Improved structure from earlier programming outputs"],
        technologies: ["Java", "Java Swing", "CRUD"],
        links: [{ label: "Visit Project", url: "https://drive.google.com/drive/folders/1yPpLFJwp4YjRmC9hcB_5741AWQjTWn9T?usp=drive_link" }]
      },
      {
        id: "java-swing-project",
        number: "05",
        category: "First Year Projects",
        title: "Java Swing Project",
        image: "./assets/Java Swing (1).png",
        description: "Desktop application developed using Java Swing, demonstrating graphical user interface design, event handling, and CRUD functionality.",
        overview: "Desktop application developed using Java Swing, demonstrating graphical user interface design, event handling, and CRUD functionality.",
        features: ["Graphical user interface design placeholder", "Event handling placeholder", "CRUD functionality placeholder"],
        technologies: ["Java", "Java Swing", "Event Handling", "CRUD"],
        links: [{ label: "Project Link", url: "https://drive.google.com/drive/folders/1yPpLFJwp4YjRmC9hcB_5741AWQjTWn9T?usp=drive_link" }]
      },
      {
        id: "spots-website",
        number: "06",
        category: "First Year Projects",
        title: "SPOTS Website",
        image: "./assets/SPOTS1 (1).png",
        description: "Responsive web design project developed for Web Systems and Technologies.",
        overview: "Responsive web design project developed for Web Systems and Technologies.",
        features: ["Designed responsive website pages", "Applied front-end layout and styling concepts", "Built a complete web systems project output"],
        technologies: ["HTML", "CSS", "JavaScript"],
        links: [{ label: "Visit Project", url: "https://pejays.github.io/spots/?fbclid=IwZXh0bgNhZW0CMTAAAR16K9NY_bp5jof5fCmYcjDtM8Nr4nzDzW61tuTpBVUt0KMzwsIK7t0eQcQ_aem_AfZphypzAh2UfVz7nnlhU_UMG2usotRAwlzuR2kTIf0gaFyTxfut1HibTut-UPhLQcNXqaPtqnEAjDr5xJ-JzRch" }]
      }
    ]
  },
  {
    label: "DEVELOPMENT PROJECTS",
    title: "Second Year Projects",
    projects: [
      {
        id: "dnsc-e-request",
        number: "01",
        category: "Second Year Projects",
        title: "DNSC E-Request System",
        image: "",
        description: "Student document request management platform.",
        overview: "Student document request management platform.",
        features: ["Student request workflow placeholder", "Document management placeholder", "Admin processing placeholder"],
        technologies: ["PHP", "MySQL", "Bootstrap"],
        links: []
      },
      {
        id: "supplybridge",
        number: "02",
        category: "Second Year Projects",
        title: "SupplyBridge",
        image: "",
        description: "Inventory and e-commerce management system.",
        overview: "Inventory and e-commerce management system.",
        features: ["Inventory tracking placeholder", "E-commerce management placeholder", "Reporting workflow placeholder"],
        technologies: ["PHP", "MySQL", "Inventory Management"],
        links: []
      },
      {
        id: "future-second-year-project",
        number: "03",
        category: "Second Year Projects",
        title: "Future Second Year Project",
        image: "",
        description: "Placeholder description.",
        overview: "Placeholder description.",
        features: ["Feature placeholder", "Workflow placeholder", "Outcome placeholder"],
        technologies: ["Future Technology"],
        links: []
      }
    ]
  },
  {
    label: "ADVANCED PROJECTS",
    title: "Third Year Projects",
    projects: [
      {
        id: "jurisguard",
        number: "01",
        category: "Third Year Projects",
        title: "JurisGuard",
        image: "",
        description: "Legal case management system with OCR and NLP integration.",
        overview: "Legal case management system with OCR and NLP integration.",
        features: ["OCR document extraction placeholder", "NLP analysis placeholder", "Legal case workflow placeholder"],
        technologies: ["OCR", "NLP", "PostgreSQL"],
        links: []
      },
      {
        id: "student-performance-prediction",
        number: "02",
        category: "Third Year Projects",
        title: "Student Performance Prediction System",
        image: "",
        description: "Data mining and machine learning project.",
        overview: "Data mining and machine learning project.",
        features: ["Dataset preparation placeholder", "Decision tree model placeholder", "Prediction output placeholder"],
        technologies: ["Python", "Decision Tree", "Machine Learning"],
        links: []
      },
      {
        id: "future-capstone-project",
        number: "03",
        category: "Third Year Projects",
        title: "Future Capstone Project",
        image: "",
        description: "Placeholder description.",
        overview: "Placeholder description.",
        features: ["Research placeholder", "System module placeholder", "Deployment placeholder"],
        technologies: ["Capstone", "Advanced System"],
        links: []
      }
    ]
  }
];

const projectMap = new Map(projectSections.flatMap((section) => section.projects.map((project) => [project.id, project])));

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createImageMarkup(project, large = false) {
  if (project.image) {
    return `<img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)} preview" class="${large ? "modal-project-img" : "project-img"}" />`;
  }

  return `<div class="${large ? "modal-image-placeholder" : "project-image-placeholder"}">Placeholder Image</div>`;
}

function renderProjectCards() {
  const container = document.querySelector("#projects-container");
  if (!container) return;

  container.innerHTML = projectSections.map((section) => `
    <div class="project-group">
      <div class="project-group-header">
        <p class="project-group-label">${escapeHTML(section.label)}</p>
        <h2 class="experience-sub-title project-group-title">${escapeHTML(section.title)}</h2>
      </div>
      <div class="project-grid">
        ${section.projects.map((project) => `
          <article class="details-container color-container project-card reveal">
            <div class="project-image-wrap">
              ${createImageMarkup(project)}
            </div>
            <div class="project-card-body">
              <div class="project-badge-row">
                <span>${escapeHTML(project.number)}</span>
                <p>${escapeHTML(project.category)}</p>
              </div>
              <h3 class="project-title">${escapeHTML(project.title)}</h3>
              <p class="project-description">${escapeHTML(project.description)}</p>
              <button class="btn btn-color-2 project-btn" type="button" data-project-id="${escapeHTML(project.id)}">View Details</button>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function createFeatureList(items) {
  if (!items.length) return "<p>No features added yet.</p>";
  return `<ul class="modal-feature-list">${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function createTechnologyTags(items) {
  if (!items.length) return "<p>No technologies added yet.</p>";
  return `<div class="modal-tech-tags">${items.map((item) => `<span>${escapeHTML(item)}</span>`).join("")}</div>`;
}

function createModalLinks(links) {
  if (!links.length) return "";
  return `<div class="modal-links">${links.map((link) => `<a href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label)}</a>`).join("")}</div>`;
}

function openProjectModal(projectId) {
  const project = projectMap.get(projectId);
  const modal = document.querySelector("#project-modal");
  const modalTitle = document.querySelector("#modal-title");
  const modalCategory = document.querySelector("#modal-category");
  const modalBody = document.querySelector("#modal-body");

  if (!project || !modal || !modalTitle || !modalCategory || !modalBody) return;

  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category.toUpperCase();
  modalBody.innerHTML = `
    <div class="modal-content-grid">
      <div class="modal-image-wrap">${createImageMarkup(project, true)}</div>
      <div class="modal-details-column">
        <div class="modal-section">
          <h3>OVERVIEW</h3>
          <p>${escapeHTML(project.overview)}</p>
        </div>
        <div class="modal-section">
          <h3>KEY FEATURES</h3>
          ${createFeatureList(project.features)}
        </div>
        ${createModalLinks(project.links)}
      </div>
    </div>
    <div class="modal-bottom-section">
      <h3>TECHNOLOGIES AND CONCEPTS</h3>
      ${createTechnologyTags(project.technologies)}
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  const modal = document.querySelector("#project-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("DOMContentLoaded", () => {
  initNavbarEffects();
  initHeroTyping();
  renderProjectCards();
  prepareRevealItems();
  initRevealAnimations();

  document.addEventListener("click", (event) => {
    const projectButton = event.target.closest("[data-project-id]");
    if (projectButton) {
      openProjectModal(projectButton.dataset.projectId);
      return;
    }

    if (event.target.closest("[data-close-modal]")) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectModal();
    }
  });
});
