import BlogList from "@/components/BlogList"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

const query = groq`
*[_type=='post']{
  ...,
  author->,
    categories[]->,
} | order(_createdAt desc)
`
export const revalidate = 60

export default async function Home() {
  const posts = await client.fetch(query)
  console.log(posts.length)
  return (
    <BlogList posts={posts} />
  )
}
