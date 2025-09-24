const express = require('express');
const firmController = require('../controllers/FirmController')
const verfyToken = require('../middlewares/verifyToken');


const router = express.Router()

router.post('/add-firm', verfyToken, firmController.addFirm)

router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.headersSent('Content-Type', 'image/jpeg');
    res.sendFile(Path.join(__dirname , '..', 'uploads',imageName));
    });

router.delete('/:firmId', firmController.deleteFirmById);

module.exports = router;