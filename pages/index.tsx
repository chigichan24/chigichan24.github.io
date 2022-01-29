import type {NextPage} from 'next'
import Head from 'next/head'
import ImageTitle from '../components/ImageTitle'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kazuki Chigita | Home</title>
                <meta name="description" content="Kazuki Chigita"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.headerHomeItem}>
                        <ImageTitle/>
                    </div>
                    <a href="https://chigichan24.hatenablog.com" target="_blank" rel="noreferrer">
                        <div className={styles.headerLinkItem}>
                            Blog
                        </div>
                    </a>
                    <a href="https://github.com/chigichan24" target="_blank" rel="noreferrer">
                        <div className={styles.headerLinkItem}>
                            GitHub
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1CT-qT_EpyoB4-0UH-LU8v6VYuNqfWN6j/view?usp=sharing"
                       target="_blank" rel="noreferrer">
                        <div className={styles.headerLinkItem}>
                            RESUME(JA)
                        </div>
                    </a>
                </div>
                <div className={styles.content}>
                    ゆっくりしていってね。
                </div>
            </main>
        </div>
    )
}

export default Home;
