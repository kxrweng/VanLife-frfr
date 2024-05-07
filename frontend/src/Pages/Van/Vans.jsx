import React, {useState , useEffect} from 'react'
import VanNavbar from '../../Components/VanNavbar';
import {Link, useSearchParams} from 'react-router-dom'
const Vans = () => {
    const [vans, setVans ] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    useEffect(() => {
    fetch("/api/vans").then((res) => res.json()).then((data) => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans;

  return (
    <div className = "flex flex-col p-10 bg-[#FFF7ED]">
        <VanNavbar/>

        <div className = "flex flex-col gap-10 ">
           {displayedVans.map((van) => {
            return(
                
                <div className = "flex flex-row bg-[#FFF7ED] p-5 gap-5 rounded-xl" key = {van.id}>
                    <Link to = {`${van.id}`}> 
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
}

export default Vans