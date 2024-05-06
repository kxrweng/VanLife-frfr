import React from 'react'
import {useOutletContext} from 'react-router-dom'

const HostSingleVanDetail = () => {
    const {singleVan} = useOutletContext()
 return (
    <div className = "flex flex-col gap-10">
            <div className = "font-inter font-semibold text-2xl">
                Name : <span className = "font-inter font-normal text-xl">{singleVan.name}</span>
            </div>

            <div className = "font-inter font-semibold text-2xl">
                Type : <span className = "font-inter font-normal text-xl">{singleVan.type === "simple" ? "Simple" : singleVan.type === "luxury" ? "Luxury" : "Rugged"}</span>
            </div>

            <div className = "font-inter font-semibold  text-2xl">
                Description : <span className = "font-inter text-xl text-wrap font-normal">{singleVan.description}</span>
            </div>

            <div className = "font-inter font-semibold text-2xl">
                Visibility : <span className = "font-inter text-xl font-normal">Public</span>
            </div>
        </div>
 )
}

export default HostSingleVanDetail