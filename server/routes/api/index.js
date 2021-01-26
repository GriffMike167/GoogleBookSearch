const router = require('express').Router()
const bookRoutes = require('./api')

router.use("./books", bookRoutes)




module.exports = router;