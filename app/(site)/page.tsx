import {getPageData} from "@/actions/pages";
import HomePage from './HomeContent'
import { apiMethods } from "@/actions";

export default async function Home() {
  // Fetch data directly in a Server Component
  const homepage = await apiMethods.pages.getPage('home'); // getPageData('home')
  // Forward fetched data to your Client Component
  return <HomePage pageDetails={homepage} />
}