// src/TodoList.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Buy milk')).toBeInTheDocument();
  expect(screen.getByText('Walk the dog')).toBeInTheDocument();
  expect(screen.getByText('Do laundry')).toBeInTheDocument();
});

test('adds new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add new todo');
  const button = screen.getByText('Add Todo');
  fireEvent.change(input, { target: { value: 'New todo' } });
  fireEvent.click(button);
  expect(screen.getByText('New todo')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText('Buy milk');
  fireEvent.click(todo);
  expect(todo).toHaveStyle('textDecoration: line-through');
});

test('deletes todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Buy milk');
  const button = screen.getByText('Delete');
  fireEvent.click(button);
  expect(todo).not.toBeInTheDocument();
});
