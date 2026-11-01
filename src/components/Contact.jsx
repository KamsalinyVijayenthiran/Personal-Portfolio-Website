import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import './Contact.css';

// SVG Icons matching navbar
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

// EmailJS Credentials
const EMAILJS_SERVICE_ID = 'service_4j365a3';
const EMAILJS_TEMPLATE_ID = 'template_44v5l1o';
const EMAILJS_PUBLIC_KEY = 'DVrJxMcYMBuy3Ad3Q';

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.error || status.success) {
      setStatus({ loading: false, success: false, error: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (status.loading) return;

    setStatus({ loading: true, success: false, error: null });

    // Payload mapped to common EmailJS template variables
    const templateParams = {
      // Standard template variable mappings:
      from_name: formData.name,
      from_email: formData.email,
      name: formData.name,
      email: formData.email,
      user_name: formData.name,
      user_email: formData.email,
      subject: formData.subject || 'Portfolio Contact Inquiry',
      message: formData.message,
      to_name: 'Kamsaliny'
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200 || response.text === 'OK') {
        setStatus({ loading: false, success: true, error: null });
        // Reset form upon successful delivery
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Clear success notification after 5 seconds
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      const errorMessage =
        err?.text || err?.message || 'Failed to send message. Please check your network or try again later.';
      setStatus({
        loading: false,
        success: false,
        error: errorMessage
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Heading */}
        <div className="section-header-center">
          <div className="section-badge-center">
            <MessageSquare size={14} className="badge-icon" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="contact-main-title">
            Get In <span className="title-cyan">Touch</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Two-Column Grid */}
        <div className="contact-grid">
          {/* ================= LEFT COLUMN ================= */}
          <div className="contact-left-col">
            {/* Contact Information Card */}
            <div className="contact-card info-card-wrapper">
              <div className="card-top-accent"></div>
              <h3 className="card-heading">Contact Information</h3>
              <p className="card-subtitle">
                Feel free to reach out for opportunities, collaborations, or inquiries.
              </p>

              <div className="contact-details-list">
                {/* Email */}
                <a href="mailto:shaliniinthiran03@gmail.com" className="contact-detail-item">
                  <div className="contact-icon-box">
                    <Mail size={20} className="detail-icon" />
                  </div>
                  <div className="detail-text-group">
                    <span className="detail-label">Email</span>
                    <span className="detail-val">shaliniinthiran03@gmail.com</span>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+94779057120" className="contact-detail-item">
                  <div className="contact-icon-box">
                    <Phone size={20} className="detail-icon" />
                  </div>
                  <div className="detail-text-group">
                    <span className="detail-label">Phone</span>
                    <span className="detail-val">+94 77 905 7120</span>
                  </div>
                </a>

                {/* Location */}
                <div className="contact-detail-item static-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} className="detail-icon" />
                  </div>
                  <div className="detail-text-group">
                    <span className="detail-label">Location</span>
                    <span className="detail-val">Piramanthanaru, Kilinochchi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Me Card */}
            <div className="contact-card follow-card-wrapper">
              <div className="card-top-accent"></div>
              <h3 className="card-heading">Follow Me</h3>
              <p className="card-subtitle">Connect with me on professional platforms.</p>

              <div className="follow-socials-row">
                <a
                  href="https://www.linkedin.com/in/kamsaliny-vijayenthiran-a3861b248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/KamsalinyVijayenthiran?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SEND A MESSAGE ================= */}
          <div className="contact-right-col">
            <div className="contact-card message-card-wrapper">
              <div className="card-top-accent"></div>
              <h3 className="card-heading">Send a Message</h3>
              <p className="card-subtitle">
                Have a question or proposal? Drop me a message below.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    disabled={status.loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    disabled={status.loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    disabled={status.loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    disabled={status.loading}
                  ></textarea>
                </div>

                {/* Status Messages */}
                {status.success && (
                  <div className="form-status-alert status-success" role="alert">
                    <CheckCircle2 size={18} className="status-icon" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {status.error && (
                  <div className="form-status-alert status-error" role="alert">
                    <AlertCircle size={18} className="status-icon" />
                    <span>{status.error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className={`btn-send-message ${status.loading ? 'loading' : ''}`}
                  disabled={status.loading}
                >
                  {status.loading ? (
                    <>
                      <Loader2 size={18} className="send-spinner" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="send-icon" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
