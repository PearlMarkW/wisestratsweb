// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';  // Import global styles
// import styles from './footer.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';  // For managing <html> metadata

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Modern Deal Making for Investors" />
        <title>Wise Strategies</title>

        {/* Link to the favicon */}
        <link rel="icon" href="/images/wisestrats.ico" />

        {/* You can also include other icon formats for compatibility */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-wisestrats.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/wisestrats-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/wisestrats-16x16.png" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>
      <div className="antialiased">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;