import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const { name, email, password, role } = await req.json()
  const exists = await prisma.user.findUnique({ where: { email } })
  if (exists) {
    return NextResponse.json({ error: "Email ya registrado" }, { status: 400 })
  }
  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: { name, email, password: hashed, role },
  })
  return NextResponse.json({ user }, { status: 201 })
}