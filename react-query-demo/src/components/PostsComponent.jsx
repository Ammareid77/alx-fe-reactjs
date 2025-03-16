// PostsComponent.jsx
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError } = useQuery(
    'posts',
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 60, // 1 hour
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: true,
      keepPreviousData: true,
    }
  );
  const queryClient = useQueryClient();

  const handleRefetch = () => {
    queryClient.invalidateQueries('posts');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleRefetch}>Refetch Posts</button>
    </div>
  );
};

export default PostsComponent;


