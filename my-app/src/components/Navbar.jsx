import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">RecipeFinder</h1>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/recipes" onClick={() => setIsOpen(false)}>Recipes</Link></li>
          <li><Link to="/favourites" onClick={() => setIsOpen(false)}>Favourites</Link></li>
        </ul>
      </div>
    </nav>
  );
}

