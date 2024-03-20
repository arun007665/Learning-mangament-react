import React from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CourseView from './pages/CourseView'
import Login from './components/login'
import ViewDocumets from './components/ViewDocumets'
import Tawk from './components/chat/Tawk'


function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Tawk/>
      <Routes>
        <Route path='/' element = {<SignUp/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/courses/:id' element = {<CourseView/>}/>
        <Route path='/viewdocumet' element = {<ViewDocumets/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
