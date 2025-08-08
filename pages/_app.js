import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  const title = 'AllAsked — AI-Curated Answers & Insights'
  const description = 'AllAsked.ai publishes tightly researched summaries, guides, and insights across trending topics.'
  const url = 'https://www.allasked.ai'
  const image = '/og-default.png'

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <footer className="container">
        <hr />
        <p>© {new Date().getFullYear()} AllAsked.ai — All rights reserved.</p>
      </footer>
    </>
  )
}