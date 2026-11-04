import React from 'react';
import { Droplet, Sun, Droplets, Leaf } from 'lucide-react';

const ServiceDetailProjectGoals = () => {
  const goals = [
    { 
      icon: Droplet, 
      title: "Reduce Swelling & Fluid Retention",
      desc: "To encourage healthy lymph flow and ease the swelling, bruising and fluid retention that follow cosmetic surgery."
    },
    {
      icon: Sun,
      title: "Smooth, Even Results",
      desc: "To gently work out lumps and knots so your final contour looks smooth and natural."
    },
    {
      icon: Droplets,
      title: "Faster, More Comfortable Healing",
      desc: "To relieve post-op soreness and support circulation so you can return to your routine sooner."
    },
    {
      icon: Leaf,
      title: "Protect Your Investment",
      desc: "To help you maintain the results of your procedure with aftercare planned around your recovery."
    }
  ];

  return (
    <section className="sd-project-goals-section">
      <div className="sd-pg-container">
        <h2 className="sd-pg-title">Recovery Goals</h2>
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
