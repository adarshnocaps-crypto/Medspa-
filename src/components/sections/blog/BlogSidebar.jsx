import React from 'react';
import { Search } from 'lucide-react';
import { blogCategories, popularPosts, blogTags } from '../../../data/blog';

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      {/* Search */}
      <div className="sidebar-widget search-widget">
        <div className="sidebar-search">
          <input type="text" placeholder="Search" />
          <button><Search size={18} /></button>
        </div>
      </div>

      {/* Categories */}
      <div className="sidebar-widget">
        <h4 className="widget-title">CATEGORIES</h4>
        <ul className="category-list">
          {blogCategories.map((cat, i) => (
            <li key={i}>
              <span className="cat-dot"></span>
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="sidebar-widget">
        <h4 className="widget-title">POPULAR POSTS</h4>
        <div className="popular-list">
          {popularPosts.map((post) => (
            <div key={post.id} className="popular-item">
              <img src={post.image} alt={post.title} />
              <div className="popular-info">
                <h5>{post.title}</h5>
                <span className="popular-date">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="sidebar-widget">
        <h4 className="widget-title">TAGS</h4>
        <div className="tags-list">
          {blogTags.map((tag, i) => (
            <span key={i} className="tag-item">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
