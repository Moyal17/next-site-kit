import {getPageData} from "@/actions/pages";
import ContactPageContent from './ContactContent'

export const metadata = {
  title: "Sensei Contact Page",
  description: 'Contact Us Page',
}

export default async function Contact() {
  // Fetch data directly in a Server Component
  // const aboutPage = await getPageData('contact')
  // Forward fetched data to your Client Component
  return <ContactPageContent />
}