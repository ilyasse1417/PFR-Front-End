import React from 'react';
import styles from '../style';
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <div className="text-sm flex flex-col items-center mt-[40px] h-[85vh]">
        <p className="font-poppins text-center w-[295px] font-semibold mb-[25px]">Créez gratuitement votre compte<br /> Et commencez à vendre vos services</p>
        <div className="mb-[45px] bg-specialLite w-[345px] rounded-xl border border-solid flex
        flex-col items-center pb-[28px] pt-[28px] ">
          <form>
            <div>
              <label htmlFor="email">E-mail:</label> <br />
              <input className={`${styles.input}`} type="email" id="email" name="email" required />
            </div>
            <div className="mt-[22px]">
              <label htmlFor="phone">Téléphone:</label> <br />
              <input className={`${styles.input}`} type="tel" id="phone" name="phone" required /> <br />
              <p className="w-[270px] text-xs text-slate-500 ">
                Veuillez saisir un numéro de 
                téléphone valide, c'est le seul
                 moyen de vous
              </p>
            </div>
            <div className="mt-[22px]">
              <label htmlFor="password">Mot de passe:</label> <br />
              <input className={`${styles.input}`} type="password" id="password" name="password" required />
            </div>
            <button type="submit" className={`mt-[33px] w-[270px] ${styles.button}`}>Créer mon compte</button>
          </form>
        </div>

        <Link to="/Connection">
          <button type="button" className={`${styles.button2}`}>
            J’ai déja un compte
          </button>
        </Link>
        
      </div>
      
    </>
  );
};

export default SignUp;