import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cardextensa } from "../component/cardextensa";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="jumbotron">
      <h1 className="display-4">This will show the demo element: </h1>
      {Array.isArray(store.character) ? (
        store.character.map((elemento) => (
          <Cardextensa
            name={elemento.name}
            hair_color={elemento.hair_color}
			eye_color={elemento.eye_color}
			skin_color={elemento.skin_color}
			birth_year={elemento.birth_year}
			height={elemento.height}
          />
        ))
      ) : (
        <p>No hay personajes disponibles</p>
      )}
      <Cardextensa />

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};
