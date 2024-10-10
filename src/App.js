import React, { useState } from 'react';
import ScoreMeter from './ScoreMeter';
import './App.css'; // Add this CSS file for styling

const App = () => {
  const [score, setScore] = useState(75); // Default score

  const handleInputChange = (e) => {
    const value = Math.min(100, Math.max(0, e.target.value)); // Ensure score is between 0 and 100
    setScore(value);
  };

  return (
    <div className="app-container">
      <h1>Score Meter</h1>
      <div className="score-meter-container">
        <ScoreMeter score={score} />
      </div>
      <div className="input-container">
        <input 
          type="number" 
          value={score} 
          onChange={handleInputChange} 
          min="0" 
          max="100" 
          className="score-input"
        />
        <button onClick={() => setScore(score)} className="update-button">Update Score</button>
      </div>
    </div>
  );
};

export default App;
