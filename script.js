// ---- DATA ----
// This script contains the portfolio data and rendering logic for a personal portfolio website.

const portfolio = {
  heroTitle: "MAKE THE DATA SHINE!",
  profileImage: "images/profile.jpeg",
  name: "Pratik Chandrakant Gotakhinde",
  subtitle: "Data Enthusiast | M.Sc. Data Science Student",
  aboutSummary: [
    "💪 Loves to solve complex problems in diverse domains",
    "🔥 Currently learning Data analysis with SQL and Python",
    "📊 Passionate about transforming raw data into meaningful insights",
    "🤝 Enjoys collaborating with teams to drive data-driven decisions",
    "✨ At the end of the day, aims to <b>make the data shine!</b>"
  ],
  social: [
    { href: "https://www.linkedin.com/in/pratik-gotakhinde", label: "LinkedIn", icon: "in" },
    { href: "mailto:pratik.gotakhinde@ue-germany.de", label: "Email", icon: "✉️" }
  ],
    aboutParagraph: "I am a data analyst with a passion for transforming raw data into meaningful insights. Currently pursuing an M.Sc. in Data Science, I have a keen interest in data analysis using SQL and Python. My goal is to solve complex problems and make the data shine!",
  sections: [
    { href: "https://www.linkedin.com/in/pratik-gotakhinde", label: "LinkedIn", icon: "in" },
    { href: "mailto:pratik.gotakhinde@ue-germany.de", label: "Email", icon: "✉️" }
  ],
  certifications: [
    {
      name: "Data Science Bootcamp 2022 - Udemy",
      date: "May 2023",
      link: "https://www.udemy.com/certificate/UC-681041f0-d15c-4e45-8fd7-aea7c2adbf7c/"
    },
    {
      name: "Introduction to Python - Coding Ninjas",
      date: "January 2023",
      link: "https://certificate.codingninjas.com/view/b5a4edd38099bead"
    },
    {
      name: "From Data to Insights with Google Cloud - Coursera",
      date: "December 2022",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/B85E9JD7GEGM"
    }
  ],
  sections: [
    {
      id: "about",
      label: "About Me",
      content: function() {
        return `
          <img src="${portfolio.profileImage}" alt="Profile Photo" class="main-profile-img"/>
          <h2>Hi there <span>👋</span></h2>
          <p class="about-summary">I am a data analyst who:</p>
          <ul class="about-list">
            ${portfolio.aboutSummary.map(line => `<li>${line}</li>`).join('')}
          </ul>
        `;
      }
    },
    {
      id: "cv",
      label: "CV",
      content: function() {
        return `
          <h2>Curriculum Vitae <span>📄</span></h2>
          <a href="https://drive.google.com/file/d/1eeuOO3kuYm3sMFowg0frsRKRvQBtYvA4/view?usp=drive_link" class="cv-download" download>Download CV (PDF)</a>
          <div class="cv-quick">
            <h3>Summary</h3>
            <p>${portfolio.aboutParagraph}</p>
            <h3>Experience</h3>
            <ul>
              <li>
                <b>Senior Engineer</b><br>
                Adani Power Limited, Jharkhand, India (Feb 2023 - Mar 2023)<br>
                Specialized in optimizing maintenance schedules and predicting equipment failures. Developed comprehensive data sets for all boiler motors and valves to support procurement decisions. Proficient in optimizing energy production processes to enhance efficiency and reduce operational costs.
              </li>
              <li>
                <b>Graduate Engineer Trainee</b><br>
                Adani Power Limited, Gujarat, India (Aug 2022 - Jan 2023)<br>
                Completed training and a month of industrial experience at Adani's biggest power plant and India's 2nd biggest power plant 4620MW.
              </li>
              <li>
                <b>Front-End Web Developer Intern</b><br>
                Spark Computer Institute, Maharashtra, India (Jan 2022 - Apr 2022)<br>
                Got hands on experience on HTML, CSS, JavaScript and React.js.
              </li>
            </ul>
            <h3>Education</h3>
            <ul>
              <li>
                <b>M.Sc. Data Science</b><br>
                University of Europe for Applied Sciences, Potsdam (Mar 2025 - Present)
              </li>
              <li>
                <b>B.Tech in Electronics Engineering</b><br>
                Shivaji University Kolhapur, Maharashtra, India (Aug 2018 - Jun 2022)<br>
                Grade: 2.10/4.00
              </li>
            </ul>
            <h3>Certifications</h3>
            <ul>
              ${portfolio.certifications.map(cert =>
                `<li>
                  <a href="${cert.link}" target="_blank" style="color:#ffd700; font-weight:bold;">${cert.name}</a>
                  <span style="color:#aaa; font-size:0.95em;"> (${cert.date})</span>
                </li>`
              ).join('')}
            </ul>
            <h3>Languages</h3>
            <ul>
              <li>🇬🇧 English (Intermediate)</li>
              <li>🇩🇪 German (Elementary)</li>
              <li>🇮🇳 Marathi (Native)</li>
            </ul>
          </div>
        `;
      }
    },
    {
      id: "projects",
      label: "Projects",
      content: function() {
        return `
          <h2>Projects <span>🚀</span></h2>
          <ul>
            <li>
              <b>Sports Car Comparison Website</b> (June 2025)<br>
              Built a modern website to compare sports cars, especially Lamborghini, using HTML, CSS, and JavaScript.
            </li>
          </ul>
        `;
      }
    }
  ]
};

