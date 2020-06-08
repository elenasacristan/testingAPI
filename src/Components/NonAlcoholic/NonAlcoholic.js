import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NonAlcoholic() {
  const [drinks, serDrinks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then((response) => response.json())
      .then((json) => {
        serDrinks(json.drinks);
        setIsLoaded(true);
        console.log(json.drinks);
      });
  }, []);

  if (!isLoaded) {
    return <div>Loadin...</div>;
  } else {
    return (
      <div className="Random">
        {drinks.map((drink) => (
          <div key={drink.idDrink}>
            {drink.strDrink}
            <br />
            <Link to={`/drink/${drink.idDrink}`}>
              <img width="500" src={drink.strDrinkThumb} alt={drink.strDrink} />
            </Link>
            <p></p>
          </div>
        ))}
      </div>
    );
  }
}
