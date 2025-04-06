// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    // Construct query string based on provided filters
    let query = '';

    if (username) {
      query += `${username} in:login`;
    }

    if (location) {
      query += ` location:${location}`;
    }

    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

    return response.data.items; // returns an array of user objects
  } catch (error) {
    throw new Error('GitHub API request failed');
  }
};
