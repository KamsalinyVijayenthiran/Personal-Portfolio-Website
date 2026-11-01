import React, { useState, useEffect, useRef } from 'react';
import { Code2, Mail, Menu, X } from 'lucide-react';
import './Navbar.css';

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

const LinkedinIcon = ({ size = 18 }) => (
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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isManualClickRef = useRef(false);
  const manualClickTimeoutRef = useRef(null);

  const navLinks = [
    { id: 'home', name: 'Home', href: '#home' },
    { id: 'about', name: 'About', href: '#about' },
    { id: 'skills', name: 'Skills', href: '#skills' },
    { id: 'projects', name: 'Projects', href: '#projects' },
    { id: 'certificates', name: 'Certificates', href: '#certificates' },
    { id: 'contact', name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    isManualClickRef.current = true;
    if (manualClickTimeoutRef.current) {
      clearTimeout(manualClickTimeoutRef.current);
    }
    manualClickTimeoutRef.current = setTimeout(() => {
      isManualClickRef.current = false;
    }, 800);
  };

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isManualClickRef.current) {
        return;
      }

      // Check if user has scrolled to the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      // When near the top, home is always active
      if (window.scrollY < 80) {
        setActiveSection('home');
        return;
      }

      // 160px offset accounts for navbar height and visual focus
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    // If page is loaded with a hash in URL
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      if (sectionIds.includes(hashId)) {
        setActiveSection(hashId);
      }
    } else {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (manualClickTimeoutRef.current) {
        clearTimeout(manualClickTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        {/* Brand / Logo */}
        <a href="#home" className="navbar-brand" onClick={() => handleNavClick('home')}>
          <span className="brand-icon">
            <Code2 size={20} strokeWidth={2.5} />
          </span>
          <span className="brand-name">Kamsaliny</span>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Social Icons */}
        <div className="navbar-socials">
          <a
            href="https://github.com/KamsalinyVijayenthiran?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="social-btn"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/kamsaliny-vijayenthiran-a3861b248"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="social-btn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:shaliniinthiran03@gmail.com"
            aria-label="Send Email"
            className="social-btn"
          >
            <Mail size={18} />
          </a>

          {/* Mobile hamburger toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
