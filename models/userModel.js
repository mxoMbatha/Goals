const mongoose = require('mongoose'),
userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required:[true,'Please add a first name']
    },
    lastName: {
        type: String,
        required:[true,'Please add a last name']
    },

    userName: {
        type: String,
        required:[true,'Please add a text value']
    },
    email: {
        type: String,
        required: [true, 'Please add a date value'],
        trim: true,
        unique: 'Email already exist',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required:[true,'Password is required']
    },
}, {
    timestamps:true
},{
    collection: 'users'
})
module.exports=mongoose.model('User',userSchema)