import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';

// Import images
import ChocolateCakeImage from '../img/Chocolate Cake Dessert Recipe Card Image (1).png';
import FreshlyBakedBreadImage from '../img/Freshly Baked Bread Recipe Card Image.png';
import HealthySaladImage from '../img/Healthy Salad Recipe Card Image.png';
import PastaImage from '../img/Pasta.png';

const recipes = [
  {
    id: 1,
    title: "Chocolate Cake Dessert",
    category: "Dessert",
    time: "45 mins",
    rating: "4.8",
    difficulty: "Medium",
    description: "Rich and moist chocolate cake with creamy frosting",
    image: ChocolateCakeImage
  },
  {
    id: 2,
    title: "Freshly Baked Bread",
    category: "Bakery",
    time: "2 hours",
    rating: "4.9",
    difficulty: "Hard",
    description: "Homemade artisan bread with crispy crust",
    image: FreshlyBakedBreadImage
  },
  {
    id: 3,
    title: "Healthy Salad",
    category: "Salad",
    time: "15 mins",
    rating: "4.7",
    difficulty: "Easy",
    description: "Fresh greens with seasonal vegetables and dressing",
    image: HealthySaladImage
  },
  {
    id: 4,
    title: "Pasta Delight",
    category: "Pasta",
    time: "30 mins",
    rating: "4.6",
    difficulty: "Easy",
    description: "Classic pasta dish with rich tomato sauce",
    image: PastaImage
  }
];

export default function Recipes() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            All Recipes
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

