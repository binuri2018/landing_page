import React from 'react'
import styles from './Blogs.module.css'

const blogPosts = [
  {
    id: 1,
    title: "How to Build a React Landing Page",
    excerpt: "Learn the steps to create a stunning React landing page with animations and 3D effects.",
    date: "June 5, 2025",
    link: "#"
  },
  {
    id: 2,
    title: "Introduction to Three.js",
    excerpt: "Explore the basics of Three.js and how to add 3D graphics to your frontend projects.",
    date: "May 28, 2025",
    link: "#"
  },
  {
    id: 3,
    title: "Improving Web Performance",
    excerpt: "Tips and tricks to make your React apps faster and more efficient.",
    date: "May 15, 2025",
    link: "#"
  },
]

const Blog = () => {
  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Latest News & Articles</h2>
        <div className={styles.cards}>
          {blogPosts.map(post => (
            <div key={post.id} className={styles.card}>
              <h3>{post.title}</h3>
              <p className={styles.date}>{post.date}</p>
              <p>{post.excerpt}</p>
              <a href={post.link} className={styles.readMore}>Read more &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
