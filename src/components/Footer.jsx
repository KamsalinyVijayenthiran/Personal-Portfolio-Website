import React from 'react';
import { Mail } from 'lucide-react';
import './Footer.css';

// SVG Icons matching navbar & contact
const GithubIcon = ({ size = 19 }) => (
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

const LinkedinIcon = ({ size = 19 }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        {/* Name */}
        <h3 className="footer-name">Kamsaliny Vijayenthiran</h3>

        {/* Role */}
        <p className="footer-role">Software Engineer | Full Stack Developer</p>

        {/* Short Description */}
        <p className="footer-description">
          Building modern, responsive, and user-friendly web applications.
        </p>

        {/* Social Media Links (LinkedIn, GitHub, Email) */}
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/kamsaliny-vijayenthiran-a3861b248"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={19} />
          </a>
          <a
            href="https://github.com/KamsalinyVijayenthiran?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href="mailto:shaliniinthiran03@gmail.com"
            className="footer-social-btn"
            aria-label="Send Email"
          >
            <Mail size={19} />
          </a>
        </div>

        {/* Divider line */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <p className="footer-copyright">
          &copy; 2026 Kamsaliny Vijayenthiran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
