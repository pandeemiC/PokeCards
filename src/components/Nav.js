import React, {useState} from 'react'
import logo from '../img/pokemonnavlogo.png';

export default function Nav({darkMode, setDarkMode}) {

  const toggleDark = () => {
    setDarkMode(!darkMode);
    const newMode = !darkMode ? 'dark' : 'normal';
    localStorage.setItem('darkMode', newMode);
  }

  return (
    <div className="relative">
    <div className="flex justify-center items-center">
      <img 
        src={logo}
        alt="PokeAPI Logo"
        className="w-[75px] h-[75px]" // Adjust size as needed
      />
    </div>
    <button className="absolute top-0 right-0 mr-8 mt-4 p-3 bg-zinc-200 text-black text-xl rounded-xl shadow-xl hover:bg-zinc-300 dark:text-white dark:bg-zinc-700 dark:hover:bg-zinc-600 hover:transition-all"
            onClick={toggleDark}
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  </div>
);
}