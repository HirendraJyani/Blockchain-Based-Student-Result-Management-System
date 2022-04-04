const express = require('express');
const router = express.Router();
const contractController = require('../controller/contractController');


console.log('company file');
router.get('/',contractController.viewData);


router.get('/admin',contractController.admin);

router.get('/result/:classID',contractController.studentResult);


router.get('/admin/class-data/:classID',contractController.classData);


router.post('/admin/class-data/:classID',contractController.addStudentData);


router.post('/admin',contractController.addClass);

module.exports = router;