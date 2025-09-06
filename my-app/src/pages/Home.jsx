import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h2>
          Welcome to <span>Recipe Finder</span> 🍴
        </h2>
        <p>
          Discover mouth-watering recipes, save your favourites, and explore
          cooking like never before!
        </p>
        <Link to="/recipes" className="btn explore-btn">
          🚀 Explore Recipes
        </Link>
      </div>
    </section>
  );
}
