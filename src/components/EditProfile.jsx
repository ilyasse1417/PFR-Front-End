import React, { useRef, useState } from 'react';
import styles from '../style';
import Select from 'react-select';
import { cityOptions } from "../constants";
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const EditProfile = () => {
  const selectRef = useRef(null); // Create a ref for the Select component
  const [selectedCities, setSelectedCities] = useState([]); // Track the selected cities

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const selectedOptions = selectedCities; // Get the selected options from the state
    console.log(selectedOptions);
    
    // Perform additional form submission logic here
  };

  const handleFormReset = () => {
    setSelectedCities([]); // Reset the selected cities state
    selectRef.current.clearValue(); // Clear the Select component's value
  };

  return (
    <>
      <div className="text-sm flex flex-col items-center mt-[40px] mb-[30px]">
        <p className="font-poppins text-center w-[295px] font-semibold mb-[25px]">Créez gratuitement votre compte<br />Et commencez à vendre vos services</p>
        <div className="bg-specialLite w-[345px] rounded-xl border border-solid flex flex-col items-center pb-[28px] pt-[28px] ">
          <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
            <div>
              <label htmlFor="name">Nom:</label> <br />
              <input className={`${styles.input}`} type="text" id="nom" name="nom" required />
            </div>
            <div className="mt-[22px]">
              <label htmlFor="email">E-mail:</label> <br />
              <input className={`${styles.input}`} type="email" id="email" name="email" required />
            </div>
            <div className="mt-[22px]">
              <label htmlFor="phone">Téléphone:</label> <br />
              <input className={`${styles.input}`} type="tel" id="phone" name="phone" required />
            </div>
            <div className="mt-[22px]">
              <label htmlFor="Vile">Vile:</label> 
              <Select
                placeholder="Sélectionnez la ville..."
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                className="mt-2 w-[270px] min-h-[40px]" // Add the className prop here
                options={cityOptions}
                ref={selectRef} // Set the ref for the Select component
                onChange={setSelectedCities} // Update the selected cities state
              />
            </div>
            <div className="mt-[22px] w-[270px] ">
              <p className="font-semibold mb-3">Professions/Services</p>
              <input type="checkbox" id="p1" name="p1" value="1" />
              <label htmlFor="p1"> peinture</label>
              <input className="ml-2" type="checkbox" id="p2" name="p2" value="2" />
              <label htmlFor="p2"> peinture</label>
              <input className="ml-2" type="checkbox" id="p3" name="p3" value="3" />
              <label htmlFor="p3"> peinture</label> <br />
              <input type="checkbox" id="p4" name="p4" value="4" />
              <label htmlFor="p4"> peinture</label>
              <input className="ml-2" type="checkbox" id="p5" name="p5" value="5" />
              <label htmlFor="p5"> peinture</label>
              <input className="ml-2" type="checkbox" id="p6" name="p6" value="6" />
              <label htmlFor="p6"> peinture</label> <br />
              <input type="checkbox" id="p7" name="p7" value="7" />
              <label htmlFor="p7"> peinture</label>
              <input className="ml-2" type="checkbox" id="p8" name="p8" value="8" />
              <label htmlFor="p8"> peinture</label>
              <input className="ml-2" type="checkbox" id="p9" name="p9" value="9" />
              <label htmlFor="p9"> peinture</label> <br />
            </div>
            <div className="mt-[22px] w-[270px] ">
              <label className="font-semibold mb-3" htmlFor="intro">Intro</label>
              <textarea className="w-[270px] h-[170px] rounded-md mt-2 
              border border-solid focus:outline-none focus:border-specail
               focus:ring-special focus:ring-1 placeholder:text-slate-400
                pb-3 py-2 pl-4 pr-4" id="intro" name="intro" rows="4" cols="50" />
            </div>
            <div>
              <button type="reset" className={`mt-[33px] w-[90px] ${styles.button2}`}>Annuler</button>
              <button type="submit" className={`mt-[33px] w-[165px] ml-3 ${styles.button}`}>Enregistrer</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
