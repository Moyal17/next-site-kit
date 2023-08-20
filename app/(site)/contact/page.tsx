import {getPageData} from "@/actions/pages";
import ContactPageContent from './ContactContent'


export default async function Contact() {
  // Fetch data directly in a Server Component
  // const aboutPage = await getPageData('contact')
  // Forward fetched data to your Client Component
  return <ContactPageContent />
}