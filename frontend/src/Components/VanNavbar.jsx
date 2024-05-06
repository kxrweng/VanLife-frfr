import React, {useState} from 'react'

const VanNavbar = () => {
  const [categorySelected, setCategorySelected] = useState("");


  const handleCategorySelected = (category) => {
    setCategorySelected(category);
  }

  return (
    <div className = "flex flex-col gap-3">
        <div className = "text-3xl font-inter font-bold">
            Explore our van options
        </div>
        <div className = "flex flex-row  gap-10 mb-10" >
        <div onClick = {() => handleCategorySelected("simple")} className = {`font-semibold text-lg font-inter px-6 py-2  rounded-xl ${categorySelected === "simple" ? "text-[#FFEAD0] bg-[#E17654]" : "text-[#4D4D4D] bg-[#FFEAD0]"} `}>Simple</div>
        <div onClick = {() => handleCategorySelected("luxury")} className = {`font-semibold text-lg font-inter  px-6 py-2  rounded-xl ${categorySelected === "luxury" ? "text-[#FFEAD0] bg-[#161616]" : "text-[#4D4D4D] bg-[#FFEAD0]"}`}>Luxury</div>
        <div onClick = {() => handleCategorySelected("rugged")} className = {`font-semibold text-lg font-inter px-6 py-2 rounded-xl ${categorySelected === "rugged" ? "text-[#FFEAD0] bg-[#115E59]" : "text-[#4D4D4D] bg-[#FFEAD0]"  } `}>Rugged</div>
        <div
        onClick={() => {
        setCategorySelected("clear");
        setTimeout(() => {
        setCategorySelected("");
        }, 500);
        }}
  className= {`font-semibold text-lg font-inter text-[#4D4D4D] px-6 py-2 rounded-xl ${categorySelected === "clear" ? "underline underline-offset-8" : ""}`}
>
  Clear Filters
</div>

        </div>
    </div>
  )
}

export default VanNavbar