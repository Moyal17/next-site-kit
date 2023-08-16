import './(site)/globals.css'
import SiteContainer from "@/app/components/SiteContainer";
import "tw-elements/dist/css/tw-elements.min.css";

export const metadata = {
  title: "Dave's Blog",
  description: 'Created by Dave Gray',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteContainer>
          {children}
        </SiteContainer>
      </body>
    </html>
  )
}
