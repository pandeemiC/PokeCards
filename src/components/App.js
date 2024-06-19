import React, {useState} from 'react';
import Card from './Card';
import Button from './Button';
import fetchPokemon from '../util/PokeApi';
import Nav from './Nav';
import EmptyCard from './EmptyCard';

function App() {
  const [pokemon, setPokemon] = useState(null);

  const handleFetchPokemon = async () => {
    const data = await fetchPokemon();
    setPokemon(data);
  };

// change
  return (
    <div>
      <Nav />
     {pokemon ? (
      <Card pokemon={pokemon} />
     ) : (
      <EmptyCard />
     )}
     <Button onClick={handleFetchPokemon}/>
    </div>

  );
}

export default App;
