// src/app/api/tasks/route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Essai simple :
console.log(Object.keys(prisma)); // <-- tu devrais voir taskList ici

// 👉 GET /api/tasks?listId=1
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const listId = Number(searchParams.get('listId'));

  if (!listId) return NextResponse.json({ error: 'Missing listId' }, { status: 400 });

  const tasks = await prisma.taskList.findMany({
    where: { listId },
    orderBy: { createdAt: 'desc' }
  });

  return NextResponse.json(tasks);
}

// 👉 POST /api/tasks
export async function POST(req: Request) {
  const body = await req.json();
  const { content, listId } = body;

  if (!content || !listId) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

  const newTask = await prisma.taskList.create({
    data: {
      content,
      listId
    }
  });

  return NextResponse.json(newTask, { status: 201 });
}
