import React, { useState, useEffect } from 'react'
import styles from './Blogs.module.css'
import { FaCalendar, FaUser, FaArrowRight, FaTag } from 'react-icons/fa'

const blogPosts = [
  {
    id: 1,
    title: "Creating Cinematic Web Experiences with React",
    excerpt: "Learn how to blend storytelling and frontend development to create stunning, animated user journeys using React and Framer Motion.",
    date: "June 5, 2025",
    author: "BlackWhite Studio",
    category: "Web Development",
    readTime: "5 min read",
    image: "🎬",
    link: "#"
  },
  {
    id: 2,
    title: "Getting Started with Three.js in Animation Portfolios",
    excerpt: "A beginner-friendly guide on using Three.js to showcase animated visuals and interactive 3D elements on your portfolio website.",
    date: "May 28, 2025",
    author: "BlackWhite Studio",
    category: "3D Animation",
    readTime: "8 min read",
    image: "🧊",
    link: "#"
  },
  {
    id: 3,
    title: "Why Animation-First Design is the Future",
    excerpt: "Explore why animation-led design principles are essential for modern websites, and how BlackWhite Studio brings them to life.",
    date: "May 15, 2025",
    author: "BlackWhite Studio",
    category: "Design",
    readTime: "6 min read",
    image: "✨",
    link: "#"
  },
  {
    id: 4,
    title: "Building Interactive 3D Product Showcases",
    excerpt: "Discover how to create immersive product demonstrations using WebGL and Three.js for enhanced customer engagement.",
    date: "May 10, 2025",
    author: "BlackWhite Studio",
    category: "3D Animation",
    readTime: "7 min read",
    image: "🎯",
    link: "#"
  },
  {
    id: 5,
    title: "Performance Optimization for Animated Websites",
    excerpt: "Best practices for maintaining smooth animations while ensuring optimal performance and user experience.",
    date: "May 3, 2025",
    author: "BlackWhite Studio",
    category: "Performance",
    readTime: "4 min read",
    image: "⚡",
    link: "#"
  },
  {
    id: 6,
    title: "The Art of Motion Graphics in Digital Marketing",
    excerpt: "How animated content can significantly boost engagement and conversion rates in modern digital marketing campaigns.",
    date: "April 25, 2025",
    author: "BlackWhite Studio",
    category: "Marketing",
    readTime: "9 min read",
    image: "📈",
    link: "#"
  }
]

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const blogSection = document.getElementById('blog')
    if (blogSection) {
      observer.observe(blogSection)
    }

    return () => observer.disconnect()
  }, [])

  const categories = ['All', 'Web Development', '3D Animation', 'Design', 'Performance', 'Marketing']

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.backgroundOverlay}></div>
      
      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            Latest <span className={styles.highlight}>Insights</span>
          </h2>
          <p className={styles.subtitle}>
            Discover the latest trends, tutorials, and insights in animation, web development, and digital innovation
          </p>
        </div>

        {/* Category Filter */}
        <div className={`${styles.categoryFilter} ${isVisible ? styles.visible : ''}`}>
          {categories.map((category, index) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className={`${styles.blogGrid} ${isVisible ? styles.visible : ''}`}>
          {filteredPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={styles.blogCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardImage}>
                <span className={styles.imageEmoji}>{post.image}</span>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.category}>
                    <FaTag /> {post.category}
                  </span>
                  <span className={styles.readTime}>
                    <FaCalendar /> {post.readTime}
                  </span>
                </div>
                
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                
                <div className={styles.cardFooter}>
                  <div className={styles.authorInfo}>
                    <FaUser />
                    <span>{post.author}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  
                  <a href={post.link} className={styles.readMore}>
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <h3>Stay Updated with Our Latest Insights</h3>
          <p>Get notified about new articles, tutorials, and industry insights delivered to your inbox</p>
          <button className={styles.ctaButton}>
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog

