import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
   <div className = "p-20 bg-[url('/homeBackground.png')] bg-no-repeat bg-cover">
    <div className = "flex flex-col justify-center items-center gap-32 p-10 h-screen ">
        <div className = "font-extrabold text-white text-7xl font-inter items-center justify-center">
        You got the travel plans, we got the travel vans.
        </div>

        <div className = "text-4xl text-white font-semibold font-inter">
        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.  
        </div>

        <Link to = "/vans">
        <button className = " px-20 bg-[#FF8C38] text-white text-3xl font-semibold font-inter py-5 rounded-xl">
        Find Your Van
        </button>
        </Link>
       

    </div>
    </div>
  )
}

export default Home