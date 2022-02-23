const { GenerateCanvas, DownloadImage } = require('mds-generate-canvas');

const body = {
    insert: '/duolingo.png',
    x: 100, 
    y: 100,
    width: 100,
    height: 600
}

// let generateCanvas = new GenerateCanvas('/disney.png');
// let downloadImage = new DownloadImage();
// console.log(downloadImage, generateCanvas);

// const asyncFunction = async () => {
//     await generateCanvas.generate(body);
// }
// asyncFunction();