import React, {useState} from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        email : "",
        password : ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
  return (
    <div className = "flex flex-col  bg-[#FFF7ED] justify-center h-screen">

        <div className = "text-4xl font-bold font-inter  text-center">
            Sign in to your account
        </div>

        <form onSubmit = {(e) => handleSubmit(e)} className = "flex flex-col gap-20 p-10 justify-center">
            <div className = "flex flex-col gap-2">
            <div className = "flex justify-center">
            <input name = "email" value = {formData.email} onChange = {(e) => handleInput(e)} type = "text" placeholder = "Email Address" className = "border-2 rounded-xl font-inter font-semibold w-1/2 p-4" />

            </div>
            <div className = "flex justify-center">
            <input name = "password" value = {formData.password} onChange = {(e) => handleInput(e)} type = "password" placeholder = "Password" className = "border-2 w-1/2 rounded-xl font-inter font-semibold p-4"/>
            </div>

            </div>
            

            <div className = "flex justify-center">
            <button type = "submit" className = "font-inter font-semibold w-1/2 border-[#FF8C38] text-[#FF8C38] bg-white rounded-xl border-2 p-5 hover:text-white hover:bg-[#FF8C38] hover:border-white hover:ease-in-out hover:duration-500">Sign In</button>

            </div>

        </form>

        <div className = "flex gap-2 justify-center font-inter font-semibold text-black">
            Don't have an account?  <span className = "text-[#FF8C38]">Create one</span>
        </div>
    </div>
  )
}

export default Login