import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import MyHeader from "../components/MyHeader";
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <>
            <MyHeader headerTitle="Home"/>
            <div className={styles.container}>
                <div className={styles.content}>
                    ここは chigichan24 の個人ページです。
                </div>
                <div className={styles.content}>
                    アイコン一覧は
                    <Link href="/icons">
                        <a>こちら</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home;
