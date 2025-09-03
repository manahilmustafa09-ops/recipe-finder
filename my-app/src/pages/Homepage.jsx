// src/pages/Homepage.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="homepage">
      {/* ---------------- NAVBAR ---------------- */}
      <nav className="navbar">
        <div className="logo">RecipeFinder</div>

        {/* Toggle Button for small screens */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/recipeslist" className="nav-link">Recipes</NavLink></li>
          <li><NavLink to="/favorities" className="nav-link">Favorites</NavLink></li>
        </ul>
      </nav>

      {/* ---------------- HERO SECTION ---------------- */}
      <header className="hero">
        <h1>Find the Perfect Recipe for Your Mood</h1>
        
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search for recipes, ingredients, or cuisines..." />
          <button>Search</button>
        </div>

        {/* Filter Buttons */}
        <div className="filters">
          <button>Quick</button>
          <button>Vegetarian</button>
        </div>
      </header>

      {/* ---------------- FEATURED RECIPES ---------------- */}
      <section className="recipes-section">
        <h2>Featured Recipes</h2>
        <div className="card-container">
          
          {/* Recipe Card 1 */}
          <div className="recipe-card">
            <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3" alt="Pasta" />
            <span className="tag italian">Italian</span>
            <h3>Creamy Spaghetti Carbonara</h3>
            <div className="info">
              <span>⏱ 25 mins</span>
              <span>⭐ 4.8</span>
            </div>
            <p>A classic Italian pasta dish with creamy egg sauce, pancetta, and Parmesan cheese.</p>
            <button className="view-btn">View Recipe</button>
          </div>

          {/* Recipe Card 2 */}
          <div className="recipe-card">
            <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2" alt="Salad" />
            <span className="tag vegetarian">Vegetarian</span>
            <h3>Fresh Garden Salad</h3>
            <div className="info">
              <span>⏱ 15 mins</span>
              <span>⭐ 4.5</span>
            </div>
            <p>A refreshing mix of greens, cherry tomatoes, cucumber, and avocado with olive oil dressing.</p>
            <button className="view-btn">View Recipe</button>
          </div>

          {/* Recipe Card 3 */}
          <div className="recipe-card">
            <img src="https://images.unsplash.com/photo-1604908177225-b8f7c64a8c52" alt="Curry" />
            <span className="tag indian">Indian</span>
            <h3>Aromatic Chicken Curry</h3>
            <div className="info">
              <span>⏱ 40 mins</span>
              <span>⭐ 4.9</span>
            </div>
            <p>A flavorful curry with tender chicken in a golden sauce, served with rice and cilantro.</p>
            <button className="view-btn">View Recipe</button>
          </div>

          {/* Recipe Card 4 */}
          <div className="recipe-card">
            <img src="https://images.unsplash.com/photo-1605478379340-1a5f1e46a02e" alt="Cake" />
            <span className="tag dessert">Dessert</span>
            <h3>Decadent Chocolate Cake</h3>
            <div className="info">
              <span>⏱ 60 mins</span>
              <span>⭐ 5.0</span>
            </div>
            <p>A rich chocolate cake with ganache and buttercream frosting, topped with fresh berries.</p>
            <button className="view-btn">View Recipe</button>
          </div>

        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">
        <p>© 2025 RecipeFinder</p>
      </footer>
    </div>
  );
};

export default Homepage;
