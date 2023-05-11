import React from 'react'
import './assets/Style.css'     
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Register'
import Dashboard from './admin/Dashboard'
import 'primeicons/primeicons.css';
import Master from './admin/layout/Master'
import Product from './admin/Product'
import Users from './admin/Users'
import Post from './admin/Post'

function Admin() {
  return (
    <>
    <BrowserRouter >
        {/* <ul>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/admin'>Dashboard</Link></li>
        </ul> */}
        <Routes >
            <Route path='/' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/admin/' element={<Master />}>
              <Route index element={<Dashboard />} />
              <Route path='product' element={<Product />} />
              <Route path='user' element={<Users />} />
              <Route path='post' element={<Post />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Admin