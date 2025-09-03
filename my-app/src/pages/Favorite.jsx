import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
       <Navbar />
      <h2 className="text-3xl font-bold text-gray-800 mb-6">❤️ My Favorites</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-600">No recipes added to favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white shadow-md rounded-xl overflow-hidden relative group"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {recipe.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {recipe.description}
                </p>
              </div>

              <button
                onClick={() => removeFavorite(recipe.id)}
                className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}
