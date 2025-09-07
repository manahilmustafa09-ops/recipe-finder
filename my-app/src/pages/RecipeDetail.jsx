import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const sampleRecipes = [
      { id: 1, title: "Chicken Biryani", rating: 4.8, image:"/images/biryani.jpg", description: "A spicy rice dish with tender chicken, aromatic spices, and basmati rice." },
      { id: 2, title: "Pasta Alfredo", rating: 4.5, image: "/images/alfredoPasta.jpg", description: "Creamy pasta with parmesan, butter, and rich white sauce." },
      { id: 3, title: "Grilled Sandwich", rating: 4.2, image: "/images/sandwich.jpg", description: "Crispy bread filled with cheese and veggies, grilled to perfection." },
      { id: 4, title: "Margherita Pizza", rating: 4.7, image: "/images/pizza.jpg", description: "Classic Italian pizza with tomato sauce, mozzarella, and basil." },
      { id: 5, title: "Chicken Karahi", rating: 4.9, image: "/images/karahi.jpg", description: "Pakistani-style chicken curry cooked in a wok with spices." },
      { id: 6, title: "Veggie Salad", rating: 4.1, image: "/images/salad.jpg", description: "Fresh salad with lettuce, cucumber, tomatoes, and dressing." },
      { id: 7, title: "Butter Chicken", rating: 4.6, image: "/images/butter.jpg", description: "Rich curry made with chicken in creamy tomato gravy." },
      { id: 8, title: "Chocolate Cake", rating: 4.9, image: "/images/cake.jpg", description: "Moist chocolate cake topped with creamy chocolate frosting." },
      { id: 9, title: "Beef Burger", rating: 4.4, image: "/images/beefBurger.jpg", description: "Juicy beef patty with cheese, lettuce, and sauce in soft buns." }
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
