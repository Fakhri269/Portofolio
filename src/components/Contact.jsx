import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <motion.div 
        className="section-inner contact-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title" style={{ marginBottom: '16px', fontWeight: 700, color: '#ffffff' }}>Let's Connect</h2>
        <p className="contact-subtitle">
          Tertarik untuk berkolaborasi atau sekadar menyapa? Temukan saya di media sosial.
        </p>
        
        <div className="modern-social-links">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn glass-card"
          >
            <FiInstagram size={24} className="social-icon" />
            <span>Instagram</span>
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.tiktok} target="_blank" rel="noopener noreferrer" className="social-btn tiktok-btn glass-card"
          >
            <SiTiktok size={24} className="social-icon" />
            <span>TikTok</span>
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn github-btn glass-card"
          >
            <FiGithub size={24} className="social-icon" />
            <span>GitHub</span>
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn glass-card"
          >
            <FiLinkedin size={24} className="social-icon" />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
