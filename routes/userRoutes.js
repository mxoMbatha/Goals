const { getUsers,registerUser,currentUser,loginUser,deleteUser,updateUser} = require('../controllers/userController'),
    express = require('express'),
    router = express.Router();

router.get('/', getUsers);
router.post('/', registerUser);
router.get('/me',currentUser)
router.post('/login', loginUser)
router.post('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;