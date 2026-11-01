import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import './Certifications.css';

/**
 * Replace the `linkedinUrl` values below with your exact LinkedIn post URLs.
 * If a certificate does not have a URL (or if left empty/null), the card remains non-clickable.
 */
const certificationsData = [
  // 2024 Certifications
  {
    id: 1,
    title: "LadyProto 1.0 Design Hackathon",
    provider: "IEEE Student Branch, University of Vavuniya",
    year: "2024",
    linkedinUrl: ""
  },
  {
    id: 2,
    title: "ReactJS for Beginners",
    provider: "Simplilearn",
    year: "2024",
    linkedinUrl: "https://lnkd.in/p/gtdM8RDH"
  },
  // 2025 Certifications
  {
    id: 3,
    title: "Web Design for Beginners",
    provider: "University of Moratuwa",
    year: "2025",
    linkedinUrl: "https://lnkd.in/p/gzcVBE_Z"
  },
  {
    id: 4,
    title: "Front End Web Development",
    provider: "University of Moratuwa",
    year: "2025",
    linkedinUrl: "https://lnkd.in/p/gW6R73x6"
  },
  {
    id: 5,
    title: "Server-side Web Programming",
    provider: "University of Moratuwa",
    year: "2025",
    linkedinUrl: "https://lnkd.in/p/gSQgrqhV"
  },
  {
    id: 6,
    title: "Introduction to Adobe XD",
    provider: "Simplilearn",
    year: "2025",
    linkedinUrl: "https://lnkd.in/p/gH93qhDX"
  },
  {
    id: 7,
    title: "Postman API 101",
    provider: "University of Vavuniya",
    year: "2025",
    linkedinUrl: "https://lnkd.in/p/gQd42x_X"
  }
];

const CertificationCard = ({ cert }) => {
  const isClickable = Boolean(cert.linkedinUrl && cert.linkedinUrl.trim() !== "");

  const CardWrapper = isClickable ? 'a' : 'div';
  const wrapperProps = isClickable
    ? {
        href: cert.linkedinUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "cert-card cert-card-link",
        "aria-label": `View ${cert.title} on LinkedIn`
      }
    : {
        className: "cert-card"
      };

  return (
    <CardWrapper {...wrapperProps}>
      {/* Top subtle cyan accent line */}
      <div className="card-top-accent"></div>

      {/* Cyan certificate/badge icon inside a rounded square border */}
      <div className="cert-icon-box">
        <Award size={24} className="cert-badge-icon" />
      </div>

      {/* Title & Provider */}
      <div className="cert-content">
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-provider">{cert.provider}</p>
      </div>

      {/* Completion Year anchored at bottom with Calendar icon */}
      <div className="cert-footer">
        <div className="cert-year-badge">
          <Calendar size={14} className="calendar-icon" />
          <span>{cert.year}</span>
        </div>
        {isClickable && <ExternalLink size={14} className="cert-link-icon" />}
      </div>
    </CardWrapper>
  );
};

const Certifications = () => {
  return (
    <section id="certificates" className="certifications-section">
      <div className="certifications-container">
        {/* Section Heading */}
        <div className="section-header-center">
          <div className="section-badge-center">
            <Award size={14} className="badge-icon" />
            <span>Achievements & Learning</span>
          </div>
          <h2 className="certifications-main-title">
            My <span className="title-cyan">Certifications</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* 4-column responsive grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
