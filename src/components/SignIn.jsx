import React from 'react';
import styles from '../style';
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="text-sm flex flex-col items-center mt-[40px] h-[85vh] ">
        <p className="font-poppins text-center w-[295px] font-semibold mb-[25px]">Connexion</p>
        <div className="mb-[45px] bg-specialLite w-[345px] rounded-xl border border-solid flex
        flex-col items-center pb-[28px] pt-[28px] ">
          <form>
            <div>
              <label htmlFor="email">E-mail:</label> <br />
              <input className={`${styles.input}`} type="email" id="email" name="email" required />
            </div>
            
            <div className="mt-[22px]">
              <label htmlFor="password">Mot de passe:</label> <br />
              <input className={`${styles.input}`} type="password" id="password" name="password" required />
            </div>
            <button type="submit" className={`mt-[33px] w-[270px] ${styles.button}`}>Se connecter</button>
          </form>
        </div>

        <Link to="/SignUp">
          <button type="button" className={`${styles.button2}`}>
              Créer un nouveau compte
          </button>
        </Link>
        
      </div>
      
    </>
  );
};


export default SignIn