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
            Vixen Spa Services is led by Priscilla Martinez, a licensed massage therapist with over 12 years
            of experience in massage and bodywork and 8 years in post-operative care. Working with many top
            plastic surgeons in Beverly Hills through referral relationships, she combines manual lymphatic
            drainage, body sculpting, wood therapy, vacuum therapy and hyperbaric oxygen therapy to help you heal comfortably and see your best results.
          </motion.p>
          
          <motion.div variants={itemVariants} className="about-btn-wrapper">
            <Link to="/about" className="btn-about">
              Discover Our Story
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="about-stats-row">
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">Years of Bodywork</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Years Post-Op Care</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" style={{ whiteSpace: 'nowrap' }}><small style={{ fontSize: '0.45em', marginRight: '0.25em' }}>Up to</small>75%</span>
              <span className="stat-label">Faster Recovery</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <div className="about-right-col">
          <motion.img 
            src="/vixen/back-massage-relax.jpg"
            alt="Post-op lymphatic drainage massage"
            className="about-img-main"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.img 
            src="/vixen/face-neck-drainage.jpg"
            alt="Face and neck lymphatic drainage"
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
