import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const DetailsModal = ({ item, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [item]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!item) return null;

  const images = item.images || (item.image ? [item.image] : []);

  const nextSlide = () => setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
        }}>

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
              zIndex: 0,
            }}
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass-card"
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '720px',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '16px',
              padding: '0',
            }}
          >
            {/* Tombol Close */}
            <button
              onClick={onClose}
              style={{
                position: 'sticky',
                top: '12px',
                float: 'right',
                margin: '12px 12px 0 0',
                background: 'rgba(0,0,0,0.4)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
                zIndex: 2,
              }}
            >
              <FiX size={20} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column' }}>

              {/* Image Slider */}
              {images.length > 0 && (
                <div style={{ position: 'relative', width: '100%' }}>
                  <img
                    src={images[currentIndex]}
                    alt={item.title}
                    style={{
                      width: '100%',
                      maxHeight: '300px',
                      objectFit: 'cover',
                      borderRadius: '16px 16px 0 0',
                      display: 'block',
                    }}
                  />

                  {images.length > 1 && (
                    <>
                      {/* Prev Button */}
                      <button
                        onClick={prevSlide}
                        style={{
                          position: 'absolute',
                          left: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(0,0,0,0.5)',
                          color: '#fff',
                          border: 'none',
                          padding: '8px',
                          cursor: 'pointer',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <FiChevronLeft size={20} />
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={nextSlide}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(0,0,0,0.5)',
                          color: '#fff',
                          border: 'none',
                          padding: '8px',
                          cursor: 'pointer',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <FiChevronRight size={20} />
                      </button>

                      {/* Dots */}
                      <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '6px',
                      }}>
                        {images.map((_, i) => (
                          <span
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: i === currentIndex ? '#fff' : 'rgba(255,255,255,0.4)',
                              cursor: 'pointer',
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Info */}
              <div style={{ padding: '20px 24px 28px' }}>
                <h2 style={{ margin: '0 0 6px', fontSize: 'clamp(16px, 4vw, 22px)' }}>
                  {item.title}
                </h2>

                {item.issuer && (
                  <p style={{ margin: '0 0 14px', opacity: 0.6, fontSize: '14px' }}>
                    {item.issuer} • {item.date}
                  </p>
                )}

                {item.description && (
                  <p style={{ margin: '0 0 16px', lineHeight: 1.6, fontSize: '14px' }}>
                    {item.description}
                  </p>
                )}

                {item.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    {item.tech.map((t, i) => (
                      <span key={i} className="tech-badge">{t}</span>
                    ))}
                  </div>
                )}

                {item.link && item.link !== '#' && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <FiExternalLink />
                    {item.tech ? 'Visit Project' : 'View Certificate'}
                  </a>
                )}
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DetailsModal;