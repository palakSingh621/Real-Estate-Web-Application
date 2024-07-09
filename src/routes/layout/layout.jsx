import React from 'react'
import Navbar from '../../components/navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import './layout.scss'
function Layout() {
    return (
    <div className="layout">
        <div className="Navbar">
            <Navbar/>
        </div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
    )
}

export default Layout
