import { useState } from "react";
import { FaSearch, FaClock, FaLeaf, FaIceCream } from "react-icons/fa";

export default function Hero() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      setIsSearching(true);
      // Simulate search with timeout
      setTimeout(() => {
        setIsSearching(false);
        console.log("Searching for:", search);
      }, 1500);
    }
  };

  const quickFilters = [
    { icon: FaClock, label: "Quick Meals", value: "quick" },
    { icon: FaLeaf, label: "Vegetarian", value: "vegetarian" },
    { icon: FaIceCream, label: "Desserts", value: "desserts" }
  ];

  return (
    <div
      className="relative bg-cover bg-center h-[550px] md:h-[600px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(/src/img/homepage.jpeg)`,
      }}
      role="img"
      aria-label="Delicious food background"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      
      <div className="relative text-white px-4 sm:px-6 max-w-6xl mx-auto w-full">
        {/* Main Content */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Discover Culinary Delights
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Find the perfect recipe for any occasion, from quick weeknight dinners to gourmet celebrations
          </p>
        </div>

        {/* Search Container */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-1.5 border border-white/20 shadow-2xl">
            <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Search recipes, ingredients, or cuisines..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-6 py-4 text-gray-800 outline-none text-lg placeholder-gray-500 bg-transparent"
                disabled={isSearching}
                aria-label="Search recipes"
              />
              <button
                type="submit"
                disabled={isSearching || !search.trim()}
                className={`bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 ${
                  isSearching ? 'opacity-50 cursor-not-allowed' : 'hover:from-green-700 hover:to-green-800'
                }`}
                aria-label="Search"
              >
                {isSearching ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <FaSearch className="w-5 h-5" />
                    <span className="hidden md:inline">Search</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Quick Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {quickFilters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.value}
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
                onClick={() => console.log("Filter:", filter.value)}
                aria-label={`Filter by ${filter.label}`}
              >
                <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Results Indicator */}
        {isSearching && (
          <div className="mt-6">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
              Searching recipes...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
