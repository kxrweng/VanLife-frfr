import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/General/Home'
import About from './Pages/General/About'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Footer from './Components/Footer'
import Vans from './Pages/Van/Vans'
import "./Server/Server"
import VanDetail from './Pages/Van/VanDetail'
import Layout from './Components/Layout'
import HostPage from './Pages/Host/HostMain'
import HostNavbar from './Components/HostNavbar'
import HostLayout from './Components/HostLayout'
import HostMain from './Pages/Host/HostMain'
import HostIncome from './Pages/Host/HostIncome'
import HostReviews from './Pages/Host/HostReviews'
import HostVans from './Pages/Host/HostVans'
import HostSingleVan from './Pages/Host/HostSingleVan'
import HostSingleVanPhotos from './Pages/Host/HostSingleVanPhotos'
import HostSingleVanPricing from './Pages/Host/HostSingleVanPricing'
import HostSingleVanDetail from './Pages/Host/HostSingleVanDetail'

const App = () => {
  return(
    <BrowserRouter>

    <Routes>

      <Route path = "/" element = {<Layout />}>
        
      <Route index element = {<Home />} />
      <Route path = "about" element = {<About />} />
      <Route path = "vans" element = {<Vans />} />
      <Route path = "vans/:id" element = {<VanDetail />} />

      <Route path = "host" element = {<HostLayout />}>
        <Route index element = {<HostMain />} />
        <Route path = "income" element = {<HostIncome />} />
        <Route path = "reviews" element = {<HostReviews />} />
        <Route path = "vans" element = {<HostVans />} /> 
        <Route path = "vans/:id" element = {<HostSingleVan />} >
          <Route index element = {<HostSingleVanDetail />} />
          <Route path = "pricing" element = {<HostSingleVanPricing  />} />
          <Route path = "photos" element = {<HostSingleVanPhotos />} /> 
        </Route>
          

      </Route>
      </Route>

      
      
      
    </Routes>

    </BrowserRouter>
  )
}
export default App
