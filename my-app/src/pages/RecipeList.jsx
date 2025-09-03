import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { tryFetch } from "../../utils/tryfetch";
import "../App.css";



function RecipeList() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const location = useLocation(); 

  useEffect(() => {
    // If navigated from Detail page with state
    if (location.state?.fromSearch) {
      setRecipes(location.state.recipes || []);
      setQuery(location.state.query || "");
      return;
    }

    // Default fetch when first time load
    const fetchDefault = async () => {
      const apiKey1 = import.meta.env.VITE_SPOONACULAR_API_KEY1;
      const apiKey2 = import.meta.env.VITE_SPOONACULAR_API_KEY2;

      const url1 = `https://api.spoonacular.com/recipes/complexSearch?number=6&apiKey=${apiKey1}`;
      const url2 = `https://api.spoonacular.com/recipes/complexSearch?number=6&apiKey=${apiKey2}`;

      const data = await tryFetch(url1, url2);
      setRecipes(data?.results || []);
    };

    fetchDefault();
  }, [location]);

  const searchRecipes = async () => {
    const apiKey1 = import.meta.env.VITE_SPOONACULAR_API_KEY1;
    const apiKey2 = import.meta.env.VITE_SPOONACULAR_API_KEY2;

    const url1 = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${apiKey1}`;
    const url2 = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${apiKey2}`;

    const data = await tryFetch(url1, url2);
    setRecipes(data?.results || []);
  };

  return (
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            value={query}
            placeholder="Search recipes..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={searchRecipes}>Search</button>
        </div>

        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <div className="recipe-card" key={`${recipe.id}-${index}`}>
              <Link
                to={`/recipes/${recipe.id}`}
                state={{ fromSearch: true, recipes, query }}
              >
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
                <div className="hover-detail">Click to see details</div>
              </Link>
            </div>
          ))}

          {recipes.length === 0 && (
            <p className="empty-message">
              🔍 Try searching for something like "pasta", "pizza", or "salad"
            </p>
          )}
        </div>
      </div>
  );
}

export default RecipeList;
