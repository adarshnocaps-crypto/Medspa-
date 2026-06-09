import React from 'react';
import { motion } from 'framer-motion';

const AboutCtaBanner = () => {
  return (
    <section className="about-cta-banner">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>JOURNEY BEGINS HERE</h2>
        <p>Book a consultation today and discover how our advanced aesthetic treatments and holistic spa therapies can help you achieve your wellness goals.</p>
      </motion.div>
    </section>
  );
};

export default AboutCtaBanner;
