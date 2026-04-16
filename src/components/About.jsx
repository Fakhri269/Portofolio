import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section about">
      <motion.div 
        className="section-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Tentang Saya</h2>
        <div className="about-grid">
          <div className="about-bio">
            <p>
              Halo! Saya {personalInfo.name}, seorang kreator yang berfokus pada pengembangan 
              pengalaman web yang minimalis namun berkinerja tinggi. 
              Saat ini saya menempuh pendidikan di {personalInfo.school}, Bogor.
            </p>
            <p style={{ marginTop: '20px' }}>
              Pendekatan saya dalam pengembangan selalu mengutamakan kode yang bersih, 
              antarmuka pengguna yang intuitif, dan sistem desain yang terukur. 
              Saya terus mengeksplorasi teknologi baru untuk memberikan produk digital yang kokoh.
            </p>
          </div>

          <div className="about-highlights">
            <motion.div 
              whileHover={{ translateY: -5 }}
              className="highlight-card glass-card"
            >
              <span className="highlight-label">Pendidikan</span>
              <span className="highlight-value">{personalInfo.school}</span>
            </motion.div>
            <motion.div 
              whileHover={{ translateY: -5 }}
              className="highlight-card glass-card"
            >
              <span className="highlight-label">Lokasi</span>
              <span className="highlight-value">{personalInfo.location}</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
