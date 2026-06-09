import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Dr. Sarah Jenkins",
    title: "Medical Director",
    img: "/about_founder_1780659592213.png" // using founder image as placeholder
  },
  {
    name: "Emily Chen",
    title: "Lead Esthetician",
    img: "/about_founder_1780659592213.png"
  },
  {
    name: "Michael Torres",
    title: "Massage Therapist",
    img: "/about_founder_1780659592213.png"
  },
  {
    name: "Jessica Albas",
    title: "Client Care Coordinator",
    img: "/about_founder_1780659592213.png"
  }
];

const AboutTeam = () => {
  return (
    <section className="team-section">
      <h3 style={{ fontFamily: "'Melodrama', serif", fontSize: '2.5rem', color: 'var(--primary-color)' }}>MEET OUR EXPERT TEAM</h3>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="team-member"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={member.img} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
