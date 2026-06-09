import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Olivia Bennett",
    role: "Marketing Manager",
    text: "“My Skin Transformed Completely. It Feels Smoother, Brighter, And More Hydrated Than It Has In Years. The Weekly Treatments Are So Relaxoing — Truly A Journey My Skin Needed.”",
    avatar: "/testi_avatar.png"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Entrepreneur",
    text: "“The absolute pinnacle of luxury and results. After my first laser session, the difference was immediate. The team is incredibly professional and the environment is deeply restorative.”",
    avatar: "/testi_avatar.png"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Fashion Director",
    text: "“I’ve visited spas all over the world, but the level of personalized care and advanced aesthetic techniques here is unmatched. It’s my new sanctuary for beauty and wellness.”",
    avatar: "/testi_avatar.png"
  },
  {
    id: 4,
    name: "Jessica Taylor",
    role: "Real Estate Agent",
    text: "“Incredible experience from start to finish. The chemical peel totally rejuvenated my complexion, and the staff made sure I was comfortable every step of the way.”",
    avatar: "/testi_avatar.png"
  },
  {
    id: 5,
    name: "Amanda Brooks",
    role: "Creative Director",
    text: "“I am absolutely glowing. The combination of dermal fillers and the HydraFacial has taken years off my appearance while keeping it completely natural. Highly recommend!”",
    avatar: "/testi_avatar.png"
  },
  {
    id: 6,
    name: "Dr. Rachel Adams",
    role: "Dermatologist",
    text: "“As a medical professional, I am extremely selective about where I receive treatments. Relaxo MedSpa exceeds all clinical standards while providing a deeply luxurious experience.”",
    avatar: "/testi_avatar.png"
  }
];

const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[activeSlide];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        
        {/* Left Column */}
        <div className="testi-left-col">
          
          <div className="testi-meta-row">
            <motion.div 
              className="testi-author-box"
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={activeTestimonial.avatar} alt={activeTestimonial.name} className="testi-avatar" />
              <div className="testi-author-info">
                <h4 className="testi-author-name">{activeTestimonial.name}</h4>
                <p className="testi-author-role">{activeTestimonial.role}</p>
              </div>
            </motion.div>

            <div className="testi-quote-circle">
              <Quote size={40} strokeWidth={1} />
            </div>
          </div>

          <div className="testi-text-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="testi-text">{activeTestimonial.text}</h3>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testi-bottom-row">
            <div className="testi-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((activeSlide + 1) / testimonials.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <button className="btn-testi">
              More Testimonials
            </button>
          </div>

          {/* Floating Drag Control */}
          <motion.div 
            className="testi-drag-control"
            drag="x"
            dragConstraints={{ left: -50, right: 50 }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              if (swipe < -50) {
                nextSlide();
              } else if (swipe > 50) {
                prevSlide();
              }
            }}
          >
            <ChevronLeft size={16} className="drag-arrow" onClick={prevSlide} />
            <span className="drag-text">DRAG</span>
            <ChevronRight size={16} className="drag-arrow" onClick={nextSlide} />
          </motion.div>

        </div>

        {/* Right Column */}
        <div className="testi-right-col">
          <motion.img 
            src="/testi_interior.png" 
            alt="Spa Interior" 
            className="testi-img-tall"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <motion.img 
            src="/testi_treatment.png" 
            alt="Spa Treatment" 
            className="testi-img-overlap"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          />
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
