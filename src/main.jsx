import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContext from './Contexts/ThemeContext.jsx'
import { Link } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContext>
     <App />
  </ThemeContext>
   
  
)
