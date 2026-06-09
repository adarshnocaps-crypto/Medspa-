import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const FullscreenMenu = ({ isOpen, onClose }) => {
  const overlayVariants = {
    hidden: { y: "-100%", opacity: 1 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } // smooth slide down
    },
    exit: { 
      y: "-100%", 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fullscreen-menu-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="fs-menu-header">
            <Link to="/" onClick={onClose} className="fs-menu-logo">
              <img src="/logo.png" alt="Relax SPA STUDIO" className="fs-logo-img" />
            </Link>
            <button className="fs-close-btn" onClick={onClose} aria-label="Close menu">
              <X size={32} strokeWidth={1} />
            </button>
          </div>

          <motion.div 
            className="fs-menu-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Side */}
            <div className="fs-menu-left">
              <div className="fs-main-links">
                {['Home', 'About', 'Gallery', 'Services', 'Pricing', 'Blog', 'Contact'].map((item) => (
                  <motion.div key={item} variants={itemVariants}>
                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="fs-main-link" onClick={onClose}>
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div className="fs-info-grid" variants={itemVariants}>
                <div className="fs-info-col">
                  <h4>Contact Us</h4>
                  <p>Relaxoo MedSpa</p>
                  <p>128 Madison Avenue, Suite 7A, NY</p>
                  <p>Phone: <a href="tel:+84987123456" style={{color: 'inherit', textDecoration: 'none'}}>+84 987 123 456</a></p>
                </div>
                <div className="fs-info-col">
                  <h4>Booking & Service Support</h4>
                  <p>Email: <a href="mailto:booking@relaxomedspa.com" style={{color: 'inherit', textDecoration: 'none'}}>booking@relaxomedspa.com</a></p>
                  <p>Customer Care: <a href="mailto:support@relaxomedspa.com" style={{color: 'inherit', textDecoration: 'none'}}>support@relaxomedspa.com</a></p>
                  <p>Phone: <a href="tel:+84987123456" style={{color: 'inherit', textDecoration: 'none'}}>+84 987 123 456</a></p>
                </div>
                <div className="fs-info-col">
                  <h4>Opening Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 8:00 PM</p>
                  <p>Holliday: Closed</p>
                </div>
              </motion.div>
            </div>

            {/* Right Side */}
            <motion.div className="fs-menu-right" variants={itemVariants}>
              <div className="fs-menu-img-wrapper">
                <img src="/about_spa_room_1780659425526.png" alt="MedSpa Treatment Room" className="fs-menu-img" />
              </div>
              <div className="fs-menu-message">
                <h3 className="fs-message-title">
                  INDULGE IN ELEGANT SPA RITUALS CAREFULLY CRAFTED TO BALANCE YOUR BODY AND MIND.
                </h3>
                <p className="fs-message-desc">
                  Every detail at Relaxoo MedSpa gently invites you to slow down, unwind.
                </p>
                <div className="fs-social-links">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="fs-social-btn" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fs-social-btn" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="fs-social-btn" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fs-social-btn" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullscreenMenu;
