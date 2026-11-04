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
              <img src="/vixen-spa-logo.png" alt="Vixen Spa Services" className="fs-logo-img" />
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
                  <p>Vixen Spa Services</p>
                  <p>337 S Beverly Dr, Beverly Hills, CA 90212</p>
                  <p>Phone: <a href="tel:+13238739014" style={{color: 'inherit', textDecoration: 'none'}}>(323) 873-9014</a></p>
                </div>
                <div className="fs-info-col">
                  <h4>Booking & Service Support</h4>
                  <p style={{ overflowWrap: 'anywhere' }}>Email: <a href="mailto:priscilla@lymphaticdrainagemassage.com" style={{color: 'inherit', textDecoration: 'none', fontSize: '0.9em'}}>priscilla@<wbr />lymphaticdrainagemassage.com</a></p>
                  <p>Call or Text: <a href="tel:+13238739014" style={{color: 'inherit', textDecoration: 'none'}}>(323) 873-9014</a></p>
                  <p>Website: <a href="https://lymphaticdrainagemassage.com" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none', fontSize: '0.9em'}}>lymphaticdrainagemassage.com</a></p>
                </div>
                <div className="fs-info-col">
                  <h4>Opening Hours</h4>
                  <p>By Appointment Only</p>
                  <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                </div>
              </motion.div>
            </div>

            {/* Right Side */}
            <motion.div className="fs-menu-right" variants={itemVariants}>
              <div className="fs-menu-img-wrapper">
                <img src="/vixen/beauty-portrait.jpg" alt="Vixen Spa Services client" className="fs-menu-img" />
              </div>
              <div className="fs-menu-message">
                <h3 className="fs-message-title">
                  GENTLE, EXPERT RECOVERY CARE CRAFTED TO HELP YOU HEAL BEAUTIFULLY AFTER COSMETIC SURGERY.
                </h3>
                <p className="fs-message-desc">
                  Every detail at Vixen Spa Services gently invites you to slow down, unwind.
                </p>
                <div className="fs-social-links">
                  <a href="https://www.instagram.com/vixenspaservices_/" target="_blank" rel="noopener noreferrer" className="fs-social-btn" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://www.yelp.com/biz/vixen-spa-services-beverly-hills" target="_blank" rel="noopener noreferrer" className="fs-social-btn" aria-label="Yelp reviews" title="Yelp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </a>
                  <a href="https://www.facebook.com/p/Vixen-Spa-Services-100047713643917/" target="_blank" rel="noopener noreferrer" className="fs-social-btn" aria-label="Facebook">
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
