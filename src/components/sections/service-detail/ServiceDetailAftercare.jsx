import React from 'react';

const ServiceDetailAftercare = () => {
  return (
    <section className="sd-aftercare-section">
      <div className="sd-ac-left">
        <h2 className="sd-section-title">Aftercare & Recovery</h2>
        <div className="sd-ac-content">
          <p>Proper aftercare is crucial for achieving the best possible results. We will provide you with detailed instructions following your treatment.</p>
          <ul>
            <li>Avoid direct sun exposure for 24-48 hours and always wear SPF.</li>
            <li>Stay hydrated and use gentle, non-irritating skincare products.</li>
            <li>Avoid strenuous exercise or excessive sweating immediately after treatment.</li>
          </ul>
        </div>
      </div>
      <div className="sd-ac-right">
        <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800" alt="Aftercare" className="sd-ac-img" />
      </div>
    </section>
  );
};

export default ServiceDetailAftercare;
