import type React from "react"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { getServerSession } from "next-auth/next"
import { NEXT_AUTH_CONFIG } from "@/lib/auth"
import { Session } from "next-auth"
import { Providers } from "./provider"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const session = await getServerSession(NEXT_AUTH_CONFIG) as Session;

  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Providers session={session}>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics/>
        </Providers>
      </body>
    </html>
  )
}
