const express = require('express');
const router = express.Router();
const telephoneController = require('../controllers/telephone-controller');

router.get('/telephoneController', telephoneController.listTelephone);
router.post('/telephoneController', telephoneController.createTelephone);

router.put('/telephoneController', telephoneController.updateTelephone);
router.delete('/telephoneController', telephoneController.deleteTelephone);
module.exports = router;