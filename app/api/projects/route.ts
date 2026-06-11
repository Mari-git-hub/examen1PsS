import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions) as any
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  const { title, description, budget, category } = await req.json()
  const project = await prisma.project.create({
    data: { title, description, budget, category, clientId: session.user.id },
  })
  return NextResponse.json(project, { status: 201 })
}

export async function GET() {
  const projects = await prisma.project.findMany({
    where: { status: "OPEN" },
    include: { client: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(projects)
}