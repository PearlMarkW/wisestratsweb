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
        <meta name="description" content="Your site description here" />
        <title>Pearl IO</title>
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