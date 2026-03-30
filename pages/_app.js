import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { ThemeProvider } from '../components/ThemeContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tanay Agarwal — AI Engineer & Developer</title>
        <meta name="description" content="Portfolio of Tanay Agarwal — AI Engineer specializing in multi-agent AI systems, LLMs, and enterprise automation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
        }}
      />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
