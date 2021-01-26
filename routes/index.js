const path = require('path')
// const router = require('express-router')
const apiRoutes = require('./api')
const router = require ('express').Router(); 

router.use("/api", apiRoutes)


router.use(function(req, res){
    res.sendFile(path.join(__dir, "../client/build/index.html"))
})

module.exports = router;
