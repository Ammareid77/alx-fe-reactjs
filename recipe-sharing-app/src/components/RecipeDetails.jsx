// src/components/RecipeDetails.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { state } = useRecipeStore();
  const recipeId = window.location.pathname.split('/').pop();
  const recipe = state.recipes.find(recipe => recipe.id === recipeId);

  return (
    <div>
      <h2>Recipe Details</h2>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;
