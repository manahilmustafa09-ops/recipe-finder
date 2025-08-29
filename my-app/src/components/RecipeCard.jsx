import { FaStar, FaClock, FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function RecipeCard({ recipe, loading = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        <div className="p-6">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
          <div className="flex items-center gap-4 mb-3">
            <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
          </div>
          <div className="h-12 bg-gray-200 rounded mb-4 animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with overlay effect */}
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover transition-transform duration-500 transform hover:scale-105"
        />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-red-600 font-semibold text-xs px-3 py-1 rounded-full shadow-sm">
            {recipe.category}
          </span>
        </div>
        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-red-50"
        >
          <FaHeart 
            className={`text-lg ${isFavorite ? 'text-red-500' : 'text-gray-400'} transition-colors duration-200`}
          />
        </button>
        {/* Hover overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300"></div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h4 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {recipe.title}
        </h4>

        {/* Meta information */}
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
          <span className="flex items-center gap-1">
            <FaClock className="text-gray-400" />
            {recipe.time}
          </span>
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            {recipe.rating}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {recipe.description}
        </p>

        {/* Action button */}
        <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 active:scale-95">
          View Recipe
        </button>
      </div>
    </div>
  );
}
