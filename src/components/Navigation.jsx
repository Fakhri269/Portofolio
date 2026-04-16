import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'portfolio', label: 'Portfolio' },
    { to: 'contact', label: 'Contact' }
  ];

  const menuVariants = {
    closed: { x: "100%", transition: { type: "spring", damping: 30, stiffness: 300 } },
    open: { x: 0, transition: { type: "spring", damping: 30, stiffness: 300 } }
  };

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <motion.a 
            href="#" 
            className="navbar-logo"
            whileHover={{ scale: 1.05 }}
          >
            Fakhri.
          </motion.a>
          
          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                activeClass="active"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(true)}
            style={{ display: 'none' }}
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Side Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              className="drawer-backdrop"
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              className="mobile-drawer"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(false)} style={{ position: 'absolute', top: '22px', right: '20px' }}>
                <FiX />
              </button>
              
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="drawer-link"
                  activeClass="active"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
