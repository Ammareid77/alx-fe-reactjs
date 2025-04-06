import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList"; // Adjust path as needed


describe("TodoList Component", () => {
  
  // Initial Render Test
  test("renders correctly with initial todos", () => {
    const initialTodos = ["First Todo", "Second Todo"];
    render(<TodoList initialTodos={initialTodos} />);
    
    // Check if initial todos are rendered
    initialTodos.forEach(todo => {
      expect(screen.getByText(todo)).toBeInTheDocument();
    });
  });

  // Test Adding Todos
  test("allows a user to add a new todo", () => {
    render(<TodoList />);
    
    const inputField = screen.getByPlaceholderText("Add a new todo"); // Adjust based on your input placeholder
    const addButton = screen.getByText("Add"); // Adjust button text
    
    fireEvent.change(inputField, { target: { value: "New Todo" } });
    fireEvent.click(addButton);
    
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  // Test Toggling Todos
  test("allows a user to toggle a todo", () => {
    const initialTodos = ["First Todo"];
    render(<TodoList initialTodos={initialTodos} />);
    
    const toggleButton = screen.getByText("First Todo"); // Adjust based on your component's behavior
    fireEvent.click(toggleButton);
    
    expect(toggleButton).toHaveClass("completed"); // Adjust if you're using specific classes for completed todos
  });

  // Test Deleting Todos
  test("allows a user to delete a todo", () => {
    const initialTodos = ["First Todo"];
    render(<TodoList initialTodos={initialTodos} />);
    
    const deleteButton = screen.getByText("Delete"); // Adjust based on your button text for delete
    
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText("First Todo")).not.toBeInTheDocument();
  });

});import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "../path/to/TodoList"; // Adjust the import path accordingly

describe("TodoList Component", () => {
  
  // Initial Render Test
  test("renders correctly with initial todos", () => {
    const initialTodos = ["First Todo", "Second Todo"];
    render(<TodoList initialTodos={initialTodos} />);
    
    // Check if initial todos are rendered
    initialTodos.forEach(todo => {
      expect(screen.getByText(todo)).toBeInTheDocument();
    });
  });

  // Test Adding Todos
  test("allows a user to add a new todo", () => {
    render(<TodoList />);
    
    const inputField = screen.getByPlaceholderText("Add a new todo"); // Adjust based on your input placeholder
    const addButton = screen.getByText("Add"); // Adjust button text
    
    fireEvent.change(inputField, { target: { value: "New Todo" } });
    fireEvent.click(addButton);
    
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  // Test Toggling Todos
  test("allows a user to toggle a todo", () => {
    const initialTodos = ["First Todo"];
    render(<TodoList initialTodos={initialTodos} />);
    
    const toggleButton = screen.getByText("First Todo"); // Adjust based on your component's behavior
    fireEvent.click(toggleButton);
    
    expect(toggleButton).toHaveClass("completed"); // Adjust if you're using specific classes for completed todos
  });

  // Test Deleting Todos
  test("allows a user to delete a todo", () => {
    const initialTodos = ["First Todo"];
    render(<TodoList initialTodos={initialTodos} />);
    
    const deleteButton = screen.getByText("Delete"); // Adjust based on your button text for delete
    
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText("First Todo")).not.toBeInTheDocument();
  });

});