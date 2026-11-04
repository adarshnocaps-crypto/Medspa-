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
            Post Cosmetic Surgical Care
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Healing after cosmetic surgery, with manual lymphatic drainage and hyperbaric oxygen therapy. Our licensed therapists help reduce swelling, bruising and recovery time so you can enjoy the results you deserve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hero-btn-group"
          >
            <Link to="/book-appointment" className="btn btn-primary" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--body-bg-color)', border: 'none' }}>
              Schedule an Assessment
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
              <a href="tel:+13238739014">(323) 873-9014</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <p>337 S Beverly Dr, Beverly Hills, CA</p>
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
              Heal Faster,<br/>Feel Beautiful
            </h1>
          </motion.div>

          <div className="hero-features-bar">
            <div className="feature-item">
              <h4>LYMPHATIC DRAINAGE</h4>
              <p>Gentle post-op massage that eases swelling and fluid retention.</p>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <h4>BODY SCULPTING</h4>
              <p>Wood therapy, vacuum therapy and cellulite massages to contour your shape.</p>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <h4>BBL & TUMMY TUCK CARE</h4>
              <p>Expert massages and aftercare after BBL, tummy tuck and lipo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
