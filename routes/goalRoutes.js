const { getGoals, setGoal, getEachGoal, updateGoal, deleteGoal } = require('../controllers/goalController'),
    {protect}=require('../middleWare/authMiddleware'),
    express = require('express'),
    router = express.Router();
router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').get(protect, getEachGoal).put(protect, updateGoal);


module.exports = router;