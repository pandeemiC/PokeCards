import React, { useState } from 'react'
import fetchPokemon from '../util/PokeApi';
import Card from './Card';

export default function Button({ onClick, showAddButton, onAddClick }) {

  return (
  
    <div className="flex justify-center mt-2">
        <button onClick={onClick} className="p-8 px-10 font-bold bg-zinc-200 text-black text-xl rounded-xl shadow-xl hover:bg-zinc-300 dark:text-white dark:bg-zinc-700 dark:hover:bg-zinc-600 hover:transition-all">
            GENERATE
        </button>
        {showAddButton && (
          <button className="ml-4 p-8 px-10 font-bold bg-blue-500 text-slate-200 text-xl rounded-xl shadow-xl hover:bg-blue-400 dark:bg-blue-800 dark:hover:bg-blue-700 hover:transition-all"
                  onClick={onAddClick}
          >
            ADD
          </button>
        )}
    </div>
  );
}
