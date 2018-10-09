const firebase = require('firebase/app');
require('firebase/auth');

firebase.initializeApp({
  apiKey: 'AIzaSyCQJP_0otPH9DQ7yr7CvVXeGNyIcRSBG-c',
  authDomain: 'github-profile-summary-web-app.firebaseapp.com',
  databaseURL: 'https://github-profile-summary-web-app.firebaseio.com',
  projectId: 'github-profile-summary-web-app',
  storageBucket: 'github-profile-summary-web-app.appspot.com',
  messagingSenderId: '118447030924'
});
const provider = new firebase.auth.GithubAuthProvider();
let authUser = null;

const listenAuth = () => {
  firebase.auth().onAuthStateChanged((user) => {
    authUser = user;
  });
  return firebase.auth();
};

const authenticate = () => {
  const promise = new Promise(async (resolve, reject) => {
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const token = result.credential.accessToken;
      return resolve(token);
    } catch (e) {
      return reject(e);
    }
  });
  return promise;
};

const unauthenticate = () => firebase.auth().signOut();

const getUser = () => authUser;

const isAuthenticated = () => authUser !== null;

export { authenticate, unauthenticate, listenAuth, isAuthenticated, getUser };
