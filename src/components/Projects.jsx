import React, { useState } from 'react';
import { ExternalLink, Code2, FolderGit2, Smartphone, BookOpen } from 'lucide-react';
import './Projects.css';

// SVG GitHub icon matching navbar design
const GithubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectsData = [
  {
    id: 1,
    title: "Coffee Shop Website",
    description: "A simple responsive coffee shop website built using HTML, CSS and JavaScript.",
    image: "/images/coffee-shop.png",
    githubUrl: "https://github.com/KamsalinyVijayenthiran/Coffee-Website.git",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    title: "CampusHire",
    description: "A student job portal system to connect companies with university students.",
    image: "/images/campushire.png",
    githubUrl: "https://github.com/KamsalinyVijayenthiran/University-Internship-Job-Board-Web-Application-.git",
    tags: ["Web System", "Portal", "Full Stack"]
  },
  {
    id: 3,
    title: "Hostel Management System",
    description: "A system to manage hostel rooms, students and payments.",
    image: "/images/hostel-management.png",
    githubUrl: "https://github.com/KamsalinyVijayenthiran/University-Hostel-Management-System.git",
    tags: ["Management", "Database", "Dashboard"]
  },
  {
    id: 4,
    title: "Modern Login & Registration System",
    description: "A clean and modern login and registration interface with responsive design and smooth user experience.",
    image: "/images/login-system.png",
    githubUrl: "https://github.com/KamsalinyVijayenthiran/Login-Register.git",
    tags: ["UI/UX", "Authentication", "Responsive"]
  },
  {
    id: 5,
    title: "School Management System",
    description: "A backend REST API for a School Management System developed using Spring Boot and PostgreSQL. It supports CRUD operations and entity relationship management, with Swagger documentation for API testing.",
    image: "/images/school-management.png",
    githubUrl: "https://github.com/KamsalinyVijayenthiran/School-Management",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Swagger"]
  },
  {
    id: 6,
    title: "Defect Tracker System",
    badge: "Internship Group Project",
    subType: "Internship Project",
    description: "A collaborative full-stack defect tracking system developed during my Software Engineer internship to manage software bugs, track issue lifecycles, and streamline team workflows with a decoupled architecture.",
    image: "/images/defect-tracker.png",
    frontendUrl: "https://github.com/SGIC-BATCH-16B/Defect-Tracker-FE",
    backendUrl: "https://github.com/SGIC-BATCH-16B/Defect-Tracker-BE",
    tags: ["React.js", "Java", "Spring Boot", "PostgreSQL", "REST APIs"]
  },
  {
    id: 7,
    title: "Defect Tracker System — AI-Assisted",
    badge: "Individual AI-Assisted Project",
    badgeType: "ai",
    subType: "Full-Stack System",
    description: "An individually developed full-stack defect tracking system built with AI assistance, featuring Spring Boot 3 & JWT authentication on the backend, paired with a React, TypeScript & TailwindCSS frontend.",
    image: "/images/defect-tracker-ai.png",
    githubUrl: "https://github.com/KamsalinyVijayenthiran/Defect-Tracker-System",
    tags: ["React", "TypeScript", "Spring Boot 3", "Spring Security (JWT)", "PostgreSQL", "TailwindCSS"]
  },
  {
    id: 8,
    title: "Defect Tracker System – Mobile Application",
    badge: "Individual Mobile Application",
    badgeType: "mobile",
    subType: "Mobile Application",
    description: "A modern mobile application designed to simplify software defect tracking and management. It provides a user-friendly interface for managing software defects, supported by a manually developed backend and independently implemented frontend-backend integration.",
    image: "/images/defect-tracker-mobile.png",
    githubUrl: "https://github.com/KamsalinyVijayenthiran/Defect-Tracker-System-Mobile-Application",
    tags: ["React Native", "Expo", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "REST APIs"]
  },
  {
    id: 9,
    title: "Library Management System",
    subType: "Software Project",
    description: "A web-based application developed to manage library operations efficiently, including user management, book management, borrowing and returning books, and late return fine calculation.",
    icon: BookOpen,
    githubUrl: "https://github.com/KamsalinyVijayenthiran/Library-Management-System",
    tags: ["React.js", "Java", "Spring Boot", "PostgreSQL", "REST APIs", "Tailwind CSS"]
  }
];

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const isDualRepo = Boolean(project.frontendUrl && project.backendUrl);
  const PlaceholderIcon = project.icon || (project.badgeType === 'mobile' ? Smartphone : FolderGit2);

  return (
    <div className="project-card">
      {/* Top subtle cyan accent line */}
      <div className="card-top-accent"></div>

      {/* 16:9 Image Area or Theme-aligned Placeholder */}
      <div className="project-image-wrapper">
        {!imageError && project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="project-image-placeholder">
            <div className="placeholder-icon-ring">
              <PlaceholderIcon size={32} className="placeholder-icon" />
            </div>
            <span className="placeholder-title">{project.title}</span>
            <span className="placeholder-sub">{project.subType || "Software Project"}</span>
          </div>
        )}
        <div className="image-overlay-glow"></div>
      </div>

      {/* Card Body */}
      <div className="project-card-body">
        {/* Project Badge if available */}
        {project.badge && (
          <div className="project-badge-wrapper">
            <span className={`project-type-badge ${project.badgeType ? `badge-${project.badgeType}` : ''}`}>
              {project.badge}
            </span>
          </div>
        )}

        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Technology Badges */}
        {project.tags && project.tags.length > 0 && (
          <div className="project-tags-list">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag-badge">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer: Single or Dual Action Buttons anchored at bottom */}
        <div className="project-footer">
          {isDualRepo ? (
            <div className="project-dual-buttons">
              <a
                href={project.frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn-github project-btn-dual"
                aria-label={`View ${project.title} Frontend Repository on GitHub`}
              >
                <GithubIcon size={16} />
                <span>Frontend</span>
                <ExternalLink size={13} className="ext-icon" />
              </a>
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn-github project-btn-dual"
                aria-label={`View ${project.title} Backend Repository on GitHub`}
              >
                <GithubIcon size={16} />
                <span>Backend</span>
                <ExternalLink size={13} className="ext-icon" />
              </a>
            </div>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-github"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
              <ExternalLink size={14} className="ext-icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Heading */}
        <div className="section-header-center">
          <div className="section-badge-center">
            <Code2 size={14} className="badge-icon" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="projects-main-title">
            Featured <span className="title-cyan">Work</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* 3-column first row / centered subsequent row layout */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
