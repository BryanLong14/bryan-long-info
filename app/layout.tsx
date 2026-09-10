import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"

const siteUrl = "https://bryanlong.info"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bryan Long | Senior Director of Product",
  description:
    "Senior Director of Product with 15+ years building and scaling API developer ecosystems processing $100B+ in annual transaction volume for fintech and payments platforms.",
  keywords: ["product director", "fintech", "payments", "API", "developer ecosystem", "product management"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "Bryan Long" }],
  creator: "Bryan Long",
  publisher: "Bryan Long",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Bryan Long | Senior Director of Product",
    description:
      "Senior Director of Product with 15+ years building and scaling API developer ecosystems processing $100B+ in annual transaction volume for fintech and payments platforms.",
    siteName: "Bryan Long Portfolio",
    images: [
      {
        url: "/images/header.jpg",
        width: 1200,
        height: 630,
        alt: "Bryan Long - Senior Director of Product",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Long | Senior Director of Product",
    description:
      "Senior Director of Product with 15+ years building and scaling API developer ecosystems processing $100B+ in annual transaction volume for fintech and payments platforms.",
    images: ["/images/header.jpg"],
    creator: "@bryanlongtpm",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.svg", type: "image/svg+xml" }],
    apple: { url: "/favicon.svg", type: "image/svg+xml" },
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bryan Long",
              jobTitle: "Senior Director of Product",
              description:
                "Senior Director of Product with 15+ years building and scaling API developer ecosystems processing $100B+ in annual transaction volume for fintech and payments platforms.",
              url: siteUrl,
              sameAs: [
                "https://www.linkedin.com/in/bryanlongtpm/",
                "https://github.com/yourgithub",
                "https://www.youtube.com/@North_Developer",
              ],
              knowsAbout: [
                "Product Management",
                "FinTech",
                "Payments",
                "API Development",
                "Developer Experience",
                "User Experience",
                "Software Development",
              ],
              worksFor: {
                "@type": "Organization",
                name: "North",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
