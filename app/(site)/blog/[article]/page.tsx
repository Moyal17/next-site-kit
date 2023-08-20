import {getPostData, getSortedPostsData} from "@/actions/posts";
import ArticleContent from "@/app/(site)/blog/components/ArticleContent";

export default async function Article({ params }) {
  // Fetch data directly in a Server Component
  const { article } = params;
  console.log('article: ', article)
  const post: BlogPost = await getPostData(article);
  const posts = getSortedPostsData();

  // Forward fetched data to your Client Component
  return <ArticleContent
    postDetails={post}
    uri={article}
    recentPosts={posts.slice(0, 3)}
  />
}