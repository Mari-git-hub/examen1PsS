export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b">
        <a href="/" className="text-2xl font-bold text-[#1A9B6C]">Workana</a>
        <a href="/login" className="text-gray-600 hover:text-[#1A9B6C]">Mi cuenta</a>
      </nav>
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Proyectos disponibles</h1>
        <p className="text-gray-500 mb-6">Encuentra el proyecto ideal para ti</p>
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center text-gray-400">
          Aún no hay proyectos publicados. ¡Sé el primero!
        </div>
      </div>
    </main>
  )
}