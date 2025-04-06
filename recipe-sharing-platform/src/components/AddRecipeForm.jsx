import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparationSteps, setPreparationSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!preparationSteps) newErrors.preparationSteps = 'Preparation steps are required';
    else if (ingredients.split(',').length < 2) newErrors.ingredients = 'Must include at least two ingredients';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      // Handle form submission logic
      console.log({ title, ingredients, preparationSteps });
      setTitle('');
      setIngredients('');
      setPreparationSteps('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow-lg">
      <h2 className="text-2xl mb-4">Add a New Recipe</h2>
      
      <label className="block mb-2">
        Recipe Title
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 p-2 rounded"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </label>
      
      <label className="block mb-2">
        Ingredients (comma-separated)
        <textarea 
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-1 block w-full border border-gray-300 p-2 rounded"
        />
        {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
      </label>

      <label className="block mb-2">
        Preparation Steps
        <textarea 
          value={preparationSteps}
          onChange={(e) => setPreparationSteps(e.target.value)}
          className="mt-1 block w-full border border-gray-300 p-2 rounded"
        />
        {errors.preparationSteps && <p className="text-red-500">{errors.preparationSteps}</p>}
      </label>

      <button 
        type="submit" 
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;