import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import Header from '../components/template/Header'
import React from 'react'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'
import Home from '../components/home/home'

export default props =>
    <div className='app'>
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>