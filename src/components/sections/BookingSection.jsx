import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bookingCategories, bookingServices, bookingProviders, generateAvailableTimes } from '../../data/bookingData';
import '../../styles/booking-section.css';

const STEPS = [
  { id: 1, title: 'Services' },
  { id: 2, title: 'Provider' },
  { id: 3, title: 'Date & Time' },
  { id: 4, title: 'Details' },
  { id: 5, title: 'Confirm' }
];

const BookingSection = ({ preselectedService = null, showHeader = true }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({
    serviceId: '',
    providerId: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  // Handle preselected service from Service Detail page
  useEffect(() => {
    if (preselectedService) {
      // Try to find the service in our mock data that matches the preselected name
      const foundService = bookingServices.find(s => s.name.toLowerCase().includes(preselectedService.toLowerCase()));
      if (foundService) {
        setFormData(prev => ({ ...prev, serviceId: foundService.id }));
        setActiveStep(2); // Skip straight to Provider step
      }
    }
  }, [preselectedService]);

  const handleNext = () => {
    if (activeStep < 5) setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    if (activeStep === 2 && preselectedService) return; // Prevent going back if preselected
    
    if (activeStep === 1 && selectedCategory) {
      setSelectedCategory(null); // Go back to categories view
    } else if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
  };

  const handleSelectService = (serviceId) => {
    setFormData({ ...formData, serviceId, providerId: '', date: '', time: '' });
    handleNext();
  };

  const handleSelectProvider = (providerId) => {
    setFormData({ ...formData, providerId, date: '', time: '' });
    handleNext();
  };

  const handleSelectTime = (time) => {
    if (!formData.date) return; // Need date first
    setFormData({ ...formData, time });
    handleNext();
  };

  const handleSubmit = () => {
    alert(`Appointment Confirmed!\nWe will see you on ${formData.date} at ${formData.time}.`);
    // Reset
    setActiveStep(1);
    setSelectedCategory(null);
    setFormData({ serviceId: '', providerId: '', date: '', time: '', firstName: '', lastName: '', email: '', phone: '', notes: '' });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  // Helper to get selected objects
  const selectedServiceObject = bookingServices.find(s => s.id === formData.serviceId);
  const selectedProviderObject = bookingProviders.find(p => p.id === formData.providerId);
  
  // Filter providers based on selected service
  const availableProviders = bookingProviders.filter(p => 
    p.availableServices.includes("all") || p.availableServices.includes(formData.serviceId)
  );

  const availableTimes = generateAvailableTimes();

  return (
    <section className="booking-section">
      <div className="booking-container">
        
        {showHeader && (
          <div className="booking-section-header">
            <h2 className="booking-main-title">Book Appointment</h2>
            <p className="booking-main-subtitle">
              {preselectedService 
                ? `You are booking an appointment for ${preselectedService}. Follow the steps below.`
                : 'Select your desired treatment and preferred provider to schedule your visit.'}
            </p>
          </div>
        )}

        {/* Stepper */}
        <div className="booking-stepper">
          {STEPS.map((step) => (
            <div 
              key={step.id} 
              className={`step-indicator ${activeStep === step.id ? 'active' : ''} ${activeStep > step.id ? 'completed' : ''}`}
            >
              <div className="step-circle">{activeStep > step.id ? '✓' : step.id}</div>
              <span className="step-title">{step.title}</span>
            </div>
          ))}
        </div>

        {/* Wizard Body */}
        <div className="booking-wizard-body">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: SERVICES */}
            {activeStep === 1 && (
              <motion.div key="step1" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                
                {!selectedCategory ? (
                  <>
                    <div className="step-header">
                      <h3>Select a Category</h3>
                      <p>What type of treatment are you looking for today?</p>
                    </div>
                    <div className="cards-grid">
                      {bookingCategories.map(cat => (
                        <div key={cat.id} className="selection-card" onClick={() => handleSelectCategory(cat.id)}>
                          <div className="card-img-wrapper">
                            <img src={cat.image} alt={cat.name} className="card-img" />
                          </div>
                          <div className="card-content">
                            <h4 className="card-title">{cat.name}</h4>
                            <p className="card-desc">{cat.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="step-header">
                      <h3>Select a Service</h3>
                      <p>Choose the specific treatment you would like to book.</p>
                    </div>
                    <div className="service-list">
                      {bookingServices.filter(s => s.categoryId === selectedCategory).map(service => (
                        <div 
                          key={service.id} 
                          className={`service-list-item ${formData.serviceId === service.id ? 'selected' : ''}`}
                          onClick={() => handleSelectService(service.id)}
                        >
                          <div className="service-info">
                            <h4>{service.name}</h4>
                            <p>{service.duration}</p>
                          </div>
                          <div className="service-meta">
                            {service.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {/* STEP 2: PROVIDER */}
            {activeStep === 2 && (
              <motion.div key="step2" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                <div className="step-header">
                  <h3>Select a Provider</h3>
                  <p>Who would you like to see for your {selectedServiceObject?.name}?</p>
                </div>
                <div className="cards-grid">
                  {availableProviders.map(provider => (
                    <div 
                      key={provider.id} 
                      className={`selection-card provider-card ${formData.providerId === provider.id ? 'selected' : ''}`}
                      onClick={() => handleSelectProvider(provider.id)}
                    >
                      <div className="card-img-wrapper">
                        <img src={provider.image} alt={provider.name} className="card-img" />
                      </div>
                      <div className="card-content" style={{ textAlign: 'center' }}>
                        <h4 className="card-title">{provider.name}</h4>
                        <p className="card-desc">{provider.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: DATE & TIME */}
            {activeStep === 3 && (
              <motion.div key="step3" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                <div className="step-header">
                  <h3>Select Date & Time</h3>
                  <p>When would you like to come in?</p>
                </div>
                
                <div className="wizard-form-grid" style={{ marginBottom: '2rem' }}>
                  <div className="wizard-form-group full">
                    <label className="wizard-label">Select Date:</label>
                    <input 
                      type="date" 
                      className="wizard-input" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value, time: ''})}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                {formData.date && (
                  <div>
                    <h4 style={{ fontFamily: 'Melodrama, serif', fontSize: '1.5rem', color: 'var(--primary-color)' }}>Available Times for {formData.date}</h4>
                    <div className="calendar-grid">
                      {availableTimes.map(time => (
                        <div 
                          key={time} 
                          className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                          onClick={() => handleSelectTime(time)}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* STEP 4: DETAILS */}
            {activeStep === 4 && (
              <motion.div key="step4" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                <div className="step-header">
                  <h3>Your Details</h3>
                  <p>Almost done! Please provide your contact information.</p>
                </div>
                
                <div className="wizard-form-grid">
                  <div className="wizard-form-group">
                    <label className="wizard-label">First Name *</label>
                    <input type="text" className="wizard-input" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
                  </div>
                  <div className="wizard-form-group">
                    <label className="wizard-label">Last Name *</label>
                    <input type="text" className="wizard-input" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
                  </div>
                  <div className="wizard-form-group">
                    <label className="wizard-label">Email Address *</label>
                    <input type="email" className="wizard-input" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="wizard-form-group">
                    <label className="wizard-label">Phone Number *</label>
                    <input type="tel" className="wizard-input" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="wizard-form-group full">
                    <label className="wizard-label">Appointment Notes (Optional)</label>
                    <textarea className="wizard-textarea" placeholder="Any specific concerns or requests?" value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})}></textarea>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: CONFIRMATION */}
            {activeStep === 5 && (
              <motion.div key="step5" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                <div className="step-header">
                  <h3>Review & Confirm</h3>
                  <p>Please review your appointment details below.</p>
                </div>
                
                <div className="summary-box">
                  <div className="summary-item">
                    <span className="summary-label">Service</span>
                    <span className="summary-value">{selectedServiceObject?.name}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Provider</span>
                    <span className="summary-value">{selectedProviderObject?.name}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Date & Time</span>
                    <span className="summary-value">{formData.date} at {formData.time}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Patient Name</span>
                    <span className="summary-value">{formData.firstName} {formData.lastName}</span>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Wizard Footer Navigation */}
        <div className="wizard-footer">
          <div>
            {(activeStep > 1 || (activeStep === 1 && selectedCategory)) && !(activeStep === 2 && preselectedService) && (
              <button className="btn-back" onClick={handlePrev}>Back</button>
            )}
          </div>
          <div>
            {activeStep === 4 && (
              <button 
                className="btn-next" 
                onClick={handleNext}
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
              >
                Review Booking
              </button>
            )}
            {activeStep === 5 && (
              <button className="btn-next" onClick={handleSubmit}>Confirm Appointment</button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingSection;
