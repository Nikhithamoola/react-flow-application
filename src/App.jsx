import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Increament from './Increament'
import IncreAndDecre from './IncreAndDecre'
import Cricket from './Cricket'
import Apple from './Apple'
import Discount from './Discount'

function App() {
  

  return (
    <>
      <h1>This is App.jsx page</h1>
     <AboutUs />
     <ContactUs />
     <Increament /> 
     <IncreAndDecre />
     <Cricket />
     <Apple />
     <Discount />
    </>
  )
}
export default App;