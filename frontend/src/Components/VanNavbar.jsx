import React, {useState} from 'react'
import { useSearchParams,NavLink } from 'react-router-dom';

const VanNavbar = () => {
  const [categorySelected, setCategorySelected] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = (searchParams.get("type"));
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

  return (
    <div className = "flex flex-col gap-3">
        <div className = "text-3xl font-inter font-bold">
            Explore our van options
        </div>
        <div className = "flex flex-row  gap-10 mb-10" >
          <button onClick = {() => handleCategorySelected("type","simple")} className = {typeFilter === "simple" ? "text-[#FFEAD0] bg-[#E17654] font-semibold text-lg font-inter px-6 py-2 rounded-xl hover:underline-offset-4" : "bg-[#FFEAD0] text-[#4D4D4D] font-semibold text-lg font-inter px-6 py-2 rounded-xl hover:text-[#FFEAD0] hover:bg-[#E17654] hover:transition-colors hover:duration-700 hover:ease-in-out" }>Simple</button>
          <button onClick = {() => handleCategorySelected("type","luxury")} className = {typeFilter === "luxury" ? "text-[#FFEAD0] bg-[#161616]  font-semibold text-lg font-inter px-6 py-2 rounded-xl hover:underline-offset-4" : "bg-[#FFEAD0] text-[#4D4D4D] font-semibold text-lg font-inter px-6 py-2 rounded-xl hover:text-[#FFEAD0] hover:bg-[#161616] hover:transition-colors hover:duration-700 hover:ease-in-out" }>Luxury</button>
          <button onClick = {() => handleCategorySelected("type","rugged")} className = {typeFilter === "rugged" ? "text-[#FFEAD0] bg-[#115E59]  font-semibold text-lg font-inter px-6 py-2 rounded-xl hover:underline-offset-4" : "bg-[#FFEAD0] text-[#4D4D4D] font-semibold text-lg font-inter px-6 py-2 rounded-xl hover:text-[#FFEAD0] hover:bg-[#115E59] hover:transition-colors hover:duration-700 hover:ease-in-out" }>Rugged</button>
          {typeFilter ? <button onClick = {() => handleCategorySelected("type", null)}  className = "font-semibold text-lg align-center font-inter text-[#4D4D4D] px-6 py-2 rounded-xl hover:underline hover:underline-offset-4 ">Clear Filter</button> : null}
          
        </div>
    </div>
  )
}

export default VanNavbar