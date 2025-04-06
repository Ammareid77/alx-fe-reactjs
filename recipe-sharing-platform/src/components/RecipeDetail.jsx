// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState('');

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <form className="container mx-auto p-4" onSubmit={handleFormSubmit}>
      <h1 className="text-3xl font-bold mb-4">Add Recipe</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter Recipe Title"
          required
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      {ingredients.map((ingredient, index) => (
        <input
          key={index}
          type="text"
          value={ingredient}
          onChange={(e) => handleIngredientChange(index, e.target.value)}
          className="mb-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder={`Ingredient ${index + 1}`}
        />
      ))}
      <button type="button" onClick={handleAddIngredient} className="text-blue-500">
        Add Ingredient
      </button>
      <div className="mb-4 mt-4">
        <label className="block text-gray-700">Cooking Instructions</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          rows="4"
          placeholder="Enter cooking instructions"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;