import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import RecipeList from './components/RecipeList';
import RecipeDetail from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm"; // ✅ Import AddRecipeForm

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="text-center text-2xl text-blue-500 font-bold mt-10">
        Welcome to the Recipe Sharing Platform! 🚀
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* ✅ React Router for navigation */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* ✅ Added Route */}
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
