import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
// 
import { tryFetch } from "../../utils/tryfetch";




function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backState = location.state;

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const apiKey1 = import.meta.env.VITE_SPOONACULAR_API_KEY1;
      const apiKey2 = import.meta.env.VITE_SPOONACULAR_API_KEY2;

      const url1 = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey1}`;
      const url2 = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey2}`;

      const data = await tryFetch(url1, url2);
      setRecipe(data);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container"> 
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} width="300" />

      <h3>Ingredients:</h3>
      <ul>
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <p>{recipe.instructions || "No instructions found."}</p>

      <button
        onClick={() => {
          if (backState?.fromSearch) {
            navigate("/", {
              state: {
                fromSearch: true,
                recipes: backState.recipes,
                query: backState.query,
              },
            });
          } else {
            navigate("/");
          }
        }}
      >
        🔙 Back
      </button>
    </div>
    </div>
  );
}

export default RecipeDetail;
