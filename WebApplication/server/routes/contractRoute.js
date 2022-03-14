const express = require('express');
const router = express.Router();
const contractController = require('../controller/contractController');


console.log('company file');
router.get('/',contractController.viewData);


router.get('/admin',contractController.admin);


router.get('/admin/class-data',contractController.classData);


router.post('/addClass',contractController.addClass);

module.exports = router;