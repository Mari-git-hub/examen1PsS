"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
    if (res?.error) {
      setError("Credenciales inválidas")
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <span className="text-3xl font-bold text-[#1A9B6C]">Workana</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Inicia sesión
        </h2>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A9B6C]"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A9B6C]"
          />
          <button
            type="submit"
            className="w-full bg-[#1A9B6C] text-white py-3 rounded-lg font-semibold hover:bg-[#158a5e] transition"
          >
            Entrar
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="text-[#1A9B6C] font-medium hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  )
}