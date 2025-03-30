import { prisma } from '@lib/prisma';
import { NextResponse } from 'next/server';

// 👉 GET /api/lists?userId=1
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = Number(searchParams.get('userId'));

  if (!userId) {
    return NextResponse.json({ error: 'userId manquant' }, { status: 400 });
  }

  const lists = await prisma.userList.findMany({
    where: { userId },
    include: { tasks: true },
    orderBy: { id: 'desc' },
  });

  return NextResponse.json(lists);
}

// 👉 POST /api/lists
export async function POST(req: Request) {
  const body = await req.json();
  const { name, userId } = body;

  if (!name || !userId) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
  }

  const newList = await prisma.userList.create({
    data: {
      name,
      userId,
    },
  });

  return NextResponse.json(newList, { status: 201 });
}
