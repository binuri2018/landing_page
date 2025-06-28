import React, { useState, useEffect } from 'react'
import styles from './Contact.module.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const contactSection = document.getElementById('contact')
    if (contactSection) {
      observer.observe(contactSection)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Thank you for your message! We\'ll get back to you soon.')
    }, 2000)
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.backgroundOverlay}></div>
      
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            Get In <span className={styles.highlight}>Touch</span>
          </h2>
          <p className={styles.subtitle}>
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={`${styles.contactInfo} ${isVisible ? styles.visible : ''}`}>
            <h3>Let's Start a Conversation</h3>
            <p>Ready to transform your ideas into reality? Reach out to us.</p>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FaEnvelope />
                </div>
                <div className={styles.infoContent}>
                  <h4>Email Us</h4>
                  <a href="mailto:hello@blackwhitestudio.com" className={styles.infoLink}>
                    hello@blackwhitestudio.com
                  </a>
                </div>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FaPhone />
                </div>
                <div className={styles.infoContent}>
                  <h4>Call Us</h4>
                  <a href="tel:+94112223333" className={styles.infoLink}>
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.infoContent}>
                  <h4>Visit Us</h4>
                  <span className={styles.infoLink}>
                    123 Creative Street, Design City, DC 12345
                  </span>
                </div>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FaClock />
                </div>
                <div className={styles.infoContent}>
                  <h4>Business Hours</h4>
                  <span className={styles.infoLink}>
                    Mon - Fri: 9AM - 6PM EST
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.formContainer} ${isVisible ? styles.visible : ''}`}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formHeader}>
                <h3>Send Us a Message</h3>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <FaUser className={styles.inputIcon} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
                
                <div className={styles.inputWrapper}>
                  <FaEnvelope className={styles.inputIcon} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputWrapper}>
                <FaComment className={styles.inputIcon} />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputWrapper}>
                <FaComment className={styles.inputIcon} />
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner}></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
