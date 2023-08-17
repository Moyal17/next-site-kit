import {getPageData} from "@/lib/pages";
import HomePage from './home'

export default async function Page() {
  // Fetch data directly in a Server Component
  const homepage = await getPageData('home')
  // Forward fetched data to your Client Component
  return <HomePage pageDetails={homepage} />
}