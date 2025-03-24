import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? <p>No recipes added yet.</p> : null}
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-3 mb-2">
<h3>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500">
              {recipe.title}
            </Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
