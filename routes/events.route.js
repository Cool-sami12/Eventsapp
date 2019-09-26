const express = require('express');
const router = express.Router();

const eventTestcontroller =require('../controllers/events_controller');
const userController = require('../controllers/user.controller');




router.post('/test', eventTestcontroller.test);
router.post('/create', eventTestcontroller.eventCreate);
router.post('/all', eventTestcontroller.getevent);
router.post('/register', userController.register);
router.post('/getuser',userController.getuser);
router.post('/', userController.getusers)


module.exports = router;