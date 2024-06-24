import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faShieldAlt, faFistRaised, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Card({ pokemon }) {
    const typeColors = {
        normal: 'normaling',
        poison: 'poison',
        electric: 'electric',
        water: 'water',
        grass: 'grass',
        ice: 'ice',
        ghost: 'ghost',
        dark: 'darkling',
        fighting: 'fighting',
        ground: 'ground',
        flying: 'flying',
        psychic: 'psychic',
        bug: 'bug',
        rock: 'rock',
        dragon: 'dragon',
        steel: 'steel',
        fairy: 'fairy',
        fire: 'fire',
    };

    // yes
    

    const statIcons = {
        attack: faFistRaised,
        defense: faShieldAlt,
        'special-attack': faBolt,
        speed: faTachometerAlt,
    };

    const upCase = (string) => string.toUpperCase();

    const primaryType = pokemon.type.split(', ')[0];  // Use the primary type if there are multiple
    const typeClass = typeColors[primaryType];
    

    return (
        <div className="container flex justify-center ml-auto bg-[rgb(236, 229, 229)]">
            <div className={`border-none mx-auto mt-5 h-[700px] w-[600px] m-4 shadow-2xl dark:shadow-zinc-500 dark:shadow-xl rounded-2xl bg-blend-overlay bg-${typeClass}`}>
                <div className="m-3 flex justify-between">
                    <span className={`border-1 font-bold shadow-lg px-4 py-2 rounded-2xl`}>
                        {pokemon.type.toUpperCase()}
                    </span>
                    <span className="border-1 bg-zinc-200 border-zinc-300  dark:bg-zinc-700 dark:border-zinc-600 dark:text-white font-bold shadow-lg px-4 py-2 rounded-2xl transition-all">
                        HP: {pokemon.hp}
                    </span>
                </div>

                <img
                    src={pokemon.sprite}
                    alt={pokemon.name}
                    className="w-[330px] h-[330px] m-auto"
                />
                <h1 className="text-5xl font-bold text-center mt-2 drop-shadow-md">{pokemon.name.toUpperCase()}</h1>
                <div className="flex justify-evenly">
                    <h3 className="mt-4 text-lg">{pokemon.abilities}</h3>
                </div>

                <ul className="flex flex-row gap-4 flex-wrap justify-evenly text-2xl m-10">
                    {pokemon.stats.map((stat) => (
                        <li key={stat.name} className="m-2 p-2 border-2 bg-zinc-200 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white shadow-lg rounded-2xl">
                            <FontAwesomeIcon icon={statIcons[stat.name]} className="mr-2" />
                            {stat.name === 'special-attack' ? 'SPECIAL' : upCase(stat.name)}: {stat.value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}