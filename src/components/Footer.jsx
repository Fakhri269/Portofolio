import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="section-inner">
        <div className="footer-top">
          <a href={`mailto:${personalInfo.email}`} className="footer-email-link">
            {personalInfo.email}
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="footer-credits">Built with React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
