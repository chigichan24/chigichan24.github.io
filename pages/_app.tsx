import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500&family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
