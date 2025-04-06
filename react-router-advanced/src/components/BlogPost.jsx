// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // Simulate fetching blog post data based on the ID
  const blogPosts = [
    { id: '1', title: 'First Post', content: 'This is the content of the first post.' },
    { id: '2', title: 'Second Post', content: 'This is the content of the second post.' },
    { id: '3', title: 'Third Post', content: 'This is the content of the third post.' },
  ];

  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;