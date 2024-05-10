import React from 'react'
import { NavLink } from 'react-router-dom'

const HostIncome = () => {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
]
  return (
    <div className = "flex flex-col bg-[#FFF7ED] py-5 px-10 gap-5">
      
      <div className = "text-5xl font-inter font-bold">
        Income
        </div>

      <div className = "font-inter text-lg text-[#4D4D4D]">
        Last 30 days
      </div>

      <div className = "font-inter text-5xl font-bold">
        $2,260
      </div>

      <div>
        <img className = "h-1/4"src = "/graph.png"/>
      </div>

      <div className = "flex flex-col gap-5">
        <div className = "flex flex-row justify-between">
          <div className = "font-inter text-3xl font-semibold">
            Your transactions ({transactionsData.length})
          </div>
          <div className = "font-inter text-lg text-[#4D4D4D] hover:underline">
            Last 30 Days 
          </div>

        </div>
      
      <div className = "flex flex-col gap-10 py-10">
        {transactionsData.map((transaction) => {
          return(
            <div key = {transaction.id} className = "flex bg-white p-10 rounded-xl flex-row justify-between">
              <div className = "text-2xl font-inter font-semibold">
                ${transaction.amount} 
                </div>

                <div className="text-xl font-inter font-semibold">
                  {transaction.date}
                </div>
            </div>
          )
        })}
      </div>
      
        </div>


      </div>
    
  )
}

export default HostIncome