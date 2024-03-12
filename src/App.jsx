import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Social from "./components/Social"
import About from "./components/About"
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Quote from './components/Quote'

function App() {
  return (
   <div>
    <NavBar/>
    <Home/>
    <Social/>
    <About/>
    <Quote/>
    <Portfolio/>
    <Experience/>
    <Contact/>
   </div>
  )
}

export default App
