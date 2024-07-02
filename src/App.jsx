import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import EmiCalculator from './Components/EmiCalculator/EmiCalculator.jsx';
import FileExplorer from './Components/FileExplorer/FileExplorer.jsx';
import HomePage from './Components/HomePage';
import PasswordGenerator from './Components/PasswordGenerator/PasswordGenerator.jsx';
import Timer from './Components/Timer/Timer.jsx';
import TicTaeToe from './Components/TicTacToe/TicTaeToe.jsx';
import GridLight from './Components/GridLight/GridLight.jsx';
import CustomMemoHook from './Components/UseMemo/CustomMemoHook.jsx';
import CustomUseEffect from './Components/UseEffect/useEffect.jsx';
import MultiTheme from './Components/MultiTheme/MultiTheme.jsx';
import Throttle from './Components/Throttle/Throttle.jsx';
import JobBoard from './Components/JobBoard/JobBoard.jsx';

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
  },{
    path : "gridLight",
    element : <GridLight />
  },{
    path : "usememo",
    element : <CustomMemoHook />
  }, {
    path : "useEffect", 
    element : <CustomUseEffect />
  }, {
    path : "multitheme", 
    element : <MultiTheme />
  }  , {
    path : "throttle", 
    element : <Throttle />
  }, {
    path : "jobs", 
    element : <JobBoard />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
