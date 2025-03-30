import { prisma } from '@lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
    include: { lists: true },
  });

  if (!user) {
    return NextResponse.json({ error: 'User non trouvé' }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const { name, email } = body;

  const user = await prisma.user.update({
    where: { id: Number(params.id) },
    data: { name, email },
  });

  return NextResponse.json(user);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await prisma.user.delete({
    where: { id: Number(params.id) },
  });

  return NextResponse.json({ message: 'Utilisateur supprimé' });
}
