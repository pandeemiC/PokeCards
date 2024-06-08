import React, { useState } from 'react'
import fetchPokemon from '../util/PokeApi';
import Card from './Card';

export default function Button({ onClick }) {

  return (
    <div className="flex justify-center mt-2">
        <button onClick={onClick} className="p-8 px-10 font-bold bg-zinc-200 text-black text-xl rounded-xl shadow-xl hover:bg-zinc-300 hover:transition-all">
            GENERATE
        </button>
    </div>
  )
}
