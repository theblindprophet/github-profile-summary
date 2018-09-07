class User {
  username = ''; // login
  name = '';
  email = '';
  url = ''; // html_url
  avatar = '';
  company = '';
  blog = '';
  location = '';
  available = false; // hirable
  bio = '';
  publicRepos = 0;
  publicGists = 0;
  followers = 0;
  following = 0;
  createdAt = null;

  constructor(user) {

  }
}

module.exports = User;