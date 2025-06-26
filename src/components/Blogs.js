import React from 'react'
import styles from './Blogs.module.css'

const blogPosts = [
  {
    id: 1,
    title: "Creating Cinematic Web Experiences with React",
    excerpt: "Learn how to blend storytelling and frontend development to create stunning, animated user journeys using React and Framer Motion.",
    date: "June 5, 2025",
    link: "#"
  },
  {
    id: 2,
    title: "Getting Started with Three.js in Animation Portfolios",
    excerpt: "A beginner-friendly guide on using Three.js to showcase animated visuals and interactive 3D elements on your portfolio website.",
    date: "May 28, 2025",
    link: "#"
  },
  {
    id: 3,
    title: "Why Animation-First Design is the Future",
    excerpt: "Explore why animation-led design principles are essential for modern websites, and how BlackWhite Studio brings them to life.",
    date: "May 15, 2025",
    link: "#"
  },
]

const Blog = () => {
  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.container}>


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
