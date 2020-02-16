const { Router } = require('express');
const userController = require('../controllers/user');

const router = new Router;

router.get('/register', userController.register);
router.post('/register', userController.add);
router.get('/login', userController.login);
router.post('/login', userController.proses_login);

module.exports = router;