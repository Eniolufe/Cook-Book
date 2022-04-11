import React, { useState, useEffect } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/random.php";

const Food = () => {
  const [meal, setMeal] = useState([]);

  const fetchMeal = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.meals);
    setMeal(data.meals);
  };
  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <>
      <div className="button">
        <button onClick={() => fetchMeal()} className="btn">
          Next Recipe
        </button>
      </div>
      <section className="food">
        {meal.map((f) => {
          const { idMeal, strMeal, strInstructions, strMealThumb } = f;

          return (
            <article key={idMeal}>
              <div>
                <h2>{strMeal}</h2>
                <img src={strMealThumb} alt={strMeal} />
              </div>
              <div>
                <h3>How to cook</h3>
                <div className="underline"></div>
                <p>{strInstructions}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Food;
