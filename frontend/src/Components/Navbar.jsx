import React, {useState} from 'react'
import {Link,Outlet, NavLink} from 'react-router-dom'
import Home from '../Pages/General/Home'
import About from '../Pages/General/About'
const Navbar = () => {
  const [selectedSection, setSelectedSection] = useState('home');

  const handleSelectedSection = (section) => {
    setSelectedSection(section);
  }
  return (
        <div className = "flex flex-row justify-between bg-[#FFF7ED] py-8 px-5">
        {/* <Link to = "/" onClick = {() => handleSelectedSection("home")}className = "font-extrabold font-Inter text-4xl">#VanLife</Link>
        <div className = "flex flex-row items-center justify-evenly w-1/3">
        <Link to = "/host" onClick = {() => handleSelectedSection("host")} className = {`hover:text-black font-semibold font-inter text-lg text-[#4D4D4D] ${selectedSection === "host" ? 'underline underline-offset-4 text-black' : ""} `}>Host</Link>
        <Link to = "/" onClick = {() => handleSelectedSection("home")} className = {`hover:text-black font-semibold font-inter text-lg text-[#4D4D4D] ${selectedSection === "home" ? 'underline underline-offset-4 text-black' : ""}`} >Home</Link>
         <Link to = "/about" onClick = {() => handleSelectedSection("about") } className = {`hover:text-black font-inter font-semibold text-lg text-[#4D4D4D] ${selectedSection === "about" ? 'underline underline-offset-4 text-black' : ""} ` }>About</Link>
         <Link to = "/vans" onClick = {() => handleSelectedSection("vans")} className = {`hover:text-black font-inter font-semibold text-lg text-[#4D4D4D] ${selectedSection === "vans" ? 'underline underline-offset-4 text-black' : ""} `}>Vans</Link>

         </div> */}
         <NavLink to ="/" className = "font-extrabold font-inter text-4xl" >#VanLife</NavLink>
         <div className = "flex flex-row items-center justify-evenly w-1/3">
         <NavLink to = "/host" className = {({isActive}) => isActive ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : "text-[#4D4D4D] hover:text-black font-semibold font-inter text-lg "}>Host</NavLink>
         <NavLink to = "/" className = {({isActive}) => isActive ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : "text-[#4D4D4D] hover:text-black font-semibold font-inter text-lg "}>Home</NavLink>
         <NavLink to = "/about" className = {({isActive}) => isActive ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : "text-[#4D4D4D] hover:text-black font-semibold font-inter text-lg "}>About</NavLink>
         <NavLink to = "/vans" className = {({isActive}) => isActive ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : "text-[#4D4D4D] hover:text-black font-semibold font-inter text-lg "}>Vans</NavLink>

         </div>
         

         </div>

  )
}

export default Navbar