import React from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Wrench,
  GitBranch,
  Cloud,
  Sparkles
} from 'lucide-react';
import './Skills.css';

const softSkills = [
  "Teamwork",
  "Problem-solving",
  "Time Management",
  "Adaptability",
  "Communication"
];

const techStackData = [
  {
    id: 1,
    title: "Frontend Development",
    icon: Code,
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 }
    ]
  },
  {
    id: 2,
    title: "Backend Development",
    icon: Server,
    description: "Developing robust backend applications and REST APIs.",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "REST APIs", level: 85 }
    ]
  },
  {
    id: 3,
    title: "Database Management",
    icon: Database,
    description: "Managing relational databases and application data.",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    id: 4,
    title: "Development Tools",
    icon: Wrench,
    description: "Integrated environments and API testing tools for efficient engineering.",
    skills: [
      { name: "IntelliJ IDEA", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 }
    ]
  },
  {
    id: 5,
    title: "Version Control & Cloud",
    icon: GitBranch,
    description: "Source code collaboration, repository hosting, and cloud platforms.",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Microsoft Azure", level: 75 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        {/* ================= 1. SOFT SKILLS ================= */}
        <div className="soft-skills-wrapper">
          <div className="section-badge-center">
            <Sparkles size={14} className="badge-icon" />
            <span>Core Competencies</span>
          </div>

          <h2 className="skills-main-title">
            Soft <span className="title-cyan">Skills</span>
          </h2>

          <div className="soft-skills-pills">
            {softSkills.map((skill) => (
              <span key={skill} className="soft-skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ================= 2. MY TECH STACK ================= */}
        <div className="tech-stack-wrapper">
          <h2 className="skills-main-title">
            My Tech <span className="title-cyan">Stack</span>
          </h2>

          <div className="tech-cards-grid">
            {techStackData.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.id} className="tech-card">
                  {/* Card top subtle cyan glow line */}
                  <div className="card-top-accent"></div>

                  {/* Header: Icon & Category title & description */}
                  <div className="tech-card-header">
                    <div className="tech-icon-box">
                      <IconComponent size={22} className="tech-card-icon" />
                    </div>
                    <div className="tech-card-title-group">
                      <h3 className="tech-category-title">{category.title}</h3>
                      <p className="tech-category-desc">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills with elegant Progress Bars & Badges */}
                  <div className="skills-progress-list">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="skill-progress-item">
                        <div className="skill-label-row">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percent">{skill.level}%</span>
                        </div>
                        <div className="progress-bar-track">
                          <div 
                            className="progress-bar-fill" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
