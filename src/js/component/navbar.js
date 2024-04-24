import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navBar.css";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          className="navbar-brand mb-0 h1"
          src={
            "https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG18.png"
          }
          style={{ width: "100px", height: "100px" }}
        />
      </Link>

      <div className="p-3 mb-2 bg-dark-subtle text-dark-emphasis">
        <div className="btn-group dropstart">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites{" "}
            <span className="badge text-bg-secondary">
              {store.charactersLiked.length}
            </span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#"></a>
            </li>
            {store.charactersLiked.length === 0 ? (
              <li>
                <p>Empty</p>
              </li>
            ) : (
              store.charactersLiked.map((elemento, index) => (
                <li key={index}>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex justify-content-between m-2 ">
                      <p>{elemento}</p>
                      <i
                        onClick={() => actions.deleteFavorite(elemento)}
                        className="bi bi-trash3-fill"
                      ></i>
                    </div>
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
