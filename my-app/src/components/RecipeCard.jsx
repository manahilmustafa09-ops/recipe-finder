import { FaStar, FaClock, FaHeart, FaUtensils, FaFire } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function RecipeCard({ recipe, loading = false }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Load favorite status from localStorage
  useEffect(() => {
    if (recipe?.id) {
      const favorites = JSON.parse(localStorage.getItem('recipeFavorites') || '{}');
      setIsFavorite(favorites[recipe.id] || false);
    }
  }, [recipe?.id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    
    // Update localStorage
    const favorites = JSON.parse(localStorage.getItem('recipeFavorites') || '{}');
    if (newFavoriteState) {
      favorites[recipe.id] = true;
    } else {
      delete favorites[recipe.id];
    }
    localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 animate-pulse">
        <div className="w-full h-64 bg-gradient-to-r from-gray-200 to-gray-300"></div>
        <div className="p-6">
          <div className="h-4 bg-gray-200 rounded-full w-1/4 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
          <div className="flex items-center gap-4 mb-3">
            <div className="h-4 bg-gray-200 rounded-full w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded-full w-1/4"></div>
          </div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-gray-100 group relative"
      role="article"
      aria-label={`Recipe: ${recipe.title}`}
    >
      {/* Image with overlay effect */}
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
          onError={() => setImageError(true)}
          loading="lazy"
        />
        {imageError && (
          <div className="w-full h-64 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
            <FaUtensils className="w-12 h-12 text-gray-400" />
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm text-green-700 font-semibold text-xs px-3 py-2 rounded-full shadow-md border border-green-100">
            {recipe.category}
          </span>
        </div>

        {/* Difficulty badge */}
        {recipe.difficulty && (
          <div className="absolute top-4 right-16">
            <span className={`${getDifficultyColor(recipe.difficulty)} font-semibold text-xs px-3 py-2 rounded-full shadow-md border border-opacity-20`}>
              {recipe.difficulty}
            </span>
          </div>
        )}

        {/* Favorite button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-md border border-gray-200 transition-all duration-300 hover:bg-red-50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <FaHeart
            className={`text-lg ${
              isFavorite
                ? 'text-red-500 animate-bounce'
                : 'text-gray-400 hover:text-red-400'
            } transition-all duration-300`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-green-700 transition-colors duration-300">
          {recipe.title}
        </h4>

        {/* Meta information */}
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
          <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
            <FaClock className="text-green-600" />
            <span className="font-medium">{recipe.time}</span>
          </span>
          <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
            <FaStar className="text-yellow-400" />
            <span className="font-medium">{recipe.rating}</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-5 line-clamp-3 leading-relaxed">
          {recipe.description}
        </p>

        {/* Action button */}
        <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 active:scale-95 group-hover:shadow-lg">
          View Recipe
        </button>
      </div>
    </div>
  );
}
