import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import BlogSidebar from '../components/sections/blog/BlogSidebar';
import '../styles/blog-page.css';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const textScale = useTransform(scrollY, [0, 400], [1, 1.3]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const contentY = useTransform(scrollY, [0, 200], [50, 0]);

  return (
    <div className="blog-page">
      <Helmet>
        <title>Blog | MedSpa</title>
        <meta name="description" content="Discover our beauty blog with the latest tips on skincare, body care, and spa treatments." />
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero-container">
        <div 
          className="about-hero-banner" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1920&h=1080')` }}
        >
          <div className="about-hero-overlay"></div>
          <motion.h1 
            className="about-hero-title-centered"
            style={{ 
              scale: textScale, 
              opacity: textOpacity,
              transformOrigin: 'bottom center'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            BLOG LIST
          </motion.h1>
        </div>
        
        <div className="about-hero-content-wrapper">
          <motion.div 
            className="about-hero-bottom-content"
            style={{ 
              opacity: contentOpacity, 
              y: contentY 
            }}
          >
            <h2 className="blog-subtitle">Beauty Blog List</h2>
            <p className="about-hero-desc">
              Discover our curated selection of beauty treatments and everyday care rituals, together to exquisite scents and overall well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="blog-content-section">
        <div className="blog-page-container">
          
          {/* Left Column: Post List */}
          <div className="blog-main">
            {blogPosts.map((post, i) => (
              <Link to={`/blog/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
                <motion.div 
                  className="blog-post-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="blog-post-img-wrapper">
                    <img src={post.image} alt={post.title} className="blog-post-img" />
                  </div>
                  <div className="blog-post-content">
                    <h3 className="blog-post-title">{post.title}</h3>
                    <p className="blog-post-excerpt">{post.excerpt}</p>
                    <p className="blog-post-meta">
                      {post.date} / <span className="blog-post-category">{post.categories.join(' • ')}</span>
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}

            {/* Pagination */}
            <div className="blog-pagination">
              <button className="page-num active">1</button>
              <button className="page-num">2</button>
              <button className="page-next">&gt;</button>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <BlogSidebar />

        </div>
      </section>

    </div>
  );
};

export default Blog;
