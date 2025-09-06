import React, { useState, useEffect } from "react";

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
    <section>
      <h2>My Favourite Recipes ❤️</h2>
      {favourites.length === 0 ? (
        <p>No favourites yet! Add some from Recipes page.</p>
      ) : (
        <div className="fav-list">
          {favourites.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>⭐ {recipe.rating}/5</p>
              <button
                className="btn remove-btn"
                onClick={() => removeFavourite(recipe.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

