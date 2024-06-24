import { library } from '@fortawesome/fontawesome-svg-core';
import React, {useState, useEffect} from 'react'

export default function Window({ addedPokemon }) {
  const [avgStats, setAvgStats] = useState({});

  useEffect(() => {
    if(addedPokemon.length > 0) {
      const totalStats = addedPokemon.reduce(
        (acc, pokemon) => {
          const attack = pokemon.stats.find(stat => stat.name === 'attack').value;
          const defense = pokemon.stats.find(stat => stat.name === 'defense').value;
          acc.attack += attack;
          acc.defense += defense;
          
          return acc;
        },
        {attack: 0, defense: 0}
      );

      setAvgStats({
        attack: (totalStats.attack / addedPokemon.length).toFixed(2),
        defense: (totalStats.defense / addedPokemon.length).toFixed(2),
      });
    }
  }, [addedPokemon])

  return (
    <></>
  );
}
/*
<div className="w-[300px] p-7 bg-white rounded-xl shadow-lg slide-in">
      <h2 className="text-2xl font-bold mb-4 text-center">Added Pokemon</h2>
      <ul>
        {addedPokemon.map((pokemon, index) => (
          <li key={index} className="text-lg mb-2">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </li>
        ))}
      </ul>
      {addedPokemon.length === 5 && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold fade-in">AVG STATS</h3>
          <p className="fade-in">Attack: {avgStats.attack}</p>
          <p className="fade-in-delayed">Defense: {avgStats.defense}</p>
        </div>
      )}
    </div>
  );
}
*/