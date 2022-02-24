#  🖼 mds-generate-canvas 🖼 

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
    
Use or contribute to our project designed for generating personalized pictures in React.js projects.

This is an open source project in [Node.js](https://nodejs.org/en/) used if you want to easily generate one image assembling two others. 

We thought this package to be used in Back-end apps.

Our image generator generates images width 500px / 500px dimensions.

**First contributors :**<br/>
Lise Guichard, Antonin Val, Virginie Baumes and Mathilde Grimal

## Packages

We use [node-canvas](https://github.com/Automattic/node-canvas), a [Cairo](https://cairographics.org)-backed Canvas implementation for Node.js.

## Install dependencies :

```
    npm i mds-generate-canvas
```
In case you happen to use a MAC OS X M1 you will have to use the command below first:
```
    brew install pkg-config cairo pango libpng jpeg giflib librsvg
```

## Use MDS image-generator

### First of all 

You'll have to create an image folder or specify your public/image path in a configuration variable, in .env, like this:
```
IMAGES_FOLDER_PATH=./images
```

### Use
You'll have to import GenerateCanvas in your back-end method that handles the image generation.
The Front End needs to send you two images that will be saved in the folder you specified in the .env.
The generated image wil be also saved in this folder.
```js

const { GenerateCanvas } = require('mds-image-generator'); 

const x ="position x of the second image";
const y = "position x of the second image";
const width ="width of the second image";
const height = "height of the second image";

const basePath = "YOUR_PATH_TO_IMAGE1"
const insertPAth ="YOUR_PATH_TO_IMAGE2";

const params = {
        x,
        y,
        width,
        height,
        basePath,
        insertPath,
    };

    let generateCanvas = new GenerateCanvas(firstImage);
    const image = await generateCanvas.generate(params);
```


