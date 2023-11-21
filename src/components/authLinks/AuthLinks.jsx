"use client"
import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'


const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const {data: session, status} = useSession();


  return (
    <>
      {status === "unauthenticated" ? (<Link href={"/login"} className={styles.link}>Login</Link>) : 
      (
        <>
        {session?.user?.role === 'Admin' ? <> <Link href={"/write"} className={styles.link}>Write</Link> <span className={styles.link} onClick={()=>signOut()}>Logout</span></>:  <span className={styles.link} onClick={()=>signOut()}>Logout</span>}
        </>
      )}
      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {
        open && (
          <div className={styles.responsiveMenu}>
            <link href='/'>Homepage</link>
            <link href='/'>About</link>
            <link href='/'>Contact</link>
            {status === "unauthenticated" ? (<Link href={"/login"} className={styles.link}>Login</Link>) : 
              (
                <>
                {session?.user?.role === 'Admin' ? <> <Link href={"/write"} className={styles.link}>Write</Link> <span className={styles.link} onClick={()=>signOut()}>Logout</span></>:  <span className={styles.link} onClick={()=>signOut()}>Logout</span>}
                </>
              )}
          </div>
        )
      }
    </>
  )
}

export default AuthLinks
