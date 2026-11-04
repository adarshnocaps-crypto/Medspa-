import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, ExternalLink } from 'lucide-react';
import { reviews, WEBSITE_URL } from '../data/reviews';
import YelpPhotoStrip from '../components/sections/YelpPhotoStrip';
import '../styles/reviews-page.css';

const getInitials = (name) => name.split(' ').map(part => part[0]).join('').replace(/[^A-Z]/gi, '').slice(0, 2).toUpperCase();

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="reviews-page">
      <Helmet>
        <title>Client Reviews | Vixen Spa Services</title>
        <meta name="description" content="Real client reviews of Vixen Spa Services in Beverly Hills: lymphatic drainage, post-op massage and aftercare." />
      </Helmet>

      <section className="reviews-hero">
        <p className="reviews-eyebrow">CLIENT TESTIMONIALS</p>
        <h1>What Our Clients Say</h1>
        <p className="reviews-intro">
          Real words from clients Priscilla has helped recover after liposuction, BBL and other cosmetic procedures,
          as published on our website.
        </p>
      </section>

      <section className="reviews-grid">
        {reviews.map((review, index) => (
          <motion.article
            key={review.id}
            className="review-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
          >
            <div className="review-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="review-text">“{review.text}”</p>
            <div className="review-author">
              <div className="review-initials" aria-hidden="true">{getInitials(review.name)}</div>
              <div>
                <h3 className="review-name">{review.name}</h3>
                <p className="review-meta">{review.location} &middot; {review.service}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <YelpPhotoStrip />

      <section className="reviews-cta">
        <h2>Ready to start your recovery?</h2>
        <p>Schedule an assessment, or visit our website to learn more about Priscilla and our services.</p>
        <div className="reviews-cta-buttons">
          <Link to="/book-appointment" className="btn btn-primary" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--body-bg-color)' }}>
            Schedule an Assessment
          </Link>
          <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
            Visit Our Website <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
