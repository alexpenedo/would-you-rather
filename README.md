# Would you rather Project
This is an application that allows you to play the “Would You Rather?” game

## Instructions for install and launch project

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Project structure
```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── utils # Used for services
    │   ├── api.js # A JavaScript API for the mock backend.
    │   └── _DATA.js # Mock backend for get and save data
    ├── actions # Used for Redux actions.
    │   ├── authedUser.js # Redux actions for user authentication
    │   ├── questions.js # Redux actions for questions
    │   ├── shared.js # Redux actions shared between other actions
    │   └── users.js # Redux actions for users
    ├── reducers # Used for Redux reducers.
    │   ├── authedUser.js # Redux reducer for user authentication
    │   ├── questions.js # Redux reducer for questions
    │   ├── index.js # Redux combine reducers
    │   └── users.js # Redux reducer for users
    ├── middleware # Used for Redux middlewares.
    │   ├── index.js # Redux middleware apply
    │   └── logger.js # Redux middleware for logging store changes    
    ├── components # Used for React components.
    │   ├── leaderboard # Components for render leaderboard.
    │   ├── question # Components for questions renders (results, resume, view, forms).
    │   ├── signin # Component for render login page
    │   └── topbar # Component for render the top bar.
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.