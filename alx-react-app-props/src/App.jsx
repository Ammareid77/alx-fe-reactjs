// App.jsx
import React from 'react';
import UserContext from './UserContext';
import UserProfile from './UserProfile';

function App() {
  return (
    <UserContext.Provider value={{ name: 'Jane Doe', email: 'jane.doe@example.com' }}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;

