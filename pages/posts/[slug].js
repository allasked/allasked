import Head from 'next/head'
import Link from 'next/link'
import { getAllPostSlugs, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return { props: { postData } }
}

export default function Post({ postData }) {
  return (
    <div className="container">
      <Head><title>{postData.title} — AllAsked</title></Head>
      <header>
        <div className="brand"><img src="/logo.svg" width="28" height="28" alt="AllAsked"/> <Link href="/">AllAsked</Link></div>
        <nav><Link href="/about">About</Link></nav>
      </header>

      <article className="card">
        <h1>{postData.title}</h1>
        <div className="meta">{new Date(postData.date).toLocaleDateString()}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  )
}