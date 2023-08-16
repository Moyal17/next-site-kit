import './globals.css'
import ThemeProvider from "./providers/themeProvider";

interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider>
        {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
