import React from 'react'
import ReactDOM from 'react-dom/client'

import { RetroGames } from './RetroGames.jsx'
import { BrowserRouter } from 'react-router-dom'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RetroGames />
    </BrowserRouter>
  </React.StrictMode>
)