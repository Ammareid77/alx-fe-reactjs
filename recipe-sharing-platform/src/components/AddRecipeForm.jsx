import { useState } from 'react';
import useRecipeStore from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  // State for recipe fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [ingredientInput, setIngredientInput] = useState('');
  const [instructionInput, setInstructionInput] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Title and description are required!');
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      description,
      image,
      ingredients,
      instructions,
    };

    addRecipe(newRecipe);
    navigate('/');
  };

  // Add ingredient to list
  const handleAddIngredient = () => {
    if (ingredientInput.trim()) {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput('');
    }
  };

  // Add instruction to list
  const handleAddInstruction = () => {
    if (instructionInput.trim()) {
      setInstructions([...instructions, instructionInput]);
      setInstructionInput('');
    }
  };

  // Remove item from a list
  const handleRemoveItem = (index, setList) => {
    setList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700 font-medium">Image URL (optional):</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium">Ingredients:</label>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="Add an ingredient"
            />
            <button
              type="button"
              onClick={handleAddIngredient}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <ul className="mt-2 space-y-1">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="flex justify-between items-center">
                {ingredient}
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index, setIngredients)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-gray-700 font-medium">Instructions:</label>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={instructionInput}
              onChange={(e) => setInstructionInput(e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="Add an instruction step"
            />
            <button
              type="button"
              onClick={handleAddInstruction}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add
            </button>
          </div>
          <ol className="mt-2 space-y-1">
            {instructions.map((step, index) => (
              <li key={index} className="flex justify-between items-center">
                {step}
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index, setInstructions)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ol>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
