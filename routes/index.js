const { Router } = require('express');
const controllers = require('../controllers')

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/user', controllers.createUser)
router.get('/users', controllers.getUsers)
router.get('/user/:id', controllers.getUserById)
//router.patch('/user/:id', controllers.updateUser)
router.get('/user/:id/delete', controllers.deleteUser)


module.exports = router;