import { client } from "../sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
    if(source){
        return builder.image(source).url();
    } else {
        return "https://images.unsplash.com/photo-1511285605577-4d62fb50d2f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
    }
}

    export default urlFor;