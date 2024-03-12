import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Social from "./components/Social"
import About from "./components/About"

function App() {
  return (
   <div>
    <NavBar/>
    <Home/>
    <Social/>
    <About/>
   </div>
  )
}

export default App
