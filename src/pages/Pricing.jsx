import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import '../styles/pricing.css';
import PricingHero from '../components/sections/pricing/PricingHero';
import PricingPlansSection from '../components/sections/pricing/PricingPlansSection';

// Vixen Spa Services does not publish prices; quotes are given by phone/text or at the assessment.
const PRICE_LABEL = 'Call for pricing';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pricing-page">
      <Helmet>
        <title>Pricing & Menu | Vixen Spa Services</title>
        <meta name="description" content="Treatment menu for Vixen Spa Services in Beverly Hills: post-op lymphatic drainage, BBL and tummy tuck massages, body sculpting, wood therapy, vacuum therapy, cellulite massages and hyperbaric oxygen therapy. Call or text (323) 873-9014 for pricing." />
      </Helmet>

      {/* Hero Section */}
      <PricingHero />

      {/* Treatment Options Section */}
      <PricingPlansSection />

      {/* Treatment Menu */}
      <section className="pricing-menu-section">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Object.entries(servicesData).map(([category, services]) => (
            <motion.div key={category} className="pricing-category" variants={itemVariants}>
              <h2 className="pricing-category-title">{category}</h2>
              <div className="pricing-list">
                {services.map((service) => (
                  <div key={service.id} className="pricing-item">
                    <div className="pricing-item-info">
                      <h3 className="pricing-item-name">{service.title}</h3>
                      <p className="pricing-item-desc">{service.description.substring(0, 80)}...</p>
                    </div>
                    <div className="pricing-item-dots"></div>
                    <div className="pricing-item-price">
                      {PRICE_LABEL}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Notes Section */}
      <section className="pricing-notes-section">
        <motion.div
          className="pricing-notes"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4>Important Information</h4>
          <p><strong>Assessments:</strong> Every new client starts with an assessment so we can plan your care around your procedure and your surgeon's post-op instructions.</p>
          <p><strong>Appointments:</strong> Sessions are by appointment only. Call or text <a href="tel:+13238739014" style={{ color: 'inherit' }}>(323) 873-9014</a> to book or to ask about pricing.</p>
          <p><strong>Packages:</strong> Ask about multi-session recovery packages when you book.</p>
        </motion.div>
      </section>

    </div>
  );
};

export default Pricing;
