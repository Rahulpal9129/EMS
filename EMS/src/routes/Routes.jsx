import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../components/hero/Home'
import AddEmp from '../components/addEmp/AddEmp'
import UpdateEmp from '../components/updateEmp/UpdateEmp'
import AboutUs from '../components/aboutUs/AboutUs'
import Login from '../components/login/Login'
import Register from '../components/register/Register'

export default function  RoutePath() {
    return(
        <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/addEmp'  element={<AddEmp/>}/>
            <Route path='/updateEmp'  element={<UpdateEmp/>}/>
            <Route path='/about-Us'  element={<AboutUs/>}/>
            <Route path='/login'  element={<Login/>}/>
            <Route path='/register'  element={<Register/>}/>
        </Routes>
    )
}