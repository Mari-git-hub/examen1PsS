import Link from "next/link"

export default function HomePage() {
  const categories = ["Desarrollo Web", "Diseño Gráfico", "Marketing Digital", "Redacción", "Mobile", "Data & BI"]

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
        <span className="text-2xl font-bold text-[#1A9B6C]">Workana</span>
        <div className="flex gap-4">
          <Link href="/projects" className="text-gray-600 hover:text-[#1A9B6C] font-medium">Explorar</Link>
          <Link href="/login" className="text-gray-600 hover:text-[#1A9B6C] font-medium">Entrar</Link>
          <Link href="/register"
            className="bg-[#1A9B6C] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#158a5e] transition">
            Registrarse
          </Link>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-[#f0faf6] to-white py-20 px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Contrata el <span className="text-[#1A9B6C]">mejor talento</span> freelance
        </h1>
        <p className="text-xl text-gray-500 mb-8 max-w-xl mx-auto">
          Conectamos empresas con profesionales independientes de toda Latinoamérica.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/register"
            className="bg-[#1A9B6C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#158a5e] transition text-lg">
            Publicar un proyecto
          </Link>
          <Link href="/projects"
            className="border-2 border-[#1A9B6C] text-[#1A9B6C] px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition text-lg">
            Buscar trabajo
          </Link>
        </div>
      </section>

      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Explora por categoría</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map(cat => (
            <Link key={cat} href={`/projects?category=${cat}`}
              className="border border-gray-200 rounded-xl p-5 text-center hover:border-[#1A9B6C] hover:shadow-md transition">
              <span className="font-semibold text-gray-700">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#1A9B6C] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
        <p className="mb-6 text-lg opacity-90">Únete a miles de profesionales y empresas.</p>
        <Link href="/register"
          className="bg-white text-[#1A9B6C] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
          Crear cuenta gratis
        </Link>
      </section>
    </main>
  )
}