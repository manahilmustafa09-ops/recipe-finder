import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";


export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const sampleRecipes = [
      { id: 1, title: "Chicken Biryani", rating: 4.8, image: "/images/biryani.jpg"},
      { id: 2, title: "Pasta Alfredo", rating: 4.5, image: "/images/alfredoPasta.jpg" },
      { id: 3, title: "Grilled Sandwich", rating: 4.2, image: "/images/sandwich.jpg" },
      { id: 4, title: "Margherita Pizza", rating: 4.7, image: "/images/pizza.jpg" },
      { id: 5, title: "Chicken Karahi", rating: 4.9, image: "images/karahi.jpg" },
      { id: 6, title: "Veggie Salad", rating: 4.1, image: "/images/salad.jpg" },
      { id: 7, title: "Butter Chicken", rating: 4.6, image: "images/butter.jpg"},
      { id: 8, title: "Chocolate Cake", rating: 4.9, image: "/images/cake.jpg" },
      { id: 9, title: "Beef Burger", rating: 4.4, image: "/images/beefBurger.jpg" }
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
