import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import ContentHeader from './ContentHeader'

function Master() {
  return (
    <>
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <ContentHeader />
            <Outlet />
        </div>
        <Footer />
    </div>

    </>
  )
}

export default Master