import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import HostNavbar from './HostNavbar'

const HostLayout = () => {
  return (
    <div>
        <HostNavbar />
        <Outlet />
                
    </div>
  )
}

export default HostLayout