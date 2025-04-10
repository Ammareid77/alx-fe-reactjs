import React, { useState } from "react";

const TodoList = () => {
const [todos, setTodos] = useState([
    { id: 1, text: "Sample Todo", completed: false },
]);
const [input, setInput] = useState("");

const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
    }
};

    const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
};

    const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
};

    return (
    <div>
    <form onSubmit={addTodo}>
        <input
        placeholder="Add todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
    </form>

    <ul>
        {todos.map((todo) => (
        <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
        ))}
    /ul>
    </div>
);
};

export default TodoList;