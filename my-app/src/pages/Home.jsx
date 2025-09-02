import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Footer from '../components/footer';
import RecipeCard from '../components/RecipeCard';

// Import images from img folder
import PastaImage from '../img/Pasta.png';
import HealthySaladImage from '../img/Healthy Salad Recipe Card Image.png';
import FreshlyBakedBreadImage from '../img/Freshly Baked Bread Recipe Card Image.png';
import ChocolateCakeImage from '../img/Chocolate Cake Dessert Recipe Card Image (1).png';
import HomepageImage from '../img/homepage.jpeg';









// Main Home Component
export default function Home() {
  const recipes = [
    {
      id: 1,
      title: "Creamy Spaghetti Carbonara",
      category: "Italian",
      time: "25 mins",
      rating: "4.8",
      difficulty: "Medium",
      description:
        "A classic Italian pasta dish with creamy egg sauce, pancetta, and plenty of Parmesan cheese. Simple yet incredibly satisfying.",
      image: PastaImage,
    },
    {
      id: 2,
      title: "Fresh Garden Salad",
      category: "Vegetarian",
      time: "15 mins",
      rating: "4.5",
      difficulty: "Easy",
      description:
        "A refreshing mix of greens, cherry tomatoes, cucumber, and avocado with a light olive oil dressing. Perfect for a healthy lunch.",
      image: HealthySaladImage,
    },
    {
      id: 3,
      title: "Aromatic Chicken Curry",
      category: "Indian",
      time: "40 mins",
      rating: "4.9",
      difficulty: "Medium",
      description:
        "A rich and flavorful curry with tender chicken pieces in a golden sauce, served with fluffy rice and fresh cilantro.",
      image: FreshlyBakedBreadImage,
    },
    {
      id: 4,
      title: "Decadent Chocolate Cake",
      category: "Dessert",
      time: "60 mins",
      rating: "5.0",
      difficulty: "Hard",
      description:
        "A rich chocolate cake with layers of ganache and buttercream frosting, topped with fresh berries. Perfect for special occasions.",
      image: ChocolateCakeImage,
    },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Featured Recipes Section */}
      <section className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Recipes
          </h2>
          
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}