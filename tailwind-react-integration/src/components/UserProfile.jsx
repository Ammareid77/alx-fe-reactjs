import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-8 hover:shadow-xl transition-shadow duration-300">
      <img className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-full w-32 h-32" src="profile.jpg" alt="Profile" />
      <h2 className="text-xl hover:text-blue-500">User Name</h2>
      <p className="text-gray-600">User bio or description goes here.</p>
    </div>
  );
};

export default UserProfile;