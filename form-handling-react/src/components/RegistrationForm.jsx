import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required.';
        if (!email) newErrors.email = 'Email is required.';
        if (!password) newErrors.password = 'Password is required.';
        setErrors(newErrors);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={handleUsernameChange} 
                    required 
                />
                {errors.username && <span>{errors.username}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    required 
                />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={handlePasswordChange} 
                    required 
                />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;