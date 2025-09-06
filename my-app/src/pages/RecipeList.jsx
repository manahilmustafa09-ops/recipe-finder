import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const sampleRecipes = [
      { id: 1, title: "Chicken Biryani", rating: 4.8, image: "https://i.ibb.co/3fswKJq/biryani.jpg" },
      { id: 2, title: "Pasta Alfredo", rating: 4.5, image: "https://i.ibb.co/G2zvD0W/pasta.jpg" },
      { id: 3, title: "Grilled Sandwich", rating: 4.2, image: "https://i.ibb.co/Lv6Zrhp/sandwich.jpg" }
    ];
    setRecipes(sampleRecipes);

    const storedFavs = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavs);
  }, []);

  const addToFavourites = (recipe) => {
    if (!favourites.find((fav) => fav.id === recipe.id)) {
      const updatedFavs = [...favourites, recipe];
      setFavourites(updatedFavs);
      localStorage.setItem("favourites", JSON.stringify(updatedFavs));

      alert(`${recipe.title} added to favourites!`);
    } else {
      alert(`${recipe.title} is already in favourites!`);
    }
  };

  return (
    <section className="recipe-list">
      <h2>All Recipes</h2>
      <div className="grid">
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} addToFavourites={addToFavourites} />
        ))}
      </div>
    </section>
  );
}

