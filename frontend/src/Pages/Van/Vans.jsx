import React, {useState , useEffect, Suspense} from 'react'
import VanNavbar from '../../Components/VanNavbar';
import {Link, useSearchParams, useLoaderData, defer, Await} from 'react-router-dom'
import { getVans } from '../../Utils/Api';

export function loader (){
    return defer({vans : getVans()});
}

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    const handleCategorySelected = (key,value) => {
      
      setSearchParams(prevParam => {
        if(value === null){
          console.log(value);
          prevParam.delete(key)
        }
        else {
          prevParam.set(key,value);
        }
        return prevParam;
        })}

    const vansPromise = useLoaderData();
    
  return (
    <div className = "flex flex-col p-10 bg-[#FFF7ED]">
        <div className = "text-3xl font-inter font-bold mb-10">
            Explore our van options
        </div>
        <Suspense fallback = {<h2>Loading ....</h2>}>
        <Await resolve = {vansPromise.vans}>
        {(vans) => {
        const displayedVans = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans;
        return(
            <div className = "">
            <div className = "flex flex-row  gap-10 mb-10" >
          <button onClick = {() => handleCategorySelected("type","simple")} className = {typeFilter === "simple" ? "text-[#FFEAD0] bg-[#E17654] font-semibold text-lg font-inter px-6 py-2 rounded-xl hover:underline-offset-4" : "bg-[#FFEAD0] text-[#4D4D4D] font-semibold text-lg font-inter px-6 py-2 rounded-xl hover:text-[#FFEAD0] hover:bg-[#E17654] hover:transition-colors hover:duration-700 hover:ease-in-out" }>Simple</button>
          <button onClick = {() => handleCategorySelected("type","luxury")} className = {typeFilter === "luxury" ? "text-[#FFEAD0] bg-[#161616]  font-semibold text-lg font-inter px-6 py-2 rounded-xl hover:underline-offset-4" : "bg-[#FFEAD0] text-[#4D4D4D] font-semibold text-lg font-inter px-6 py-2 rounded-xl hover:text-[#FFEAD0] hover:bg-[#161616] hover:transition-colors hover:duration-700 hover:ease-in-out" }>Luxury</button>
          <button onClick = {() => handleCategorySelected("type","rugged")} className = {typeFilter === "rugged" ? "text-[#FFEAD0] bg-[#115E59]  font-semibold text-lg font-inter px-6 py-2 rounded-xl hover:underline-offset-4" : "bg-[#FFEAD0] text-[#4D4D4D] font-semibold text-lg font-inter px-6 py-2 rounded-xl hover:text-[#FFEAD0] hover:bg-[#115E59] hover:transition-colors hover:duration-700 hover:ease-in-out" }>Rugged</button>
          {typeFilter ? <button onClick = {() => handleCategorySelected("type", null)}  className = "font-semibold text-lg align-center font-inter text-[#4D4D4D] px-6 py-2 rounded-xl hover:underline hover:underline-offset-4 ">Clear Filter</button> : null}
          
        </div>
                    <div className = "flex flex-col gap-10 py-10">
                {displayedVans.map((van) => {
                return(
                
                <div className = "flex flex-row bg-[#FFF7ED] p-5 gap-5 rounded-xl" key = {van.id}>
                    <Link to = {van.id} state = {{search : `?${searchParams.toString()}`, type : typeFilter}}> 
                    <div> 
                        <img src = {van.imageUrl} className = "w-[230px] h-[230px] rounded-xl"/>
                    </div>
                    </Link>
                <div className = "flex flex-col gap-3 justify-center">
                    <div className = "text-2xl font-inter font-semibold">
                        {van.name}
                    </div>
                    <div className = "text-xl font-inter font-semibold">
                    ${van.price} / day
                    </div>
                    
                    <div className="flex">
                        {van.type === "simple" ? (
                            <div className="text-[#FFEAD0] bg-[#E17654] text-lg font-semibold font-inter px-6 py-2 rounded-xl">
                            Simple
                            </div>
                        ) : van.type === "luxury" ? (
                            <div className="text-[#FFEAD0] bg-[#161616] text-lg font-semibold font-inter px-6 py-2 rounded-xl">
                            Luxury
                            </div>
                        ) : (
                            <div className="text-[#FFEAD0] bg-[#115E59] text-lg font-semibold font-inter px-6 py-2 rounded-xl">
                            Rugged
                            </div>
                        )}
                    </div>
                    </div>
                </div>
            )
           })}
        </div>
             </div>
        )

        }}
        </Await> 

        </Suspense>
    
      
    </div>
  )

}
export default Vans