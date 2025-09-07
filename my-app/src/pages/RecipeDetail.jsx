import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import biryaniImg from '../public/images/biryani.jpg';
import alferdoImg from '../public/images/alfredoPasta.jpg';
import sandwichImg from '../public/images/sandwich.jpg';
import pizzaImg from '../public/images/pizza.jpg';
import karahiImg from '../public/images/karahi.jpg';
import saladImg from '../public/images/salad.jpg';
import butterImg from '../public/images/butter.jpg';
import cakeImg from '../public/images/cake.jpg';
import beefBurgerImg from '../public/images/beefBurger.jpg';



export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const sampleRecipes = [
      { id: 1, title: "Chicken Biryani", rating: 4.8, image: biryaniImg , description: "A spicy rice dish with tender chicken, aromatic spices, and basmati rice." },
      { id: 2, title: "Pasta Alfredo", rating: 4.5, image: alferdoImg, description: "Creamy pasta with parmesan, butter, and rich white sauce." },
      { id: 3, title: "Grilled Sandwich", rating: 4.2, image: sandwichImg, description: "Crispy bread filled with cheese and veggies, grilled to perfection." },
      { id: 4, title: "Margherita Pizza", rating: 4.7, image: pizzaImg, description: "Classic Italian pizza with tomato sauce, mozzarella, and basil." },
      { id: 5, title: "Chicken Karahi", rating: 4.9, image: karahiImg, description: "Pakistani-style chicken curry cooked in a wok with spices." },
      { id: 6, title: "Veggie Salad", rating: 4.1, image: saladImg, description: "Fresh salad with lettuce, cucumber, tomatoes, and dressing." },
      { id: 7, title: "Butter Chicken", rating: 4.6, image: butterImg, description: "Rich curry made with chicken in creamy tomato gravy." },
      { id: 8, title: "Chocolate Cake", rating: 4.9, image: cakeImg, description: "Moist chocolate cake topped with creamy chocolate frosting." },
      { id: 9, title: "Beef Burger", rating: 4.4, image: beefBurgerImg, description: "Juicy beef patty with cheese, lettuce, and sauce in soft buns." }
    ];

    const found = sampleRecipes.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) return <p>Loading recipe details...</p>;

  return (
    <div className="recipe-detail">
      <img src={recipe.image} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>⭐ {recipe.rating}/5</p>
      <p>{recipe.description}</p>
    </div>
  );
}
