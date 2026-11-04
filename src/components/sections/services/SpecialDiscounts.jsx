import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

// Cosmetic procedures Vixen Spa Services provides recovery care for
// (from the business's hyperbaric oxygen therapy page and client testimonials).
const procedureGroups = [
  {
    id: 1,
    title: "Body Procedures",
    label: "01",
    desc: "Recovery care after the most common body contouring surgeries.",
    includes: ["Liposuction", "BBL (Brazilian Butt Lift) & Fat Transfers", "Tummy Tuck", "Mommy Makeover"],
    bgColor: "#606852", /* Dark olive */
    textColor: "#ffffff"
  },
  {
    id: 2,
    title: "Face & Neck",
    label: "02",
    desc: "Gentle aftercare for delicate facial procedures.",
    includes: ["Facelift & Chin Liposuction", "Rhinoplasty / Nose Job", "Mentoplasty / Chin Augmentation", "Blepharoplasty / Eyelid Surgery"],
    bgColor: "#edf0e8", /* Light beige-green */
    textColor: "#333333" /* Dark text */
  },
  {
    id: 3,
    title: "Breast & More",
    label: "03",
    desc: "Support before and after many other cosmetic procedures.",
    includes: ["Breast Augmentation / Breast Lift", "Gynecomastia Treatment", "Cyst Removal & Hair Transplants", "Kybella, Fillers & Botox"],
    bgColor: "#ffffff",
    textColor: "#333333",
    outline: true
  }
];

const SpecialDiscounts = () => {
  return (
    <section className="special-discounts-section">
      <div className="special-discounts-container">

        <motion.div
          className="discounts-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="discounts-title">PROCEDURES WE SUPPORT</h2>
        </motion.div>

        <motion.div
          className="discounts-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {procedureGroups.map((item) => (
            <motion.div
              key={item.id}
              className={`discount-card ${item.outline ? 'outline-card' : 'filled-card'}`}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <HeartPulse
                className="discount-bg-icon"
                size={220}
                strokeWidth={0.3}
                style={{ color: item.textColor }}
              />
              {item.id === 1 && (
                <>
                  <div className="quote-bg-circle"></div>
                  <div className="quote-icon-large">”</div>
                </>
              )}
              <h3 className="discount-percent" style={{ position: 'relative', zIndex: 2 }}>{item.label}</h3>
              <h4 className="discount-card-title" style={{ position: 'relative', zIndex: 2 }}>{item.title}</h4>
              <p className="discount-card-desc" style={{ position: 'relative', zIndex: 2 }}>{item.desc}</p>

              <ul className="discount-includes" style={{ position: 'relative', zIndex: 2 }}>
                {item.includes.map((inc, i) => (
                  <li key={i}>
                    <svg className="inc-custom-bullet" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {inc}
                  </li>
                ))}
              </ul>

              <Link to="/book-appointment" className="discount-btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', '--btn-color': item.textColor, '--btn-bg': item.bgColor, borderColor: item.textColor, color: item.textColor, position: 'relative', zIndex: 2 }}>
                Book Now
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SpecialDiscounts;
