
import React from 'react';
import TaskForm from './TaskForm';

type Props = {
  listName: string;
}

export default function NewToDoList({ listName }: Props) {
  return (
    <div>
        <h3 className="text-1xl font-bold">{listName}</h3>
        <TaskForm />
    </div>
  );
}
