import { Link } from "react-router-dom";
import loc from "../assets/loc.png";
import star from "../assets/star.png";
import uni from "../assets/uni.png";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Craftmen = () => {
  const [cmsData, setCmsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/craftsmen?page=1"
        );
        const data = response.data;
        setCmsData(data);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, []);

  const renderCms = () => {
    if (cmsData.length === 0) {
      // Render a loading state or placeholder
      return <div>Loading...</div>;
    }

    const totalCms = Object.keys(cmsData["hydra:member"]).length;
    const cms = [];
    for (let i = 0; i < totalCms; i++) {
      cms.push(
        <div
          key={`craftsman${cmsData["hydra:member"][i].id}`}
          className="bg-specialLite w-[345px] rounded-xl border border-solid flex flex-col items-center pb-[28px] pt-[16px] px-[16px] mb-[10px]"
        >
          <div className="bg-[url('./assets/person.png')] flex justify-end w-[85px] h-[85px] bg-black rounded-full bg-cover bg-center">
            <div className="group hover:scale-125 hover:bg-specialLite transition duration-700 ease-in-out flex justify-center items-center w-[30px] h-[30px] bg-special cursor-pointer rounded-full relative top-2 right-[-8px]">
              <svg
                className="group-hover:stroke-special w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
          <p className="font-bold">{cmsData["hydra:member"][i].user.name}</p>
          <div className="flex w-[150px] justify-center mt-2">
            <img className="w-[14px] h-[14px] mt-[3px]" src={star} alt="star" />
            <p className="pl-1 text-sm font-bold">
              {cmsData["hydra:member"][i].user.reviews.forEach((review) => {
              })}
              4.5&nbsp;
              <span className="text-xs font-normal">
                ({cmsData["hydra:member"][i].user.reviews.length} avis)
              </span>
            </p>
          </div>
          <div className="flex flex-col w-[100%] mt-[22px]">
            <div className="flex">
              <img
                className="w-[14px] h-[13px] mt-[4px] mr-3"
                src={uni}
                alt="uni"
              />
              <p className="text-sm font-bold">
                {cmsData["hydra:member"][i].description}
              </p>
            </div>
            <div className="flex mt-2">
              <img
                className="w-[12px] h-[13px] mt-[4px] mr-3"
                src={loc}
                alt="loc"
              />
              {cmsData["hydra:member"][i].cities.map((city) => (
                <p key={city.id} className="text-sm font-normal">
                  &nbsp;{city.frName}&nbsp;
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3.5 mt-3 mb-5">
              {cmsData["hydra:member"][i].professions.map((profession, j) => (
                <div
                  key={profession.id}
                  className="h-[28px] bg-black/10 border rounded-[10px] px-4 py-[2px]"
                >
                  {profession.name}
                </div>
              ))}
            </div>
          </div>
          <Link to="/Cmp">
            <button
              type="button"
              className="text-md text-special h-[40px] rounded-md hover:border-dashed font-semibold border border-solid px-4 border-special mt-[20px]"
            >
              Voir le profil
            </button>
          </Link>
        </div>
      );
    }
    return cms;
  };

  return (
    <div className="flex justify-center flex-wrap gap-[100px] ">
      {renderCms()}
    </div>
  );
};

export default Craftmen;
