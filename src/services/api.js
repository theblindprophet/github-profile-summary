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

const addUser = (firebaseUid, accessToken) => {
  const response = fetch(`${API_URL}/github/firebaseCredentials`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firebaseUid, accessToken })
  });
  return response;
};

const getRecommendations = async (username) => {
  const response = await fetch(`${API_URL}/github/recommendations/${username}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return response;
};

const postRecommendation = async (username, firebaseUid) => {
  const response = await fetch(`${API_URL}/github/recommendations/${username}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firebaseUid })
  });
  return response;
};

export { getUserData, postEmail, addUser, getRecommendations, postRecommendation };
