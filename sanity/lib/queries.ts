import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage {
    asset->{url, metadata {lqip}},
    alt
  },
  "author": author->{name, image},
  "categories": categories[]->{title, slug}
}`

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  body,
  publishedAt,
  "author": author->{name, image, bio},
  "categories": categories[]->{title},
  mainImage
}`
