"use client"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login")
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Cargando...</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-[#1A9B6C]">Workana</Link>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 font-medium">{session?.user?.name}</span>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="text-sm text-gray-500 hover:text-red-500 transition">
            Cerrar sesión
          </button>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          ¡Bienvenido, {session?.user?.name}!
        </h1>
        <p className="text-gray-500">Has iniciado sesión correctamente.</p>
      </div>
    </main>
  )
}