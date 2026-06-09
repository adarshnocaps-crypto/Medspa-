import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Activity } from 'lucide-react';

const PartnersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="partners-section">
      <div className="partners-container">
        <motion.h2 
          className="partners-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          OUR TRUSTED PARTNERS
        </motion.h2>

        <motion.div 
          className="partners-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          <motion.div variants={itemVariants} className="partner-item">
            <div className="logo-else">
              <span>else</span>
              <span>studio</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="partner-item">
            <div className="logo-nuvie">
              <Activity size={24} strokeWidth={2.5} />
              nuvie
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="partner-item">
            <div className="logo-dealio">
              dealio
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="partner-item">
            <div className="logo-feiya">
              <Leaf size={16} strokeWidth={2} style={{ marginBottom: '-5px' }} />
              feiya
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
