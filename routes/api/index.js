const bookRoutes = require('./books')
const router = require('express').Router(); 
const path = require ("path")
router.use("/books", bookRoutes)

router.use(function(req, res){
    res.sendFile(path.join(__dir, "../client/build/index.html"))
})



module.exports = router;