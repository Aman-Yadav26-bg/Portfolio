// EDITABLE DEFAULT PROFILE DATA - AMAN YADAV
const DEFAULT_PROFILE = {
  name: "Aman Yadav",
  title: "Software & Web Developer",
  bio: "Computer Science student at PSIT Kanpur (BCA). Passionate about full-stack web development, modern Android applications, and algorithmic problem solving in C++ & Python.",
  email: "amanyadav18529@gmail.com",
  phone: "+91 7376108775",
  location: "115/A Vijay Nagar, near Dhobi Ghat, Kanpur, Uttar Pradesh, India",
  college: "PSIT College of Higher Education, Kanpur",
  degree: "BCA (Computer Science, 2025–2028)",
  cgpa: "7.80",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/aman-yadav-51b174386",
  twitter: "#",
  resume: "Aman_Yadav_Resume.pdf"
};

const SKILLS_DATA = [
  { name: "C++ (OOP & STL)", category: "programming", level: 90 },
  { name: "Python", category: "programming", level: 85 },
  { name: "JavaScript (ES6+)", category: "frontend", level: 85 },
  { name: "HTML5 & Semantic Markup", category: "frontend", level: 95 },
  { name: "CSS3 / Responsive UI", category: "frontend", level: 90 },
  { name: "Kotlin & Android SDK", category: "programming", level: 80 },
  { name: "Firebase (Firestore & Auth)", category: "tools", level: 85 },
  { name: "SQLite & Databases", category: "tools", level: 80 },
  { name: "Git & GitHub", category: "tools", level: 85 },
  { name: "VS Code & Android Studio", category: "tools", level: 90 },
  { name: "Data Structures & Algorithms", category: "programming", level: 85 },
  { name: "Web APIs (Geolocation & Media)", category: "frontend", level: 85 }
];

const PROJECTS_DATA = [
  {
    title: "Presenz - Smart Attendance System",
    description: "Production-grade distributed Android system featuring dual apps (Teacher & Student) powered by Firebase Firestore. Features GPS Haversine proximity geofencing, CameraX biometric facial verification with Google ML Kit, and atomic backend check-in.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "CameraX", "ML Kit", "Geofencing"],
    github: "https://github.com",
    demo: "#"
  },
  {
    title: "CivicLens - Citizen Grievance Portal",
    description: "Smart citizen problem reporting portal prototype (Smart India Hackathon SIH). Allows citizens to geotag municipal issues (potholes, garbage, leaks) with live camera capture, automatic location detection, and officer resolution workflows.",
    tags: ["JavaScript", "HTML5", "CSS3", "Python", "Geolocation API", "Web APIs"],
    github: "https://github.com",
    demo: "#"
  },
  {
    title: "Dairy Farm Management System",
    description: "Full-featured web management application for modern dairy farms. Provides automated tracking for cattle health records, daily milk yields, employee administration, and operational reporting.",
    tags: ["HTML5", "CSS3", "JavaScript", "Admin Dashboard", "Reports"],
    github: "https://github.com",
    demo: "#"
  },
  {
    title: "C++ Data Structures & STL Algorithms",
    description: "Comprehensive implementation of core computer science data structures (Doubly Linked Lists, Deques, Stacks, Trees) and competitive programming problem solutions utilizing the C++ Standard Template Library.",
    tags: ["C++", "STL", "DSA", "Problem Solving", "LeetCode"],
    github: "https://github.com",
    demo: "#"
  }
];

const TIMELINE_DATA = [
  {
    date: "August 2025 - July 2028",
    role: "Bachelor of Computer Applications (BCA)",
    company: "PSIT College of Higher Education, Kanpur",
    bullets: [
      "Pursuing BCA in Computer Science with consistent academic performance (Current CGPA: 7.80).",
      "Core focus on Object-Oriented Programming, Data Structures & Algorithms, and Full-Stack Development.",
      "Actively developing solutions for real-world scenarios and participating in hackathon challenges."
    ]
  },
  {
    date: "2025 - Present",
    role: "Software & Android Developer",
    company: "Self-Driven Projects & Open Source",
    bullets: [
      "Architected Presenz, a multi-module distributed Android attendance platform with Jetpack Compose, CameraX, and Firebase Firestore.",
      "Engineered CivicLens prototype with real-time browser APIs (Geolocation, MediaStreams) and Python backend.",
      "Implemented diverse web portals and automated tools while mastering algorithmic problem solving in C++."
    ]
  }
];

