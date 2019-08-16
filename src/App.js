import React, {useState} from 'react';
import './App.css';

import Form from './components/Form';
import TeamCard from './components/TeamCard';


import TeamData from './components/TeamData';

const App = () => {

  const [character, setCharacter] = useState(TeamData);

  const addCharacter = char => { setCharacter([... character, char])};

  return (
    <div className="App">
    <h1> Rick and Morty Character </h1>
    <Form addCharacter={addCharacter} />
    <TeamCard character={character} />
    </div>
  );
};

export default App;
