const express = require('express');
const BarkController = require('../controllers/BarkController');

const router = express.Router();

router.get('/', BarkController.getAllOfCurrentUser);
router.post('/', BarkController.create);
router.delete('/:id', BarkController.delete);

module.exports = router;
