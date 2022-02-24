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

We use [multer](https://www.npmjs.com/package/multer) package to download and save images on the back-end.

We use our package [mds-generate-canvas](https://www.npmjs.com/package/mds-generate-canvas), based on [node-canvas](https://github.com/Automattic/node-canvas), and [Cairo](https://cairographics.org)-backed Canvas implementation for Node.js.

## Install dependencies :

Open your terminal in your dev folder and run (or do it in your IDE terminal) :
```
git clone https://github.com/mathildegrimal/image-generator.git
cd image-generator
```

⚠ In case you happen to use a Mac OS X M1 you will have to use the command below first:
```
brew install pkg-config cairo pango libpng jpeg giflib librsvg
```
If you have problems to install on Mac OS even with this command, check the wiki on Automattic/node-canvas here to build from source :
https://github.com/Automattic/node-canvas/wiki/Installation:-Mac-OS-X

Then run :
```
npm install
cd client 
npm install
```

## Run the app :
In the server :
```
npm run dev
```
In the client: (cd client)
```
npm run start
```
