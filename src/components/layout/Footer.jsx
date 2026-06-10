import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="app-footer">
      <div className="footer-container">
        
        {/* Huge Outline Text */}
        <div className="footer-huge-text-container">
          <h1 className="footer-huge-text">Relaxo</h1>
        </div>

        {/* 3 Column Grid */}
        <div className="footer-content-grid">
          
          {/* Column 1 */}
          <div className="footer-col-1">
            <h2 className="footer-title">BEGIN YOUR JOURNEY TO<br/>RADIANT WELLNESS TODAY</h2>
            <Link to="/book-appointment" className="footer-btn">
              Book Appointment
            </Link>
            
            <div className="footer-socials">
              <span className="social-label">Follow Us:</span>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col-2">
            <div className="footer-contact-block">
              <span className="footer-label">Give Us A Call:</span>
              <h3 className="contact-phone">
                <a href="tel:+16022665755" style={{ textDecoration: 'none', color: 'inherit' }}>(602) 266-5755</a>
              </h3>
            </div>
            
            <div className="footer-contact-block">
              <span className="footer-label">Visit Us:</span>
              <p className="footer-text" style={{ margin: 0 }}>
                128 Madison Avenue, Suite 7A,<br/>
                New York, NY 10016
              </p>
            </div>

            <div className="footer-contact-block">
              <p className="footer-label" style={{ marginBottom: '0.5rem' }}>Open Daily: 9:00 AM &ndash; 8:00 PM</p>
              <p className="footer-label">
                Send Mail: <a href="mailto:booking@relaxomedspa.com" style={{ textDecoration: 'none', color: 'inherit' }}>booking@relaxomedspa.com</a>
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="footer-col-3">
            <h3 className="footer-subtitle">Join Our Newsletter</h3>
            <p className="footer-text">
              Sign up to stay updated with the latest spa treatments, wellness tips, and exclusive offers.
            </p>
            
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="newsletter-input" placeholder="Your email*" required />
              <div className="newsletter-submit-row">
                <span className="subscribe-label">SUBSCRIBE</span>
                <button type="submit" className="submit-btn" aria-label="Subscribe">
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Relaxoo MedSpa Studio. All rights reserved.
          </p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={20} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
