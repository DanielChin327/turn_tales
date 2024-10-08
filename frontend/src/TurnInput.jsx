import React, { useState } from 'react';
import { submitLine } from './api';

function TurnInput({ currentTurn, onNewLine }) {
  const [input, setInput] = useState('');

  const handleSubmit = async () => {
    const newLine = await submitLine(input);
    onNewLine(newLine);
    setInput('');
  };

  return (
    <div className="turn-input">
      <h3>Player {currentTurn}'s Turn</h3>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={currentTurn !== 1} // For example, only allow Player 1 for now
      />
      <button onClick={handleSubmit} disabled={input === '' || currentTurn !== 1}>
        Submit
      </button>
    </div>
  );
}

export default TurnInput;
