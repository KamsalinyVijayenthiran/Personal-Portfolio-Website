import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Users, 
  Lightbulb,
  FileText
} from 'lucide-react';
import AboutInfoCard from './AboutInfoCard';
import './About.css';

const infoCardsData = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Education",
    description: "Bachelor of ICT, University of Vavuniya (2023–Present)",
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Experience",
    description: "Software Engineer Intern — Samuel Gnanam IT Centre",
    duration: "May 1, 2026 – October 31, 2026 (6 Months)",
  },
  {
    id: 3,
    icon: Heart,
    title: "Passion",
    description: "Full Stack Development & Building Innovative Software Solutions",
  },
  {
    id: 4,
    icon: Users,
    title: "Languages",
    description: "Tamil (Native), English (Proficient)",
  },
  {
    id: 5,
    icon: Lightbulb,
    title: "Focus",
    description: "Building Scalable, Reliable, and User-Friendly Software Solutions",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Heading: About Me */}
        <h2 className="about-main-title">
          About <span className="title-cyan">Me</span>
        </h2>

        {/* Two-column layout: 55% left / 45% right */}
        <div className="about-grid">
          {/* Left Column: Hello! & Full Bio */}
          <div className="about-left-card">
            <h3 className="about-greeting">Hello!</h3>

            <p className="about-paragraph">
              I'm Kamsaliny Vijayenthiran, a Full Stack Software Engineer with a strong interest in
              building modern, responsive, and user-friendly web applications. I hold a strong foundation
              in frontend and backend development, with experience working across the full software development
              lifecycle.
            </p>

            <p className="about-paragraph">
              I specialize in developing interactive user interfaces using React.js and building robust
              backend applications using Java, Spring Boot, and PostgreSQL. I enjoy transforming ideas into
              practical software solutions while focusing on clean code, performance, and user experience.
            </p>

            <p className="about-paragraph">
              I recently completed a six-month Software Engineer internship at Samuel Gnanam IT Centre,
              where I gained practical experience in software development and strengthened my technical skills.
            </p>

            <p className="about-paragraph">
              I'm passionate about continuous learning, solving real-world problems, and creating meaningful
              digital experiences through technology.
            </p>

            <div className="about-resume-wrapper">
              <a 
                href={`${import.meta.env.BASE_URL}resume.pdf`} 
                download="Kamsaliny_Vijayenthiran_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about-resume-btn"
              >
                <FileText size={17} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: 5 Information Cards */}
          <div className="about-right-cards">
            {infoCardsData.map((card) => (
              <AboutInfoCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
                duration={card.duration}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
