import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/General/Home'
import About from './Pages/General/About'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Footer from './Components/Footer'
import Vans, {loader as VansLoader} from './Pages/Van/Vans'
import "./Server/Server"
import VanDetail from './Pages/Van/VanDetail'
import Layout from './Components/Layout'
import HostPage from './Pages/Host/HostMain'
import HostNavbar from './Components/HostNavbar'
import HostLayout from './Components/HostLayout'
import HostMain from './Pages/Host/HostMain'
import HostIncome from './Pages/Host/HostIncome'
import HostReviews from './Pages/Host/HostReviews'
import HostVans, {Loader as HostVansLoader} from './Pages/Host/HostVans'
import HostSingleVan , {Loader as HostSingleVanLoader} from './Pages/Host/HostSingleVan'
import HostSingleVanPhotos from './Pages/Host/HostSingleVanPhotos'
import HostSingleVanPricing from './Pages/Host/HostSingleVanPricing'
import HostSingleVanDetail from './Pages/Host/HostSingleVanDetail'
import PageNotFound from './Pages/General/PageNotFound'
import ErrorPage from './Pages/General/ErrorPage'
import { createBrowserRouter,RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Login, {loader as LoginLoader, action as LoginAction} from './Pages/General/Login'
import { requireAuth } from './Utils/RequireAuth'
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = "/" element = {<Layout />}  errorElement = {<ErrorPage />}>
            
    <Route index element = {<Home />} />
    <Route path = "login" element = {<Login />} loader = {LoginLoader} action = {LoginAction} />
    <Route path = "about" element = {<About />} />
    <Route path = "vans" element = {<Vans />} loader = {VansLoader} />
    <Route path = "vans/:id" element = {<VanDetail />} />

    <Route path = "host" element = {<HostLayout />}  >
      <Route index element = {<HostMain />} loader = {async () => 
        await requireAuth()}/>
      <Route path = "income" element = {<HostIncome />} loader = {async () => 
        await requireAuth()}  />
      <Route path = "reviews" element = {<HostReviews />} loader = {async () => 
        await requireAuth()}/>
      <Route path = "vans" element = {<HostVans />} loader = {HostVansLoader} /> 
      <Route path = "vans/:id" element = {<HostSingleVan/>} loader = {HostSingleVanLoader}>
        <Route index element = {<HostSingleVanDetail />} loader = {async () => 
        await requireAuth()}/>
        <Route path = "pricing" element = {<HostSingleVanPricing  />} loader = {async () => 
        await requireAuth()}/>
        <Route path = "photos" element = {<HostSingleVanPhotos />} loader = {async () => 
        await requireAuth()} /> 
      </Route>
    

    </Route>

    <Route path = "*" element = {<PageNotFound />} />
    </Route>

  ))
  return(
    <RouterProvider router = {router} />

 
  )
}
export default App
