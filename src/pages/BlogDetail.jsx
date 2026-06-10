import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Clock, User } from 'lucide-react';
import { blogPosts } from '../data/blog';
import BlogSidebar from '../components/sections/blog/BlogSidebar';
import '../styles/blog-detail.css';

const BlogDetail = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { scrollY } = useScroll();
  const textScale = useTransform(scrollY, [0, 400], [1, 1.3]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const post = blogPosts.find(p => p.id === id) || blogPosts[0];

  return (
    <div className="blog-detail-page">
      <Helmet>
        <title>{post.title} | MedSpa Blog</title>
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero-container">
        <div 
          className="about-hero-banner" 
          style={{ backgroundImage: `url('${post.image}')` }}
        >
          <div className="about-hero-overlay"></div>
          <motion.h1 
            className="about-hero-title-centered"
            style={{ scale: textScale, opacity: textOpacity, transformOrigin: 'bottom center' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            BLOG SINGLE
          </motion.h1>
        </div>
        
        <div className="about-hero-content-wrapper" style={{ paddingBottom: '3rem' }}>
          <div className="about-hero-bottom-content">
            <p className="breadcrumbs">Home &gt; Blog Single</p>
            <p className="about-hero-desc" style={{ marginTop: '1rem' }}>
              Thoughts on elegant beauty, skincare routines, and everyday wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="blog-content-section">
        <div className="blog-page-container">
          
          {/* Left Column: Article */}
          <article className="blog-article">
            <div className="article-meta">
              <span>{post.date}</span>
              <span className="meta-divider">/</span>
              <span className="article-category">{post.categories.join(' • ')}</span>
            </div>

            <h2 className="article-title">{post.title}</h2>

            <img src={post.image} alt={post.title} className="article-main-img" />

            <div className="article-content">
              <p>
                A MedSpa is a sanctuary dedicated to the well-being of the body and mind. It offers a variety of treatments designed to relax, rejuvenate, and heal. From massages and facials to hydrotherapy and aromatherapy, a spa experience is tailored to provide physical relief and mental tranquility.
              </p>
              <p>
                The atmosphere is usually serene, with soft lighting, calming music, and the soothing scents of essential oils. Taking time to visit a spa is not just a luxury; it is a vital part of self-care, helping to reduce stress, improve circulation, and enhance overall health.
              </p>

              <div className="article-image-grid">
                <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600" alt="Spa Detail" />
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600" alt="Spa Detail 2" />
              </div>

              <h4 className="article-subheading">1. Exfoliation Removes Dead Skin Cells</h4>
              <p>Your back is prone to accumulating dead skin cells, which can clog pores and lead to breakouts. Regular exfoliation helps slough off these dead cells, revealing fresh, healthy skin underneath.</p>

              <h4 className="article-subheading">2. Promotes Deep Breathing and Muscle Relaxoation</h4>
              <p>When combined with a gentle massage, back exfoliation can help release tension in the muscles, promoting deep relaxation and stress relief.</p>

              <h4 className="article-subheading">3. Cleanses with Care</h4>
              <p>Using the right products ensures that the skin on your back is cleansed thoroughly without being stripped of its natural oils, maintaining a healthy moisture balance.</p>

              <h4 className="article-subheading">4. Uses Vitamin-Rich Serums</h4>
              <p>After exfoliation, the skin is perfectly primed to absorb nourishing serums and moisturizers, maximizing their benefits for a radiant glow.</p>

              <div className="article-blockquote-wrapper">
                <blockquote className="article-blockquote">
                  <span className="quote-icon-large">"</span>
                  <p>True beauty is born through our actions and aspirations and in the kindness we offer to others. It is a light that radiates from within.</p>
                  <cite>Olivia Bennett — <span>Public House</span></cite>
                </blockquote>
              </div>

              <h3 className="article-h3">Conclusion</h3>
              <p>
                Investing time in self-care rituals like regular back exfoliation not only improves the physical appearance of your skin but also provides a much-needed mental break.
              </p>
            </div>

            {/* Article Footer (Tags & Share) */}
            <div className="article-footer">
              <div className="article-tags">
                <span className="tag-btn">Beauty Blog</span>
                <span className="tag-btn">Massage Therapy</span>
              </div>
              <div className="article-share">
                <User size={16} /> <span style={{marginLeft: '5px'}}>Share</span>
              </div>
            </div>

            {/* Comments Section */}
            <div className="comments-section">
              <h3 className="comments-title">03 Comment</h3>
              
              <div className="comment-list">
                <div className="comment-item">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="comment-avatar" />
                  <div className="comment-body">
                    <div className="comment-header">
                      <h5>Olivia Bennett</h5>
                      <span className="comment-date">December 25, 2023 - 10:30 AM</span>
                    </div>
                    <p>I completely agree! Regular exfoliation has transformed the texture of my skin. It's such a simple but effective step.</p>
                    <button className="reply-btn">Reply</button>
                  </div>
                </div>

                <div className="comment-item reply">
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="User" className="comment-avatar" />
                  <div className="comment-body">
                    <div className="comment-header">
                      <h5>Marcus Collins</h5>
                      <span className="comment-date">December 25, 2023 - 11:15 AM</span>
                    </div>
                    <p>Which products do you recommend for sensitive skin? I've been looking for something gentle.</p>
                    <button className="reply-btn">Reply</button>
                  </div>
                </div>
              </div>

              {/* Leave Comment Form */}
              <div className="leave-comment-section">
                <h3 className="comments-title">Leave A Comment</h3>
                <form className="comment-form">
                  <div className="form-row">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                  </div>
                  <input type="text" placeholder="Website" />
                  
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Save my name, email, and website in this browser for the next time I comment.</span>
                  </label>

                  <button type="button" className="btn-post-comment">Post Comment</button>
                </form>
              </div>
            </div>

          </article>

          {/* Right Column: Sidebar */}
          <BlogSidebar />

        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
