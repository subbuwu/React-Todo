import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
    <React.Fragment>
      <Navbar/>
      <Main/>
      <Footer/>
    </React.Fragment>
  )
}

export default App
