const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    password:{
        type: String,
        required: true
    },
})

// userSchema.virtual('tasks', {
//     ref: 'Credential',
//     localField: '_id',
//     foreignField: 'owner'
// })

const User = mongoose.model('User', userSchema)
module.exports = User