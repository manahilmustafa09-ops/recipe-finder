import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
