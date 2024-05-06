import React from 'react'
import {useOutletContext} from 'react-router-dom'

const HostSingleVanPricing = () => {
    const {singleVan} = useOutletContext();
    //Accepting an anonymous object from useOutletContext, then extract the singleVan value of the key singleVan from the object, then initialising it locally
  return (
    <div className = "font-inter font-semibold text-4xl">${singleVan.price} / day</div>
  )
}

export default HostSingleVanPricing