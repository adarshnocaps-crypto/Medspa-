import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    image: "/blog_img_1.png",
    date: "December 22, 2025",
    category: "Skincare - MedSpa Treatments",
    title: "5 Morning Rituals to Awaken Your Senses and Reveal Glowing Skin",
    excerpt: "Start your day with mindful moments that energize your body, calm your mind, and bring out your natural glow from within—setting a beautiful tone for everything that follows."
  },
  {
    id: 2,
    image: "/blog_img_2.png",
    date: "December 22, 2025",
    category: "Natural Glow - Skincare",
    title: "Choosing the Right Essential Oils for Harmony and Balance",
    excerpt: "Discover the soothing power of nature and find the perfect scents that gently restore calm, balance, and a deep sense of harmony to both your body and mind."
  }
];

const BlogSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="blog-section">
      <div className="blog-container">
        
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="blog-title">OUR BEAUTY JOURNAL</h2>
          <p className="blog-header-desc">
            From skincare wisdom to soothing rituals, our blog brings you everything you need to glow with confidence and calm, nurturing your beauty.
          </p>
        </motion.div>

        <motion.div 
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants} className="blog-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', gap: '1.2rem', height: '100%' }}>
                <div className="blog-img-wrapper">
                  <img src={post.image} alt={post.title} className="blog-img" />
                </div>
                <p className="blog-meta">
                  {post.date} / {post.category}
                </p>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-desc">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BlogSection;
