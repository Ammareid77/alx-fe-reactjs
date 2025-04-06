// src/App.jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from './PostsComponent'; // Make sure to import your PostsComponent

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap your application with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>My React Query App</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;