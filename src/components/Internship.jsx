import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  Clock, 
  Sparkles,
  Layers
} from 'lucide-react';
import './Internship.css';

/**
 * Internship details array.
 * You can easily update your responsibilities or add new internships here.
 */
const internships = [
  {
    id: 1,
    position: "Software Engineer Intern",
    company: "Samuel Gnanam IT Centre",
    duration: "May 1, 2026 – October 31, 2026",
    periodBadge: "6 Months",
    technologies: ["React.js", "Java", "Spring Boot", "SQL", "PostgreSQL"],
    // Placeholder responsibilities - edit or replace items in this array anytime:
    responsibilities: [
      "Responsibilities and key contributions will be updated soon."
    ]
  }
];

const Internship = () => {
  return (
    <section id="experience" className="internship-section">
      <div className="internship-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} className="badge-icon" />
            <span>Work Experience</span>
          </div>
          <h2 className="section-title">
            Internship <span className="title-accent">Experience</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Internship Experience Cards Container */}
        <div className="internship-cards-container">
          {internships.map((internship) => (
            <div key={internship.id} className="internship-card">
              {/* Top ambient card glow line */}
              <div className="card-top-accent"></div>

              {/* Card Header: Position & Company & Period */}
              <div className="card-header-section">
                <div className="company-logo-badge">
                  <Building2 size={28} />
                </div>

                <div className="header-details">
                  <div className="role-and-badge">
                    <h3 className="internship-position">{internship.position}</h3>
                    <span className="duration-pill">
                      <Clock size={13} />
                      {internship.periodBadge}
                    </span>
                  </div>

                  <p className="company-name">{internship.company}</p>

                  <div className="duration-meta">
                    <Calendar size={15} className="meta-icon" />
                    <span>{internship.duration}</span>
                  </div>
                </div>
              </div>

              {/* Technologies Section */}
              <div className="card-section">
                <div className="section-heading-row">
                  <Layers size={16} className="section-icon" />
                  <h4 className="card-section-title">Technologies Used</h4>
                </div>
                <div className="tech-badge-container">
                  {internship.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities Section */}
              <div className="card-section responsibilities-section">
                <div className="section-heading-row">
                  <Sparkles size={16} className="section-icon" />
                  <h4 className="card-section-title">Responsibilities</h4>
                </div>

                <div className="responsibilities-box">
                  {internship.responsibilities.map((item, idx) => (
                    <p key={idx} className="placeholder-responsibility-text">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
