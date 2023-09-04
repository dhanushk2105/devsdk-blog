import BlogList from "@/components/BlogList"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";

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
  return (
    <>
    <Head>
      <title>Dev SDK Blogs</title>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3966665476971711"
     crossOrigin="anonymous"></script>
    </Head>
    <Analytics />
    <BlogList posts={posts} />
    </>
  )
}
