import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submit the form data to the API endpoint
      console.log('Form submitted:', { username, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      <br />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      <br />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      <br />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

