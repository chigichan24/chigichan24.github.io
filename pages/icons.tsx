import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Icons.module.css';

const Icons: NextPage = () => {
    return <div className={styles.container}>
        <Head>
            <title>Kazuki Chigita | Icons</title>
            <meta name="description" content="Kazuki Chigita icon"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main className={styles.main}>
            <h1 className={styles.title}>
                A history of SNS icons
            </h1>
            <div className={styles.category}>
                <h2 className={styles.categoryTitle}>
                    Twitter
                </h2>
                <div className={styles.categoryIcons}>
                    <div className={styles.categoryItem}>
                        <img alt="chigichan24_2016" src="/logo/twitter/chigichan24_2016.png" width={200} height={200}/>
                    </div>
                    <div className={styles.categoryItem}>
                        <img alt="chigichan24_2017" src="/logo/twitter/chigichan24_2017.jpeg" width={200} height={200}/>
                    </div>
                    <div className={styles.categoryItem}>
                        <img alt="chigichan24_2018" src="/logo/twitter/chigichan24_2018.jpg" width={200} height={200}/>
                    </div>
                    <div className={styles.categoryItem}>
                        <img alt="chigichan24_2019" src="/logo/twitter/chigichan24_2019.png" width={200} height={200}/>
                    </div>
                    <div className={styles.categoryItem}>
                        <img alt="chigichan24_2020" src="/logo/twitter/chigichan24_2020.png" width={200} height={200}/>
                    </div>
                    <div className={styles.categoryItem}>
                        <img alt="chigichan24_2021" src="/logo/twitter/chigichan24_2021.jpeg" width={200} height={200}/>
                    </div>
                    <div className={styles.categoryItem}>
                        <img alt="chigichan24_2022" src="/logo/twitter/chigichan24_2022.png" width={200} height={200}/>
                    </div>
                </div>
            </div>
            <div className={styles.category}>
                <h2 className={styles.categoryTitle}>
                    GitHub
                </h2>
                <div className={styles.categoryIcons}>
                    <div className={styles.categoryItem}>
                        <img className={styles.categoryItem} alt="chigichan24_2017"
                             src="/logo/github/chigichan24_2017.jpg" width={200} height={200}/>
                    </div>
                    <div className={styles.categoryItem}>
                        <img className={styles.categoryItem} alt="chigichan24_2019"
                             src="/logo/github/chigichan24_2019.png" width={200} height={200}/>
                    </div>
                </div>
            </div>
        </main>
    </div>
}

export default Icons;