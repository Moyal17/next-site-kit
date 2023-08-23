import {notFound} from "next/navigation";
import {getPageData} from "@/actions/pages";
import DefaultContent from "@/app/(site)/[uri]/DefaultContent";
import type { Metadata } from 'next'

type MetadataProps = {
  params: { uri: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params }: MetadataProps,
  parent?: any
): Promise<Metadata> {
  const uri = params.uri
  const page = await getPageData(uri)
  return {
    title: page?.title || parent.title,
    description: page?.content.slice(0, 100) || parent.description,
  }
}

export default async function DefaultPage({ params }: {  params: { uri: string } }) {
  // Fetch data directly in a Server Component
  const { uri } = params;
  const pageDetails: any | null = await getPageData(uri);
  if (!pageDetails) notFound()
  // Forward fetched data to your Client Component
  return <DefaultContent pageDetails={pageDetails} uri={uri} />
}