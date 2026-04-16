import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { projects } from '../data/portfolioData';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const Projects = () => {
  return (
    <section id="projects" className="section swiper-section">
      <div className="section-inner">
        <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">Beberapa karya dan project yang pernah saya buat selama ini.</p>
        
        <div className="swiper-wrap">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} style={{ '--card-color': project.color }}>
                <div className="glass project-card glass-hover">
                  <span className="project-icon">{project.icon}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag" style={{ color: project.color, borderColor: project.color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link" style={{ color: project.color }}>
                    View Project <span>→</span>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
