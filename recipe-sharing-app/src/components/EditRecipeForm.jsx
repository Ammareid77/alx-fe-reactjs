// src/components/EditRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { state, updateRecipe } = useRecipeStore();
  const recipeId = window.location.pathname.split('/').pop();
  const recipe = state.recipes.find(recipe => recipe.id === recipeId);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = event => {
    event.preventDefault();
    updateRecipe({ id: recipeId, changes: { title, description } });
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;

