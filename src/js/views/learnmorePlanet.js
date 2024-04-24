import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const PlanetsDetail = (props) => {
  const [planetDetails, setPlanetDetails] = useState([]);
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    fetch("https://swapi.info/api/planets/" + params.planet_uid)
      .then((response) => response.json())
      .then((data) => setPlanetDetails(data));
  }, []);
  return (
    <>
      <div className="col-8 m-auto">
        <div className="row flex-row">
          <div className="col-5">
            <img src={rigoImage} class="img-thumbnail" alt="..." />
          </div>
          <div className="col-7">
            <h2>{planetDetails.name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="table-responsive ">
          <table className="table">
            <thead>
              <tr className="text-danger">
                <th>Name</th>
                <th>Climate</th>
                <th>Population</th>
                <th>Orbital</th>
                <th>Rotation Period</th>
                <th>Diameter</th>
              </tr>
            </thead>
            <tbody className="text-danger">
              <tr>
                <td>{planetDetails.name}</td>
                <td>{planetDetails.climate}</td>
                <td>{planetDetails.population}</td>
                <td>{planetDetails.orbital_period}</td>
                <td>{planetDetails.rotation_period}</td>
                <td>{planetDetails.diameter}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

PlanetsDetail.propTypes = {
  match: PropTypes.object,
};
