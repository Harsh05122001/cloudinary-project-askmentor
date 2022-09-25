var router = require('express').Router();
    userroutes = require('./userroutes')
 router.use('/api/user',userroutes);

 module.exports = router;   