import {getPageData} from "@/actions/pages";
import HomePage from './HomePageContent'

export default async function Home() {
  // Fetch data directly in a Server Component
  const homepage = await getPageData('home')
  // Forward fetched data to your Client Component
  return <HomePage pageDetails={homepage} />
}