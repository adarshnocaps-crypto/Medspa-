import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Cynthia Jonson",
    location: "NEW YORK, USA",
    text: "I have suffered from severe acne scars for years. The Relaxo MedSpa team helped me to rejuvenate my skin with their advanced laser treatments. I had a great experience with them, I highly recommend!",
    avatar: "/testi_avatar.png"
  },
  {
    id: 2,
    name: "Michel Garrison",
    location: "NEW YORK, USA",
    text: "The body contouring treatments here are life-changing. The staff is incredibly knowledgeable and made me feel so comfortable. The results speak for themselves, highly recommended!",
    avatar: "/avatar_2.png"
  },
  {
    id: 3,
    name: "Ashley Maxwell",
    location: "NEW YORK, USA",
    text: "After just one session of the HydraFacial, my skin looked completely renewed. The aesthetician took the time to understand my skin type and customized the treatment perfectly.",
    avatar: "/avatar_3.png"
  },
  {
    id: 4,
    name: "Emma Watson",
    location: "NEW YORK, USA",
    text: "I was nervous about getting dermal fillers, but the doctor here was extremely gentle and explained everything. The results are so natural, I couldn't be happier with my new look.",
    avatar: "/avatar_4.png"
  }
];

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
          <motion.img 
            variants={childVariants}
            src="/scrolling_testi_left.png" 
            alt="MedSpa Consultation" 
            className="scroll-testi-img" 
          />
          <motion.p variants={childVariants} className="scroll-testi-subtitle">
            CLIENTS TESTIMONIAL
          </motion.p>
          <motion.h2 variants={childVariants} className="scroll-testi-title">
            What our <span>Happy Clients</span> <br/>reviewed about Us
          </motion.h2>
          <motion.p variants={childVariants} className="scroll-testi-desc">
            For our patients seeking aesthetic enhancements and restorative treatments. The luxury wellness experience begins right here.
          </motion.p>
          <motion.div variants={childVariants}>
            <Link to="/contact" className="btn btn-outline" style={{ display: 'inline-flex', gap: '10px' }}>
              Ask More Questions Here <ArrowRight size={18} />
            </Link>
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
                <img src={review.avatar} alt={review.name} className="card-avatar" />
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
    </section>
  );
};

export default ScrollingTestimonials;
