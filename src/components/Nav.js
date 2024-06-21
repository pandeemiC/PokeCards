import React from 'react'
import logo from '../img/pokemonnavlogo.png';

export default function Nav() {
  return (
    <div className="flex justify-evenly items-center">
        <div className="border-2 border-zinc-300 w-[400px]"></div>
        <img 
            src={logo}
            alt="PokeAPI Logo"
            className="w-[75px] h-[75px]"
        />
        <div className="border-2 border-zinc-300 w-[400px]"></div>
    </div>
  )
}
