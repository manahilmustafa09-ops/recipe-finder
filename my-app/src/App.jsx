import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages (relative paths)
import Homepage from "./pages/Homepage";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/recipe-page" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;
