import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board'
function App() {
  return (
    <div className='App'>
      <h1 className='header'>cc's webtoon favorites</h1>
      <h3 className='headDesc'>here are a collection of my current favorite reads & where to find them!</h3>
      <Board />
    </div>
  )
}

export default App
