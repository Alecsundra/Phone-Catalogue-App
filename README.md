# Phone Catalogue App
The project is a simple phone catalogue app build from scratch with [REACT APP](https://github.com/facebook/create-react-app) 
- [Context, hooks, react-router]

..allowing the user to browse the phones catalog and REST API implemented with [NodeJS](https://nodejs.org/en/docs/)

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info

### Structure

* src
    * App.js
    * Context
    * Utils
        * carousel-img
        * ScrollToTop
    * Components
         * FormPhone
         * Home
         * Navbar
         * PhoneList

            * PhoneDetails


On homepage you can browse a list of phones. For each of it you have a picture a description and the price. 
If you want to see more details, you click on the btn that says 'See more details' and it redirects you to the phone id route( with all the info from the api of this specific phone)

For the page to be more interactive, added a reactstrap carousel with phone pictures.

The navbar has only one link, that redirects you on homepage(with diferent text depending on what page you are)

In case that the id phone is not found, the user will recieve a message.
	
## Technologies
Project is created with:

### Frontend
* "react": "^17.0.1"
* "react-dom": "^17.0.1"
* "react-router-dom": "^5.2.0"
* "reactstrap": "^8.7.1"
*  "bootstrap": "^4.5.3"


### Server
* node v12.14.1
* [nodemon](https://www.npmjs.com/package/nodemon)
* "cors": "^2.8.5"
* "express": "^4.17.1"
 
	
## Setup
To run this project first install it locally.
Clone a repository using the command line
and instructions of [GitHub](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```
$ cd ../frontend
$ npm install
$ npm start
```
Runs the app in the development mode.\
Open [http://localhost:8000/phones](http://localhost:3000) to view it in the browser.
```
$ cd ../backend
$ npm install
$ nodemon index.js
```
## Features
* The awesome pictures are royalty free from [Unsplash](https://unsplash.com/)

## To DO
* Finish the post route;
* Getting a better error handling
* Handle the warnings from the console regarding React StrictMode


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
