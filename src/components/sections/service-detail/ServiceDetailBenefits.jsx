import React from 'react';
import { CheckCircle } from 'lucide-react';

const ServiceDetailBenefits = ({ service }) => {
  if (!service || !service.benefits) return null;

  return (
    <section className="sd-benefits-section">
      <h2 className="sd-section-title">Key Benefits</h2>
      <div className="sd-benefits-grid">
        {service.benefits.map((benefit, idx) => (
          <div key={idx} className="sd-benefit-card">
            <CheckCircle className="sd-benefit-icon" size={24} strokeWidth={1.5} />
            <p>{benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetailBenefits;
