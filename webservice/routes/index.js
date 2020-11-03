const express = require('express');

const router = express.Router();
const Controller=require('../controllers/controller');
console.log('router loaded');


router.post('/collegeDetails', Controller.collegeDetails);
router.get('/collegeList', Controller.collegeList);
router.post('/collegeByState', Controller.collegeByState);
// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;