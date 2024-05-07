import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {

    const handleClick = () => {

    }
  return (
    <div className = "h-screen flex justify-center flex-col gap-10 bg-[#FFF7ED]">
        <div className = "text-4xl font-bold font-inter text-center">
            Sorry, the page you were looking for was not found.
        </div>
        
        <div className = "flex items-center justify-center">
        <Link to = "..">
        <button className = "text-white font-semibold text-3xl bg-black py-5 px-20 rounded-xl font-inter ">
            Return to Home
        </button>
        </Link>
        
        </div>
       
    </div>
  )
}

export default PageNotFound