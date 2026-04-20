import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const DetailsModal = ({ item, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!item) return null;

  const images = item.images || (item.image ? [item.image] : []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay-wrapper">
          
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="modal-container glass-card"
          >
            {/* Close */}
            <button className="modal-close-btn" onClick={onClose}>
              <FiX size={24} />
            </button>

            <div className="modal-content">
              
              {/* 🔥 IMAGE SLIDER */}
              <div className="modal-image-sections" style={{ position: 'relative' }}>
                
                {images.length > 0 && (
                  <img 
                    src={images[currentIndex]} 
                    alt={item.title} 
                    className="modal-hero-image"
                  />
                )}

                {/* LEFT BUTTON */}
                {images.length > 1 && (
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
                      padding: '10px',
                      cursor: 'pointer',
                      borderRadius: '50%'
                    }}
                  >
                    <FiChevronLeft size={20} />
                  </button>
                )}

                {/* RIGHT BUTTON */}
                {images.length > 1 && (
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
                      padding: '10px',
                      cursor: 'pointer',
                      borderRadius: '50%'
                    }}
                  >
                    <FiChevronRight size={20} />
                  </button>
                )}

                {/* DOT INDICATOR */}
                {images.length > 1 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '6px'
                  }}>
                    {images.map((_, i) => (
                      <span
                        key={i}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: i === currentIndex ? '#fff' : '#888'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="modal-info-section">
                <h2 className="modal-title">{item.title}</h2>
                
                {item.issuer && (
                  <p className="modal-subtitle">
                    {item.issuer} • {item.date}
                  </p>
                )}

                <div className="modal-body">
                  <p>{item.description || "Detailed view of the selected item."}</p>
                </div>

                {item.tech && (
                  <div className="modal-tags">
                    {item.tech.map((t, i) => (
                      <span key={i} className="tech-badge">{t}</span>
                    ))}
                  </div>
                )}

                <div className="modal-footer">
                  {item.link && item.link !== "#" && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary modal-action-btn"
                    >
                      <FiExternalLink /> 
                      {item.tech ? "Visit Project" : "View Certificate"}
                    </a>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DetailsModal;