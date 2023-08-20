import CategoryPageContent from "@/app/(site)/blog/components/CategoryPageContent";
import {getCategories, getCategoryDetails} from "@/actions/categories";
import {getSortedPostsData} from "@/actions/posts";
import config from "@/app/config/config.json";

export default async function Article({ params }: {  params: { uri: string } }) {
    // Fetch data directly in a Server Component
    const { uri } = params;
    const categoryDetails: BlogCategory = await getCategoryDetails(uri);
    const categories = getCategories();
    const posts = getSortedPostsData()
    const { pagination } = config.settings;

    // Forward fetched data to your Client Component
    return <CategoryPageContent
      categoryDetails={categoryDetails}
      uri={uri}
      pagination={pagination}
      categories={categories} posts={posts}
    />
}