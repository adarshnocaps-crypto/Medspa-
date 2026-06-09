import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import '../../../styles/pricing-plans.css';
import { useNavigate } from 'react-router-dom';

const PricingPlansSection = () => {
  const navigate = useNavigate();

  const handleBookNow = (plan) => {
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
          OUR PRICING PLANS
        </motion.h2>

        <div className="plans-grid">
          
          {/* Basic Plan */}
          <motion.div 
            className="plan-card dark-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="plan-name">Basic Plan</h3>
            <div className="plan-price-wrapper">
              <span className="plan-price">$59</span>
              <span className="plan-duration">/SESSION</span>
            </div>
            <p className="plan-desc">Perfect for a quick refresh & first-time guests experience.</p>
            
            <ul className="plan-features">
              <li><Leaf size={16} className="feature-icon" /> Express facial treatment</li>
              <li><Leaf size={16} className="feature-icon" /> Deep cleansing & hydration</li>
              <li><Leaf size={16} className="feature-icon" /> Skin consultation</li>
            </ul>

            <button className="plan-btn" onClick={() => handleBookNow('Basic')}>Book Now</button>
          </motion.div>

          {/* Standard Plan (Highlight) */}
          <motion.div 
            className="plan-card light-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="popular-badge">Popular</div>
            <h3 className="plan-name">Standard Plan</h3>
            <div className="plan-price-wrapper">
              <span className="plan-price">$129</span>
              <span className="plan-duration">/SESSION</span>
            </div>
            <p className="plan-desc">Most popular choice for balanced skin care and lasting glow.</p>
            
            <ul className="plan-features">
              <li><Leaf size={16} className="feature-icon" /> Customized facial treatment</li>
              <li><Leaf size={16} className="feature-icon" /> Advanced skin analysis</li>
              <li><Leaf size={16} className="feature-icon" /> Deep exfoliation & mask therapy</li>
            </ul>

            <button className="plan-btn" onClick={() => handleBookNow('Standard')}>Book Now</button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            className="plan-card dark-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="plan-name">Premium Plan</h3>
            <div className="plan-price-wrapper">
              <span className="plan-price">$229</span>
              <span className="plan-duration">/SESSION</span>
            </div>
            <p className="plan-desc">Luxury treatment for deep renewal & anti-aging experience.</p>
            
            <ul className="plan-features">
              <li><Leaf size={16} className="feature-icon" /> Signature facial & anti-aging therapy</li>
              <li><Leaf size={16} className="feature-icon" /> LED light treatment</li>
              <li><Leaf size={16} className="feature-icon" /> Lymphatic drainage massage</li>
            </ul>

            <button className="plan-btn" onClick={() => handleBookNow('Premium')}>Book Now</button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PricingPlansSection;
