import React from 'react';
import { motion } from 'framer-motion';

const ServiceDetailProjectOverview = ({ service }) => {
  if (!service) return null;

  return (
    <section className="sd-project-overview-section">
      <motion.div 
        className="sd-po-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="sd-po-left">
          <img src={service.image} alt={service.title} className="sd-po-img" />
        </div>
        <div className="sd-po-right">
          <h2 className="sd-po-title">Treatment Overview</h2>
          <p className="sd-po-desc">
            {service.description} We are committed to providing you with the highest quality of care and attention. Our specialized approach ensures that every aspect of your treatment is tailored specifically to your goals.
          </p>
          <div className="sd-po-info-list">
            <div className="sd-po-info-item"><strong>Duration:</strong> &nbsp;45-60 Minutes</div>
            <div className="sd-po-info-item"><strong>Category:</strong> &nbsp;{service.title} Treatment</div>
            <div className="sd-po-info-item"><strong>Tags:</strong> &nbsp;Rejuvenation – Glow – Care</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceDetailProjectOverview;
