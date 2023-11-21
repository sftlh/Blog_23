import CardList from '@/components/cardList/CardList'
import styles from './blogPage.module.css'
import Menu from '@/components/menu/Menu'

const BlogPage = ({searchParams}) => {
    const page = parseInt(searchParams.page) || 1;
    const {cat} = searchParams;
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{cat} Blog</h1>
            <CardList page={page} cat={cat}/>
            <Menu/>
            <div className={styles.content}></div>
        </div>
    )
}

export default BlogPage