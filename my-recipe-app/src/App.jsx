/*import { useState, useEffect } from "react";
import { getRecipes, getRecipeInfo } from "./api";

function App() {
  const [query, setQuery] = useState("");        // search input
  const [recipes, setRecipes] = useState([]);    // search results list
  const [selected, setSelected] = useState(null); // selected recipe
  const [loading, setLoading] = useState(false);

  // Search recipes
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await getRecipes(query);
      setRecipes(data.results);
    } catch (err) {
      console.error("Search error:", err);
    }
    setLoading(false);
  };

  // Fetch full detail when a recipe is selected
  const [recipeDetail, setRecipeDetail] = useState(null);
  useEffect(() => {
    if (selected) {
      async function fetchDetail() {
        setLoading(true);
        try {
          const data = await getRecipeInfo(selected);
          setRecipeDetail(data);
        } catch (err) {
          console.error("Detail error:", err);
        }
        setLoading(false);
      }
      fetchDetail();
    }
  }, [selected]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🍲 My Recipe App</h1>

      {/* Search bar */
      /*<form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {/* Recipe List }*/
      /*{!selected && recipes.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
          {recipes.map((r) => (
            <div
              key={r.id}
              onClick={() => setSelected(r.id)}
              style={{ cursor: "pointer", border: "1px solid #ccc", padding: "10px", width: "200px" }}
            >
              <img src={r.image} alt={r.title} width="180" />
              <h3>{r.title}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Recipe Detail }*/
      /*{selected && recipeDetail && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => { setSelected(null); setRecipeDetail(null); }}>
            🔙 Back
          </button>
          <h2>{recipeDetail.title}</h2>
          <img src={recipeDetail.image} alt={recipeDetail.title} width="300" />

          <h3>Ingredients</h3>
          <ul>
            {recipeDetail.extendedIngredients.map((ing) => (
              <li key={ing.id}>{ing.original}</li>
            ))}
          </ul>

          <h3>Steps</h3>
          <ol>
            {recipeDetail.analyzedInstructions[0]?.steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default App;*/
  function App() {
  return <div></div>;
}

export default App;
