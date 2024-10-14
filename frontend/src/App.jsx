import React, { useState, useEffect } from 'react';
import Story from './Story';
import TurnInput from './TurnInput';
import { getCurrentStory, getPlayerTurn } from './api';

function App() {
  const [story, setStory] = useState([]);
  const [currentTurn, setCurrentTurn] = useState(1);

  useEffect(() => {
    const fetchStory = async () => {
      const currentStory = await getCurrentStory();
      setStory(currentStory);
    };
    fetchStory();

    const fetchTurn = async () => {
      const turn = await getPlayerTurn();
      setCurrentTurn(turn);
    };
    fetchTurn();
  }, []);

  const handleNewLine = (line) => {
    setStory((prevStory) => [...prevStory, line]);
  };

  return (
    <div className="App">
      <h1>TurnTales</h1>
      <Story story={story} />
      <TurnInput currentTurn={currentTurn} onNewLine={handleNewLine} />
    </div>>
  );
}

export default App;
