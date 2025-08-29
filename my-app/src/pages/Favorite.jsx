import Navbar from "components/Navbar";
import Footer from "components/Footer";
import RecipeCard from "components/RecipeCard";

const favoriteRecipes = [
  {
    id: 1,
    title: "Chocolate Cake Dessert",
    category: "Dessert",
    time: "45 mins",
    rating: "4.8",
    description: "Rich and moist chocolate cake with creamy frosting",
    image: "/src/img/Chocolate Cake Dessert Recipe Card Image (1).png"
  },
  {
    id: 2,
    title: "Freshly Baked Bread",
    category: "Bakery",
    time: "2 hours",
    rating: "4.9",
    description: "Homemade artisan bread with crispy crust",
    image: "/src/img/Freshly Baked Bread Recipe Card Image.png"
  }
];

export default function Favorites() {
  return (
    <div className="font-sans">
      <Navbar />
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Favorite Recipes</h2>
        <p className="text-gray-600">
          Save and access your favorite recipes here.
        </p>
      </section>
      <section className="px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {favoriteRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
