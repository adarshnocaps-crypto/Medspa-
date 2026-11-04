import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import '../../../styles/pricing-plans.css';
import { useNavigate } from 'react-router-dom';

// Vixen Spa Services does not publish prices, so each option asks clients to call or text.
const PricingPlansSection = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/book-appointment');
  };

  return (
    <section className="pricing-plans-section">
      <div className="pricing-plans-container">

        <motion.h2
          className="pricing-plans-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          TREATMENT OPTIONS
        </motion.h2>

        <div className="plans-grid">

          {/* Lymphatic Drainage */}
          <motion.div
            className="plan-card dark-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="plan-name">Lymphatic Drainage</h3>
            <div className="plan-price-wrapper">
              <span className="plan-price">Call</span>
              <span className="plan-duration">/ FOR PRICING</span>
            </div>
            <p className="plan-desc">Gentle post-op manual lymphatic drainage, plus BBL and tummy tuck massages and aftercare.</p>

            <ul className="plan-features">
              <li><Leaf size={16} className="feature-icon" /> Reduces swelling & fluid retention</li>
              <li><Leaf size={16} className="feature-icon" /> Helps smooth lumps after lipo</li>
              <li><Leaf size={16} className="feature-icon" /> Gentle, painless technique</li>
            </ul>

            <button className="plan-btn" onClick={handleBookNow}>Book Now</button>
          </motion.div>

          {/* Recovery Packages (Highlight) */}
          <motion.div
            className="plan-card light-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="popular-badge">Multi-Session</div>
            <h3 className="plan-name">Recovery Packages</h3>
            <div className="plan-price-wrapper">
              <span className="plan-price">Call</span>
              <span className="plan-duration">/ FOR PRICING</span>
            </div>
            <p className="plan-desc">Multi-session packages built around your procedure and your healing timeline.</p>

            <ul className="plan-features">
              <li><Leaf size={16} className="feature-icon" /> Plan tailored to your surgery</li>
              <li><Leaf size={16} className="feature-icon" /> Lymphatic drainage, sculpting & HBOT</li>
              <li><Leaf size={16} className="feature-icon" /> Starts with an assessment</li>
            </ul>

            <button className="plan-btn" onClick={handleBookNow}>Book Now</button>
          </motion.div>

          {/* Hyperbaric Oxygen Therapy */}
          <motion.div
            className="plan-card dark-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="plan-name">Body Sculpting</h3>
            <div className="plan-price-wrapper">
              <span className="plan-price">Call</span>
              <span className="plan-duration">/ FOR PRICING</span>
            </div>
            <p className="plan-desc">Wood therapy, vacuum therapy and cellulite massages to sculpt and smooth your shape.</p>

            <ul className="plan-features">
              <li><Leaf size={16} className="feature-icon" /> Wood therapy & vacuum therapy</li>
              <li><Leaf size={16} className="feature-icon" /> Cellulite massages</li>
              <li><Leaf size={16} className="feature-icon" /> Non-surgical contouring</li>
            </ul>

            <button className="plan-btn" onClick={handleBookNow}>Book Now</button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PricingPlansSection;
