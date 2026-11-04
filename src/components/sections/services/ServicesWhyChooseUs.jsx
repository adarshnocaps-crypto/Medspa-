import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: "Licensed &\nHighly Experienced",
    desc: "Over 12 years in massage and bodywork and 8 years in post-operative care, with a sensitive, compassionate approach."
  },
  {
    id: 2,
    title: "Trusted By Top\nBeverly Hills Surgeons",
    desc: "Referral relationships with many top plastic surgeons in the Beverly Hills area, so your care fits your surgeon's plan."
  },
  {
    id: 3,
    title: "Results-Driven\nRecovery Care",
    desc: "Gentle, personalized sessions that help reduce swelling, smooth lumps and shorten your surgical recovery time."
  }
];

const ServicesWhyChooseUs = () => {
  return (
    <section className="services-wcu-section">
      <div className="services-wcu-container">
        
        <motion.div 
          className="services-wcu-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="services-wcu-title">WHY CHOOSE US</h2>
        </motion.div>

        <motion.div 
          className="services-wcu-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.id} 
              className="services-wcu-item"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="wcu-number-wrapper">
                <span className="wcu-line"></span>
                <span className="wcu-number">0{idx + 1}</span>
                <span className="wcu-line"></span>
              </div>
              <h3 className="wcu-item-title">{feature.title}</h3>
              <p className="wcu-item-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesWhyChooseUs;
