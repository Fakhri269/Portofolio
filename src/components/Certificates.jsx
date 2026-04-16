import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { certificates } from '../data/portfolioData';
import { FiExternalLink } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Certificates = () => {
  return (
    <section id="certificates" className="section swiper-section">
      <div className="section-inner">
        <h2 className="section-title"><span className="gradient-text">Certificates</span></h2>
        <p className="section-subtitle">Sertifikat dan pencapaian yang telah saya raih dari berbagai kursus.</p>
        
        <div className="swiper-wrap">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div className="glass cert-card glass-hover">
                  <div className="cert-img-wrap">
                    {/* Placeholder image representation since we may not have Real image running locally */}
                    <div style={{ color: cert.color }}>📜</div>
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>
                  <div className="cert-date">{cert.date}</div>
                  <a href={cert.credential} className="cert-btn">
                    View Credential <FiExternalLink />
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

export default Certificates;
