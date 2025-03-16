import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const { state } = useRecipeStore();

  return (
    <div>
      <h1>Recipe List</h1>
      <SearchBar />
      <ul>
        {state.filteredRecipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h2>{recipe.title}</h2>
            </Link>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;

