import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return { props: { allPostsData } }
}

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <header>
        <div className="brand"><img src="/logo.svg" width="28" height="28" alt="AllAsked"/> AllAsked</div>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <h1>AI-Curated Answers & Insights</h1>
        <p className="meta">Fresh, fact-checked summaries on tech, business, and the internet’s biggest questions.</p>

        <h2>Latest Posts</h2>
        <ul className="postlist">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <li key={slug} className="card">
              <Link href={`/posts/${slug}`}><strong>{title}</strong></Link>
              <div className="meta">{new Date(date).toLocaleDateString()} — {excerpt}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}