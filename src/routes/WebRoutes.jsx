import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const WebRoutes = () => {
  return (
    <Router>
    <Routes>
         <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route  path="/login" element={<Login/>}/>
    </Routes>
</Router>
  )
}

export default WebRoutes