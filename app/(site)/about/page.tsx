import {getPageData} from "@/actions/pages";
import AboutContent from './AboutContent'
export const metadata = {
  title: "Sensei About",
  description: 'Read About Us',
}

export default async function About() {
  // Fetch data directly in a Server Component
  const aboutPage = await getPageData('about')
  // Forward fetched data to your Client Component
  return <AboutContent pageDetails={aboutPage} />
}