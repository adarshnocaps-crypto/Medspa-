import React from 'react';
import { motion } from 'framer-motion';

const ServiceDetailOverview = ({ service }) => {
  if (!service) return null;

  return (
    <section className="sd-overview-section">
      <motion.div 
        className="sd-overview-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src={service.image} alt={service.title} className="sd-overview-img" />
      </motion.div>
      
      <motion.div 
        className="sd-overview-right"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="sd-overview-title">TREATMENT DETAILS</h2>
        <p className="sd-overview-text">{service.description}</p>
        <p className="sd-overview-text">
          Our advanced {service.title} treatments are customized to meet your unique needs and goals. 
          Experience a transformative journey with our expert practitioners who will guide you every 
          step of the way.
        </p>
      </motion.div>
    </section>
  );
};

export default ServiceDetailOverview;
