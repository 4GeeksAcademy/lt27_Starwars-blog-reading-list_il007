import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const CharactersDetail = (props) => {
  const [details, setDetails] = useState([]);
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    fetch("https://swapi.info/api/people/" + params.character_uid)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <>
      <div className="col-8 m-auto">
        <div className="row flex-row">
          <div className="col-5">
            <img src={rigoImage} class="img-thumbnail" alt="..." />
          </div>
          <div className="col-7">
            <h2>{details.name}</h2>
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
                <th>Birth Year</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Skin Color</th>
                <th>Eye Color</th>
              </tr>
            </thead>
            <tbody className="text-danger">
              <tr>
                <td>{details.name}</td>
                <td>{details.birth_year}</td>
                <td>{details.gender}</td>
                <td>{details.height}</td>
                <td>{details.skin_color}</td>
                <td>{details.eye_color}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

CharactersDetail.propTypes = {
  match: PropTypes.object,
};
