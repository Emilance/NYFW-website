import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import MissionSection from './components/MissionSection'
import SlidingText from './components/SlidingText'
import AboutSection from './components/AboutSection'
import CultureComponent from './components/CultureSection'
import SpeakerSection from './components/SpeakerSection'
import GallerySection from './components/GallerySection'

function App() {

  return (
    <div  className='app'>
      <Header/>
     <HeroSection/>
     <SlidingText/>
     <MissionSection/>
     <AboutSection/>
     <CultureComponent/>
     <SpeakerSection/>
     <GallerySection/>
    </div>
  )
}

export default App
