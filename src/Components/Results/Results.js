import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Drink from "../Drink/Drink.js";
import "./Results.css";

export default function Results({ingredient}) {
  const [drinks, serDrinks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)

      .then((response) => response.json())
      .then((json) => {
        serDrinks(json.drinks);
        setIsLoaded(true);
        console.log(json.drinks);
      });
  }, [ingredient]);

  if (!isLoaded) {
    return <div>Loadin...</div>;
  } else {
    return (
      <div className="Results">
        <div className="results-container">
          {drinks.map((drink) => (
            <div key={drink.idDrink}>
              <Link to={`/drink/${drink.idDrink}`}>
                <Drink
                  id={drink.idDrink}
                  name={drink.strDrink}
                  image={drink.strDrinkThumb}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
