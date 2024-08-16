import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/font";



export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s • ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "social network",
    "storytellers",
    "algorithm-free",
    "personalized circles",
    "entrepreneurs",
    "brands",
    "networking",
    "social media",
    "content sharing",
    "proximity-based",
    "virtual business card",
    "real-time feed",
    "interest matching",
    "moment sharing",
    "event sharing",
    "customizable",
    "analytics",
    "community tools",
    "embedded features",
    "content search",
    "activity feed",
    "personal branding",
    "networking app",
    "pre-built templates",
    "moderation",
    "single sign-on",
    "leaderboards",
    "smart badges",
    "user experience",
  ],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.creator,
  },
  icons: {
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

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
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth antialiased focus:scroll-auto")}
      suppressHydrationWarning={true}
    >
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
