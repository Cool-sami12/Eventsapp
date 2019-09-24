const express = require('express');
const router = express.Router();

const eventTestcontroller =require('../controllers/events_controller');
const userController = require('../controllers/user.controller');




router.get('/test', eventTestcontroller.test);
router.post('/create', eventTestcontroller.eventCreate);
router.post('/register', userController.register);



module.exports = router;