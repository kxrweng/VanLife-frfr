import React, {useEffect, useState} from 'react'
import { useParams,NavLink, useLocation, useSearchParams, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../Utils/Api';

export function Loader ({params}) {
    const {id} = params;
    return getHostVans(id);
}

const VanDetail = () => {
    const location = useLocation(); //To get information from Link State
    
    const searchQuery = location.state?.search || "";
    const vanType = location.state?.type || "all";

    const vans = useLoaderData();


 /* Conditional rendering, if van == null, then render loading, else render everything, still haven't been achieved*/
  return (
    
    <div className = "flex flex-col p-5 gap-5 bg-[#FFF7ED] bg-cover w-screen">
             <NavLink 
            to= {`..${searchQuery}`} 
            end 
            relative = "path"
            className={({ isActive }) => isActive ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : " hover:underline hover:text-black font-semibold text-lg text-[#4D4D4D] font-inter"}>
            &larr; Back to {vanType} vans
        </NavLink>
        <div className = "rounded-xl w-1/3">
        <img src = {van.imageUrl} className = "w-full rounded-2xl"/>    
        </div>

        <div className = "flex flex-col gap-5">
        <div className = "flex">
        {van.type === "simple" ? (
        <div className="text-[#FFEAD0] bg-[#E17654] text-lg font-semibold font-inter px-6 py-2 rounded-xl">
            Simple
        </div>) 
        : van.type === "luxury" ? 
        ( 
            <div className="text-[#FFEAD0] bg-[#161616] text-lg font-semibold font-inter px-6 py-2 rounded-xl">
                Luxury
            </div>)
        :
        (
            <div className="text-[#FFEAD0] bg-[#115E59] text-lg font-semibold font-inter px-6 py-2 rounded-xl">
                Rugged
            </div>
        )}
        </div>
        <div className = "text-4xl font-inter font-semibold">
        {van.name}
        </div>

        <div className = "text-2xl font-inter font-semibold">
        ${van.price} / day
        </div>

        <div className = "text-xl font-inter font-semibold">
        {van.description}
        </div>

        <div>
        <button className = "bg-[#FF8C38] text-white w-full p-5 rounded-xl text-2xl font-inter font-semibold">
            Rent This Van
        </button>
    </div>

    </div>    

    </div>
  )
}

export default VanDetail