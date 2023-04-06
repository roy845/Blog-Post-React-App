import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom';

function Layout() {
  return (
    <div className="App">
      <Header title = "React JS Blog"/>
      <Nav />
      <Outlet/>
      <Footer/>
      </div>
  )
}

export default Layout