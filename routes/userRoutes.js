const { getUsers,registerUser,currentUser,loginUser,deleteUser,updateUser} = require('../controllers/userController'),
    express = require('express'),
    router = express.Router(),
    {protect}=require('../middleWare/authMiddleware');

router.get('/', protect,getUsers);
router.post('/', registerUser);
router.get('/me',protect,currentUser)
router.post('/login', loginUser)
router.post('/:id',protect, updateUser)
router.delete('/:id',protect, deleteUser)

module.exports = router;