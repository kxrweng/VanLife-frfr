import React, { Suspense } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { requireAuth } from '../../Utils/RequireAuth';
import { getHostVans } from '../../Utils/Api';
import { Await,defer, useLoaderData,NavLink } from 'react-router-dom';

export async function Loader({request}) {
  await requireAuth(request)
  return defer({hostVans : getHostVans()});
}
const HostMain = () => {
  const hostVansPromise = useLoaderData();

  return (
    <div className = "flex flex-col bg-[#FFF7ED]">

      <div className = "flex flex-col bg-[#FFEAD0] p-10 gap-5" >
        <div>
          <div className = "text-5xl font-inter font-bold">Welcome!</div>
        </div>

        <div className = "flex flex-row font-inter text-lg text-[#4D4D4D] justify-between  ">
          <div>
            Income in the last 30 days
          </div>
          <div >
            Details
          </div>
        </div>

        <div className = "font-inter text-5xl font-bold">
          $2,260
        </div>


      </div>

      <div className = "flex flex-row bg-[#FFDDB2] items-center justify-between p-10 ">
        <div className = "flex flex-row gap-10">
        <div className = "font-inter text-black text-2xl font-semibold">
          Review score
        </div>
        <div className = "flex flex-row items-center gap-5">
          <div>
          <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
          </Stack>
          </div>
          <div className = "font-inter text-black text-2xl font-semibold">
            5.0/5
          </div>
       
        </div>
        </div>
        
        <div className = "font-inter text-lg text-[#4D4D4D]">
          Details
        </div>
      </div>

      <div className = "flex flex-col p-10 gap-5">
        <div className = "flex flex-row justify-between">
        <div className = "font-inter text-3xl font-semibold">
          Your listed vans
        </div>
        <NavLink to = "vans" className = "font-inter text-lg text-[#4D4D4D] hover:underline">
          View All 
        </NavLink>
        </div>

        <div className = "flex flex-col gap-10">
        <Suspense fallback = {<h1>Loading host vans...</h1>}>
        <Await resolve = {hostVansPromise.hostVans}>
        {(hostVans) => {
            console.log("hostVans:", hostVans);
            return hostVans.map((van) => {
              return (
                <div className="flex flex-col gap-10">
                  <div className="flex bg-white p-10 rounded-xl flex-row gap-10" key={van.id}>
                    <div className="flex w-[200px] rounded-xl">
                      <NavLink to={`/host/vans/${van.id}`}>
                        <img src={van.imageUrl} className="w-full rounded-xl" />
                      </NavLink>
                    </div>
                    <div className="flex flex-col gap-10">
                      <div className="text-2xl font-inter font-semibold">
                        {van.name}
                      </div>
                      <div className="text-xl font-inter font-semibold">
                        ${van.price} <span className="font-semibold font-inter"> / day</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }}

        </Await>
        </Suspense>
       
        </div>
       
        
      </div>
    </div>
  )
}

export default HostMain