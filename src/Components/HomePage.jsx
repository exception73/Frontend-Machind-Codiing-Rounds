import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

 
  return (
    <div className="centered-container">
      <Link to="emi">EMI Calculator</Link>
      <Link to="fileExplorer">File Explorer</Link>
      <Link to="password">Password Generator</Link>
      <Link to="stopwatch">Stop Watch</Link>
      <Link to="tictactoe">tictactoe</Link>
      <Link to="gridlight">GridLight</Link>
      <Link to="usememo">Custom UseMemo</Link>
      <Link to="useEffect">Custom useEffect</Link>
      <Link to="multitheme">MultiTheme</Link>
      <Link to="throttle">Throtle</Link>
      <Link to="jobs">Job Board/Pagination</Link>
      <Link to="cache">LRU Cache</Link>
      <Link to='searchUser'>MultiSearch Users with Debouncing</Link>
      <Link to='progressBar'> Progress Bar</Link>
      <Link to='dragdrop'> Drag and Drop Notes</Link>
      <Link to='quiz'> Quiz App </Link>
      <Link to='calculator'>Calculator</Link>
      <Link to='accordion'>Accordian</Link>
      <Link to='infinitescroll'>Infinite Scroll</Link>
    </div>
  );
};

export default HomePage;
