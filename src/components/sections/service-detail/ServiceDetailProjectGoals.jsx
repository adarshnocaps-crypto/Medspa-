import React from 'react';
import { Droplet, Sun, Droplets, Leaf } from 'lucide-react';

const ServiceDetailProjectGoals = () => {
  const goals = [
    { 
      icon: Droplet, 
      title: "Radiance Restoration", 
      desc: "To restore the skin's natural brightness by improving overall luminosity and reducing signs of dullness through targeted, weekly treatments."
    },
    { 
      icon: Sun, 
      title: "Barrier Strength Reinforcement", 
      desc: "To strengthen the skin barrier over time, enhancing resilience against dryness, sensitivity, and external stressors for long-lasting health."
    },
    { 
      icon: Droplets, 
      title: "Deep Hydration Support", 
      desc: "To deeply replenish and maintain hydration levels, ensuring the skin feels smoother and softer."
    },
    { 
      icon: Leaf, 
      title: "Sustainable Skincare Habit Building", 
      desc: "To create a mindful, sustainable skincare routine that supports daily radiance and continues to elevate the complexion well."
    }
  ];

  return (
    <section className="sd-project-goals-section">
      <div className="sd-pg-container">
        <h2 className="sd-pg-title">Project Goals</h2>
        <div className="sd-pg-grid">
          {goals.map((goal, idx) => {
            const Icon = goal.icon;
            return (
              <div key={idx} className="sd-pg-item">
                <div className="sd-pg-icon-wrapper">
                  <Icon size={32} strokeWidth={1.2} />
                </div>
                <div className="sd-pg-content">
                  <h4>{goal.title}</h4>
                  <p>{goal.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailProjectGoals;
