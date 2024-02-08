import { useState } from 'react'
import './App.css'
import edboardlogo from "../static/Editorial Board Logo.png"
import TopBar from "./components/TopBar"
import ActionGallery from './components/ActionGallery'
import Bottom from "./components/Bottom"

function App() {


  return (
    <div className=''>
      <img src={edboardlogo} alt='logo' className='h-80 w-80 mx-auto mt-7 invert' />
      <TopBar />
      <ActionGallery />
      <Bottom />
      </div>
    
  )
}

export default App
