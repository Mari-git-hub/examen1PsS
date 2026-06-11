"use client"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const { data: session } = useSession()
  const [project, setProject] = useState<any>(null)
  const [message, setMessage] = useState("")
  const [price, setPrice] = useState("")
  const [sent, setSent] = useState(false)

  useEffect(() => {
    fetch(`/api/projects/${params.id}`)
      .then(r => r.json())
      .then(setProject)
  }, [params.id])

  const handleProposal = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/proposals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId: params.id, message, price: parseFloat(price) }),
    })
    setSent(true)
  }

  if (!project) return <div className="min-h-screen flex items-center justify-center text-gray-400">Cargando...</div>

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-8 mb-6">
          <span className="text-xs bg-green-100 text-[#1A9B6C] font-semibold px-3 py-1 rounded-full">
            {project.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mt-3 mb-2">{project.title}</h1>
          <p className="text-gray-600 mb-6">{project.description}</p>
          <div className="flex gap-8 border-t pt-6">
            <div>
              <p className="text-2xl font-bold text-[#1A9B6C]">${project.budget}</p>
              <p className="text-xs text-gray-400">Presupuesto</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-700">{project.proposals?.length || 0}</p>
              <p className="text-xs text-gray-400">Propuestas</p>
            </div>
          </div>
        </div>

        {session && (session.user as any)?.role === "FREELANCER" && (
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Enviar propuesta</h2>
            {sent ? (
              <p className="text-[#1A9B6C] font-semibold">✅ Propuesta enviada con éxito</p>
            ) : (
              <form onSubmit={handleProposal} className="space-y-4">
                <textarea placeholder="¿Por qué eres el ideal para este proyecto?" required rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A9B6C]"
                  onChange={e => setMessage(e.target.value)} />
                <input type="number" placeholder="Tu precio (USD)" required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A9B6C]"
                  onChange={e => setPrice(e.target.value)} />
                <button type="submit"
                  className="bg-[#1A9B6C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#158a5e] transition">
                  Enviar propuesta
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </main>
  )
}