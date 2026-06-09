import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do I need to book an appointment in advance?",
    answer: "Yes, we highly recommend scheduling your appointment at least 24 hours in advance to ensure that your preferred time slot and therapist are fully reserved, well-prepared, and ready to deliver the most seamless and relaxing experience during your visit."
  },
  {
    question: "How soon will I see results after the treatment?",
    answer: "Results vary depending on the specific treatment, but many clients notice a visible improvement in skin texture and radiance immediately. Full results typically develop over the following 1-2 weeks."
  },
  {
    question: "How often should I repeat this treatment for best results?",
    answer: "For optimal and long-lasting results, we recommend a series of 3-6 treatments spaced 4-6 weeks apart, followed by maintenance sessions tailored to your skin's needs."
  },
  {
    question: "Is this treatment suitable for acne-prone skin?",
    answer: "Absolutely. We customize every treatment to your specific skin type and concerns, using targeted ingredients and techniques that are safe and beneficial for acne-prone or sensitive skin."
  }
];

const ServiceDetailFaq = ({ service }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="sd-faq-section">
      <div className="sd-faq-container">
        
        {/* Left Side: FAQs */}
        <div className="sd-faq-left">
          <motion.h2 
            className="sd-faq-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left' }}
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>

          <div className="sd-faq-list">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className={`sd-faq-item ${openIndex === index ? 'open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="sd-faq-question-container"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="sd-faq-question">
                    {index + 1}. {faq.question}
                  </span>
                  <span className="sd-faq-icon-circle">
                    {openIndex === index ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
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
                      <p className="sd-faq-answer">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Booking Form */}
        <motion.div 
          className="sd-faq-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="sd-faq-form-wrapper">
            <h3 className="sd-faq-form-title">Book {service?.title || 'Treatment'}</h3>
            <p className="sd-faq-form-desc">Schedule your personalized session today.</p>
            <form className="sd-faq-form" onSubmit={(e) => { e.preventDefault(); alert(`Booking Request Submitted for ${service?.title}!`); }}>
              <div className="sd-form-group">
                <input type="text" placeholder="Your Name" required className="sd-form-input" />
              </div>
              <div className="sd-form-group">
                <input type="email" placeholder="Email Address" required className="sd-form-input" />
              </div>
              <div className="sd-form-group">
                <input type="tel" placeholder="Phone Number" required className="sd-form-input" />
              </div>
              <div className="sd-form-row">
                <div className="sd-form-group">
                  <input type="date" required className="sd-form-input" />
                </div>
                <div className="sd-form-group">
                  <input type="time" required className="sd-form-input" />
                </div>
              </div>
              <button type="submit" className="sd-form-submit-btn">
                Request Appointment
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServiceDetailFaq;
