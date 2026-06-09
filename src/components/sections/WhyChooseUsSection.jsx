import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Flower, Droplet, Heart, Zap, Sun, MoveLeft, MoveRight } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Leaf,
    title: "Premium Natural\nIngredients Only",
    desc: "We use only the finest natural botanicals and pure essential oils to nourish your skin and elevate your well-being."
  },
  {
    id: 2,
    icon: Flower,
    title: "Tranquil Luxurious\nAtmosphere Always",
    desc: "Our serene space is thoughtfully designed to gently calm your senses and restore deep inner peace and harmony."
  },
  {
    id: 3,
    icon: Droplet,
    title: "Personalized Wellness\nJourney Experience",
    desc: "Each treatment is thoughtfully tailored to your unique needs, helping you rediscover balance, beauty and harmony."
  },
  {
    id: 4,
    icon: Heart,
    title: "Expert Medical\nProfessionals",
    desc: "Our certified specialists combine artistic vision with advanced medical expertise to deliver safe, stunning results."
  },
  {
    id: 5,
    icon: Zap,
    title: "State-Of-The-Art\nTechnology",
    desc: "We utilize the latest FDA-approved aesthetic technologies to ensure the highest standards of safety and efficacy."
  },
  {
    id: 6,
    icon: Sun,
    title: "Holistic Mind &\nBody Approach",
    desc: "We believe true beauty radiates from within, focusing on treatments that nurture both your physical and mental well-being."
  }
];

const WhyChooseUsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = features.length - 3; // Show 3 items at a time

  const handleNext = () => {
    setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <section className="why-choose-us-section">
      <div className="container">
        
        {/* Header Area */}
        <motion.div 
          className="wcu-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="wcu-title">WHY CHOOSE US</h2>
          <p className="wcu-description">
            Where tranquility, care, and craftsmanship come together to create a truly 
            restorative and deeply rejuvenating experience for your body and mind.
          </p>
        </motion.div>

        {/* Divider Line */}
        <motion.div 
          className="wcu-divider-line"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          style={{ transformOrigin: "left center" }}
        ></motion.div>

        {/* Features Content */}
        <motion.div 
          className="wcu-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          
          {/* Left Arrow */}
          <button className="wcu-nav-btn left-nav" onClick={handlePrev}>
            <MoveLeft size={24} strokeWidth={1} />
          </button>

          {/* Carousel Viewport */}
          <div className="wcu-carousel-viewport">
            <motion.div 
              className="wcu-carousel-track"
              initial={false}
              animate={{ x: `-${currentIndex * (100 / features.length)}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              style={{ width: `${(features.length / 3) * 100}%` }}
            >
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.id} className="wcu-feature-wrapper" style={{ width: `${100 / features.length}%` }}>
                    <div className="wcu-feature-item">
                      <div className="wcu-icon-wrapper">
                        <Icon size={42} strokeWidth={1} color="var(--body-bg-color)" />
                      </div>
                      <h3 className="wcu-feature-title" style={{ whiteSpace: 'pre-line' }}>{feature.title}</h3>
                      <p className="wcu-feature-desc">
                        {feature.desc}
                      </p>
                    </div>

                    {/* Column Divider with Plus (hide on the very last item) */}
                    {idx < features.length - 1 && (
                      <div className="wcu-col-divider">
                        <span className="plus-mark">+</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button className="wcu-nav-btn right-nav" onClick={handleNext}>
            <MoveRight size={24} strokeWidth={1} />
          </button>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
