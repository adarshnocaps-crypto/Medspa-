import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { treatmentCategories } from '../data/gallery';
import '../styles/treatment-gallery.css';

const TreatmentGallery = () => {
  const { id } = useParams();
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = treatmentCategories.find(cat => cat.id === id);
    if (found) {
      setTreatment(found);
    }
  }, [id]);

  if (!treatment) {
    return (
      <div className="treatment-gallery-not-found">
        <h2>Gallery Not Found</h2>
        <Link to="/gallery" className="btn btn-outline">Back to Galleries</Link>
      </div>
    );
  }

  return (
    <div className="treatment-gallery-page">
      <Helmet>
        <title>{treatment.title} Gallery | MedSpa</title>
        <meta name="description" content={`View before and after results and our gallery for ${treatment.title}.`} />
      </Helmet>

      {/* Hero Section */}
      <section className="treatment-gallery-hero">
        <div 
          className="tg-hero-banner"
          style={{ backgroundImage: `url(${treatment.thumbnail})` }}
        >
          <div className="tg-hero-overlay"></div>
          <div className="tg-hero-content">
            <div className="vertical-line" style={{ margin: '0 auto 1.5rem', borderColor: '#fff' }}></div>
            <p className="breadcrumbs" style={{ color: 'rgba(255,255,255,0.8)', justifyContent: 'center' }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> &gt; <Link to="/gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</Link> &gt; <span style={{ color: '#fff' }}>{treatment.title}</span>
            </p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {treatment.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {treatment.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      {treatment.beforeAfter && treatment.beforeAfter.length > 0 && (
        <section className="tg-before-after-section">
          <div className="tg-container">
            <motion.h2 
              className="tg-section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Real Results
            </motion.h2>
            <div className="ba-grid">
              {treatment.beforeAfter.map((item, index) => (
                <motion.div 
                  className="ba-card" 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="ba-title">{item.title}</h3>
                  <div className="ba-images-container">
                    <div className="ba-image-wrapper">
                      <img src={item.before} alt={`${item.title} Before`} />
                      <span className="ba-label">Before</span>
                    </div>
                    <div className="ba-image-wrapper">
                      <img src={item.after} alt={`${item.title} After`} />
                      <span className="ba-label">After</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Masonry Gallery Section */}
      {treatment.galleryImages && treatment.galleryImages.length > 0 && (
        <section className="tg-masonry-section">
          <div className="tg-container">
            <motion.h2 
              className="tg-section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Treatment Gallery
            </motion.h2>
            
            <div className="tg-masonry-grid">
              {treatment.galleryImages.map((img, index) => (
                <motion.div 
                  className={`tg-masonry-item ${img.type}`} 
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (index % 3) * 0.1 }}
                >
                  <img src={img.src} alt={img.alt} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking CTA */}
      <section className="tg-cta-section">
        <div className="tg-container tg-cta-content">
          <h2>Ready for your transformation?</h2>
          <p>Book a consultation to discuss how we can achieve your aesthetic goals.</p>
          <Link to="/book-appointment" className="btn btn-primary" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--body-bg-color)' }}>
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TreatmentGallery;