const CERTS_DATA = [
  {
    title: "Programming Fundamentals using Python",
    issuer: "Infosys Springboard",
    icon: "fab fa-python",
    date: "Completed"
  },
  {
    title: "HTML & CSS Web Development Modules",
    issuer: "Newton School Of Technology",
    icon: "fab fa-html5",
    date: "Completed"
  },
  {
    title: "Viksit Bharat Young Leaders Dialogue (VBYLD)",
    issuer: "Ministry of Youth Affairs & Sports, Govt. of India",
    icon: "fas fa-award",
    date: "Participation Certificate"
  },
  {
    title: "Business Analytics with Excel",
    issuer: "Beginner Course Certification",
    icon: "fas fa-chart-line",
    date: "Completed"
  }
];

// STATE MANAGEMENT
let stored = localStorage.getItem('dev_profile');
let currentProfile = DEFAULT_PROFILE;
if (stored) {
  try {
    const parsed = JSON.parse(stored);
    if (parsed && parsed.name && parsed.name !== "Alex Morgan") {
      currentProfile = { ...DEFAULT_PROFILE, ...parsed };
    } else {
      localStorage.setItem('dev_profile', JSON.stringify(DEFAULT_PROFILE));
    }
  } catch (e) {
    currentProfile = DEFAULT_PROFILE;
  }
} else {
  localStorage.setItem('dev_profile', JSON.stringify(DEFAULT_PROFILE));
}

// DOM RENDER FUNCTIONS
function renderProfile() {
  document.getElementById('page-title').innerText = `${currentProfile.name} | ${currentProfile.title}`;
  document.getElementById('nav-name-logo').innerText = currentProfile.name.split(' ')[0] || "Aman";
  document.getElementById('hero-name').innerText = currentProfile.name;
  document.getElementById('hero-title-text').innerText = currentProfile.title;
  document.getElementById('hero-bio').innerText = currentProfile.bio;
  
  const resumeBtn = document.getElementById('hero-resume-link');
  if (resumeBtn) resumeBtn.href = currentProfile.resume;

  const ghLink = document.getElementById('social-github');
  if (ghLink) ghLink.href = currentProfile.github;

  const liLink = document.getElementById('social-linkedin');
  if (liLink) liLink.href = currentProfile.linkedin;

  const phoneLink = document.getElementById('social-phone');
  if (phoneLink && currentProfile.phone) {
    phoneLink.href = `tel:${currentProfile.phone.replace(/\s+/g, '')}`;
  }

  const emailLink = document.getElementById('social-email');
  if (emailLink) emailLink.href = `mailto:${currentProfile.email}`;

  const emailText = document.getElementById('contact-email-text');
  if (emailText) emailText.innerText = currentProfile.email;

  const phoneText = document.getElementById('contact-phone-text');
  if (phoneText && currentProfile.phone) {
    phoneText.innerText = currentProfile.phone;
  }

  const locText = document.getElementById('contact-location-text');
  if (locText) locText.innerText = currentProfile.location;

  const footerName = document.getElementById('footer-name');
  if (footerName) footerName.innerText = currentProfile.name;

  // Code visual update
  const snippet = document.getElementById('hero-code-snippet');
  if (snippet) {
    snippet.innerHTML = `
<span class="token-keyword">const</span> <span class="token-variable">developer</span> = {
  <span class="token-property">name</span>: <span class="token-string">'${currentProfile.name}'</span>,
  <span class="token-property">role</span>: <span class="token-string">'${currentProfile.title}'</span>,
  <span class="token-property">college</span>: <span class="token-string">'PSIT Kanpur (BCA)'</span>,
  <span class="token-property">coreStack</span>: [<span class="token-string">'C++'</span>, <span class="token-string">'Python'</span>, <span class="token-string">'JavaScript'</span>, <span class="token-string">'Firebase'</span>],
  <span class="token-property">status</span>: <span class="token-string">'Open for opportunities'</span>
};`;
  }
}

