import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className = "w-screen bg-[#FFF7ED]">
        <img src = "/aboutPic.jpg" className = "w-full h-[400px] object-cover object-middle"/>

        <div className = "flex flex-col gap-14 p-14">
            <div className = "text-4xl font-bold font-inter">
            Don’t squeeze in a sedan when you could relax in a van.
            </div>

            <div className = "text-2xl font-semibold font-inter">
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
             (Hitch costs extra😉)
            </div>

            <div className='text-2xl font-semibold font-inter'>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </div>

            <div className = "flex p-10 rounded-xl flex-col bg-[#FFCC8D]">
                <div  className = "text-2xl font-semibold font-inter">Your destination is waiting.</div>
                <div className = "text-2xl font-semibold font-inter mb-6">Your van is ready.</div>

                <Link to = "/vans">
                <button className = "bg-black text-white text-3xl rounded-xl font-semibold font-inter py-5 w-1/4">
                    Explore our vans
                </button>
                </Link>
             

            </div>
            </div>
    </div>
  )
}

export default About