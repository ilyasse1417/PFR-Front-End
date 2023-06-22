import React, { useState } from "react";
import styles from "../style";
import star from "../assets/star.png";
import close from "../assets/close.png";
import FS from "../assets/FS.png";
import ES from "../assets/ES.png";
import Comnt from "./Comnt";
import "../index.css";
import "./Modal.css";

const Reviews = () => {
  const [modal, setModal] = useState(false);
  const [selectedStars, setSelectedStars] = useState(0);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Retrieve other form data here
    const formData = {
      // Other form fields
      stars: selectedStars,
    };
    // Submit the form data

    // Refresh the page
    window.location.reload();
  };

  const handleReset = () => {
    setSelectedStars(0);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="flex flex-col items-center w-[100%] mb-[100px] ">
        <div className="flex flex-col mt-[30px] items-center w-[345px]">
          <div className="flex justify-between w-[100%]">
            <p className="mt-1 text-base font-bold">Les avis des clients</p>
            <button
              onClick={toggleModal}
              type="button"
              className={`${styles.button2} text-sm`}
            >
              Ajouter un avis
            </button>
          </div>

          <div className="flex justify-between items-center w-[100%] mt-3">
            <div className="flex justify-center items-center mr-4">
              <p className="text-[40px] font-extrabold mr-2">4.0</p>
              <img className="mt-2" src={star} alt="star" />
            </div>

            <div className="flex flex-col grow">
              <div className="flex justify-between">
                <span className="text-[10px] text-slate-500">5</span>
                <progress
                  className="myProgress rounded h-1 mx-1 mt-[7px] grow"
                  value="30"
                  max="100"
                ></progress>
                <span className="text-[10px] text-slate-500">%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-slate-500">4</span>
                <progress
                  className="myProgress rounded h-1 mx-1 mt-[7px] grow"
                  value="50"
                  max="100"
                ></progress>
                <span className="text-[10px] text-slate-500">%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-slate-500">3</span>
                <progress
                  className="myProgress rounded h-1 mx-1 mt-[7px] grow"
                  value="10"
                  max="100"
                ></progress>
                <span className="text-[10px] text-slate-500">%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-slate-500">2</span>
                <progress
                  className="myProgress rounded h-1 mx-1 mt-[7px] grow"
                  value="7"
                  max="100"
                ></progress>
                <span className="text-[10px] text-slate-500">%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-slate-500">1</span>
                <progress
                  className="myProgress rounded h-1 mx-1 mt-[7px] grow"
                  value="4"
                  max="100"
                ></progress>
                <span className="text-[10px] text-slate-500">%</span>
              </div>
            </div>
            

          </div>

          <div className="bg-slate-200 w-[100%] h-[2px] mt-[6px] mb-[15px]"></div>

          <Comnt />
        </div>
      </div>
      {modal && (
        <div className="modal ">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <p className="text-base font-bold">Votre avis</p>
              <div className="flex flex-wrap gap-2 my-2">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    className="w-[24px] h-[24px] cursor-pointer"
                    src={index < selectedStars ? FS : ES}
                    alt={index < selectedStars ? "Full Star" : "Empty Star"}
                    onClick={() => handleStarClick(index)}
                  />
                ))}
              </div>
              <label className="font-normal text-sm mb-3" htmlFor="intro">
                Commentaire
              </label>
              <div className="flex flex-col">
                <textarea
                  className="w-[270px] h-[170px] rounded-md mt-2 border-2 border-solid focus:outline-none focus:border-specail focus:ring-special focus:ring-1 placeholder:text-slate-400 pb-3 py-2 pl-4 pr-4"
                  id="intro"
                  name="intro"
                  rows="4"
                  cols="50"
                />
              </div>
              <div>
                <button
                  type="reset"
                  className={`mt-[33px] w-[90px] ${styles.button2}`}
                  onClick={handleReset}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className={`mt-[33px] w-[165px] ml-3 ${styles.button}`}
                >
                  Enregistrer
                </button>
              </div>
            </form>

            <img
              src={close}
              alt="X"
              className="close-modal h-[34px] w-[36px] cursor-pointer"
              onClick={toggleModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
