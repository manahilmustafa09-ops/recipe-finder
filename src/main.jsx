import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";


// 👇 pages import
import RecipeList from "./pages/RecipeList.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Search + list page */}
        <Route path="/" element={<RecipeList />} />

        {/* Detail page */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

