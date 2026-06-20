import { client, urlFor } from './sanity'

export async function getServiceImageUrl(service) {
  try {
    const query = `*[_type == "serviceCard" && slug.current == $service][0]`
    const doc = await client.fetch(query, { service })
    if (doc?.image) {
      return urlFor(doc.image).width(1920).quality(80).url()
    }
  } catch {}
  return null
}
