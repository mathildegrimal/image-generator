const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

const canvas = createCanvas(500, 500);
const context = canvas.getContext('2d');

const insertPictures = async (context, basePath, insertPath, x, y, width, height) => {
    try {
        const base = await loadImage(basePath);
        context.drawImage(base, 0, 0);

        const insert = await loadImage(insertPath);
        context.drawImage(insert, x, y, width, height);

        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync('./images/image.png', buffer);

    } catch(err) {
        throw err;
    }

    return true;
};

const generateCanvas = async (params) => {
    context.fillStyle = '#FFF';
    context.fillRect(0, 0, 500, 500);

    const basePath = path.join(__dirname, './images' + params.base);
    const insertPath = path.join(__dirname, './images' + params.insert);

    try {
        return await insertPictures(context, basePath, insertPath, params.x, params.y, params.width, params.height);
    } catch(err) {
        throw err;
    }
}

module.exports = generateCanvas;