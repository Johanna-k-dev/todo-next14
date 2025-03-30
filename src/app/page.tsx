'use client';

import CreateToDoList from "./components/CreateToDoList";
import TaskForm from "./components/TaskForm";

export default function Home() {

  return (
    <main>
      <h1 className="p-4 max-w-xl mx-auto text-3xl font-bold mb-4">📝 Ma Super Todo List</h1>
      <section>
        <TaskForm/>
      </section>
    </main>
  );
}
