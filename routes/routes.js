const router = require('express').Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config({path:'.env'});

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



router.post('/generateImage', async (req, res) => {

    const { x, y, width, height } = req.body;

    const body2 = {
        insert: "/duolingo.png",
        x: 100,
        y: 100,
        width: 100,
        height: 600,
    };

    // let generateCanvas = new GenerateCanvas('/disney.png');
    // let downloadImage = new DownloadImage();
    // console.log(downloadImage, generateCanvas);

    // const asyncFunction = async () => {
    //     await generateCanvas.generate(body);
    // }
    // asyncFunction();
    const body = {
        base: "/disney.png",
        insert: "/duolingo.png",
        x: 100,
        y: 100,
        width: 100,
        height: 600,
    };
  
});

module.exports = router;