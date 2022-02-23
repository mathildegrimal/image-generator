const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
    const body = {
        base: '/disney.png',
        insert: '/duolingo.png',
        x: 100, 
        y: 100,
        width: 100,
        height: 600
    }

    try {
        const generateCanvas = require('../generateCanvas');
        await generateCanvas(body);
        res.type('png');
        res.sendFile(path.join(__dirname, '../images/image.png'));
    } catch (err) {
        res.send('Erreur: ' + err);
    }
});

module.exports = router;