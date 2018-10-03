/**
 * Contains all API calls
 */
const API_URL = process.env.REACT_APP_API_URL;

const getUserData = (username) => {
  return fetch(`${API_URL}/github/userData/${username}`);
}

const postEmail = (data) => {
  return fetch(`${API_URL}/email/user`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export { getUserData, postEmail };
