#  🖼 MDS image-generator 🖼 

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
    
Use or contribute to our project designed for generating personalized pictures in React.js projects.

This is an open source project in [Node.js](https://nodejs.org/en/) used if you want to easily generate one image assembling two others. 

We thought this package to be used in React projects but you can also use it on other projects (the examples in this README are for React only);

Our image generator generates images width 500px / 500px dimensions.

**First contributors :**<br/>
Lise Guichard, Antonin Val, Virginie Baumes and Mathilde Grimal

## Packages

We use [node-canvas](https://github.com/Automattic/node-canvas), a [Cairo](https://cairographics.org)-backed Canvas implementation for Node.js.

## Install dependencies :

```
    npm i mds-generate-canvas
```

## Use MDS image-generator

### First of all 

You'll have to create an image folder or specify your public/image path in a configuration variable, in .env, like this:
```
IMAGES_FOLDER_PATH=./images
```

### Use
You'll have to import GenerateCanvas and DownloadImage in the component that handles the image generation and instanciate an object from this class, then use the methods of the class we designed.

Your front needs to have first 2 inputs to download 2 images in the specified folder, example below for a React App.

```js
/*** File FileInput.js ***/
import React from "react";

//imports
const GenerateCanvas = require('./mds-image-generator/GenerateCanvas'); 
const Download = require('./mds-image-generator/Dowload');

export default function FileInput(){ 

    const [inputData, setInputData] = React.useState({
        posX:0,
        posY:0,
        width:0,
        height:0,
    });

    const image1 = React.createRef();
    const image2 = React.createRef();


    //instanciation
    

    const handleChange = (e)=>{
        e.preventDefault();
        const inputDataCopy = { ...inputData };
        const value = parseInt(e.target.value);
        switch (e.target.name) {
            case "posX":
                inputDataCopy.posX = value;
                break;
            case "posY":
                inputDataCopy.posX = value;
                break;
            case "width":
                inputDataCopy.width = value;
                break;
            case "height":
                inputDataCopy.height = value;
                break;
        }
        setInputData(inputDataCopy);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const image1 = image1.files[0].name;
        const image2 = image2.files[0].name;

        //handle file download :
        const download = new DownloadImage();

        //create canvas
        const generateCanvas = new GenerateCanvas(image1);
        
        const params = {
            insert: image2,
            x: inputData.posX, 
            y: inputData.posY,
            width: inputData.width,
            height: inputData.height
        }
        const asyncFunction = async () => {
            await generateCanvas.generate(params);
        }
        asyncFunction();
    }

        return (
        <form onSubmit={handleSubmit}>
            <label>
            First image :
            <input type="file" ref={image2} />
            </label>
            <br />
            <label>
            Second image :
            <input type="file" ref={image1} />
            </label>
            <label>
            Position y of second image :
            <input type="text" name="posY" onChange={handleChange} />
            </label>
            <label>
            Position x of second image :
            <input type="text" name="posX" onChange={handleChange}/>
            </label>
            <label>
            Width of second image :
            <input type="text" name="width" onChange={handleChange}/>
            </label>
            <label>
            Heigth of second image :
            <input type="text" name="height" onChange={handleChange}/>
            </label>
            </br>
            <button type="submit">Envoyer</button>
        </form>
        );
    }
}

```



## Contribute

As contributor[^1], you can : fork the repo to add all the code, bug fixes, documentation fixes you want, respecting our code of conduct [here](CODE_OF_CONDUCT.md)

To add code, create a branch with the name of feature / issue, and create a pull request on the contributions branch. Pull requests will be examined by the committers[^2]

When you contribute for the first time, do not forget to add you name and a link to your github page in the [contributors.md](contributors.md)

[^1]: A Contributor is any individual creating or commenting on an issue or pull request.
[^2]: A Committer is a subset of contributors who have been given write access to the repository.


