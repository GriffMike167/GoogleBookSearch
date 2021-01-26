const router = require('express-router')
const bookRoutes = require('./books')

router.use("/books", bookRoutes)




module.exports = router;