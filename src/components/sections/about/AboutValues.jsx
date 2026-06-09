import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: "Holistic Approach",
    desc: "We treat the whole person, addressing both physical and mental well-being to achieve true harmony."
  },
  {
    title: "Expert Practitioners",
    desc: "Our team consists of highly trained and certified professionals dedicated to your care and safety."
  },
  {
    title: "Premium Products",
    desc: "We use only the highest quality, scientifically-backed products for all our treatments."
  },
  {
    title: "Personalized Care",
    desc: "Every treatment plan is custom-tailored to meet your specific needs and aesthetic goals."
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
        <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" alt="Medical Aesthetic Tools" className="about-values-img" />
      </motion.div>
    </section>
  );
};

export default AboutValues;