// ---- RENDERING ----
function renderHero() {
  document.getElementById('hero').innerHTML = `<h1>${portfolio.heroTitle}</h1>`;
}

function renderSidebar() {
  const navLinks = portfolio.sections.map((sec, i) =>
    `<li><a href="#${sec.id}" class="nav-link${i === 0 ? ' active' : ''}">${sec.label}</a></li>`
  ).join('');
  const socials = portfolio.social.map(s =>
    `<a href="${s.href}" target="_blank" aria-label="${s.label}">${s.icon}</a>`
  ).join('');
  document.getElementById('sidebar').innerHTML = `
    <ul>${navLinks}</ul>
    <div class="social-links">${socials}</div>
  `;
}

function renderMain() {
  document.getElementById('main-content').innerHTML = portfolio.sections.map(sec =>
    `<section id="${sec.id}" class="center-section">${sec.content()}</section>`
  ).join('');
}

renderHero();
renderSidebar();
renderMain();

// ---- NAVIGATION LOGIC ----
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});
window.addEventListener('scroll', () => {
  const ids = portfolio.sections.map(s => s.id);
  let found = false;
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el && window.scrollY + 120 >= el.offsetTop) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
      found = true;
    }
  }
  if (!found) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  }
});

// ---- ANIMATED BACKGROUND ----
const canvas = document.getElementById('bg-anim');
const ctx = canvas.getContext('2d');
let w = window.innerWidth, h = window.innerHeight;
canvas.width = w; canvas.height = h;
window.addEventListener('resize', () => {
  w = window.innerWidth; h = window.innerHeight;
  canvas.width = w; canvas.height = h;
});
const NODES = 28;
const nodes = Array.from({length: NODES}, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: 6 + Math.random() * 8,
  dx: (Math.random() - 0.5) * 0.7,
  dy: (Math.random() - 0.5) * 0.7,
  color: `hsl(${Math.floor(Math.random()*260+180)},80%,60%)`
}));
function draw() {
  ctx.clearRect(0,0,w,h);
  for (let i=0; i<NODES; ++i) {
    for (let j=i+1; j<NODES; ++j) {
      const a = nodes[i], b = nodes[j];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < 170) {
        ctx.strokeStyle = 'rgba(124,62,237,0.13)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }
  for (const n of nodes) {
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, 2*Math.PI);
    ctx.fillStyle = n.color;
    ctx.shadowColor = n.color;
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r*0.4, 0, 2*Math.PI);
    ctx.fillStyle = "#fff";
    ctx.globalAlpha = 0.7;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  for (const n of nodes) {
    n.x += n.dx; n.y += n.dy;
    if (n.x < 0 || n.x > w) n.dx *= -1;
    if (n.y < 0 || n.y > h) n.dy *= -1;
  }
  requestAnimationFrame(draw);
}
draw();
