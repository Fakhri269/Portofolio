import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { skills } from '../data/portfolioData';
import 'swiper/css';
import 'swiper/css/pagination';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section swiper-section" ref={sectionRef}>
      <div className="section-inner">
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">Keahlian dan teknologi yang saya kuasai.</p>
        
        <div className="swiper-wrap">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} style={{ '--skill-color': skill.color, '--skill-level': `${skill.level}%` }}>
                <div className="glass skill-card">
                  <span className="skill-icon">{skill.icon}</span>
                  <div className="skill-category">{skill.category}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  
                  <div className="skill-bar-bg">
                    <div className={`skill-bar ${isVisible ? 'animated' : ''}`}></div>
                  </div>
                  <div className="skill-percent">{skill.level}%</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
