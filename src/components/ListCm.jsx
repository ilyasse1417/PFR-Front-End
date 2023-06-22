import React from 'react'
import Craftmen from './Craftmen'
import filter from "../assets/filter.png";

const ListCm = () => {
  return (
    <>
      <div className="text-sm flex flex-col items-center mt-[40px] mb-[100px] ">
        <p className="font-poppins text-center w-[295px] font-semibold mb-[25px]">Proin viverra ligula sit amet viverra</p>
        <div className="w-[80%] mb-3 flex justify-end">
            <span className="mt-1 text-sm">Filter</span> 
            <img src={filter} alt="filter" className="cursor-pointer ml-3 h-[24px] w-[24px]" />
        </div>
        <div className="w-[80%] h-[2px] bg-slate-200 mb-[40px] "></div>
        
        <Craftmen />
              
      </div>
    </>
  )
}

export default ListCm