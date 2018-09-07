/**
 * Contains all API calls
 */
const API_URL = process.env.REACT_APP_API_URL;

const getUserData = (username) => {
  return fetch(`${API_URL}/github/userData/${username}`);
}

export { getUserData };