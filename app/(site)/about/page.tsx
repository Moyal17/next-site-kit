import {getPageData} from "@/actions/pages";
import AboutPageContent from './AboutPageContent'

export default async function About() {
  // Fetch data directly in a Server Component
  const aboutPage = await getPageData('about')
  // Forward fetched data to your Client Component
  return <AboutPageContent pageDetails={aboutPage} />
}