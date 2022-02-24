const router = require('express').Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config({ path: '.env' });
const { GenerateCanvas } = require('mds-generate-canvas');
const { route } = require('express/lib/application');

const imageUploadPath = process.env.IMAGES_FOLDER_PATH;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, imageUploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`);
    },
});

const imageUpload = multer({ storage: storage });

router.post('/image-upload',
    imageUpload.array("image"),
    async (req, res) => { 
        const result = req.files[0].filename;
    res.send(result);
});



router.post('/generate-image', async (req, res) => {
    const { x, y, width, height } = req.body.valueImage;
    const [firstImage, secondImage] = req.body.imagesNames;
    const basePath = path.join(process.env.IMAGES_FOLDER_PATH, firstImage)
    const insertPath = path.join(process.env.IMAGES_FOLDER_PATH, secondImage);
    const params = {
        insert: secondImage,
        x,
        y,
        width,
        height,
        basePath,
        insertPath,
    };

    let generateCanvas = new GenerateCanvas(firstImage);
    

    const image = await generateCanvas.generate(params);
    if (image) {
        res.send(firstImage);
    }
    
});

router.get('/image/:image', (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "..",
        process.env.IMAGES_FOLDER_PATH,
        req.params.image
      )
    );
})

module.exports = router;