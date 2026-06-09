import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import CustomCursor from './components/ui/CustomCursor';
import ScrollToTop from './components/ui/ScrollToTop';
import Preloader from './components/ui/Preloader';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Pricing = lazy(() => import('./pages/Pricing'));
const BeforeAndAfter = lazy(() => import('./pages/BeforeAndAfter'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const BookAppointment = lazy(() => import('./pages/BookAppointment'));
const TreatmentGallery = lazy(() => import('./pages/TreatmentGallery'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for at least 1.5 seconds on initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <CustomCursor />
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="gallery/:id" element={<TreatmentGallery />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:id" element={<ServiceDetail />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="before-and-after" element={<BeforeAndAfter />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:id" element={<BlogDetail />} />
              <Route path="contact" element={<Contact />} />
              <Route path="book-appointment" element={<BookAppointment />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
