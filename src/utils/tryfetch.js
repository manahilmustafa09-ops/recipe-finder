// src/utils/tryFetch.js

export const tryFetch = async (url1, url2) => {
  try {
    const res1 = await fetch(url1);
    const data1 = await res1.json();

    if (data1.code === 402 || data1.status === "failure") {
      console.warn("First API key limit reached, trying second key...");
      const res2 = await fetch(url2);
      return await res2.json();
    }

    return data1;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
};
