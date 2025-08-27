import { useState } from "react";

export default function Hero() {
  const [search, setSearch] = useState("");

  return (
    <div
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('/8e210fd7-e805-40b6-9b1a-715668de24e7.jpeg')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Find the Perfect Recipe for Your Mood
        </h2>
        <div className="flex items-center justify-center bg-white rounded-full overflow-hidden w-[90%] md:w-[500px] mx-auto">
          <input
            type="text"
            placeholder="Search for recipes, ingredients, or cuisines..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 text-gray-700 outline-none"
          />
          <button className="bg-green-700 text-white px-6 py-2">Search</button>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-white text-gray-700 px-4 py-2 rounded-full shadow">
            Quick
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-full shadow">
            Vegetarian
          </button>
        </div>
      </div>
    </div>
  );
}
