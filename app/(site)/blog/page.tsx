import config from "@/app/config/config.json";
import {getPageData} from "@/actions/pages";
import BlogPageContent from './BlogContent'
import {getSortedPostsData} from "@/actions/posts";

export default async function Blog() {
  // Fetch data directly in a Server Component
  // const aboutPage = await getPageData('contact')
  const { pagination } = config.settings;
  const pageDetails = getPageData(`blog`);
  const posts = getSortedPostsData();
  // Forward fetched data to your Client Component
  return <BlogPageContent posts={posts}  pagination={pagination} pageDetails={pageDetails}/>
}