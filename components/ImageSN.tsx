"use client"
import { client } from '@/sanity/lib/client';
import Img from 'next/image';
import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image';

function ImageSN({imageData, classValue } : any) {
	const imageProps : UseNextSanityImageProps | null = useNextSanityImage(client, imageData);
    if (!imageProps) {
        // Handle the case where imageProps is null or undefined.
        return <div>No image available</div>; // You can customize this message
      }
    return (
		<Img
        // @ts-ignore
            {...imageProps}
            className={classValue}
            alt={"Alt"}
		/>
	);
}

export default ImageSN