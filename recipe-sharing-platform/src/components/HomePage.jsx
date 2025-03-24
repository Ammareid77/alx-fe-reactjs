import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load data when the component mounts
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Recipe Sharing Platform
      </h1>

      {/* Grid Layout for Recipes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link 
            to={`/recipe/${recipe.id}`} 
            key={recipe.id} 
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 block"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              {recipe.title}
            </h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              View Recipe
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
