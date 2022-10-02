const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalsModel')
// get goals @ GET /api/goals :Private access
const getGoals = asyncHandler(async (req, res) =>
{
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// set goals @ POST /api/goals :Private access
const setGoal = asyncHandler(async (req, res) =>
{
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        date: req.body.date,
        time: req.body.time,
        term: req.body.term,
        reminder: req.body.reminder
    })
    res.status(200).json(goal)
})

//get each goals @ PUT /goals/:id :Private access
const getEachGoal = asyncHandler(async (req, res) =>
{
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    res.status(200).json(goal);
})
// update goals @ PUT /goals/:id :Private access
const updateGoal = asyncHandler(async (req, res) =>
{
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal)
})
// delete goals @ DELETE /api/goals :Private access

const deleteGoal = asyncHandler(async (req, res) =>
{
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove();
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals,
    setGoal,
    getEachGoal,
    updateGoal,
    deleteGoal,
}
