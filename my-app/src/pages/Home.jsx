import Navbar from "components/Navbar";
import Hero from "components/Hero";
import RecipeCard from "components/RecipeCard";
import Footer from "components/Footer";

export default function Home() {
  const recipes = [
    {
      id: 1,
      title: "Creamy Spaghetti Carbonara",
      category: "Italian",
      time: "25 mins",
      rating: 4.8,
      description:
        "A classic Italian pasta dish with creamy egg sauce, pancetta, and plenty of Parmesan cheese. Simple yet incredibly satisfying.",
      image:
        "https://images.unsplash.com/photo-1589308078052-9149f3d7c109?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Fresh Garden Salad",
      category: "Vegetarian",
      time: "15 mins",
      rating: 4.5,
      description:
        "A refreshing mix of greens, cherry tomatoes, cucumber, and avocado with a light olive oil dressing. Perfect for a healthy lunch.",
      image:
        "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Aromatic Chicken Curry",
      category: "Indian",
      time: "40 mins",
      rating: 4.9,
      description:
        "A rich and flavorful curry with tender chicken pieces in a golden sauce, served with fluffy rice and fresh cilantro.",
      image:
        "https://images.unsplash.com/photo-1604909052743-1c8644e6c184?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Decadent Chocolate Cake",
      category: "Dessert",
      time: "60 mins",
      rating: 5.0,
      description:
        "A rich chocolate cake with layers of ganache and buttercream frosting, topped with fresh berries. Perfect for special occasions.",
      image:
        "https://images.unsplash.com/photo-1612197522583-6b5c5f9d6a56?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <section className="px-6 py-12">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Featured Recipes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