function renderSkills(filter = 'all') {
  const container = document.getElementById('skills-grid');
  if (!container) return;
  container.innerHTML = '';

  const filtered = filter === 'all' ? SKILLS_DATA : SKILLS_DATA.filter(s => s.category === filter);

  filtered.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <div class="skill-header">
        <span>${skill.name}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.level}%"></div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;
  container.innerHTML = '';

  PROJECTS_DATA.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tags">
          ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${proj.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code</a>
          <a href="${proj.demo}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live Demo</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  container.innerHTML = '';

  TIMELINE_DATA.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-role">${item.role}</div>
      <div class="timeline-company">${item.company}</div>
      <ul class="timeline-bullets">
        ${item.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    `;
    container.appendChild(el);
  });
}

function renderCerts() {
  const container = document.getElementById('certs-grid');
  if (!container) return;
  container.innerHTML = '';

  CERTS_DATA.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML = `
      <i class="${cert.icon} cert-icon"></i>
      <div class="cert-info">
        <h4>${cert.title}</h4>
        <p>${cert.issuer}</p>
        <span class="cert-badge">${cert.date}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// INITIALIZATION & EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderCerts();

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
  }

  // Theme Switcher
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
  }

  // Skill Filters
  const filterContainer = document.getElementById('skills-filter-container');
  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderSkills(e.target.dataset.filter);
      }
    });
  }

  // Component Playground Controls
  const pgText = document.getElementById('pg-btn-text');
  const pgVariant = document.getElementById('pg-btn-variant');
  const pgSize = document.getElementById('pg-btn-size');
  const pgPreviewBtn = document.getElementById('pg-preview-btn');

  function updatePlayground() {
    if (pgPreviewBtn && pgText && pgVariant && pgSize) {
      pgPreviewBtn.innerText = pgText.value || 'Button';
      pgPreviewBtn.className = `btn btn-${pgVariant.value} btn-${pgSize.value}`;
    }
  }

  if (pgText) pgText.addEventListener('input', updatePlayground);
  if (pgVariant) pgVariant.addEventListener('change', updatePlayground);
  if (pgSize) pgSize.addEventListener('change', updatePlayground);

  // Edit Profile Modal logic
  const modal = document.getElementById('edit-modal');
  const editBtn = document.getElementById('edit-profile-btn');
  const closeBtn = document.getElementById('modal-close-btn');
  const cancelBtn = document.getElementById('modal-cancel-btn');
  const editForm = document.getElementById('edit-profile-form');

  if (editBtn && modal) {
    editBtn.addEventListener('click', () => {
      document.getElementById('edit-name').value = currentProfile.name;
      document.getElementById('edit-title').value = currentProfile.title;
      document.getElementById('edit-bio').value = currentProfile.bio;
      document.getElementById('edit-email').value = currentProfile.email;
      if (document.getElementById('edit-phone')) {
        document.getElementById('edit-phone').value = currentProfile.phone || '';
      }
      document.getElementById('edit-location').value = currentProfile.location;
      document.getElementById('edit-github').value = currentProfile.github;
      document.getElementById('edit-linkedin').value = currentProfile.linkedin;
      document.getElementById('edit-twitter').value = currentProfile.twitter;
      document.getElementById('edit-resume').value = currentProfile.resume;

      modal.classList.add('open');
    });
  }

  const closeModal = () => modal && modal.classList.remove('open');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      currentProfile = {
        name: document.getElementById('edit-name').value,
        title: document.getElementById('edit-title').value,
        bio: document.getElementById('edit-bio').value,
        email: document.getElementById('edit-email').value,
        phone: document.getElementById('edit-phone') ? document.getElementById('edit-phone').value : currentProfile.phone,
        location: document.getElementById('edit-location').value,
        github: document.getElementById('edit-github').value,
        linkedin: document.getElementById('edit-linkedin').value,
        twitter: document.getElementById('edit-twitter').value,
        resume: document.getElementById('edit-resume').value
      };

      localStorage.setItem('dev_profile', JSON.stringify(currentProfile));
      renderProfile();
      closeModal();
    });
  }

  const resetBtn = document.getElementById('reset-defaults-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      localStorage.removeItem('dev_profile');
      currentProfile = DEFAULT_PROFILE;
      renderProfile();
      closeModal();
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      if (status) {
        status.innerHTML = `<span style="color: #10b981;"><i class="fas fa-check-circle"></i> Thank you! Message sent successfully.</span>`;
      }
      e.target.reset();
    });
  }
});