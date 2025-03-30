'use server';

import { prisma } from '@/lib/prisma';

export async function addTask(content: string) {
    if (!content.trim()) return;
    await prisma.task.create({
        data: {
            content,
        },
    });
}