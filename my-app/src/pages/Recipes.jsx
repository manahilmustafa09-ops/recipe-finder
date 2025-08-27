import Navbar from "components/Navbar";
import Footer from "components/Footer";


export default function Recipes() {
  return (
    <div className="font-sans">
      <Navbar />
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">All Recipes</h2>
        <p className="text-gray-600">
          Here you’ll find a collection of all our delicious recipes.
        </p>
      </section>
      <Footer />
    </div>
  );
}
