import { useState } from 'react';
import ToDoItem from './ToDoItem';
import React from 'react';


export default function TaskForm() {

      //Etat pour stocker les tâches 
const [tasks, setTasks] = useState<string[]>([]);
//Etat pour stocker la valeur de l'input initialisé à une chaîne vide
const [input, setInput] = useState("");

const handleSubmit= (e: React.FormEvent) => {
  //Fonction pour gérer l'envoi du formulaire

  //Elle empêche le rechargement de la page et ajoute la tâche à la liste
  e.preventDefault();

  //On vérifie si l'input est vide, si oui on ne fait rien
  if (!input.trim()) return;

  //On ajoute la tâche à la liste des tâches
  setTasks([...tasks, input]);

  //On vide l'input après l'ajout de la tâche
  setInput('');
}
  return (
    <div className="border border-blue-400 rounded p-4 max-w-xl mx-auto">
           <h2 className="text-2xl font-bold mb-4">Ajouter une tâche à ma liste</h2>
          <form onSubmit={handleSubmit} className="mb-6">
            <input
              type="text"
              placeholder="Ajouter une tâche..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="p-2 border border-blue-300 rounded mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 hover:bg-blue-300"
            >
              Ajouter
            </button>
          </form>
          <ul >
            {tasks.map((task, i) => (
              <ToDoItem 
                key={i}
                task={task}
              />
            ))}
          </ul> 
        </div>
  );
}