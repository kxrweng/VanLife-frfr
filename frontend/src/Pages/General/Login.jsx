import React, {useState} from 'react'
import { useLoaderData, Form } from 'react-router-dom';
import { loginUser } from '../../Utils/Api';

export function loader({ request }) {
    // console.log(request)
    // console.log(request.url)
    // console.log(request.url.searchParams)
    // const url = new URL(request.url).searchParams.get("message");
    // console.log(url)
    return new URL(request.url).searchParams.get("message")
}

export async function  action ({request}){
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email,password);
    return null;

}
const Login = () => {
    const warningMsg = useLoaderData();

    const [error,setErrorMessage] = useState(null)

    

   
  return (
    <div className = "flex flex-col  bg-[#FFF7ED] justify-center h-screen">

        <div className = "text-4xl font-bold font-inter  text-center">
            Sign in to your account
        </div>

        {warningMsg && <h2 className = " text-2xl my-5 font-bold font-inter text-center text-red-700"> {warningMsg} </h2>}


        <Form className = "flex flex-col gap-20 p-10 justify-center" method = "post">
            <div className = "flex flex-col gap-2">
            <div className = "flex justify-center">
            <input name = "email"   type = "text" placeholder = "Email Address" className = "border-2 rounded-xl font-inter font-semibold w-1/2 p-4" />

            </div>
            <div className = "flex justify-center">
            <input name = "password" type = "password" placeholder = "Password" className = "border-2 w-1/2 rounded-xl font-inter font-semibold p-4"/>
            </div>

            </div>
            
             <div className = "flex justify-center">
            <button disabled = {status === "submitting"}
            type = "submit"
            className = "font-inter font-semibold w-1/2 border-[#FF8C38] text-[#FF8C38] bg-white rounded-xl border-2 p-5 hover:text-white hover:bg-[#FF8C38] hover:border-white  hover:ease-in-out">
            {status === "submitting" ? "Logging in..." : "Log in"}
            </button>
            </div> 
           

            {error && <h2 className = " text-2xl my-5 font-bold font-inter text-center text-red-700"> {error} </h2>}


        </Form>

        <div className = "flex gap-2 justify-center font-inter font-semibold text-black">
            Don't have an account?  <span className = "text-[#FF8C38]">Create one</span>
        </div>
    </div>
  )
}

export default Login