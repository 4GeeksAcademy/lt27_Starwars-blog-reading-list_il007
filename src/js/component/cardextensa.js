import React, { useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";


import "../../styles/home.css";

export const Cardextensa = () => {
  const { store } = useContext(Context);

  return (
    <div>
      <div className="card mx-3" style={{ width: "36rem" }}>
        <img src={rigoImage} className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{store.character?.name}</h5>
          <p className="card-text">{store.character?.gender}</p>
          <p className="card-text">{store.character?.hair_color}</p>
          <p className="card-text">{store.character?.eye_color}</p>
          <p className="card-text">{store.character?.skin_color}</p>
          <p className="card-text">{store.character?.birth_year}</p>
          <p className="card-text">{store.character?.height}</p>
        </div>
      </div>
    </div>
  );
};
