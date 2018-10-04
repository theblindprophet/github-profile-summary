/**
 * Contains all API calls
 */
const API_URL = process.env.REACT_APP_API_URL;

const getUserData = username => fetch(`${API_URL}/github/userData/${username}`);

const postEmail = (data) => {
  const response = fetch(`${API_URL}/email/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
};

const thumbsUp = (username, accessToken) => {
  const response = fetch(`${API_URL}/github/thumbsup/${username}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ accessToken })
  });
  return response;
};

export { getUserData, postEmail, thumbsUp };
