import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import "./index.css";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const cuisines = ["Pakistan","Indian"]; // ✅ jo cuisines chahiye
    Promise.all(
      cuisines.map((area) =>
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
          .then((res) => res.json())
      )
    )
      .then((results) => {
        const allMeals = results.flatMap((r) => r.meals || []);
        // ✅ sirf 9 dishes lena
        setRecipes(allMeals.slice(0, 9));
      })
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  return (
    <div className="recipes-page">
      <h1 className="page-title">Popular Recipes</h1>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
