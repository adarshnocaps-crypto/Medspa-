import React from 'react';
import { motion } from 'framer-motion';

const ServicesTestimonial = () => {
  return (
    <section className="services-testimonial-section">
      <div className="services-testimonial-bg-text">TESTIMONIALS</div>
      
      <div className="services-testimonial-container">
        <motion.div 
          className="services-testi-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600" alt="Testimonial Spa" className="services-testi-img" />
        </motion.div>

        <motion.div 
          className="services-testi-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="services-testi-quote">
            "My Complexion Changed Entirely. I Look Softer, Clearer, And Perfectly Balanced. More Ever Before. The Healing Sessions Were Incredibly Relaxoing - Truly An Experience, My Skin Deeply Appreciated Therapy"
          </p>
          <div className="services-testi-author">
            <h4>Julia Becker</h4>
            <span>Loyal Client</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesTestimonial;
