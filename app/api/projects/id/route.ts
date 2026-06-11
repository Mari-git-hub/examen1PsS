import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const project = await prisma.project.findUnique({
    where: { id: params.id },
    include: {
      client: { select: { name: true } },
      proposals: { include: { freelancer: { select: { name: true } } } },
    },
  })
  if (!project) return NextResponse.json({ error: "No encontrado" }, { status: 404 })
  return NextResponse.json(project)
}