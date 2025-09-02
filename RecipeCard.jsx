import React from "react";
import "./index.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="recipe-img"
      />
      <h3 className="recipe-title">{recipe.strMeal}</h3>
      <button className="detail-btn">View Detail</button>
    </div>
  );
};

export default RecipeCard;
