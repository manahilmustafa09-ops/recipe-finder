import { FaStar } from "react-icons/fa";

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <span className="text-sm font-semibold text-red-600">
          {recipe.category}
        </span>
        <h4 className="text-lg font-bold mt-1">{recipe.title}</h4>
        <div className="flex items-center gap-4 text-gray-500 text-sm mt-1">
          <span>{recipe.time}</span>
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" /> {recipe.rating}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-2">{recipe.description}</p>
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-green-800">
          View Recipe
        </button>
      </div>
    </div>
  );
}
