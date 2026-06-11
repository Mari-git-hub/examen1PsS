import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions) as any
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  const { projectId, message, price } = await req.json()
  const proposal = await prisma.proposal.create({
    data: { projectId, message, price, freelancerId: session.user.id },
  })
  return NextResponse.json(proposal, { status: 201 })
}