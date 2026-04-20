import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, skills, certificates } from '../data/portfolioData';
import { SiJavascript, SiPhp, SiLaravel, SiReact, SiMysql, SiFirebase, SiGithub, SiFigma, SiCanva, SiUnity } from 'react-icons/si';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { FiVideo, FiImage } from 'react-icons/fi';
import { IoGameControllerOutline } from 'react-icons/io5';
import DetailsModal from './DetailsModal';

const skillIcons = {
  html: <FaHtml5 size={40} color="#E34F26" />,
  css: <FaCss3Alt size={40} color="#1572B6" />,
  javascript: <SiJavascript size={40} color="#F7DF1E" />,
  php: <SiPhp size={40} color="#777BB4" />,
  laravel: <SiLaravel size={40} color="#FF2D20" />,
  react: <SiReact size={40} color="#61DAFB" />,
  mysql: <SiMysql size={40} color="#4479A1" />,
  firebase: <SiFirebase size={40} color="#FFCA28" />,
  github: <SiGithub size={40} color="#ffffff" />,
  figma: <SiFigma size={40} color="#F24E1E" />,
  canva: <SiCanva size={40} color="#00C4CC" />,
  capcut: <FiVideo size={40} color="#ffffff" />,
  pixellab: <FiImage size={40} color="#ffffff" />,
  unity: <SiUnity size={40} color="#ffffff" />,
  gdevelop: <IoGameControllerOutline size={40} color="#ffffff" />
};

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const tabs = [
    { id: 'projects', label: 'Proyek' },
    { id: 'skills', label: 'Skill' },
    { id: 'certificates', label: 'Sertifikat' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-inner">
        
        {/* TAB NAVIGATION */}
        <div className="tab-container-wrapper">
          <div className="tab-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                style={{ position: 'relative' }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="active-tab-indicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT */}
        <div className="tab-content-wrapper">
          <AnimatePresence mode="wait">
            
            {/* PROJECTS CONTENT */}
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid-content projects-grid"
              >
                {projects.map((item) => (
                  <motion.div 
                    key={item.id} 
                    variants={itemVariants}
                    className="professional-card card-with-image glass-card glowing-hover"
                    onClick={() => handleItemClick(item)}
                    style={{ cursor: 'pointer' }}
                  >
                   {item.images && item.images.length > 0 && (
  <div className="card-image-wrap">
    <img src={item.images[0]} alt={item.title} className="card-image" referrerPolicy="no-referrer" />
  </div>
)}
                    <div className="card-content">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-desc">{item.description}</p>
                      <div className="card-tech">
                        {item.tech.map((t, i) => (
                          <span key={i} className="tech-badge">{t}</span>
                        ))}
                      </div>
                      <div className="card-footer-action">
                        <button 
                          className="btn-text-link"
                          onClick={(e) => {
                            e.stopPropagation();
                            if(item.link && item.link !== "#") window.open(item.link, '_blank');
                          }}
                        >
                          Selengkapnya →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* SKILLS CONTENT */}
            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid-content skills-icon-grid"
              >
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="skill-icon-card glass-card glowing-hover"
                    whileHover={{ scale: 1.1, translateY: -5 }}
                  >
                    <div className="skill-icon-wrapper">
                      {skillIcons[skill.id]}
                    </div>
                    <span className="skill-icon-name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* CERTIFICATES CONTENT */}
            {activeTab === 'certificates' && (
              <motion.div
                key="certificates"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid-content certs-grid"
              >
                {certificates.map((cert) => (
                  <motion.div 
                    key={cert.id} 
                    variants={itemVariants}
                    className="professional-card card-with-image glass-card glowing-hover"
                    onClick={() => handleItemClick(cert)}
                    style={{ cursor: 'pointer' }}
                  >
                    {cert.image && (
                      <div className="card-image-wrap cert-image-wrap">
                        <img src={cert.image} alt={cert.title} className="card-image" referrerPolicy="no-referrer" />
                      </div>
                    )}
                    <div className="card-content cert-content">
                      <div className="cert-info">
                        <h3 className="card-title">{cert.title}</h3>
                        <p className="cert-issuer">{cert.issuer}</p>
                      </div>
                      <div className="cert-meta">
                        <span className="cert-date">{cert.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      <DetailsModal 
        isOpen={isModalOpen} 
        item={selectedItem} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default PortfolioShowcase;
