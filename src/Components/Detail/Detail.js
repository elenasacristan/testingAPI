import React, { useState, useEffect } from "react";
// import { Link, Redirect } from "react-router-dom";


export default function Detail(props) {
  const [drinks, setDrinks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setDrinks(json.drinks);
        setIsLoaded(true);
        console.log(json.drinks);
      });
  }, [props.match.params.id]);

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
            <p>{drink.strInstructions}</p>
          </div>
        ))}
      </div>
    );
  }
}
