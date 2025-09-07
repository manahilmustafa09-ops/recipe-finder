import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Favourite() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavs);
  }, []);

  const removeFavourite = (id) => {
    const updated = favourites.filter((r) => r.id !== id);
    setFavourites(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));

    alert("Recipe removed from favourites!");
  };

  return (
    <section className="recipe-list">
      <h2>My Favourite Recipes ❤️</h2>
      {favourites.length === 0 ? (
        <p className="no-fav">No favourites yet! Add some from Recipes page.</p>
      ) : (
        <div className="grid">
          {favourites.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>⭐ {recipe.rating}/5</p>
              <div className="card-actions">
                <Link to={`/recipes/${recipe.id}`} className="btn">
                  View Details
                </Link>
                <button
                  className="btn remove-btn"
                  onClick={() => removeFavourite(recipe.id)}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
