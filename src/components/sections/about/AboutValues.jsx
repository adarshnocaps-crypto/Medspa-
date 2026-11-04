import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: "Holistic Approach",
    desc: "We care for the whole person, easing your physical recovery while helping you feel calm and confident after surgery."
  },
  {
    title: "Licensed Expertise",
    desc: "Led by licensed massage therapist Priscilla Martinez, with 12+ years of bodywork and 8 years of post-operative care."
  },
  {
    title: "Surgeon-Trusted Care",
    desc: "We work with many top plastic surgeons in the Beverly Hills area through referral relationships."
  },
  {
    title: "Personalized Care",
    desc: "Every session plan is tailored to your procedure, your body and your recovery goals."
  }
];

const AboutValues = () => {
  return (
    <section className="about-split-section">
      <motion.div 
        className="about-values-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {values.map((item, index) => (
          <motion.div 
            key={index} 
            className="value-item"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <div className="value-number">0{index + 1}</div>
            <div className="value-content">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="about-values-right"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src="/vixen/beauty-portrait.jpg" alt="Vixen Spa Services client" className="about-values-img" />
      </motion.div>
    </section>
  );
};

export default AboutValues;
