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
import LruCache from './Components/LRUCache/LruCache.jsx';
import MultiSearchUsers from './Components/MultiSearch Users/MultiSearchUsers.jsx';
import ProgressBar from './Components/ProgressBar/ProgressBar.jsx';
import DragDropNotes from './Components/DragDropNotes/DragDropNotes.jsx';
import QuizApp from './Components/QuizApplication/QuizApp.jsx';
import Calculator from './Components/Calculator/Calculator.jsx';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/emi', element: <EmiCalculator /> },
  { path: '/FileExplorer', element: <FileExplorer /> },
  { path: '/password', element: <PasswordGenerator /> },
  { path: '/stopwatch', element: <Timer /> },
  { path: '/tictactoe', element: <TicTaeToe /> },
  { path: '/gridLight', element: <GridLight /> },
  { path: '/usememo', element: <CustomMemoHook /> },
  { path: '/useEffect', element: <CustomUseEffect /> },
  { path: '/multitheme', element: <MultiTheme /> },
  { path: '/throttle', element: <Throttle /> },
  { path: '/jobs', element: <JobBoard /> },
  { path: '/cache', element: <LruCache /> },
  { path: '/searchUser', element: <MultiSearchUsers /> },
  { path: '/progressbar', element: <ProgressBar /> },
  { path: '/dragdrop', element: <DragDropNotes /> },
  { path: '/quiz', element: <QuizApp /> },
  { path: '/calculator', element: <Calculator /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
