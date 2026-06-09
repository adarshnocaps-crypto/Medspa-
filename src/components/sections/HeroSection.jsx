import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Phone, MapPin, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  // Pop effect: scales up and fades out on scroll, extended range to prevent early fade out on mobile
  const scaleText = useTransform(scrollY, [0, 600], [1, 1.2]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="hero-split-section">
      {/* Left Content Area */}
      <div className="hero-left-pane">
        <div className="hero-left-content">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-main-subtitle"
          >
            Advanced Aesthetics & MedSpa Clinic
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Discover the perfect harmony of science and serenity. Our expert practitioners deliver bespoke treatments that rejuvenate your skin, restore your confidence, and reveal the most radiant version of you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hero-btn-group"
          >
            <Link to="/book-appointment" className="btn btn-primary" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--body-bg-color)', border: 'none' }}>
              Book Consultation
            </Link>
            <Link to="/services" className="btn btn-outline" style={{ display: 'inline-flex', gap: '10px' }}>
              Explore Services <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div 
            className="hero-contact-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="contact-item">
              <span className="contact-label">Call Us</span>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <p>128 Madison Ave, NY</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="hero-right-pane">
        <div className="hero-image-overlay">
          <motion.div 
            style={{ scale: scaleText, opacity: opacityText }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <h1 className="massive-title" style={{ padding: '0 5%' }}>
              Elevate Your<br/>Natural Beauty
            </h1>
          </motion.div>
          
          <div className="hero-features-bar">
            <div className="feature-item">
              <h4>BOTOX & FILLERS</h4>
              <p>Smooth wrinkles and restore youthful volume instantly.</p>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <h4>LASER TREATMENTS</h4>
              <p>Advanced FDA-approved laser technology for skin perfection.</p>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <h4>BODY CONTOURING</h4>
              <p>Sculpt and define your physique with non-invasive therapies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
