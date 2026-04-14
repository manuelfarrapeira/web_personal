import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Manuel Farrapeira | Líder Técnico Java",
  description:
    "Curriculum profesional de Manuel Farrapeira - Líder Técnico Java",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
