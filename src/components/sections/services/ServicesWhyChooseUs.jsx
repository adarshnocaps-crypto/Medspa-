import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: "Premium Natural\nIngredients Only",
    desc: "We use only the finest natural botanicals and pure essential oils to nourish your skin and elevate your well-being."
  },
  {
    id: 2,
    title: "Tranquil Luxurious\nAtmosphere Always",
    desc: "Our serene space is thoughtfully designed to gently calm your senses and restore deep inner peace and harmony."
  },
  {
    id: 3,
    title: "Personalized Wellness\nJourney Experience",
    desc: "Each treatment is thoughtfully tailored to your unique needs, helping you rediscover balance, beauty and harmony."
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
