import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.subtitle}>
          Have a project in mind or just want to say hello? We'd love to hear from you!
        </p>

        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input type="email" placeholder="Your Email" className={styles.input} />
          <textarea placeholder="Your Message" className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
