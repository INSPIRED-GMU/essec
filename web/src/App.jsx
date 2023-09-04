import { useState } from 'react'
import './App.css'
import Welcome from './components/welcome'
import NavBar from './components/navbar'
import PaperCalls from './components/paperCall'
import Committee from './components/commitee'
import Travel from './components/travel'

function App() {

  return (
    <>
      <NavBar/>
      <Welcome/>
      <PaperCalls/>
      <Committee/>
      <Travel/>
    </>
  )
}

export default App
