const express = require('express');
const router = express.Router();
const photoVideoController = require('../controllers/photoVideoController');

router.post('/edit', photoVideoController.editPhoto);
router.post('/upload', photoVideoController.uploadPhoto);

module.exports = router;
