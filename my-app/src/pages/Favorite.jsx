import Navbar from "components/Navbar";
import Footer from "components/Footer";

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
      <Footer />
    </div>
  );
}
