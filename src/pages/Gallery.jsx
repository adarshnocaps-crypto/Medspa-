import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { treatmentCategories } from '../data/gallery';
import '../styles/gallery.css';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const textScale = useTransform(scrollY, [0, 400], [1, 1.3]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const contentY = useTransform(scrollY, [0, 200], [50, 0]);

  return (
    <div className="gallery-page">
      <Helmet>
        <title>Our Gallery | MedSpa Results</title>
        <meta name="description" content="View our stunning before and after results organized by treatment type." />
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero-container">
        <div 
          className="about-hero-banner" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920&h=1080')` }}
        >
          <div className="about-hero-overlay"></div>
          <motion.h1 
            className="about-hero-title-centered"
            style={{ 
              scale: textScale, 
              opacity: textOpacity,
              transformOrigin: 'bottom center'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            OUR GALLERY
          </motion.h1>
        </div>
        
        <div className="about-hero-content-wrapper">
          <motion.div 
            className="about-hero-bottom-content"
            style={{ 
              opacity: contentOpacity, 
              y: contentY 
            }}
          >
            <div className="vertical-line"></div>
            <p className="breadcrumbs">Home &gt; Gallery</p>
            <p className="about-hero-desc">
              Explore our real results. Select a treatment below to view before & after transformations and our dedicated galleries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="gallery-categories-section">
        <div className="gallery-categories-container">
          <div className="gc-grid">
            {treatmentCategories.map((cat, index) => (
              <motion.div 
                className="gc-card" 
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/gallery/${cat.id}`} className="gc-card-link">
                  <div className="gc-img-wrapper">
                    <img src={cat.thumbnail} alt={cat.title} />
                    <div className="gc-overlay">
                      <span>View Gallery <ArrowRight size={18} /></span>
                    </div>
                  </div>
                  <div className="gc-content">
                    <h3>{cat.title}</h3>
                    <p>{cat.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
