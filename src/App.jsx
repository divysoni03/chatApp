import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup'
import Signin from './Signin'
import { Routes,Route } from 'react-router-dom'
import Chatlist from './Chatlist'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/chatlist' element={<Chatlist />} />
     </Routes>
    </>
  )
}



export default App
