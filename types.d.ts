type BlogPost = {
    id: string,
    title: string,
    date: string,
}


type Response = {
    id: string,
    title: string,
    date: string,
    data: {
        [key: string]: any
    }
}