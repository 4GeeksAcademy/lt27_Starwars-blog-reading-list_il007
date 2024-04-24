import React, { useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mx-3" style={{ width: "18rem" }}>
      <img src={rigoImage} className="card-img-top" alt="..." />
      <div className="card-body m-2 ">
        <h5 className="card-title">
          <strong>{props.name}</strong>
        </h5>
        <p>{props.uid}</p>
        <p className="card-text">Population:{props.population}</p>
        <p className="card-text">Terrain:{props.terrain}</p>

        <div className="d-flex justify-content-between">
          <Link
            to={"/PlanetsDetail/" + props.uid}
            className="btn btn-outline-primary"
          >
            <span>Learn More</span>
          </Link>
          <button
            onClick={() => actions.favoriteLiked(props.name)}
            type="button"
            className="btn btn-outline-warning"
          >
            <i className="bi bi-suit-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
