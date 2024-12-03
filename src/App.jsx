import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Analyser from './components/Analyser'


const App = () => {
 
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/analyser' element={<Analyser/>} />
    </Routes>
    </>
  )
}

export default App
