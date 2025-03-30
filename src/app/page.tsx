'use client';
import { prisma } from '@lib/prisma';
import CreateToDoList from "./components/CreateToDoList";
import TaskForm from "./components/TaskForm";
import SubscribeForm from './components/SubscribeForm';

export default function Home() {

  return (
    <main>
      <SubscribeForm/>
      <h1 className="p-4 max-w-xl mx-auto text-3xl font-bold mb-4">📝 Ma Super Todo List</h1>
      <section>
        <CreateToDoList/>
      </section>
      <section>
        <TaskForm/>
      </section>
    </main>
  );
}
