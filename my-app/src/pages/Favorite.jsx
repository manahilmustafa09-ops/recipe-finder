<<<<<<< HEAD
// import Navbar from "components/Navbar";
// import Footer from "components/Footer";

// export default function Favorites() {
//   return (
//     <div className="font-sans">
//       <Navbar />
//       <section className="px-6 py-12 text-center">
//         <h2 className="text-3xl font-bold mb-4">Your Favorite Recipes</h2>
//         <p className="text-gray-600">
//           Save and access your favorite recipes here.
//         </p>
//       </section>
//       <Footer />
//     </div>
//   );
// }
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

// function Favourites({ favourites, removeFromFavourite }) {
//   return (
//     <div style={{ padding: "20px" }}>
//       <Navbar />
//       <h2> My Favourite Recipes</h2>

//       {favourites && favourites.length > 0 ? (
//         favourites.map((item) => (
//           <div key={item.id} style={{ marginBottom: "15px" }}>
//             <h4>{item.name}</h4>
//             <button onClick={() => removeFromFavourite(item.id)}>
//               Remove
//             </button>
//           </div>
//         ))
//       ) : (
//         <p>No favourites added yet.</p>
//       )}
//       <Footer />
//     </div>
//   );
// }
// export default Favourites;
// import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"

// function Favourites() {
//   const [favourites, setFavourites] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("favourites")) || [];
//     setFavourites(saved);
//   }, []);

//   const removeFromFavourite = (id) => {
//     const updated = favourites.filter((item) => item.id !== id);
//     setFavourites(updated);
//     localStorage.setItem("favorites", JSON.stringify(updated));
//   };


//   return (
//     <div style={{ padding: "20px" }}>
//       <Navbar />
//       <h2 className="Recipe">My Favourite Recipes</h2>

//       {favourites && favourites.length > 0 ? (
//         favourites.map((item) => (
//           <div
//             key={item.id}
//             className="key"
//           >
//             <div>
//               <h4 className="title">{item.title}</h4>
//               <p className="category">{item.category}</p>
//             </div>
//             <button
//               onClick={() => removeFromFavourite(item.id)}
//               className="item"
//             >
//               Remove
//             </button>
//           </div>
//         ))
//       ) : (
//         <p>No favourites added yet.</p>
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default Favourites;
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavourites(saved);
  }, []);

  const removeFromFavourite = (id) => {
    const updated = favourites.filter((item) => item.id !== id);
    setFavourites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };
=======
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
>>>>>>> 661857a66c8dfd76ce5084f213939a8e86277a52

  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
<<<<<<< HEAD
      <h2 className="Recipe">My Favourite Recipes</h2>

      {favourites && favourites.length > 0 ? (
        favourites.map((item) => (
          <div
            key={item.id}
            className="item"
          >
            <div>
              <h4 className="title">{item.title}</h4>
              <p className="category">{item.category}</p>
            </div>
            <button
              onClick={() => removeFromFavourite(item.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No favourites added yet.</p>
      )}
=======
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
>>>>>>> 661857a66c8dfd76ce5084f213939a8e86277a52
      <Footer />
    </div>
  );
}

export default Favourites;

