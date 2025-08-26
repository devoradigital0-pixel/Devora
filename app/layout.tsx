import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

export const metadata : Metadata = {
  title: "Devora | Web Development & Marketing",
  description: "We craft custom websites, Shopify stores, and SaaS platforms to help businesses grow and scale.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Devora | Web Development & Marketing",
    description: "Clean design, custom tech, real results. Explore our portfolio.",
    url: "https://yourdomain.com",
    siteName: "Devora",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devora Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devora | Web Development & Marketing",
    description: "Custom websites & digital solutions.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}
        <Analytics />
      </body>
    </html>
  )
}
