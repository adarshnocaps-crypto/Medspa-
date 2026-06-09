import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div 
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.img 
        src="/logo.png" 
        alt="MedSpa Logo" 
        className="preloader-logo"
        initial={{ scale: 0.95, opacity: 0.5 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ 
          duration: 1, 
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};

export default Preloader;
