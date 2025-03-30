
import React from 'react';
import { useState } from 'react';
import NewToDoList from './NewToDoList';

export default function CreateToDoList() {

    
    const [listName, setListName] = useState<string>("");
    const [input, setInput] = useState<string>('');
   


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        setListName(input);
        setInput('');
    }
  return (

    <div className="border border-blue-300 rounded p-4 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Créer une nouvelle liste</h2>
          <form className="mb-6" onSubmit={handleSubmit}>             
                <input
                type="text"
                placeholder="Nom de la nouvelle liste..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="p-2 border border-blue-300 rounded mr-2"/>
                <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Ajouter</button>
            </form>
            <div className="border border-blue-400 rounded p-4 max-w-xl mx-auto">
          <NewToDoList listName={listName} />
            </div>
    </div>
  );
}