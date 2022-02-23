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
###front-end

axios.post('http://localhost:4000/image-upload', {image1, image2, y, x, width, height});


###back-End

const { GenerateCanvas } = require('mds-image-generator'); 

app.post('/image-upload', async (req, res) => {
  //handle image download and save image.name in two variables
  //call generate canvas
  const image2Name = "image2";
  const { y, x, width, height } = req.body;
  await generateCanvas(image2Name,y, x, width, height);
})

async function generateCanvas(params){
    const canvas = new GenerateCanvas();
    await generateCanvas.generate(params);
}

```

## Contribute

As contributor[^1], you can : fork the repo to add all the code, bug fixes, documentation fixes you want, respecting our code of conduct [here](CODE_OF_CONDUCT.md)

To add code, create a branch with the name of feature / issue, and create a pull request on the contributions branch. Pull requests will be examined by the committers[^2]

When you contribute for the first time, do not forget to add you name and a link to your github page in the [contributors.md](contributors.md)

[^1]: A Contributor is any individual creating or commenting on an issue or pull request.
[^2]: A Committer is a subset of contributors who have been given write access to the repository.


