import { cn } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter as FontSans } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import { TooltipProvider } from '@/components/ui/tooltip'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})
export const metadata: Metadata = {
  title: 'Capcons',
  description: 'Studio',
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth antialiased focus:scroll-auto")} suppressHydrationWarning={true}>
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
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
