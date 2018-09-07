# Github Profile Summary

## Authors

[Jamie Gross](https://github.com/theblindprophet) (Grasp Mobile Development, LLC) and [TheWillG](https://www.thewillg.com)

### Installation

`npm i`

### Environment variables

#### Development

Environment variables are stored inside `.env` and must start with `REACT_APP_` (excluding `NODE_ENV` which is automatically added in run, test, and build)

```
REACT_APP_API_URL
REACT_APP_API_USER
REACT_APP_API_KEY
```

#### Production

Environment variables are stored on the machine and must start with `REACT_APP_` (excluding `NODE_ENV` which is automatically added in run, test, and build)

To add environment variables open `~/.bash_profile` and add each desired variable.

e.g. `export REACT_APP_API_URL=localhost:3001/api/v1`

```
REACT_APP_API_URL
REACT_APP_API_USER
REACT_APP_API_KEY
```

### Run

`npm run start`

### Watch SASS

`npm run watch-css` (in a separate window)

### Testing

[Reference](https://github.com/theblindprophet/github-profile-summary/tree/b4a27d5a58fead1e278a1314892c665bdd75e14f#running-tests)

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).