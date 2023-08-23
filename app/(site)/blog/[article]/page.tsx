import {getPostData, getSortedPostsData} from "@/actions/posts";
import ArticleContent from "@/app/(site)/blog/[article]/ArticleContent";
import {notFound} from "next/navigation";
import type { Metadata } from 'next'

type Props = {
  params: { article: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: any
): Promise<Metadata> {
  const articleId = params.article
  const post: BlogPost | null = await getPostData(articleId)
  return {
    title: post?.title || parent.title,
    description: post?.content.slice(0, 100) || parent.description,
    authors: post?.author || '',
  }
}

export default async function Article({ params }: {  params: { article: string } }) {
  // Fetch data directly in a Server Component
  const { article } = params;
  const post: BlogPost | null = await getPostData(article);
  if (!post) notFound()
  const posts = getSortedPostsData();
  // Forward fetched data to your Client Component
  return <ArticleContent postDetails={post} uri={article} recentPosts={posts.slice(0, 3)} />
}