import RecipeCard from "./RecipeCard";

const sampleRecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    category: "Italian",
    time: "25 mins",
    rating: 4.5,
    description: "A classic Roman pasta dish with eggs, cheese, pancetta, and pepper.",
    image: "https://source.unsplash.com/400x300/?pasta",
  },
  {
    id: 2,
    title: "Vegetable Stir Fry",
    category: "Asian",
    time: "20 mins",
    rating: 4.2,
    description: "Quick and healthy stir-fried veggies with soy sauce and garlic.",
    image: "https://source.unsplash.com/400x300/?vegetables",
  },
  {
    id: 3,
    title: "Chicken Curry",
    category: "Indian",
    time: "40 mins",
    rating: 4.8,
    description: "Spicy and flavorful chicken curry cooked in aromatic spices.",
    image: "https://source.unsplash.com/400x300/?curry",
  },
];

export default function Recipes() {
  const addToFavorites = (recipe) => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = saved.find((r) => r.id === recipe.id);

    if (!exists) {
      localStorage.setItem("favorites", JSON.stringify([...saved, recipe]));
      alert("Added to favorites!");
    } else {
      alert("Already in favorites!");
    }
  };

  return (
    <div className="px-8 py-6">
      <h2 className="text-2xl font-bold mb-6">Recipes</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {sampleRecipes.map((recipe) => (
          <div key={recipe.id} className="relative">
            <RecipeCard recipe={recipe} />
            <button
              onClick={() => addToFavorites(recipe)}
              className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded"
            >
              + Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
