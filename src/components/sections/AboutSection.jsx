import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  // Animation variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Column */}
        <motion.div 
          className="about-left-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="about-title">
            EMBRACE WELLNESS, INNER PEACE, AND THE BEAUTY THAT LASTS FOREVER
          </motion.h2>
          
          <motion.p variants={itemVariants} className="about-desc">
            At Relaxo MedSpa, we believe true beauty begins with balance — a harmony of body, mind, and
            spirit. Nestled in the heart of New York, our serene sanctuary offers bespoke treatments
            crafted to renew your skin, calm your senses, and restore your natural glow. Each visit is an
            invitation to unwind, reconnect, and rediscover your inner radiance.
          </motion.p>
          
          <motion.div variants={itemVariants} className="about-btn-wrapper">
            <Link to="/about" className="btn-about">
              Discover Our Story
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="about-stats-row">
            <div className="stat-item">
              <span className="stat-number">15K</span>
              <span className="stat-label">Visitors</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Positive Feedback</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <div className="about-right-col">
          <motion.img 
            src="/about_main.png" 
            alt="Spa Treatment" 
            className="about-img-main"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.img 
            src="/about_overlap.png" 
            alt="Massage Therapy" 
            className="about-img-overlap"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
