import React from 'react'
import {  NavLink } from 'react-router-dom'
// import MyAccount from './MyAccount'
import Logout from '../Logout'

function Header() {
  return (
    <>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
   {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to='/' data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></NavLink>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <NavLink to='/' className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <NavLink to='/' className="nav-link" >Contact</NavLink>
      </li>
    </ul>

   {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Logout />
      </li>
      
      {/* <!-- Language Dropdown Menu --> */}
      <li className="nav-item dropdown">
        {/* <MyAccount /> */}
        <NavLink to='/' className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" role="button">
          <i className="fas fa-th-large"></i>
        </NavLink>
      </li>
    </ul>
  </nav>
    </>
  )
}

export default Header