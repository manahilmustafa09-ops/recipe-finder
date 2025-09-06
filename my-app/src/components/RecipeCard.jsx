import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, addToFavourites }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>⭐ {recipe.rating}/5</p>
      <div className="card-actions">
        <Link to={`/recipes/${recipe.id}`} className="btn">View Details</Link>
        <button className="btn" onClick={() => addToFavourites(recipe)}>❤️ Favourite</button>
      </div>
    </div>
  );
}
