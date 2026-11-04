import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { reviews as allReviews, WEBSITE_URL } from '../../data/reviews';
import YelpPhotoStrip from './YelpPhotoStrip';
import { yelpPhotos } from '../../data/yelpPhotos';

const reviews = allReviews.map(r => ({ ...r, text: r.short }));

// Real client testimonials from the business website (see data/reviews.js). Cards show the
// client's initials because no client photos are published.
const getInitials = (name) => name.split(' ').map(part => part[0]).join('').replace(/[^A-Z]/gi, '').slice(0, 2).toUpperCase();

const ScrollingTestimonials = () => {
  // Animation variants for the left sticky column
  const leftVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth <= 768 && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by approx 85vw since cards are 85% wide
          scrollRef.current.scrollBy({ left: clientWidth * 0.85 + 16, behavior: 'smooth' }); 
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="scroll-testi-section">
      <div className="scroll-testi-container">
        
        {/* Left Sticky Column */}
        <motion.div 
          className="scroll-testi-left"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={childVariants} className="scroll-testi-photos">
            {yelpPhotos.slice(0, 3).map((photo) => (
              <img key={photo.src} src={photo.src} alt={photo.alt} />
            ))}
          </motion.div>
          <motion.p variants={childVariants} className="scroll-testi-subtitle">
            CLIENTS TESTIMONIAL
          </motion.p>
          <motion.h2 variants={childVariants} className="scroll-testi-title">
            What our <span>Happy Clients</span> <br/>reviewed about Us
          </motion.h2>
          <motion.p variants={childVariants} className="scroll-testi-desc">
            Real words from clients Priscilla has helped recover after liposuction, BBL and other cosmetic procedures.
          </motion.p>
          <motion.div variants={childVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/testimonials" className="btn btn-outline" style={{ display: 'inline-flex', gap: '10px' }}>
              Read All Reviews <ArrowRight size={18} />
            </Link>
            <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', gap: '10px' }}>
              Visit Our Website <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Scrolling Column */}
        <div className="scroll-testi-right" ref={scrollRef}>
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              className="scroll-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="card-quote-bg">
                <Quote size={120} fill="currentColor" strokeWidth={0} />
              </div>
              
              <div className="card-avatar-wrapper">
                {review.avatar ? (
                  <img src={review.avatar} alt={review.name} className="card-avatar" />
                ) : (
                  <div className="card-avatar card-avatar-initials" aria-hidden="true">{getInitials(review.name)}</div>
                )}
              </div>
              
              <div className="card-content">
                <div className="card-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="card-text">
                  {review.text}
                </p>
                <div className="card-author">
                  <h4 className="card-name">{review.name}</h4>
                  <p className="card-location">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <YelpPhotoStrip />
    </section>
  );
};

export default ScrollingTestimonials;
