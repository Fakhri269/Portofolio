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
            Saya, Fakhri Sidqi Nuriadi, adalah siswa SMK Negeri 1 Ciomas Bogor jurusan Pengembangan Perangkat Lunak dan Gim (PPLG). Saya memiliki minat di bidang pemrograman, teknologi informasi, dan administrasi, serta berkomitmen untuk terus mengembangkan keterampilan. Saya disiplin, bertanggung jawab, dan mampu bekerja secara individu maupun dalam tim.
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
