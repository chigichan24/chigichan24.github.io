import type { NextPage } from 'next'
import Head from 'next/head'
import ImageTitle from '../components/ImageTitle'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kazuki Chigita | Home</title>
        <meta name="description" content="Kazuki Chigita" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ImageTitle />
      </main>
    </div>
  )
}

export default Home;
