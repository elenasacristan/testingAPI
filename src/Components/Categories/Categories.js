import React, { useState, useEffect } from "react";
import Results from "../Results/Results.js";

export default function Categories() {
  const [listIngredients, setListIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSubmit = (event) => setIngredient(event.target.value);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((response) => response.json())
      .then((json) => {
        setListIngredients(json.drinks);
        setIsLoaded(true);
        console.log(json.drinks);
      });
  }, []);

  if (!isLoaded) {
    return <div>Loadin...</div>;
  } else {
    return (
      <div className="Ingredients">
        
        <p>Select and ingredient from the drop down menu</p>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <select
            onChange={(e) => setIngredient(e.target.value)}
            value={ingredient}
          >
            {listIngredients.map((drink) => (
              <option key={drink.strIngredient1}>{drink.strIngredient1}</option>
            ))}
          </select>
          {/* <button>Find me drinks</button> */}
        </form>
        <Results ingredient={ingredient} />
      </div>
    );
  }
}
