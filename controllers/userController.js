const asyncHandler = require('express-async-handler')
const bcrypt=require('bcryptjs')
const User = require('../models/userModel')
const jwt= require('jsonwebtoken')
// get Users @ GET /api/Users :Private access
const getUsers = asyncHandler(async (req, res) =>
{
    const users = await User.find()
    res.status(200).json(users)
})

// register user @ POST /users :Private access
const registerUser = asyncHandler(async (req, res) =>
{
    const {firstName,lastName, userName, email, password } = req.body;
    if (!firstName||!lastName||!userName ||!email||!password) {
        res.status(400)
        throw new Error('Please fill in all fields')
    }

    //check user
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400)
        throw new Error('User already Exists')
    }
// hashed password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt)
    
    const user = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password: hashed,

    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            userName: user.userName,
            email: user.email,

        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
    
})
//login user @ POST /users/login
//access : Public
const loginUser = asyncHandler(async (req, res) =>
{
    const { email, password } = req.body
    
    //check email
    const user = await User.findOne({ email })
    //check password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.userName,
            email: user.email,
            token:generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credintials');        
    }
})

//get current users @ GET /users/me :Private access
const currentUser = asyncHandler(async (req, res) =>
{
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    res.status(200).json(user);
})
// update users @ PUT /users/:id :Private access
const updateUser = asyncHandler(async (req, res) =>
{
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedUser)
})
// delete users @ DELETE /api/users :Private access

const deleteUser = asyncHandler(async (req, res) =>
{
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    await user.remove();
    res.status(200).json({ id: req.params.id })
})
//Generate token
const generateToken = (id) =>
{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
        
    })
}

module.exports = {
    getUsers,
    registerUser,
    currentUser,
    updateUser,
    deleteUser,
    loginUser,
}
