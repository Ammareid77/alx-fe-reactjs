// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = () => {
  const { deleteRecipe } = useRecipeStore();
  const navigate = useNavigate();
  const recipeId = window.location.pathname.split('/').pop();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/recipes'); // Navigate to a different page after deleting the recipe
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
};

export default DeleteRecipeButton;
