import type { Metadata } from "next"
import "./globals.css"
import { SessionProvider } from "./providers"

export const metadata: Metadata = {
  title: "Workana MVP",
  description: "Plataforma freelance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}