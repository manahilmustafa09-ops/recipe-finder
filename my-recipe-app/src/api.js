const BASE = "https://api.spoonacular.com";

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    // helpful error message for debugging (401/402 etc)
    throw new Error(`API error ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getRecipes(query, number = 8) {
  const q = encodeURIComponent(query);
  const url = `${BASE}/recipes/complexSearch?query=${q}&number=${number}&apiKey=${import.meta.env.VITE_API_KEY}`;
  return fetchJson(url);
}

export async function getRecipeInfo(id) {
  const url = `${BASE}/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`;
  return fetchJson(url);
}
