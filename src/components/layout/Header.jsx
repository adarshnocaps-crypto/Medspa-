import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Calendar } from 'lucide-react';
import { navigationData } from '../../data/navigation';
import { servicesData } from '../../data/services';
import FullscreenMenu from './FullscreenMenu';

const getServiceById = (id) => {
  for (const category in servicesData) {
    const service = servicesData[category].find(s => s.id === id);
    if (service) return service;
  }
  return null;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredTreatment, setHoveredTreatment] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Create a flat array of all services for searching
  const allServices = [];
  for (const category in servicesData) {
    servicesData[category].forEach(s => allServices.push({...s, category}));
  }
  
  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : allServices.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        s.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          
          {/* Left Section */}
          <div className="header-left">
            <AnimatePresence mode="wait">
              {!isScrolled ? (
                <motion.div
                  key="menu-controls"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="menu-controls"
                >
                  <button className="hamburger-btn" onClick={() => setIsMenuOpen(true)}>
                    <div className="hamburger-icon">
                      <span></span>
                      <span></span>
                    </div>
                    <span className="menu-text">Menu</span>
                  </button>
                  <div className="divider"></div>
                  <button className="search-btn" onClick={() => setIsSearchOpen(true)}>
                    <Search size={20} strokeWidth={1.5} />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="logo-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="logo"
                >
                  <Link to="/">
                    <img src="/logo.png" alt="MedSpa Logo" className="header-logo-img" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center Section */}
          <div className="header-center">
            <AnimatePresence mode="wait">
              {!isScrolled ? (
                <motion.div
                  key="logo-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="logo"
                >
                  <Link to="/">
                    <img src="/logo.png" alt="MedSpa Logo" className="header-logo-img" />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="main-nav"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="scrolled-nav"
                >
                  <nav className="main-nav">
                    {navigationData.map((item) => (
                      <div key={item.path} className={`nav-item-wrapper ${item.isMegaMenu ? 'has-mega-menu' : ''}`}>
                        <Link to={item.path} className="nav-link" style={{ display: 'flex', alignItems: 'center' }}>
                          {item.label}
                          {item.subMenu && <ChevronDown size={14} style={{ marginLeft: '4px' }} />}
                        </Link>
                        {item.subMenu && !item.isMegaMenu && (
                           <div className="nav-dropdown">
                            {item.subMenu.map(subItem => (
                              <Link key={subItem.path} to={subItem.path} className="dropdown-link">
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                        {item.subMenu && item.isMegaMenu && (
                          <div className="nav-mega-menu">
                            <div className="mega-menu-grid">
                              {item.subMenu.map((col, idx) => (
                                <div key={idx} className="mega-menu-col">
                                  <h4 className="mega-menu-title">{col.title}</h4>
                                  <div className="mega-menu-links">
                                    {col.links.map(link => {
                                      const serviceId = link.path.split('/').pop();
                                      const sInfo = getServiceById(serviceId);
                                      const image = sInfo?.image || 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=200&h=150';
                                      const desc = sInfo?.description || `Experience our specialized ${link.label.toLowerCase()} treatment.`;
                                      
                                      return (
                                        <div 
                                          key={link.path} 
                                          className="mega-link-container"
                                          onMouseEnter={() => setHoveredTreatment(link.label)}
                                          onMouseLeave={() => setHoveredTreatment(null)}
                                        >
                                          <Link to={link.path} className="mega-link">
                                            {link.label}
                                          </Link>
                                          
                                          {/* Popup on Hover */}
                                          <AnimatePresence>
                                            {hoveredTreatment === link.label && (
                                              <motion.div
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 5 }}
                                                transition={{ duration: 0.2 }}
                                                className="treatment-popup"
                                              >
                                                <img src={image} alt={link.label} className="treatment-popup-img" />
                                                <div className="treatment-popup-content">
                                                  <h5>{link.label}</h5>
                                                  <p style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{desc}</p>
                                                </div>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Section */}
          <div className="header-right">
            <div className="appointment-info">
              <span className="info-label">Appointment: </span>
              <a href="tel:6022665755" className="phone-link">(602) 266-5755</a>
            </div>
            <Link to="/book-appointment" className="btn btn-outline header-book-btn">
              <span className="book-btn-text">Book Appointment</span>
              <Calendar className="book-btn-icon" size={18} />
            </Link>
          </div>

        </div>
      </header>

      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            className="search-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
              backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, 
              display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10vh'
            }}
          >
            <motion.div 
              className="search-modal-content"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '90%', maxWidth: '800px', backgroundColor: 'var(--body-bg-color)', borderRadius: '2px', border: '1px solid rgba(88, 94, 72, 0.3)', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', padding: '1.5rem 2.5rem', borderBottom: '1px solid rgba(88, 94, 72, 0.1)' }}>
                <Search size={28} color="var(--primary-color)" />
                <input 
                  type="text" 
                  placeholder="Search treatments, services..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    flex: 1, border: 'none', outline: 'none', padding: '1rem 1.5rem', fontSize: '1.4rem', fontFamily: 'var(--font-primary)', backgroundColor: 'transparent', color: 'var(--primary-color)', fontWeight: '500'
                  }}
                />
                <button onClick={() => setIsSearchOpen(false)} style={{ background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: 'var(--primary-color)', transition: 'transform 0.3s' }}>&times;</button>
              </div>
              
              <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: '2rem 2.5rem' }}>
                {searchQuery.trim() === '' ? (
                  <p style={{ color: 'var(--secondary-color)', textAlign: 'center', padding: '3rem 0', fontFamily: 'Melodrama, serif', fontSize: '1.8rem' }}>Discover your perfect treatment...</p>
                ) : searchResults.length === 0 ? (
                  <p style={{ color: 'var(--secondary-color)', textAlign: 'center', padding: '3rem 0', fontFamily: 'Melodrama, serif', fontSize: '1.8rem' }}>No treatments found for "{searchQuery}".</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {searchResults.map(result => (
                      <Link 
                        to={`/services/${result.id}`} 
                        key={result.id}
                        onClick={() => setIsSearchOpen(false)}
                        style={{ display: 'flex', gap: '1rem', textDecoration: 'none', color: 'inherit', padding: '1rem', border: '1px solid #eee', borderRadius: '8px', transition: 'all 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary-color)'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#eee'}
                      >
                        <img src={result.image} alt={result.title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                          <h4 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-primary)', color: 'var(--primary-color)' }}>{result.title}</h4>
                          <p style={{ margin: 0, fontSize: '0.9rem', color: '#666', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{result.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
