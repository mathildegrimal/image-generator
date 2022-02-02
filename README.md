#  🖼 image-generator 🖼 

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
    
Use or contribute to our project designed for generating personalized pictures in React.js projects.

This open source project is composed of a front-end in [React.js](https://fr.reactjs.org) and a back-end in [Node.js](https://nodejs.org/en/) with express.

**First contributors :**<br/>
Lise Guichard and Antonin Val (front-end developpers) / Virginie Baumes and Mathilde Grimal (back-end developpers)

## Packages

### Frontend
Front uses Typescript, and [Tailwind](https://tailwindcss.com) for layout and components styling.
To send images to the back-end it uses [react-uploady](https://github.com/rpldy/react-uploady), enabling build (client-side) of file-upload features.

### Backend

Node.js back is writen in Javascript, uses [Express], not to mention [Cors](https://expressjs.com/en/resources/middleware/cors.html) to enable incoming requests from the client.

We use [node-canvas](https://github.com/Automattic/node-canvas), a [Cairo](https://cairographics.org)-backed Canvas implementation for Node.js.

## Install dependencies :

```
    npm install
    cd client 
    npm install
```

## Contribute

As contributor[^1], you can : fork the repo to add all the code, bug fixes, documentation fixes you want, respecting our code of conduct [here](CODE_OF_CONDUCT.md)

To add code, create a branch with the name of feature / issue, and create a pull request on the contributions branch. Pull requests will be examined by the committers[^2]

When you contribute for the first time, do not forget to add you name and a link to your github page in the [contributors.md](contributors.md)

[^1]: A Contributor is any individual creating or commenting on an issue or pull request.
[^2]: A Committer is a subset of contributors who have been given write access to the repository.


