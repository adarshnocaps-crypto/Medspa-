import React from 'react';
import { motion } from 'framer-motion';

const ServiceDetailProcess = ({ service }) => {
  if (!service) return null;

  const processes = [
    {
      num: '01',
      title: 'Consultation & Preparation',
      desc: `The journey begins with a comprehensive consultation to understand your skin goals. A gentle exfoliating cleanse is performed to prep the skin for your ${service.title} treatment.`
    },
    {
      num: '02',
      title: `${service.title} Application`,
      desc: `Our expert practitioners precisely administer the ${service.title} therapy, focusing on targeted areas to ensure optimal absorption and effectiveness.`
    },
    {
      num: '03',
      title: 'Restoration & Protection',
      desc: `The final phase focuses on soothing the skin and applying medical-grade protectants to lock in results, promoting long-lasting resilience and a radiant glow.`
    }
  ];

  return (
    <section className="sd-process-section">
      <div className="sd-process-container">
        <motion.h2 
          className="sd-process-main-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Process of {service.title}
        </motion.h2>
        <div className="sd-process-grid">
          {processes.map((step, idx) => (
            <motion.div 
              key={idx} 
              className="sd-process-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="sd-process-header">
                <span className="sd-process-line"></span>
                <span className="sd-process-num">{step.num}</span>
                <span className="sd-process-line"></span>
              </div>
              <h3 className="sd-process-title">{step.title}</h3>
              <p className="sd-process-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailProcess;
