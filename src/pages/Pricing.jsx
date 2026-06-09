import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import '../styles/pricing.css';
import AboutCtaBanner from '../components/sections/about/AboutCtaBanner';
import PricingHero from '../components/sections/pricing/PricingHero';
import PricingPlansSection from '../components/sections/pricing/PricingPlansSection';

// Helper to assign dummy "Starting at" prices to treatments
const getDummyPrice = (serviceId) => {
  const prices = {
    'hydrafacial': '$199',
    'microneedling': '$299',
    'chemical-peels': '$150',
    'dermaplaning': '$125',
    'botox': '$12 / unit',
    'dermal-fillers': '$650 / syringe',
    'lip-enhancement': '$700',
    'kybella': '$600 / vial',
    'laser-hair-removal': 'From $99',
    'ipl-photofacial': '$350',
    'skin-resurfacing': '$800',
    'tattoo-removal': 'From $150',
    'coolsculpting': '$750 / cycle',
    'emsculpt': '$850 / session',
    'skin-tightening': '$400',
    'cellulite-reduction': '$300'
  };
  return prices[serviceId] || 'Varies';
};

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
        <title>Pricing & Menu | MedSpa</title>
        <meta name="description" content="View our comprehensive medspa menu and pricing for skin rejuvenation, injectables, laser treatments, and body contouring." />
      </Helmet>

      {/* Hero Section */}
      <PricingHero />

      {/* Pricing Plans Section */}
      <PricingPlansSection />

      {/* Pricing Menu */}
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
                      {getDummyPrice(service.id)}
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
          <p><strong>Consultations:</strong> We offer complimentary consultations for all new patients to design a personalized treatment plan.</p>
          <p><strong>Cancellation Policy:</strong> Please provide 24 hours notice for any cancellations or rescheduling to avoid a $50 fee.</p>
          <p><strong>Financing:</strong> We partner with Cherry and CareCredit to offer flexible payment plans. Subject to approval.</p>
        </motion.div>
      </section>

    </div>
  );
};

export default Pricing;
