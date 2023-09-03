import { Post } from "@/typings";
import Image from "next/image";
import { useNextSanityImage } from 'next-sanity-image';
import {client } from "@/sanity/lib/client"
import ImageSN from "./ImageSN";
import ClientSideRoute from "./ClientSideRoute";


type Props = {
    posts: Post[];
}

function BlogList({ posts }: Props) {
  return (
    <div>
        <hr className="border-yellow-500 mb-10"/>
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-x-10
        gap-y-16 pb-24">
            {posts.map((post) => (
                <ClientSideRoute key={post._id} route={`/blog/${post.slug.current}`}>
                <div className="flex flex-col group cursor-pointer">
                     <div className="relative overflow-hidden w-full h-80 drop-shadow-xl
                     group-hover:scale-105 transition-transform duration-200
                     ease-out">
                        <ImageSN imageData={post.mainImage} classValue={'object-cover object-left lg:object-center'} />
                        <div className="absolute bottom-0 w-full bg-opacity-20
                        bg-black backdrop-blur-lg rounded drop-shadow-lg text-white
                        p-5 flex justify-between">
                            <div>
                             <p className="font-bold">{post.title}</p>
                             <p>
                                {new Date(post._createdAt).toLocaleDateString(
                                    "en-US",
                                    {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    }
                                )}
                             </p>
                             </div>
                             <div>
                                {post?.categories?.map((category) => (
                                    <div key={category.title} className="bg-yellow-500 text-center text-black
                                    px-3 py-1 rounded-full text-sm font-semibold"><p>{category.title}</p></div>
                                ))}
                             </div>
                        </div>
                    </div>
                    <div className="mt-5 flex-1">
                        <p className="underline text-lg font-bold">{post.title}</p>
                        <p className="line-clamp-2 text-gray-500">{post.description}</p>
                    </div>
                    <div>
                        <p className="font-bold flex items-center gap-1 mt-5 group-hover:underline">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

                        </p>
                    </div>
                </div>
                </ClientSideRoute>
                    ))}

    </div>
    </div>
)
}

export default BlogList