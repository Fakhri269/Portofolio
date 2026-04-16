import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <ParticleBackground />
      <div className="section-inner">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hero-photo-wrap"
          >
            <div className="hero-photo-ring">
              <img src="/foto.jpg" alt={personalInfo.name} className="hero-photo" />
            </div>
          </motion.div>

          <div className="hero-text">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="hero-name"
              >
                {personalInfo.name}
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="hero-title"
              >
                Building digital experiences at <span style={{ color: '#fff' }}>{personalInfo.school}</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="hero-desc"
              >
                {personalInfo.description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="hero-actions"
              >
                <a href="#portfolio" className="btn btn-primary">Lihat Proyek</a>
                <a href="/cv.pdf" download className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  <FiDownload /> Unduh CV
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="scroll-indicator"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="scroll-mouse"
        >
          <div className="scroll-wheel" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
