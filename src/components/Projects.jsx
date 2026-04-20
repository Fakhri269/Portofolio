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

                  <div className="project-image-slider">
                    <Swiper
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="project-image-swiper"
                      onTouchStart={(swiper, event) => event.stopPropagation()}
                      onTouchMove={(swiper, event) => event.stopPropagation()}
                      onClick={(swiper, event) => event.stopPropagation()}
                    >
                      {project.images.map((img, index) => (
                        <SwiperSlide key={index} className="project-image-slide">
                          <img
                            src={img}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="project-image"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag" style={{ color: project.color, borderColor: project.color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: project.color }}>
                    View Project <span>→</span>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .project-image-slider {
          width: 100%;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 16px;
          position: relative;
        }

        .project-image-swiper {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        .project-image-swiper .swiper-wrapper {
          height: 100%;
        }

        .project-image-slide {
          width: 100%;
          height: 100%;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .project-image-swiper .swiper-button-next,
        .project-image-swiper .swiper-button-prev {
          width: 28px;
          height: 28px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          color: #fff;
          top: 50%;
          transform: translateY(-50%);
        }

        .project-image-swiper .swiper-button-next::after,
        .project-image-swiper .swiper-button-prev::after {
          font-size: 12px;
          font-weight: bold;
        }

        .project-image-swiper .swiper-pagination {
          bottom: 6px;
        }

        .project-image-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.6);
          opacity: 1;
        }

        .project-image-swiper .swiper-pagination-bullet-active {
          background: #fff;
        }
      `}</style>
    </section>
  );
};

export default Projects;