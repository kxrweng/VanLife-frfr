import React, {useState, useEffect} from 'react'
import {useParams, NavLink, Outlet, useOutletContext, useLoaderData} from 'react-router-dom'
import { getHostVans } from '../../Utils/Api'
import { requireAuth } from '../../Utils/RequireAuth'

export async function Loader ({params , request}) {
    console.log(request);
    await requireAuth(request);
    return getHostVans(params.id)
}
const HostSingleVan = () => {
    //         <Outlet context = {{singleVan}}/> 
//Passing an anonymous object with singleVan as a key, with singleVan from the state as the value
    const singleVan = useLoaderData();
    return (
        <div className="flex flex-col gap-5 p-5  bg-[#FFF7ED] ">
       
       <div className = "flex ml-20">
       <NavLink 
            to=".." 
            end 
            relative = "path"
            className={({ match }) => match ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : " hover:underline hover:text-black font-semibold text-lg text-[#4D4D4D] font-inter"}>
            &larr; Back to Vans
        </NavLink>
       </div>
       
       <div className = "flex justify-center p-10 ">
       <div className = "flex flex-row  gap-40 w-10/12  bg-white p-10 rounded-xl">
        <div className = "flex flex-col gap-5">
            <div className = "flex w-[600px] ">
                <img src = {`${singleVan.imageUrl}`} className = "rounded-xl w-full object-cover" />
            </div>

            <div className = "flex justify-center gap-5 flex-col">
            <div className = "flex  ">
            {singleVan.type === "simple" ? (
                            <div className="text-[#FFEAD0] bg-[#E17654] text-lg font-semibold font-inter px-6 py-2 rounded-xl">
                            Simple
                            </div>
                        ) : singleVan.type === "luxury" ? (
                            <div className="text-[#FFEAD0] bg-[#161616] text-lg font-semibold font-inter px-6 py-2 rounded-xl">
                            Luxury
                            </div>
                        ) : (
                            <div className="text-[#FFEAD0] bg-[#115E59] text-lg font-semibold font-inter px-6 py-2 rounded-xl">
                            Rugged
                            </div>
                        )}
            </div>

            <div className = "text-2xl font-inter font-bold">
                {singleVan.name}
            </div>

            <div className = "text-xl font-inter font-semibold">
                ${singleVan.price} <span className = "font-normal font-inter">/ day</span>
            </div>
            </div>
            
        </div>

        <div className = "flex flex-col gap-20">
        <div className = "flex flex-row gap-5">
        <NavLink to = "." end className = {({isActive}) => isActive ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : "hover:text-black hover:underline font-semibold text-lg text-[#4D4D4D] font-inter"}>Details</NavLink>
        <NavLink to = "pricing" end className = {({isActive}) => isActive ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : "hover:text-black hover:underline font-semibold text-lg text-[#4D4D4D] font-inter"}>Pricing</NavLink>
        <NavLink to = "photos" end className = {({isActive}) => isActive ? "underline underline-offset-4 text-black font-inter font-semibold text-lg" : "hover:text-black hover:underline font-semibold text-lg text-[#4D4D4D] font-inter"}>Photos</NavLink>
        </div> 
        <Outlet context = {{singleVan}}/> 
          
        {/* <div className = "flex flex-col gap-10">
            <div className = "font-inter font-bold">
                Name : <span className = "font-inter font-normal">{singleVan.name}</span>
            </div>

            <div className = "font-inter font-bold">
                Type : <span className = "font-inter font-normal">{singleVan.type === "simple" ? "Simple" : singleVan.type === "luxury" ? "Luxury" : "Rugged"}</span>
            </div>

            <div className = "font-inter font-bold w-1/2">
                Description : <span className = "font-inter text-wrap font-normal">{singleVan.description}</span>
            </div>

            <div className = "font-inter font-bold">
                Visibility : <span className = "font-inter font-normal">Public</span>
            </div>
        </div> */}
        </div>

        
       </div>

       </div>
       
         
        </div>
    );
    
}

export default HostSingleVan