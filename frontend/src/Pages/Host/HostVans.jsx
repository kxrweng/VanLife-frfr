import React, { useEffect, useState, Suspense } from 'react'
import { NavLink, useLoaderData, defer, Await } from 'react-router-dom'
import { getHostVans } from '../../Utils/Api';
import { requireAuth } from '../../Utils/RequireAuth';

//This is not under protected route. Debugging....
export async function Loader({ request }) {
  console.log(request);
  await requireAuth(request);
  return defer({ hostVans: getHostVans() });
}

const HostVans = () => {
  const hostVansPromise = useLoaderData();

  console.log("hostVansPromise:", hostVansPromise);

  return (
    <div className="flex flex-col px-10 pb-10 gap-10 bg-[#FFF7ED]">
      <div className="flex ">
        <div className="font-inter text-3xl font-bold">
          Your Listed Vans
        </div>
      </div>
      <Suspense fallback={<h2>Loading ....</h2>}>
        <Await resolve={hostVansPromise.hostVans}>
          {(hostVans) => {
            console.log("hostVans:", hostVans);
            return hostVans.map((van) => {
              return (
                <div className="flex flex-col gap-10">
                  <div className="flex bg-white p-10 rounded-xl flex-row gap-10" key={van.id}>
                    <div className="flex w-1/5 rounded-xl">
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
  )
}

export default HostVans
