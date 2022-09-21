const { getGoals,setGoal,getEachGoal,updateGoal,deleteGoal} = require('../controllers/goalController'),
    express = require('express'),
    router = express.Router();

router.get('/', getGoals);
router.post('/', setGoal);
router.get('/:id',getEachGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

module.exports = router;