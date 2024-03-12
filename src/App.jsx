import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Social from "./components/Social"
import About from "./components/About"
import Portfolio from './components/Portfolio'

function App() {
  return (
   <div>
    <NavBar/>
    <Home/>
    <Social/>
    <About/>
    <Portfolio/>
   </div>
  )
}

export default App
