const express = require('express');
const router = express.Router();
const {verifyCookie} = require('../middlewares/authMiddleware'); 
const userController = require('../controllers/userController');

router.get('/:userId/channel/dm', verifyCookie, userController.getUserConversation);

module.exports = router;