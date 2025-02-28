const express = require('express');
const router = express.Router();
const clothingController = require('../controllers/index');

// Define routes for clothing items
router.get('/clothing', clothingController.getAllClothing);
router.get('/clothing/:id', clothingController.getClothingById);
router.post('/clothing', clothingController.createClothing);
router.put('/clothing/:id', clothingController.updateClothing);
router.delete('/clothing/:id', clothingController.deleteClothing);

module.exports = router;