import React from 'react';


    const fetchPokemon = async () => {
        const capitalFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        const statsToShow = ['attack', 'speed', 'special-attack', 'defense'];

        try {
            const randomPokemonId = Math.floor(Math.random() * 898) + 1;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
            if(!response.ok) {
                throw new Error('Response was not ok.')
            }
            const data = await response.json();
            console.log(data);
            
             return {
                name: data.name,
                type: data.types.map(typeInfo => typeInfo.type.name).join(', '),
                hp: data.stats.find(stat => stat.stat.name === 'hp').base_stat,
                abilities: data.abilities.map(abilityInfo => capitalFirstLetter(abilityInfo.ability.name)).join(' | '),
                stats: data.stats
                .filter(statInfo => statsToShow.includes(statInfo.stat.name))
                .map(statInfo => ({
                    name: statInfo.stat.name,
                    value: statInfo.base_stat,
                })),
                sprite: data.sprites.other.dream_world.front_default ? data.sprites.other.dream_world.front_default : data.sprites.other['official-artwork'].front_default,
             };
            
        } catch (err) {
            console.error('Error fetching Pokemon', err);
            return null;
        }
    }

    export default fetchPokemon;

