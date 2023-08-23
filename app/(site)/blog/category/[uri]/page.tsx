import { notFound } from "next/navigation"
import CategoryContent from "@/app/(site)/blog/category/[uri]/CategoryContent";
import {getCategories, getCategoryDetails} from "@/actions/categories";
import {getSortedPostsData} from "@/actions/posts";
import config from "@/app/config/config.json";
import {Metadata} from "next";

type MetadataProps = {
    params: { uri: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params }: MetadataProps,
  parent?: any
): Promise<Metadata> {
    const uri = params.uri
    const category = await getCategoryDetails(uri)
    return {
        title: category?.title || parent.title,
        description: category?.description.slice(0, 100) || parent.description,
    }
}

export default async function Article({ params }: {  params: { uri: string } }) {
    // Fetch data directly in a Server Component
    const { uri } = params;
    const categoryDetails: BlogCategory | null = await getCategoryDetails(uri);
    if (!categoryDetails) notFound()
    const categories = getCategories();
    const posts = getSortedPostsData()
    const { pagination } = config.settings;

    // Forward fetched data to your Client Component
    return <CategoryContent
      categoryDetails={categoryDetails}
      uri={uri}
      pagination={pagination}
      categories={categories} posts={posts}
    />
}