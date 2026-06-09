import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BookingSection from '../components/sections/BookingSection';
import '../styles/book-appointment.css';

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

const BookAppointment = () => {
  const { scrollY } = useScroll();
  const textScale = useTransform(scrollY, [0, 400], [1, 1.3]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const contentY = useTransform(scrollY, [0, 200], [50, 0]);

  return (
    <div className="book-appointment-page">
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
            APPOINTMENT
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
            <p className="breadcrumbs">Home &gt; Appointment</p>
            <p className="about-hero-desc">
              A serene wellness setting where curated rituals and expert techniques work together to support relaxation, renewal, and overall wellbeing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="appointment-content-container">
        <div className="appointment-left">
           <BookingSection showHeader={false} />
        </div>
        
        <div className="appointment-right">
          <div className="appointment-info-list">
            
            <div className="info-card">
              <div className="info-icon-wrapper" style={{ border: 'none' }}>
                <AbstractMapPin />
              </div>
              <div className="info-content">
                <h3 className="info-title">Contact Us</h3>
                <p className="info-text">Relaxoo MedSpa</p>
                <p className="info-text">128 Madison Avenue, Suite 7A, NY</p>
                <p className="info-text">Phone: +84 987 123 456</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper" style={{ border: 'none' }}>
                <AbstractPhone />
              </div>
              <div className="info-content">
                <h3 className="info-title">Booking & Service Support</h3>
                <p className="info-text">Email: booking@relaxomedspa.com</p>
                <p className="info-text">Customer Care: support@relaxomedspa.com</p>
                <p className="info-text">Hotline: +84 987 123 456</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper" style={{ border: 'none' }}>
                <AbstractClock />
              </div>
              <div className="info-content">
                <h3 className="info-title">Opening Hours</h3>
                <p className="info-text">Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p className="info-text">Saturday: 10:00 AM - 8:00 PM</p>
                <p className="info-text">Holliday: Closed</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
