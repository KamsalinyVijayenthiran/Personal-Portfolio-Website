import React, { useState, useEffect } from 'react';
import { Send, FileText, ChevronDown } from 'lucide-react';
import heroProfileImg from '../assets/Professional Portrait in Navy Blazer.png';
import './Hero.css';

const roles = ['Software Engineer', 'Full Stack Developer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Smooth typing effect alternating between roles
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        setTypingSpeed(110);

        if (displayedText.length + 1 === currentRole.length) {
          // Pause at fully typed string
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        setTypingSpeed(60);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* ================= LEFT COLUMN: INTRODUCTION & STATS ================= */}
        <div className="hero-left">
          {/* Greeting */}
          <div className="hero-greeting">
            <span className="greeting-line"></span>
            <span className="greeting-text">HELLO, I'M</span>
          </div>

          {/* Main Name Heading */}
          <h1 className="hero-title">
            <span className="title-cyan">Kamsaliny</span>
            <br />
            <span className="title-white">Vijayenthiran</span>
          </h1>

          {/* Dynamic Typing Title */}
          <div className="hero-role-wrapper">
            <span className="role-prefix">&gt; </span>
            <span className="hero-role">{displayedText}</span>
            <span className="typing-cursor">|</span>
          </div>

          {/* Bio Description */}
          <p className="hero-description">
            Bachelor of ICT undergraduate passionate about crafting beautiful,
            responsive, and user-centric web experiences using modern technologies.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary">
              <span>Let's Connect</span>
              <Send size={18} className="btn-icon" />
            </a>

            <a 
              href="/resume.pdf" 
              download="Kamsaliny_Vijayenthiran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>Download CV</span>
              <FileText size={18} className="btn-icon" />
            </a>
          </div>

          {/* Statistics Card (Aligned under intro and buttons) */}
          <div className="hero-stats-card">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Learning / Exp</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Commitment &amp; Passion</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: PROFILE STAGE ================= */}
        <div className="hero-right">
          <div className="profile-stage">
            {/* Concentric glowing circles */}
            <div className="concentric-ring ring-1"></div>
            <div className="concentric-ring ring-2"></div>
            <div className="concentric-ring ring-3"></div>
            <div className="profile-ambient-glow"></div>

            {/* Circular Profile Frame */}
            <div className="profile-frame">
              <div className="profile-image-wrapper">
                <img
                  src={heroProfileImg}
                  alt="Kamsaliny Vijayenthiran"
                  className="profile-img"
                />
              </div>
            </div>

            {/* Profile Info Below Image */}
            <div className="profile-meta">
              <h2 className="profile-name">Kamsaliny Vijayenthiran</h2>
              
              {/* Two role badges */}
              <div className="profile-badges">
                <span className="role-badge">Software Engineer</span>
                <span className="role-badge">Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Scroll Down Indicator */}
      <div className="hero-scroll-indicator">
        <a href="#about" aria-label="Scroll to About section" className="scroll-link">
          <div className="mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
          <ChevronDown size={18} className="scroll-arrow" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
