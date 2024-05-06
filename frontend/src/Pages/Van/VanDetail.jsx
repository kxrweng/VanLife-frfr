import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const VanDetail = () => {
    const {id} = useParams();

    const [van, setVan] = useState({});
    
    useEffect(() => {
        fetch(`/api/vans/${id}`).then((res) => res.json()).then((data) => setVan(data.vans))
    },[])

 /* Conditional rendering, if van == null, then render loading, else render everything, still haven't been achieved*/
  return (
    
    <div className = "flex flex-col p-5 gap-5 bg-[#FFF7ED] bg-cover w-screen">

        <div className = "rounded-xl">
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