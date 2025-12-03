import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tanay Agarwal - AI Engineer & Developer</title>
        <meta name="description" content="Portfolio of Tanay Agarwal - Artificial Intelligence Developer specializing in multi-agent AI systems, LLMs, and enterprise automation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

