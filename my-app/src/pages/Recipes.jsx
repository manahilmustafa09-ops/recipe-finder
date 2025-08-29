import Navbar from "components/Navbar";
import Footer from "components/Footer";
import RecipeCard from "components/RecipeCard";

const recipes = [
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
  },
  {
    id: 3,
    title: "Healthy Salad",
    category: "Salad",
    time: "15 mins",
    rating: "4.7",
    description: "Fresh greens with seasonal vegetables and dressing",
    image: "/src/img/Healthy Salad Recipe Card Image.png"
  },
  {
    id: 4,
    title: "Pasta Delight",
    category: "Pasta",
    time: "30 mins",
    rating: "4.6",
    description: "Classic pasta dish with rich tomato sauce",
    image: "/src/img/Pasta.png"
  }
];

export default function Recipes() {
  return (
    <div className="font-sans">
      <Navbar />
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">All Recipes</h2>
        <p className="text-gray-600">
          Here you'll find a collection of all our delicious recipes.
        </p>
      </section>
      
      <section className="px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
