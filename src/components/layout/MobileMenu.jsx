import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { navigationData } from '../../data/navigation';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="menu-overlay"
            onClick={onClose}
          />
          
          {/* Off-canvas menu */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="mobile-menu"
          >
            <div className="mobile-menu-header">
              <Link to="/" className="mobile-logo" onClick={onClose}>
                <img src="/logo.png" alt="MedSpa Logo" className="mobile-logo-img" />
              </Link>
              <button className="close-btn" onClick={onClose}>
                <X size={28} strokeWidth={1} />
              </button>
            </div>
            
            <nav className="mobile-nav-links">
              {navigationData.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link to={item.path} onClick={onClose}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="mobile-menu-footer">
              <div className="contact-info">
                <p>Appointment:</p>
                <a href="tel:6022665755" className="phone-link">(602) 266-5755</a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
