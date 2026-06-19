export default function sitemap() {
  const base = 'https://holabeauty.in'
  const pages = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/makeup`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/parlour`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/home-parlour`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/booking`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
  return pages
}
