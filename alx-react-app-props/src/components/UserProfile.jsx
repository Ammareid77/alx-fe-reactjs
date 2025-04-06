// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import { UserContext } from 'path/to/UserContext';

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {/* Render other user-related information */}
    </div>
  );
};