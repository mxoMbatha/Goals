const mongoose = require('mongoose'),
goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    text: {
        type: String,
        required:[true,'Please add a text value']
    },
    reminder: {
        type: Boolean,
    },
    date: {
        type: String,
        required:[true,'Please add a date value']
    },
    time: {
        type: String,
        required:[true,'Please add a time value']
    },
    term: {
        type: String,
        required:[true,'Please add a term value']
    },
    achieved: {
        type: String,
       
    },
}, {
    timestamps:true
},{
    collection: 'goals'
})
module.exports=mongoose.model('Goal',goalSchema)