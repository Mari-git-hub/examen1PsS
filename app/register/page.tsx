"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "FREELANCER",
  })
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    if (!res.ok) {
      const data = await res.json()
      setError(data.error)
    } else {
      router.push("/login")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <span className="text-3xl font-bold text-[#1A9B6C]">Workana</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Crea tu cuenta
        </h2>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Nombre completo"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A9B6C]"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A9B6C]"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A9B6C]"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A9B6C]"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="FREELANCER">Soy Freelancer</option>
            <option value="CLIENT">Busco Freelancers</option>
          </select>
          <button
            type="submit"
            className="w-full bg-[#1A9B6C] text-white py-3 rounded-lg font-semibold hover:bg-[#158a5e] transition"
          >
            Crear cuenta
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="text-[#1A9B6C] font-medium hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}