import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div className = " h-screen  bg-[url('/errorBg.jpg')] bg-no-repeat bg-cover">
    <div className = "flex flex-col justify-center items-center gap-20  h-screen">
      <div className = "font-inter text-white text-9xl ">
        404
      </div>

      <div className = "font-tinos text-white text-7xl ">
        It seems like we got lost in a jungle.
      </div>

      <div className = "font-tinos text-4xl text-center text-white ">
        Don't worry, we will find our way back. In the meantime, go pet your dog.
      </div>

       {err ?  <div className = "font-tinos flex flex-col text-2xl text-center text-white">
        <pre>
        {err.status} : {err.statusText}  

        </pre>
        <pre>
        Error Message : {err.message}
        </pre>
       </div>
        : null }
       

       
    </div>
    </div>
  )
}

export default ErrorPage