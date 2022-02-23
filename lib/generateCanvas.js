const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');
require('dotenv').config({path: ".env"});

class GenerateCanvas {
    canvas;
    context;
    imagePath;
    base;
    insertPath;
    counter = 1;

    constructor(base) {
        this.canvas = createCanvas(500,500);
        this.context = this.canvas.getContext('2d');
        this.imagePath = (process.env.IMAGES_FOLDER_PATH) ? process.env.IMAGES_FOLDER_PATH : "./images";
        this.base = base;
    }

    setImagePath(newImagePath) {
        this.imagePath = newImagePath;
    }

    getImagePath() {
        return this.imagePath;
    }

    getFuturImageName() {
        const name = '/' + this.base.replace('.png', this.counter + '.png');
        this.counter ++;
        return name;
    }

    insertPictures = async (x, y, width, height, basePath) => {
        try {
            const base = await loadImage(basePath);
            this.context.drawImage(base, 0, 0);
    
            const insert = await loadImage(this.insertPath);
            this.context.drawImage(insert, x, y, width, height);
    
            const buffer = this.canvas.toBuffer('image/png');
            fs.writeFileSync(this.imagePath + this.getFuturImageName(), buffer);
    
        } catch(err) {
            throw err;
        }
    
        return true;
    };

    generate = async ({ insert, x, y, width, height }) => {
        this.context.fillStyle = '#FFF';
        this.context.fillRect(0, 0, 500, 500);

        this.insertPath = path.join(__dirname, this.imagePath + insert);
    
        try {
            return await this.insertPictures(x, y, width, height);
        } catch(err) {
            throw err;
        }
    }
}

module.exports = GenerateCanvas;