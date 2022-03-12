import type {NextPage} from 'next'
import styles from '../styles/gohoukoku.module.css'
import MyHeader from "../components/MyHeader";

const Home: NextPage = () => {
    return (
        <>
            <MyHeader headerTitle="Home"/>
            <div className={styles.container}>
                <div className={styles.content}>
                <ruby>
                結婚
                <rp>(</rp>
                <rt>ケコーン</rt>
                <rp>)</rp>
                </ruby>
                しました。
                </div>
                <img className={styles.imageContent } alt="chigichan24_2017"
                                     src="/logo/github/chigichan24_2017.jpg" width={300} height={300}/>
            </div>
        </>
    )
}

export default Home;