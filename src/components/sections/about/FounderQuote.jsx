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
          <img src="/vixen-spa-logo.png" alt="Priscilla Martinez, founder of Vixen Spa Services" className="founder-img" />
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
            "I created Vixen Spa Services with a simple vision: to provide a sanctuary where advanced aesthetics and holistic wellness blend seamlessly. Our goal is not just to transform how you look, but to elevate how you feel."
          </p>
          <p className="founder-name">Priscilla Martinez, Founder & Licensed Massage Therapist</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuote;
