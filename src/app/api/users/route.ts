import { prisma } from '@lib/prisma';
import { NextResponse } from 'next/server';

//GET /api/users
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
//POST /api/users
export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password, // ⚠️ à hasher dans une vraie app
    },
  });

  return NextResponse.json(user, { status: 201 });
}
