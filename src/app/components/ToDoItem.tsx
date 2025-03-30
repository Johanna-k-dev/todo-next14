
import React from 'react';

type Props = {
    task :string
}

export default function ToDoItem({task}:Props) {
  return (
    
    <li className="text-white">
        {task}
    </li>
  );
}