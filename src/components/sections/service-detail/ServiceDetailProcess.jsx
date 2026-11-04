import React from 'react';
import { motion } from 'framer-motion';

const ServiceDetailProcess = ({ service }) => {
  if (!service) return null;

  const processes = [
    {
      num: '01',
      title: 'Assessment & Planning',
      desc: `Every client starts with an assessment. We review your procedure, your surgeon's post-op instructions and your goals to plan your ${service.title} sessions.`
    },
    {
      num: '02',
      title: `Your ${service.title} Session`,
      desc: `Each session is tailored to your procedure and treated areas, and Priscilla explains what she is doing and why at every step.`
    },
    {
      num: '03',
      title: 'Recovery Plan & Follow-Up',
      desc: `We recommend how many sessions you need and schedule them around your healing timeline. Ask about packages for multi-session recovery.`
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
