import React from 'react';
import { motion } from 'framer-motion';

const ServiceDetailWhyChooseUs = () => {
  return (
    <section className="sd-wcu-section">
      <div className="sd-wcu-container">
        <motion.div 
          className="sd-wcu-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>WHY CHOOSE US</h2>
        </motion.div>
        <div className="sd-wcu-grid">
          <motion.div 
            className="sd-wcu-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <div className="sd-wcu-top">
              <span className="sd-wcu-line"></span>
              <span className="sd-wcu-number">01</span>
              <span className="sd-wcu-line"></span>
            </div>
            <h3 className="sd-wcu-title">Expert Practitioners</h3>
            <p className="sd-wcu-desc">Our team consists of highly trained and certified professionals committed to your safety and satisfaction.</p>
          </motion.div>
          <motion.div 
            className="sd-wcu-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sd-wcu-top">
              <span className="sd-wcu-line"></span>
              <span className="sd-wcu-number">02</span>
              <span className="sd-wcu-line"></span>
            </div>
            <h3 className="sd-wcu-title">Advanced Technology</h3>
            <p className="sd-wcu-desc">We use the latest FDA-approved equipment and premium products for optimal, long-lasting results.</p>
          </motion.div>
          <motion.div 
            className="sd-wcu-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="sd-wcu-top">
              <span className="sd-wcu-line"></span>
              <span className="sd-wcu-number">03</span>
              <span className="sd-wcu-line"></span>
            </div>
            <h3 className="sd-wcu-title">Personalized Care</h3>
            <p className="sd-wcu-desc">Every treatment is tailored to your unique skin and body needs, ensuring a fully customized experience.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailWhyChooseUs;
