import {notFound} from "next/navigation";
import {getPageData} from "@/actions/pages";
import DefaultContent from "@/app/(site)/[uri]/DefaultContent";

export default async function DefaultPage({ params }: {  params: { uri: string } }) {
  // Fetch data directly in a Server Component
  const { uri } = params;
  const pageDetails: any | null = await getPageData(uri);
  if (!pageDetails) notFound()
  // Forward fetched data to your Client Component
  return <DefaultContent pageDetails={pageDetails} uri={uri} />
}