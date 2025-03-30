import React from 'react';

export default function SubscribeForm() {
  return (
    <div className='flex flex-row items-center justify-center h-screen'>
      <form className="flex flex-col items-center border border-blue-300 rounded p-2 mb-4">
        <h2>Inscription</h2>
            <input 
            type="text"
            placeholder="Nom"
            className="border border-gray-300 rounded p-2 mb-4"
            />
            <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded p-2 mb-4"
            />  
            <input
            type="password"
            placeholder="Mot de passe"
            className="border border-gray-300 rounded p-2 mb-4"
            />
            <button type='submit' className="bg-blue-500 text-white rounded p-2 hover:bg-blue-300">S'inscrire</button>
      </form>
    </div>
  );
}