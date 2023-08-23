type BlogPost = {
    id: string,
    title: string,
    date: string,
    author: any,
    image: string,
    avatar: string,
    draft: boolean,
    content: string
    contentHtml?: any
    description?: string
    mdxContent?: any
}

type BlogCategory = {
    uri: string,
    title:string,
    description: string
}