import { prisma } from '@lib/prisma';
import { NextResponse } from 'next/server';

// 👉 GET /api/lists/:id
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const listId = Number(params.id);

  const list = await prisma.userList.findUnique({
    where: { id: listId },
    include: { tasks: true, user: true },
  });

  if (!list) {
    return NextResponse.json({ error: 'Liste introuvable' }, { status: 404 });
  }

  return NextResponse.json(list);
}

// 👉 PUT /api/lists/:id
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const listId = Number(params.id);
  const body = await req.json();
  const { name } = body;

  const updated = await prisma.userList.update({
    where: { id: listId },
    data: { name },
  });

  return NextResponse.json(updated);
}

// 👉 DELETE /api/lists/:id
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const listId = Number(params.id);

  await prisma.userList.delete({
    where: { id: listId },
  });

  return NextResponse.json({ message: 'Liste supprimée' });
}
