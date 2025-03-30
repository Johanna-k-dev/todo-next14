// src/app/api/tasks/[id]/route.ts
import { prisma } from '@lib/prisma';
import { NextResponse } from 'next/server';

// 👉 PUT /api/tasks/:id
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const taskId = Number(params.id);
  const body = await req.json();
  const { content, done } = body;

  const updated = await prisma.taskList.update({
    where: { id: taskId },
    data: {
      content,
      done,
    }
  });

  return NextResponse.json(updated);
}

// 👉 DELETE /api/tasks/:id
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const taskId = Number(params.id);

  await prisma.taskList.delete({
    where: { id: taskId }
  });

  return NextResponse.json({ message: 'Tâche supprimée.' });
}
