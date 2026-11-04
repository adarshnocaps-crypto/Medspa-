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
        
        {/* Brand crest (gold logo reads well on the dark footer) */}
        <div className="footer-logo-wrapper">
          <img src="/vixen-spa-logo.png" alt="Vixen Spa Services" className="footer-logo" />
        </div>

        {/* Huge Outline Text */}
        <div className="footer-huge-text-container">
          <h1 className="footer-huge-text">Vixen</h1>
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
              <a href="https://www.facebook.com/p/Vixen-Spa-Services-100047713643917/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/vixenspaservices_/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.yelp.com/biz/vixen-spa-services-beverly-hills" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Yelp reviews" title="Yelp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col-2">
            <div className="footer-contact-block">
              <span className="footer-label">Give Us A Call:</span>
              <h3 className="contact-phone">
                <a href="tel:+13238739014" style={{ textDecoration: 'none', color: 'inherit' }}>(323) 873-9014</a>
              </h3>
            </div>

            <div className="footer-contact-block">
              <span className="footer-label">Visit Us:</span>
              <p className="footer-text" style={{ margin: 0 }}>
                337 S Beverly Dr,<br/>
                Beverly Hills, CA 90212
              </p>
            </div>

            <div className="footer-contact-block">
              <p className="footer-label" style={{ marginBottom: '0.5rem' }}>By Appointment Only &middot; Mon &ndash; Fri: 9:00 AM &ndash; 9:00 PM</p>
              <p className="footer-label" style={{ overflowWrap: 'anywhere' }}>
                Send Mail: <a href="mailto:priscilla@lymphaticdrainagemassage.com" style={{ textDecoration: 'none', color: 'inherit' }}>priscilla@<wbr />lymphaticdrainagemassage.com</a>
              </p>
              <p className="footer-label" style={{ overflowWrap: 'anywhere', marginTop: '0.5rem' }}>
                Website: <a href="https://lymphaticdrainagemassage.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>lymphaticdrainagemassage.com</a>
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
            &copy; {new Date().getFullYear()} Vixen Spa Services. All rights reserved.
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
