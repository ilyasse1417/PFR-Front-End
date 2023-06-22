import React from 'react'
import loc from "../assets/loc.png";
import star from "../assets/star.png";
import uni from "../assets/uni.png";
import wapp from "../assets/wapp.png";

const CmProfile = () => {
  return (
    <>
      <div className="text-sm flex flex-col items-center mt-[40px]">
        <p className="font-poppins text-center w-[295px] font-semibold mb-[25px]">Proin viverra ligula sit amet viverra</p>
        <div className="bg-specialLite w-[345px] rounded-xl border border-solid flex
        flex-col items-center pb-[28px] pt-[16px] px-[16px]" >
          <div className="bg-[url('./assets/person.png')] flex justify-end w-[85px] h-[85px] bg-black rounded-full bg-cover bg-center">
            <div className="group hover:scale-125 hover:bg-specialLite transition duration-700 ease-in-out flex justify-center items-center w-[30px] h-[30px] bg-special cursor-pointer rounded-full relative top-2 right-[-8px]">
              <svg className="group-hover:stroke-special w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
          </div>

          <p className="font-bold">Abderrahim</p>
          <div className="flex w-[150px] justify-center mt-2">
            <img className="w-[14px] h-[14px] mt-[3px]" src={star} alt="star" />
            <p className="pl-1 text-sm font-bold">4,5 <span className="text-xs font-normal">(763 avis)</span> </p>  
          </div>
          
          <div className="flex flex-col w-[100%] mt-[22px]">
            <div className="flex">
                <img className="w-[14px] h-[13px] mt-[4px] mr-3" src={uni} alt="uni" />
                <p className="text-sm font-bold">+10 ans <span className="font-normal">d'expérience</span> </p>
            </div>
            <div className="flex mt-2">
              <img className="w-[12px] h-[13px] mt-[4px] mr-3" src={loc} alt="loc" />
              <p className="text-sm font-normal">Tanger ·  Tetouen · Elhousseima</p>
            </div>

            <div className="flex flex-wrap gap-3.5 mt-3 mb-5">
              <div className="h-[28px] bg-black/10 border rounded-[10px] px-4 py-[2px]">Peinture</div>
              <div className="h-[28px] bg-black/10 border rounded-[10px] px-4 py-[2px]">Peinture</div>
            </div>
            <p className="font-extrabold text-sm mb-2">Intro</p>
            <p className="font-normal text-sm">Nullam accumsan lorem in dui.
             Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
             Phasellus nec sem in justo pellentesque facilisis. Etiam iaculis
              nunc ac metus.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-200 ease-in-out cursor-pointer flex bg-whatsapp rounded-[5px] h-[50px] px-[30px] mt-[30px] mb-[7px] pt-1">
            <img className="w-[30px] h-[30px] mt-[4px] mr-3" src={wapp} alt="wapp" />
            <p className="text-white pt-[10px] mr-2 text-sm font-bold">Contacter l’artisan</p>
          </div>

        </div>
      </div>
    </>
    
  )
}

export default CmProfile