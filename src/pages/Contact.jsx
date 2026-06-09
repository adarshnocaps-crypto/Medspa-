import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import '../styles/contact.css';

const AbstractMapPin = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2Z" strokeDasharray="4 4" />
    <path d="M24 12C18.477 12 14 16.477 14 22C14 29.5 24 40 24 40C24 40 34 29.5 34 22C34 16.477 29.523 12 24 12Z" />
    <circle cx="24" cy="21" r="4" />
  </svg>
);

const AbstractPhone = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2Z" strokeDasharray="4 4" />
    <path d="M30 33C25 33 15 23 15 18C15 16 17 14 19 14L22 18L20 20C21.5 23.5 24.5 26.5 28 28L30 26L34 29C34 31 32 33 30 33Z" />
    <path d="M25 14C28 14 30 16 30 19" />
    <path d="M25 10C31 10 34 13 34 19" />
  </svg>
);

const AbstractClock = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2Z" strokeDasharray="4 4" />
    <circle cx="24" cy="24" r="14" />
    <path d="M24 14V24L30 30" />
    <circle cx="12" cy="24" r="1" fill="currentColor"/>
    <circle cx="36" cy="24" r="1" fill="currentColor"/>
    <circle cx="24" cy="12" r="1" fill="currentColor"/>
    <circle cx="24" cy="36" r="1" fill="currentColor"/>
  </svg>
);

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us | MedSpa</title>
        <meta name="description" content="Get in touch for bookings, questions, or personalized recommendations." />
      </Helmet>

      <div className="contact-container">
        
        {/* Section 1: Form */}
        <section className="contact-form-section">
          <motion.div 
            className="contact-title-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>CONTACT</h1>
            <div className="contact-title-us-line">
              <h1>US</h1>
              <div className="title-line"></div>
            </div>
            <p className="contact-desc">
              Get in touch for bookings, questions, or personalized recommendations — our team is always ready to support your wellness journey.
            </p>
          </motion.div>

          <motion.div 
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" className="form-input" placeholder="Name*" required />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-input" placeholder="Phone*" required />
                </div>
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="Email*" required />
              </div>
              <div className="form-group">
                <textarea className="form-input" placeholder="Message"></textarea>
              </div>
              <button type="button" className="btn-explore">Explore All</button>
            </form>
          </motion.div>
        </section>

        {/* Section 2: Info Grid */}
        <section className="contact-info-section">
          
          <motion.div 
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-icon-wrapper" style={{ border: 'none' }}>
              <AbstractMapPin />
            </div>
            <div className="info-content">
              <h3 className="info-title">Contact Us</h3>
              <p className="info-text">Relaxoo MedSpa</p>
              <p className="info-text">128 Madison Avenue, Suite 7A, NY</p>
              <p className="info-text">Phone: +84 987 123 456</p>
            </div>
          </motion.div>

          <motion.div 
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-icon-wrapper" style={{ border: 'none' }}>
              <AbstractPhone />
            </div>
            <div className="info-content">
              <h3 className="info-title">Booking & Service Support</h3>
              <p className="info-text">Email: booking@relaxomedspa.com</p>
              <p className="info-text">Customer Care: support@relaxomedspa.com</p>
              <p className="info-text">Hotline: +84 987 123 456</p>
            </div>
          </motion.div>

          <motion.div 
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="info-icon-wrapper" style={{ border: 'none' }}>
              <AbstractClock />
            </div>
            <div className="info-content">
              <h3 className="info-title">Opening Hours</h3>
              <p className="info-text">Monday - Friday: 9:00 AM — 8:00 PM</p>
              <p className="info-text">Saturday: 10:00 AM — 8:00 PM</p>
              <p className="info-text">Holliday: Closed</p>
            </div>
          </motion.div>

        </section>

      </div>
    </div>
  );
};

export default Contact;
