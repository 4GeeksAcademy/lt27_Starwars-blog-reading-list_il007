import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCard from "../component/charactercard";
import PlanetCard from "../component/planetscard";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center mt-5">
      <h1>Characters</h1>

      <div className="row flex-row flex-nowrap " style={{ overflowX: "auto" }}>
        {store.characters.map((character) => (
          <CharacterCard
            uid={character.url.replace("https://swapi.info/api/people/", "").replace("/ ", "")}
            key={character.url}
            name={character.name}
            hairColor={character.hair_color}
            gender={character.gender}
            eye_color={character.eye_color}
          />
        ))}
      </div>

      <h1>Planets</h1>

      <div className="row flex-row flex-nowrap " style={{ overflowX: "auto" }}>
        {store.planets.map((planet) => (
          <PlanetCard
            uid={planet.url.replace("https://swapi.info/api/planets/", "").replace("/ ", "")}
            key={planet.url}
            name={planet.name}
            population={planet.population}
            terrain={planet.terrain}
          />
        ))}
      </div>

      <h1>Vehicles</h1>
    </div>
  );
};
