import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/gallery.css';

const galleryImages = [
  { id: 1, src: '/gallery_1_1780660396697.png', alt: 'Treatment Room', type: 'tall' },
  { id: 2, src: '/gallery_2_1780660415749.png', alt: 'Skincare Products', type: 'short' },
  { id: 3, src: '/gallery_3_1780660429401.png', alt: 'Waiting Area', type: 'medium' },
  { id: 4, src: '/gallery_4_1780660440917.png', alt: 'Facial Treatment', type: 'medium' },
  { id: 5, src: '/gallery_5_1780660454668.png', alt: 'Spa Towels', type: 'tall' },
  { id: 6, src: '/gallery_6_1780660467909.png', alt: 'Hallway', type: 'short' }
];

const GallerySection = ({ showHeader = true }) => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        
        {showHeader && (
          <motion.div 
            className="gallery-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="gallery-title">OUR GALLERY</h2>
            <p className="gallery-subtitle">Take a glimpse inside our serene sanctuary, designed to offer you the ultimate relaxation and luxury.</p>
          </motion.div>
        )}

        <div className="gallery-marquee-container">
          <div className="gallery-marquee-track">
            <div className="gallery-marquee-list">
              {galleryImages.map((image) => (
                <div key={image.id} className={`gallery-item ${image.type}`}>
                  <img src={image.src} alt={image.alt} className="gallery-img" />
                </div>
              ))}
            </div>
            <div className="gallery-marquee-list" aria-hidden="true">
              {galleryImages.map((image) => (
                <div key={`dup-${image.id}`} className={`gallery-item ${image.type}`}>
                  <img src={image.src} alt={image.alt} className="gallery-img" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
