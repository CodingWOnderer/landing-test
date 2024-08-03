import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter as FontSans } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})
export const metadata: Metadata = {
  title: 'Capcons',
  description: 'Studio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
