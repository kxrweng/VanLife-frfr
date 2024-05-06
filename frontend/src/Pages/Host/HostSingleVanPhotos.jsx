import React from 'react'
import {useOutletContext} from 'react-router-dom'

const HostSingleVanPhotos = () => {
    const {singleVan} = useOutletContext();
  return (
    <div>
        <img src = {singleVan.imageUrl} className = "w-[200px] h-[200px] rounded-xl" />
    </div>
  )
}

export default HostSingleVanPhotos