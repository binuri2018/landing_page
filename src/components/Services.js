import React, { useState, useEffect } from 'react'
import styles from './Services.module.css'
import { FaFilm, FaCube, FaMagic, FaCode, FaPalette, FaRocket } from 'react-icons/fa'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      observer.observe(servicesSection)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <FaFilm />,
      title: "Animated Visuals",
      description: "We craft cinematic animations and brand intros that captivate audiences, using tools like After Effects, Lottie, and WebGL.",
      features: ["Motion Graphics", "Brand Intros", "Lottie Animations"]
    },
    {
      icon: <FaCube />,
      title: "Interactive 3D Experiences",
      description: "Build immersive web environments with Three.js & react-three-fiber — perfect for product demos and storytelling.",
      features: ["3D Modeling", "WebGL Graphics", "Product Demos"]
    },
    {
      icon: <FaMagic />,
      title: "Creative Web Development",
      description: "Bespoke websites with animation-first design, combining React, Framer Motion, and next-gen performance.",
      features: ["React Development", "Framer Motion", "Performance Optimized"]
    },
    {
      icon: <FaCode />,
      title: "Custom Web Applications",
      description: "Full-stack web applications with modern technologies, ensuring scalability and exceptional user experiences.",
      features: ["Full-Stack Development", "API Integration", "Database Design"]
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality for optimal user engagement.",
      features: ["User Research", "Wireframing", "Prototyping"]
    },
    {
      icon: <FaRocket />,
      title: "Digital Innovation",
      description: "Cutting-edge digital solutions that leverage emerging technologies to create competitive advantages.",
      features: ["Emerging Tech", "Innovation Strategy", "Digital Transformation"]
    }
  ]

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.backgroundOverlay}></div>
      
      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Services</span>
          </h2>
          <p className={styles.subtitle}>
            At BlackWhite Studio, we merge code with creativity to deliver stunning visual stories and animated tech experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`${styles.servicesGrid} ${isVisible ? styles.visible : ''}`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={styles.serviceCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <div className={styles.featuresList}>
                {service.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className={styles.feature}>
                    {feature}
                  </span>
                ))}
              </div>
              
              <button className={styles.learnMoreBtn}>
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <h3>Ready to Transform Your Ideas?</h3>
          <p>Let's discuss how we can bring your vision to life with our innovative services</p>
          <button className={styles.ctaButton}>
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
