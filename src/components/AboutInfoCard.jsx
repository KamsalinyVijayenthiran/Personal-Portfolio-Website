import React from 'react';
import { Calendar } from 'lucide-react';
import './About.css';

const AboutInfoCard = ({ icon: Icon, title, description, duration }) => {
  return (
    <div className="info-card">
      <div className="info-icon-wrapper">
        <Icon size={20} className="info-icon" />
      </div>
      <div className="info-details">
        <h4 className="info-title">{title}</h4>
        <p className="info-desc">{description}</p>
        {duration && (
          <div className="info-duration">
            <Calendar size={13} className="duration-icon" />
            <span>{duration}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutInfoCard;
