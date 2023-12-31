import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}><span id='span'>K</span>umbang<span>T</span>ahu</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href={"/"} className={styles.link}>Homepage</Link>
        <Link href={"/"} className={styles.link}>Apex</Link>
        <Link href={"/"} className={styles.link}>Blog</Link>
        <Link href={"/"} className={styles.link}>UMKM</Link>
        <Link href={"/"} className={styles.link}>Contact</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar
