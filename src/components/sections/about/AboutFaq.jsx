import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const faqs = [
  {
    question: "Do I Need To Book An Appointment In Advance?",
    answer: "Yes, we highly recommend scheduling your appointment at least 24 hours in advance to ensure your preferred time and therapist are available."
  },
  {
    question: "What Should I Wear During My Treatment?",
    answer: "Please wear comfortable clothing. We provide robes and slippers for your comfort during your visit."
  },
  {
    question: "Can I Customize My Treatment?",
    answer: "Absolutely. Our expert practitioners will work with you during your consultation to customize any treatment to your specific needs."
  },
  {
    question: "What If I'm Late Or Need To Cancel?",
    answer: "We require a 24-hour notice for cancellations. Late arrivals may result in a shortened treatment time."
  }
];

const AboutFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="home-faq-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', padding: '6rem 4%', maxWidth: '1400px', margin: '0 auto', backgroundColor: 'var(--body-bg-color)' }}>
      
      {/* Left Column: FAQs */}
      <div className="faq-left" style={{ paddingTop: '2rem' }}>
        <h2 style={{ fontFamily: "'Melodrama', serif", fontSize: '4rem', color: 'var(--primary-color)', fontWeight: 300, marginBottom: '3rem', letterSpacing: '1px' }}>
          FAQs
        </h2>
        
        <div className="faq-accordion" style={{ borderTop: '1px solid rgba(88, 94, 72, 0.2)' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{ borderBottom: '1px solid rgba(88, 94, 72, 0.2)', padding: '1.5rem 0', cursor: 'pointer' }}
            >
              <div className="faq-question" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Melodrama', serif", fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: 400 }}>
                  {index + 1}. {faq.question}
                </span>
                <span style={{ color: 'rgba(88, 94, 72, 0.5)' }}>
                  {openIndex === index ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                </span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ color: 'var(--secondary-color)', fontSize: '0.95rem', lineHeight: 1.6, paddingTop: '1rem', paddingRight: '2rem' }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Column: Image and Card */}
      <motion.div 
        className="faq-right"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingBottom: '2rem' }}
      >
        <img 
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" 
          alt="FAQ" 
          style={{ width: '85%', height: '600px', objectFit: 'cover', borderTopLeftRadius: '250px' }} 
        />
        
        <div className="faq-right-card" style={{ 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          backgroundColor: 'var(--primary-color)', 
          padding: '3rem', 
          width: '65%',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem'
        }}>
          <h3 style={{ fontFamily: "'Melodrama', serif", fontSize: '2rem', color: '#fff', fontWeight: 300, lineHeight: 1.3 }}>
            Got A Question?<br/>Ask Away
          </h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>
            <a href="/contact" style={{ color: '#fff', textDecoration: 'none', borderBottom: '1px solid #fff', paddingBottom: '2px', fontSize: '0.9rem', letterSpacing: '1px' }}>
              Send A Message
            </a>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutFaq;
