import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="centered-container">
      <Link to="emi">EMI Calculator</Link>
      <Link to="fileExplorer">File Explorer</Link>
      <Link to="password">Password Generator</Link>
      <Link to="stopwatch">Stop Watch</Link>
      <Link to="tictactoe">tictactoe</Link>
    </div>
  );
};

export default HomePage;
