const fs = require('fs');
class DownloadImage {
    folderName = (process.env.IMAGES_FOLDER_PATH) ? process.env.IMAGES_FOLDER_PATH : "./images";

    checkFolder () {
        if (!fs.existsSync(this.folderName)) {
            fs.mkdirSync(this.folderName)
        }
    }

    save(tempPath, folderName) {
        this.checkFolder();
        fs.rename(tempPath, folderName, err => {
            if (err) return handleError(err, res);
        });
    }
}

module.exports = DownloadImage;