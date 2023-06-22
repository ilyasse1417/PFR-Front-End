import React, { useState } from 'react';
import styles from '../style';
import person from "../assets/person.png";

const Comnt = () => {
  const [showAllComments, setShowAllComments] = useState(false);

  const renderComments = () => {
    const totalComments = showAllComments ? 5 : 3;
    const comments = [];
    for (let i = 0; i < totalComments; i++) {
      comments.push(
        <div className="flex justify-between w-[100%] h-[100px] py-2 px-2 mb-5" key={i}>
          <img src={person} className="object-cover w-[45px] h-[45px] mr-4 rounded-full" alt="Person" />
          <div>
            <p className="text-sm font-bold">Amine</p>
            <p className="text-slate-300 text-sm">dd/mm/yy hh:mm</p>
            <p className="text-sm">
              Phasellus viverra nulla ut metus. Praesent venenatis metus at tortor
            </p>
          </div>
        </div>
      );
    }
    return comments;
  };

  const handleLoadMore = () => {
    setShowAllComments(true);
  };

  return (
    <div className="flex flex-col items-center">
      {renderComments()}
      {!showAllComments && (
        <button className= {`${styles.button3} mt-3 mb-6`} onClick={handleLoadMore}>
          Charger plus ...
        </button>
      )}
    </div>
  );
};

export default Comnt;
