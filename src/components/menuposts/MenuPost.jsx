import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './menuPost.module.css'

const getData = async() => {
    const res = await fetch('http://localhost:3000/api/popular',{
        cache:"no-store"
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json();
  }

const MenuPost = async ({withImage}) => {

  const popularPost = await getData();
  return (
    <div className={styles.items}>  
        {
            popularPost?.map((item)=>(
                <Link href={`/posts/${item.slug}`} className={styles.item} key={item._id}> 
                    {withImage && (<div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
                    </div>) }         
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles[item.catSlug]}`}>{item.catSlug}</span>
                        <h3 className={styles.postTitle}>{item.title}</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>{item?.userEmail}</span>
                            <span className={styles.date}> - {item?.createdAt.substring(0,10)}</span>
                        </div>
                    </div>  
                </Link>
            ))
        }              
        
    </div>
  )
}

export default MenuPost
