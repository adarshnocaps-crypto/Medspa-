import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories, servicesData } from '../../data/services';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeTreatment, setActiveTreatment] = useState(servicesData[categories[0]][0]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveTreatment(servicesData[category][0]);
  };

  return (
    <section className="services-section">
      <div className="boxed-container">
        {/* Header Area */}
        <motion.div 
          className="services-header-row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title">SPA SERVICES</h2>
          <div className="category-tabs">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div 
          className="services-content-layout"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
        
        {/* Left Column: Treatments List */}
        <div className="treatments-sidebar">
          {servicesData[activeCategory].map((treatment) => {
            const Icon = treatment.icon;
            return (
              <motion.div 
                key={treatment.id}
                className={`treatment-list-item ${activeTreatment.id === treatment.id ? 'active' : ''}`}
                onClick={() => setActiveTreatment(treatment)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="treatment-icon-wrapper">
                  <Icon className="treatment-icon" strokeWidth={1} size={42} />
                </div>
                <h3>{treatment.title}</h3>
              </motion.div>
            );
          })}
        </div>

        {/* Center Column: Arched Image */}
        <div className="treatment-image-wrapper">
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeTreatment.id}
              src={activeTreatment.image}
              alt={activeTreatment.title}
              className="arched-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Right Column: Treatment Details */}
        <div className="treatment-details-wrapper">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTreatment.id}
              className="treatment-details-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="details-title">{activeTreatment.title}</h3>
              <p className="details-desc">{activeTreatment.description}</p>
              
              <ul className="benefits-list">
                {activeTreatment.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <span className="bullet-point"></span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link to={`/services/${activeTreatment.id}`} className="btn-hero-outline read-more-btn" style={{textDecoration: 'none', display: 'inline-block', textAlign: 'center'}}>
                Read More
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
