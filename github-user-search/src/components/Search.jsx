import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [form, setForm] = useState({
    username: '',
    location: '',
    repos: '',
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, newPage = 1) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);
    setPage(newPage);

    try {
      const data = await searchUsers(form.username, form.location, form.repos, newPage);
      setUsers(data.items);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={(e) => handleSubmit(e)} className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="repos"
          placeholder="Min Repos"
          value={form.repos}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && users.length > 0 && (
          <div className="grid gap-6 mt-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center gap-4 p-4 border rounded">
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">{user.login}</h3>
                  <a
                    href={user.html_url}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        {users.length >= 30 && (
          <div className="mt-4 text-center">
            <button
              onClick={(e) => handleSubmit(e, page + 1)}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
