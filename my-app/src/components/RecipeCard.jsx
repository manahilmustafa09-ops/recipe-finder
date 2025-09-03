import { FaStar, FaClock, FaHeart, FaUtensils } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function RecipeCard({ recipe, loading = false }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [message, setMessage] = useState(""); 

  useEffect(() => {
    if (recipe?.id) {
      const saved = JSON.parse(localStorage.getItem("favorites")) || [];
      const exists = saved.find((item) => item.id === recipe.id);
      setIsFavorite(!!exists);
    }
  }, [recipe?.id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    let saved = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      saved = saved.filter((item) => item.id !== recipe.id);
      setIsFavorite(false);
      setMessage("Removed from favorites ❌");
    } else {
      saved.push(recipe);
      setIsFavorite(true);
      setMessage("Added to favorites ❤️");
    }

    localStorage.setItem("favorites", JSON.stringify(saved));

    setTimeout(() => setMessage(""), 2000);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse border border-gray-100">
        <div className="w-full h-64 bg-gray-200"></div>
        <div className="p-6">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-gray-100 group relative"
      role="article"
      aria-label={`Recipe: ${recipe.title}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={() => setImageError(true)}
          loading="lazy"
        />
        {imageError && (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            <FaUtensils className="w-12 h-12 text-gray-400" />
          </div>
        )}

        <div className="absolute top-4 left-4">
          <span className="bg-white/95 text-green-700 font-semibold text-xs px-3 py-2 rounded-full shadow-md">
            {recipe.category}
          </span>
        </div>

        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 bg-white/95 p-3 rounded-full shadow-md border border-gray-200 transition-all duration-300 hover:bg-red-50 hover:scale-110"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <FaHeart
            className={`text-lg ${
              isFavorite ? "text-red-500 animate-bounce" : "text-gray-400"
            } transition-all duration-300`}
          />
        </button>
      </div>

      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {recipe.title}
        </h4>

        <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
          <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
            <FaClock className="text-green-600" />
            <span>{recipe.time}</span>
          </span>
          <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
            <FaStar className="text-yellow-400" />
            <span>{recipe.rating}</span>
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-5 line-clamp-3">
          {recipe.description}
        </p>

        <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-all">
          View Recipe
        </button>
      </div>

      {message && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg animate-fadeIn">
          {message}
        </div>
      )}
    </div>
  );
}
