"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const CATEGORIES = ["Desarrollo Web", "Diseño Gráfico", "Marketing Digital", "Redacción", "Mobile", "Data & BI"]

export default function NewProjectPage() {
  const router = useRouter()
  const [form, setForm] = useState({ title: "", description: "", budget: "", category: "" })
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, budget: parseFloat(form.budget) }),
    })
    if (!res.ok) { const d = await res.json(); setError(d.error) }
    else { router.push("/dashboard") }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-2xl">
        <a href="/" className="text-2xl font-bold text-[#1A9B6C] block mb-6">Workana</a>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Publicar proyecto</h1>
        <p className="text-gray-500 mb-6">Describe tu necesidad y recibe propuestas.</p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input placeholder="Título del proyecto" required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A9B6C]"
            onChange={e => setForm({ ...form, title: e.target.value })} />
          <textarea placeholder="Descripción detallada" required rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A9B6C]"
            onChange={e => setForm({ ...form, description: e.target.value })} />
          <select required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A9B6C]"
            onChange={e => setForm({ ...form, category: e.target.value })}>
            <option value="">Seleccionar categoría</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <input type="number" placeholder="Presupuesto (USD)" required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A9B6C]"
            onChange={e => setForm({ ...form, budget: e.target.value })} />
          <button type="submit"
            className="w-full bg-[#1A9B6C] text-white py-3 rounded-lg font-bold hover:bg-[#158a5e] transition text-lg">
            Publicar proyecto
          </button>
        </form>
      </div>
    </main>
  )
}