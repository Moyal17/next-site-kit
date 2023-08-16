'use client'
import { ThemeProvider } from 'next-themes'

interface ThemeProviderProps {
  children: React.ReactNode
}
const Theme_Provider = ({ children } : ThemeProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
export default Theme_Provider