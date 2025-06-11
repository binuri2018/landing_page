import React from 'react'
import styles from './NavBar.module.css'
import logo from '../Assets/logo.png' // Adjust path as needed

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="BlackWhite Studio Logo" className={styles.logoImage} />
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
