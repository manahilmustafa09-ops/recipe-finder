import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import biryaniImg from '../public/images/biryani.jpg';
import alferdoImg from '../public/images/alfredoPasta.jpg';
import sandwichImg from '../public/images/sandwich.jpg';
import pizzaImg from '../public/images/pizza.jpg';
import karahiImg from '../public/images/karahi.jpg';
import saladImg from '../public/images/salad.jpg';
import butterImg from '../public/images/butter.jpg';
import cakeImg from '../public/images/cake.jpg';
import beefBurgerImg from '../public/images/beefBurger.jpg';

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const sampleRecipes = [
      { id: 1, title: "Chicken Biryani", rating: 4.8, image: biryaniImg},
      { id: 2, title: "Pasta Alfredo", rating: 4.5, image: alferdoImg },
      { id: 3, title: "Grilled Sandwich", rating: 4.2, image: sandwichImg },
      { id: 4, title: "Margherita Pizza", rating: 4.7, image: pizzaImg },
      { id: 5, title: "Chicken Karahi", rating: 4.9, image: karahiImg },
      { id: 6, title: "Veggie Salad", rating: 4.1, image: saladImg },
      { id: 7, title: "Butter Chicken", rating: 4.6, image: butterImg },
      { id: 8, title: "Chocolate Cake", rating: 4.9, image: cakeImg },
      { id: 9, title: "Beef Burger", rating: 4.4, image: beefBurgerImg }
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
