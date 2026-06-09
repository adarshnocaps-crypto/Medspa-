import React from 'react';
import { motion } from 'framer-motion';

const FounderQuote = () => {
  return (
    <section className="founder-section">
      <div className="founder-container">
        <motion.div 
          className="founder-img-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" alt="Dr. Eleanor Vance" className="founder-img" />
        </motion.div>

        <motion.div 
          className="founder-quote-box"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="quote-icon">"</div>
          <p className="founder-quote-text">
            "I created Relaxoo MedSpa with a simple vision: to provide a sanctuary where advanced aesthetics and holistic wellness blend seamlessly. Our goal is not just to transform how you look, but to elevate how you feel."
          </p>
          <p className="founder-name">Eleanor Vance, Founder & Lead Esthetician</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuote;
