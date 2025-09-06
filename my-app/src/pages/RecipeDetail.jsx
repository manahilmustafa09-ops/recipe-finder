import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const sampleRecipes = [
      { id: 1, title: "Chicken Biryani", rating: 4.8, image:"https://unsplash.com/photos/a-bowl-of-food-on-a-plate-with-spices-TNNZ8KNPfbY" , description: "A spicy rice dish with tender chicken, aromatic spices, and basmati rice." },
      { id: 2, title: "Pasta Alfredo", rating: 4.5, image: "https://i.ibb.co/G2zvD0W/pasta.jpg", description: "A creamy pasta dish made with parmesan cheese, butter, and rich white sauce." },
      { id: 3, title: "Grilled Sandwich", rating: 4.2, image: "https://i.ibb.co/Lv6Zrhp/sandwich.jpg", description: "Crispy bread filled with cheese and veggies, grilled to perfection." }
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

