import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { categories as originalCategories, servicesData } from '../../../data/services';

const categories = ['All', ...originalCategories];

// Flatten all services into a single array for easier filtering
const allServices = Object.keys(servicesData).reduce((acc, category) => {
  const servicesWithCategory = servicesData[category].map(service => ({
    ...service,
    category
  }));
  return [...acc, ...servicesWithCategory];
}, []);

const ServicesBentoGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const carouselRef = useRef(null);

  const filteredServices = allServices.filter(
    service => activeCategory === 'All' || service.category === activeCategory
  );

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="services-bento-section">
      <div className="services-bento-container">
        
        <div className="services-bento-header">
          <h2 className="services-bento-title">SPA SERVICES</h2>
          <div className="services-filter-tabs">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`bento-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  if (carouselRef.current) {
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="carousel-wrapper" style={{ position: 'relative' }}>
          <button 
            onClick={scrollLeft}
            className="carousel-nav-btn left"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <motion.div 
            className="services-cards-grid"
            ref={carouselRef}
            layout
          >
          {filteredServices.map((service) => (
            <motion.div 
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="service-card"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src={service.image} alt={service.title} className="service-card-img" />
              
              <AnimatePresence>
                {hoveredCard === service.id && (
                  <motion.div 
                    className="service-card-hover-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="hover-card-title">{service.title}</h3>
                    <p className="hover-card-desc">{service.description}</p>
                    <ul className="hover-card-bullets">
                      {service.benefits.map((bullet, idx) => (
                        <li key={idx}>
                          <span className="bullet-dot"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                      <button className="btn-hero-outline" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
                        See More
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          </motion.div>

          <button 
            onClick={scrollRight}
            className="carousel-nav-btn right"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesBentoGrid;
