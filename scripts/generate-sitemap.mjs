
import fs from 'fs'
import path from 'path'

const siteUrl = 'https://www.allasked.ai'
const pages = ['', '/about', '/contact', '/privacy', '/terms']

function lastModifiedISO(p){
  try { return fs.statSync(p).mtime.toISOString() } catch { return new Date().toISOString() }
}

const postFiles = fs.readdirSync(path.join(process.cwd(), 'posts')).filter(n=>n.endsWith('.md'))
const urls = []

for (const p of pages) {
  const disk = p === '' ? 'pages/index.js' : `pages${p}.js`
  urls.push({ loc: `${siteUrl}${p}`, lastmod: lastModifiedISO(disk) })
}

for (const file of postFiles) {
  const slug = file.replace(/\.md$/, '')
  urls.push({ loc: `${siteUrl}/posts/${slug}`, lastmod: lastModifiedISO(`posts/${file}`) })
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u=>`  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}
</urlset>`

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml)
console.log('sitemap.xml generated with', urls.length, 'URLs')
