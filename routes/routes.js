const router = require('express').Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config({path:'.env'});

const imageUploadPath = process.env.IMAGES_FOLDER_PATH;

console.log(process.env.IMAGES_FOLDER_PATH);
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, imageUploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`);
    },
});

const imageUpload = multer({ storage: storage });

router.post('/image-upload',
    imageUpload.array("my-image-file"),
    async (req, res) => {  
});



router.post('/truc', async (req, res) => {
    const body = {
        base: '/disney.png',
        insert: '/duolingo.png',
        x: 100, 
        y: 100,
        width: 100,
        height: 600
    }

    try {
        // const generateCanvas = require('../generateCanvas');
        // await generateCanvas(body);
        // res.type('png');
        // res.sendFile(path.join(__dirname, '../images/image.png'));
    } catch (err) {
        res.send('Erreur: ' + err);
    }
});

module.exports = router;