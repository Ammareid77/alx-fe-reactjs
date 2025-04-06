import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../Components/TodoList"; // Adjust the path if needed

test("renders initial todo", () => {
  render(<TodoList />);
  expect(screen.getByText(/Sample Todo/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/add todo/i), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText(/Sample Todo/i);
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteBtn = screen.getByText(/Delete/i);
  fireEvent.click(deleteBtn);
  expect(screen.queryByText(/Sample Todo/i)).not.toBeInTheDocument();
});
