import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import EmiCalculator from './Components/EmiCalculator/EmiCalculator.jsx';
import FileExplorer from './Components/FileExplorer/FileExplorer.jsx';
import HomePage from './Components/HomePage';
import PasswordGenerator from './Components/PasswordGenerator/PasswordGenerator.jsx';
import Timer from './Components/Timer/Timer.jsx';
import TicTaeToe from './Components/TicTacToe/TicTaeToe.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element : <HomePage />
  },
  {
    path: "/emi",
    element: <EmiCalculator />,
  },{
    path : '/FileExplorer',
    element : <FileExplorer />
  },{
    path : 'password',
    element : <PasswordGenerator />
  },{
    path : 'stopwatch', 
    element : <Timer />
  },{
    path : "tictactoe", 
    element : <TicTaeToe />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
