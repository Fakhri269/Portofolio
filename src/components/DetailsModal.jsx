import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';

const DetailsModal = ({ item, isOpen, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay-wrapper">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="modal-container glass-card"
          >
            <button className="modal-close-btn" onClick={onClose}>
              <FiX size={24} />
            </button>

            <div className="modal-content">
              <div className="modal-image-sections">
                <img 
                  src={item.image || ""} 
                  alt={item.title} 
                  className="modal-hero-image" 
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="modal-info-section">
                <h2 className="modal-title">{item.title}</h2>
                {item.issuer && <p className="modal-subtitle">{item.issuer} • {item.date}</p>}
                
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
