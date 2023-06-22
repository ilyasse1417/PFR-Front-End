import React from 'react'
import photo from "../assets/photo.png";
import loop from "../assets/loop.png";
import { features } from "../constants";
import styles from '../style';

const Home = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center">
            <div className="h-[88vh] w-[100%] bg-slate-800">
                <div className="h-[50%] w-[100%] flex flex-col
                 justify-center items-center px-[60px] bg-homecolor">
                    <p className="text-center font-extrabold text-3xl max-w-[600px] ">
                        Trouvez le <span className="text-special">prestataire</span> idéal
                         pour simplifier votre quotidien en un clic
                    </p>
                    <div className="rounded-[30px] h-[60px] w-[300px] md:w-[600px] 
                     bg-white absolute top-[52%] flex justify-between bg-black mx-[25px]">
                        <input className="rounded-l-[30px] h-[60px] w-[230px] md:w-[530px] py-2 pl-5
                        placeholder:text-slate-400 font-normal text-sm focus:outline-none"
                        placeholder="Le service que vous cherchez"
                        type="text" />
                        <div className="flex justify-center items-center bg-special
                        relative transition duration-100 ease-in-out w-[66px] h-[50px]
                        rounded-full m-[5px] cursor-pointer hover:scale-105">
                            <img src={loop} alt="Search" className="w-[24px] H-[24px]" />
                        </div>
                    </div>
                    
                </div>
                <img className="object-cover h-[50%] w-[100%]" src={photo} alt="photo" />
            </div>

            <div className="flex justify-center pt-[60px] flex-wrap gap-4 px-2 max-w-[1200px] lg:h-[100vh] ">
                {features.map((feat, index) => (
                    <div className="flex flex-col justify-center items-center w-[300px] mx-[18px] mb-[80px] ">
                        <img src={feat.icon} alt="file" className="w-[80px] h-[80px]"/>
                        <p className="font-extrabold text-2xl py-4">{feat.title}</p>
                        <p className="font-normal text-lg text-center">{feat.content}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center justify-center w-[100%] bg-homecolor py-[50px] px-4">
                <p className="font-extrabold text-2xl">Aenean modo</p>
                <p className="font-medium text-sm mt-3 text-center">Etiam sit amet orci eget eros faucibus tincidunt. Etiam sit amet orci eget eros</p>
                <button className={`${styles.button} px-6 mt-[30px] `} >Nous contacter</button>
            </div>
        </div>
    </>
    
  )
}

export default Home