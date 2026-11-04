import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { yelpPhotos, YELP_URL } from '../../data/yelpPhotos';
import '../../styles/reviews-page.css';

// Real photos from the business's Yelp page, shown alongside client testimonials.
const YelpPhotoStrip = ({ photos = yelpPhotos }) => (
  <div className="yelp-strip">
    <motion.div
      className="yelp-strip-header"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="yelp-strip-eyebrow">REAL CLIENT PHOTOS</p>
      <h3>From Our Yelp Page</h3>
      <a href={YELP_URL} target="_blank" rel="noopener noreferrer" className="yelp-strip-link">
        See more on Yelp <ExternalLink size={14} />
      </a>
    </motion.div>
    <div className="yelp-strip-grid">
      {photos.map((photo, index) => (
        <motion.figure
          key={photo.src}
          className="yelp-strip-item"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
        >
          <img src={photo.src} alt={photo.alt} loading="lazy" />
        </motion.figure>
      ))}
    </div>
  </div>
);

export default YelpPhotoStrip;
