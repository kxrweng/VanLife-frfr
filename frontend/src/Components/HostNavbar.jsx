import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
const HostNavbar = () => {

const [selectedSection, setSelectedSection] = useState("dashboard");

const handleSelectedSection = (section) => {
    setSelectedSection(section);
}
    return (
        // <div className = "flex flex-row justify-between bg-[#FFF7ED] py-8 px-5">
        // <div className = "flex flex-row items-center justify-evenly w-1/3">
        // <Link to = "/host" onClick = {() => handleSelectedSection("host")} className = {`font-semibold text-lg text-[#4D4D4D] ${selectedSection === "host" ? 'underline' : ""} `}>Host</Link>
        // <Link to = "/" onClick = {() => handleSelectedSection("home")} className = {`font-semibold text-lg text-[#4D4D4D] ${selectedSection === "home" ? 'underline' : ""}`} >Home</Link>
        //  <Link to = "/about" onClick = {() => handleSelectedSection("about") } className = {`font-semibold text-lg text-[#4D4D4D] ${selectedSection === "about" ? 'underline' : ""} ` }>About</Link>
        //  <Link to = "/vans" onClick = {() => handleSelectedSection("vans")} className = {`font-semibold text-lg text-[#4D4D4D] ${selectedSection === "vans" ? 'underline' : ""} `}>Vans</Link>
        //  </div>
         
        // </div>
        <div className = "flex p-10 bg-[#FFF7ED]">
        <div className = "flex flex-row justify-between gap-6">
            
            <NavLink to = "." end className = {({isActive}) => isActive ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : "hover:text-black font-semibold text-lg text-[#4D4D4D] font-inter"}>Dashboard</NavLink>
            <NavLink to = "income" className = {({isActive}) => isActive ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : "hover:text-black font-semibold text-lg text-[#4D4D4D] font-inter"}>Income</NavLink>
            <NavLink to = "vans" className = {({isActive}) => isActive ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : "hover:text-black font-semibold text-lg text-[#4D4D4D] font-inter"}>Vans</NavLink>
            <NavLink to = "reviews" className = {({isActive}) => isActive ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : "hover:text-black font-semibold text-lg text-[#4D4D4D] font-inter"}>Reviews</NavLink>

            

        </div>
        </div>
       
  )
}

export default HostNavbar