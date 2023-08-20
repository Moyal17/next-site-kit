import {getPostData, getSortedPostsData} from "@/actions/posts";
import ArticleContent from "@/app/(site)/blog/components/ArticleContent";
import {notFound} from "next/navigation";

export default async function Article({ params }: {  params: { article: string } }) {
  // Fetch data directly in a Server Component
  const { article } = params;
  const post: BlogPost | null = await getPostData(article);
  if (!post) notFound()
  const posts = getSortedPostsData();
  // Forward fetched data to your Client Component
  return <ArticleContent postDetails={post} uri={article} recentPosts={posts.slice(0, 3)} />
}