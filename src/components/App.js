import React, {useState, useEffect} from 'react';
import Card from './Card';
import Button from './Button';
import fetchPokemon from '../util/PokeApi';
import Nav from './Nav';
import EmptyCard from './EmptyCard';
import Window from './Window';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [showAddButton, setShowAddButton] = useState(false);
  const [addedPokemon, setAddedPokemon] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'dark') {
      setDarkMode(true);
    }
  }, []);


  const handleFetchPokemon = async () => {
    const data = await fetchPokemon();
    setPokemon(data);
    setShowAddButton(true);
  };

  const handleAddPokemon = () => {
    if (addedPokemon.length < 5) {
      setAddedPokemon([...addedPokemon, pokemon]);
    }
  };



// change
  return (
    
    <div className={`${darkMode ? "dark" : ""} bg-normal dark:bg-neutral-900`}>
    <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
    <div className="flex justify-center items-center">
      {pokemon ? (
        <Card className="slide-in" pokemon={pokemon} />
        
      ) : (
        <EmptyCard />
        
      )}

      {addedPokemon.length > 0 && (
        <Window className="slide-in" addedPokemon={addedPokemon} />
      )}

  </div>
  <Button 
      onClick={handleFetchPokemon} 
      showAddButton={showAddButton} 
      onAddClick={handleAddPokemon}
    />
  </div>
  
);
}

export default App;
