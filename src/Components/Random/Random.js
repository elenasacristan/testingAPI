import React, { useState, useEffect } from "react";

export default function Random() {
  const [drinks, serDrinks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
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
            <img width="500" src={drink.strDrinkThumb} alt={drink.strDrink} />
            <p>Category: {drink.strCategory}</p>
            <p></p>
          </div>
        ))}
      </div>
    );
  }
}
