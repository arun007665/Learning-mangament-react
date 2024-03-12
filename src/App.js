import React from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CourseView from './pages/CourseView'


function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<SignUp/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/courses/:id' element = {<CourseView/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
