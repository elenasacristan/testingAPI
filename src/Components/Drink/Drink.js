import React from "react";
import { Link } from "react-router-dom";
import "./Drink.css";

export default function Drink({ id, name, image }) {
  return (
    <div className="Drink">
      <Link to={`/drink/${id}`}>
        <div className="drink-container">
          <img src={image} alt={name} />
          <div className="overlay-title">
            <h3>{name}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
