import { Reference } from "sanity";
import { Block } from "typescript";

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image | any;
    slug: Slug;
    title: string;
    description: string;
};

interface Author extends Base {
    name: string;
    image: Image;
    bio: Block[];
    slug: Slug;
};

interface Image {
    _type: "image";
    asset: Reference
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    title: string;
    description: string;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}