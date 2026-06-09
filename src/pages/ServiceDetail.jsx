import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import '../styles/service-detail.css';

import ServiceDetailHero from '../components/sections/service-detail/ServiceDetailHero';
import ServiceDetailProjectOverview from '../components/sections/service-detail/ServiceDetailProjectOverview';
import ServiceDetailProjectGoals from '../components/sections/service-detail/ServiceDetailProjectGoals';
import ServiceDetailProcess from '../components/sections/service-detail/ServiceDetailProcess';
import ServiceDetailWhyChooseUs from '../components/sections/service-detail/ServiceDetailWhyChooseUs';
import ServiceDetailFaq from '../components/sections/service-detail/ServiceDetailFaq';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the service by ID
  let service = null;
  for (const category in servicesData) {
    const found = servicesData[category].find(s => s.id === id);
    if (found) {
      service = found;
      break;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '50vh' }}>
        <h2>Service not found.</h2>
        <button className="btn btn-outline" onClick={() => navigate('/services')} style={{ marginTop: '2rem' }}>
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <ServiceDetailHero service={service} />
      <ServiceDetailProjectOverview service={service} />
      <ServiceDetailProjectGoals />
      <ServiceDetailProcess service={service} />
      <ServiceDetailWhyChooseUs />
      <ServiceDetailFaq service={service} />
    </div>
  );
};

export default ServiceDetail;
