import React from 'react'
import Facebook from "../assets/Facebook.png";
import Linkedin from "../assets/Linkedin.png";
import Insta from "../assets/Insta.png";
import Twitter from "../assets/Twitter.png";

const Footer = () => {
  return (
    <>
        <div className="w-full bg-slate-800 h-[512px] text-white pt-[60px] px-6 lg:px-[200px] ">
            <p className="font-bold text-base mb-6">Informations</p>
            <p className="font-bold font-normal mb-6">CGU / CGV</p>
            <p className="font-bold font-normal mb-6">Mentions légales</p>
            <p className="font-bold font-normal mb-6">Contact</p>

            <p className="font-bold text-base mb-6 mt-[60px]">Sign In/Up</p>
            <p className="font-bold font-normal mb-6">Connection</p>
            <p className="font-bold font-normal mb-6">Inscription</p>
            
            <div className="flex justify-center w-[100%] mt-8">
                <div className="flex justify-between w-[200px] ">
                    <img src={Facebook} alt="fb" />
                    <img src={Linkedin} alt="li" />
                    <img src={Insta} alt="insta" />
                    <img src={Twitter} alt="tw" />
                </div>
            </div>
            

        </div>
    </>
    
  )
}

export default Footer