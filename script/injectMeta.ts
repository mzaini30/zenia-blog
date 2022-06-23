import {sync} from 'fast-glob'
import {writeFileSync, readFileSync} from 'fs'

let semuaFile = sync('.presite/**/*.html')
let link = [...semuaFile].map(x => x.replace('index.html', '').replace('.presite', 'https://zenia.my.id'))

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
for (let x of link){
  sitemap += `<url><loc>${x}</loc></url>`
}
sitemap += `</urlset>`
writeFileSync('.presite/sitemap.xml', sitemap)

for (let n in semuaFile){
  let isi = readFileSync(semuaFile[n]).toString()
  isi = isi.replace(/<title>(.+)<\/title>/, function(x, a){
    return `
      <title>${a}</title>
      <meta property="og:title" content="${a.replace(/"/g, '')}">
      <meta property="twitter:title" content="${a.replace(/"/g, '')}">

      <meta property="og:url" content="${link[n]}">
      <meta property="twitter:url" content="${link[n]}">
    ` 
  })
  writeFileSync(semuaFile[n], isi)
}