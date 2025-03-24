import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );
   const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  // Load recipe based on ID
  useEffect(() => {
    const foundRecipe = recipeData.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

 if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-xl font-semibold">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Recipe Image */}
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      {/* Recipe Title & Description */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
      <p className="text-gray-600 mb-6">{recipe.description}</p>

      {/* Ingredients Section */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Ingredients:</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-600">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* Instructions Section */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Instructions:</h2>
      <ol className="list-decimal pl-6 mb-6 text-gray-600">
        {recipe.instructions?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      {/* Edit Form */}
      <EditRecipeForm recipe={recipe} />

      {/* Delete Button */}
      <button
        onClick={() => {
          if (window.confirm('Are you sure you want to delete this recipe?')) {
            deleteRecipe(recipe.id);
            navigate('/');
          }
        }}
        className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded shadow mt-4"
      >
        Delete Recipe
      </button>
    </div>
  );
};

export default RecipeDetails;
