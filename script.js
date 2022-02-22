const body = {
    base: '/disney.png',
    insert: '/duolingo.png',
    x: 100, 
    y: 100,
    width: 100,
    height: 600
}

const GenerateCanvas = require('./generateCanvasNd'); 
let generateCanvas = new GenerateCanvas();
const asyncFunction = async () => {
    await generateCanvas.generate(body);
}
asyncFunction();
