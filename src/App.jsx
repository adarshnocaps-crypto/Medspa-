import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import CustomCursor from './components/ui/CustomCursor';
import ScrollToTop from './components/ui/ScrollToTop';

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
  return (
    <HelmetProvider>
      <CustomCursor />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
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
