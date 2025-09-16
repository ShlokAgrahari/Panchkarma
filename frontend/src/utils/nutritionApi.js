const API_KEY = import.meta.env.VITE_NUTRIENT_API_KEY;

export const fetchNutrition = async (food) => {
  try {
    const res = await fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&api_key=${API_KEY}`
    );
    const data = await res.json();
    if (data.foods && data.foods.length) {
      return data.foods[0].foodNutrients;
    }
    return [];
  } catch (err) {
    console.error("Error fetching nutrition data:", err);
    return [];
  }
};
