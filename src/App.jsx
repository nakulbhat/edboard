import { useState } from 'react'
import './App.css'
import edboardlogo from "../static/Editorial Board Logo.png"
import TopBar from "./components/TopBar"
import ActionGallery from './components/ActionGallery'
import Bottom from "./components/Bottom"
import GallerySubtitle from './components/GallerySubtitle'

function App() {


  return (
    <div className=''>
      <img src={edboardlogo} alt='logo' className='h-[160px] w-[150px] lg:w-80 lg:h-80 mx-auto mt-7 invert' />
      <TopBar className="z-30" />
      <ActionGallery /> 
      <GallerySubtitle />
      <GallerySubtitle />
      <Bottom />
      </div>
    
  )
}

export default App
