// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  return (
    <div>
        <ul>
    {filteredRecipes.map((recipe, index) => (
      <li key={index}>{recipe.title}</li>
    ))}
  </ul>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  
  );
};

export default RecipeList;