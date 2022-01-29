import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import MyHeader from "../components/MyHeader";

const Home: NextPage = () => {
    return (
        <>
            <MyHeader headerTitle="Home"/>
            <div className={styles.container}>
                <div className={styles.content}>
                    ゆっくりしていってね。
                </div>
            </div>
        </>
    )
}

export default Home;
