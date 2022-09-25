var router = require('express').Router();
const usercontroller = require('../controller/usercontroller');

const upload  = require('../utils/multer')

router.route('/uploadvideo')
.post(upload.single('video'),usercontroller.Uploadvideo);

router.route('/uploadimage')
.post(upload.single('image'),usercontroller.Uploadimage);

router.route('/upload')
.post(usercontroller.Createfile);

router.route('/all').get(usercontroller.getall);

module.exports = router;