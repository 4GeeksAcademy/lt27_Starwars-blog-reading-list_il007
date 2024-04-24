import React, { useState, useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Cardprueba = (props) => {

  const { store, actions } = useContext(Context);
  const [cardData, setCardData] = useState({ 
    title: "", 
    uid: "", 
    url: "",

  });
  
  const handleClick = () => {
    const cardData = { 
      title: props.title, 
      uid: props.uid, 
      url: props.url,
    };
    setCardData(cardData);
    actions.setCharacter(cardData);
  };

  return (
    <div className="card mx-3" style={{ width: "18rem" }}>
      <img src={rigoImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.uid}</p>
        <p className="card-text">{props.url}</p>
        <p className="card-text">{props.gender}</p>
        <p className="card-text">{props.hair_color}</p>
        <p className="card-text">{props.eye_color}</p>


         <Link to="/single"> 
            <button 
              className="btn btn-outline-primary"
              onClick={() => {actions.getCharacter(props.uid);}}
            >
                Learn more
            </button>
         </Link> 

        <button
          type="button"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop2"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
        </button>
      </div>
    </div>
  );
};
