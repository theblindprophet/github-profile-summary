# GitHub Profile Summary Web App
[![join chat](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/dylloprofilesummary/Lobby)

Powered by [https://reactjs.org/](React).

Hosted at [https://githubprofilesummary.com](https://www.githubprofilesummary.com/) on [Netlify](https://www.netlify.com/).

NodeJs, ExpressJs backend for this project is located here: https://github.com/thewillg/github-profile-summary-api.

## Install

`git clone https://github.com/theblindprophet/github-profile-summary.git`

`cd github-profile-summary`

`npm install`

## Run

`npm run start`

## Styling

Sass is used for styling. All `.scss` files are compliled into `.css` in the same directory.

## Testing

`npm run test`

**Most** linting errors can be fixed with `./node_modules/.bin/eslint src/<file-path>.js --fix`.

## Environment

| Name | Description | Example |
|------|-------------|--------|
| REACT_APP_API_URL | API url | http://localhost:3003/api/v1 |

*REACT_APP_API_URL* can be substituted with *https://githubprofilesummary.appspot.com/api/v1* if you are only working on this project and **not** the backend project. However, this app must be served on port **3000** to pass the whitelisting.

The backend is live at that url.

The environment variables are in *.env*.

## CI/CD

We use Netlify for continuous deployment.

We use CircleCI for continuous integration.

Netlify is triggered by changes to the `master` branch.

## Contributing

We are always willing to accept contributions to this project.

When contributing please fork, submit a PR from your forked repo, and make sure that all the build checks pass.

## Contributors

[Jamie Gross](https://github.com/theblindprophet/) ([LinkedIn](https://www.linkedin.com/in/james-l-gross/))

[Will Garcia](https://github.com/thewillg/) ([LinkedIn](https://www.linkedin.com/in/thewillg/))
