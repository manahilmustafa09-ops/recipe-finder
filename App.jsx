import React from "react";
import RecipePage from "./RecipePage";
import "./index.css";

function App() {
  return (
    <div>
      {/* 🔹 Header */}
      <header className="header">
        <div className="logo">RecipeFinder</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Favorite</a>
        </nav>
      </header>

      {/* 🔹 Main Page */}
      <RecipePage />

      {/* 🔹 Footer (component ke andar hona chahiye) */}
      <footer className="footer">
        2025 RecipeFinder
      </footer>
    </div>
  );
}

export default App;
