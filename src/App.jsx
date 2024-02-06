import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import edboardlogo from "../static/Editorial Board Logo.png"
import TopBar from "./components/TopBar"
import ActionGallery from './components/ActionGallery'
function App() {


  return (
    <div className='h-[1400px]'>
      <img src={edboardlogo} alt='logo' className='h-28 w-28 mx-auto mt-7 invert' />
      <TopBar />
      <ActionGallery />

      </div>
    
  )
}

export default App
