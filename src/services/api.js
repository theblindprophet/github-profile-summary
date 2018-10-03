/**
 * Contains all API calls
 */
const API_URL = process.env.REACT_APP_API_URL;

const getUserData = username => fetch(`${API_URL}/github/userData/${username}`);

export { getUserData };
