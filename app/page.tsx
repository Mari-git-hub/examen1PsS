import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1A9B6C] mb-4">Workana MVP</h1>
        <div className="flex gap-4 justify-center">
          <Link href="/login"
            className="bg-[#1A9B6C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#158a5e]">
            Iniciar sesión
          </Link>
          <Link href="/register"
            className="border-2 border-[#1A9B6C] text-[#1A9B6C] px-6 py-3 rounded-lg font-semibold hover:bg-green-50">
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  )
}