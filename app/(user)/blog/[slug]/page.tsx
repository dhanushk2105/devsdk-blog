import ImageSN from "@/components/ImageSN";
import { client } from "@/sanity/lib/client";
import { Post } from "@/typings";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "@/components/RichTextComponent";
import Head from "next/head";

type Props = {
    params: {
        slug: string;
    }
}

export const revalidate = 60

export async function generateStaticParams(){
    const query = groq`*[_type=='post']
    {
        slug
    }
    `
    const slug: Post[] = await client.fetch(query)
    const slugRoutes = slug.map((slug) => slug.slug.current)
    return slugRoutes
}

async function  Post({ params : {slug} }: Props) {
    const query = groq`
    *[_type == "post" && slug.current == $slug][0]{
        ...,
        author->,
        categories[]->,
    }
    `
    const post : Post = await client.fetch(query, {slug})

  return (
    <>
    <Head>
      <title>Dev SDK Blogs</title>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3966665476971711"
     crossOrigin="anonymous"></script>
    </Head>
    <article className="px-10 pb-28">
        <section className="space-y -2 border-collapse border-yellow-500 text-white">
             <div className="relative min-h-56 overflow-hidden flex flex-col md:flex-row justify-between">
                <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-5">
                    <ImageSN imageData={post.mainImage} classValue="object-cover object-center mx-auto"/>
                </div>
                <section className="p-5 bg-yellow-500 w-full">
                    <div className="flex flex-col md:flex-row justify-between gap-y-5">
                        <div>
                            <h1 className="text-4xl font-extrabold">{post.title}</h1>
                            <p>
                                {new Date(post._createdAt).toLocaleDateString(
                                    "en-US",{
                                    day:"numeric",
                                    month: "long",
                                    year: "numeric"
                                    }

                                )}
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <ImageSN
                            imageData={post.author.image}
                            classValue={"rounded-full w-10 h-10"}
                            />
                        <div className="w-64">
                            <h3 className="text-lg font-bold">{post.author.name}</h3>
                        </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="italic pt-10">{post.description}</h2>
                        <div className="flex items-center justify-end mt-auto space-x-2">
                            {post.categories.map((category) => (
                                <p key={category._id} className="bg-gray-800 text-white
                                px-3 py-1 rounded-full text-sm font-semibold mt-4">{category.title}</p>
                            ) )}
                        </div>
                    </div>
                </section>
             </div>
        </section>
        {/* @ts-ignore */}
        <PortableText value={post.body} components={RichTextComponent}/>
    </article>
    </>
  )
}

export default Post