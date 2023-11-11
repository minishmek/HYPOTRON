const Router = require('express')
const router = new Router()

const doctorRouter = require('./doctorRouter')


router.use('/doctor', doctorRouter)


module.exports = router
