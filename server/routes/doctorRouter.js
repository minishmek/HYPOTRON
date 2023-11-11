const Router = require('express')
const router = new Router()

const doctorController = require('../controllers/doctorController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', doctorController.registration)
router.post('/login', doctorController.login)
router.get('/auth', authMiddleware, doctorController.check)
router.get('/profile', authMiddleware, doctorController.getProfile);
router.post('/logout', authMiddleware, doctorController.logout); // New route for logout

module.exports = router


