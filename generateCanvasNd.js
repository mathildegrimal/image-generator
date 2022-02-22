var { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

class GenerateCanvas {
    canvas = createCanvas(500,500);
    context = this.canvas.getContext('2d');
    basePath;
    insertPath;

    insertPictures = async (x, y, width, height) => {
        try {
            const base = await loadImage(this.basePath);
            this.context.drawImage(base, 0, 0);
    
            const insert = await loadImage(this.insertPath);
            this.context.drawImage(insert, x, y, width, height);
    
            const buffer = this.canvas.toBuffer('image/png');
            fs.writeFileSync('./images/image.png', buffer);
    
        } catch(err) {
            throw err;
        }
    
        return true;
    };

    generate = async ({base, insert, x, y, width, height}) => {
        this.context.fillStyle = '#FFF';
        this.context.fillRect(0, 0, 500, 500);

        this.basePath = path.join(__dirname, './images' + base);
        this.insertPath = path.join(__dirname, './images' + insert);
    
        try {
            return await this.insertPictures(x, y, width, height);
        } catch(err) {
            throw err;
        }
    }
}

module.exports = GenerateCanvas;