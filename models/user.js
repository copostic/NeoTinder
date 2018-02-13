const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const UserSchema = new Schema({
    facebook         : {
        id           : String,
        token        : String,
        name         : String,
        email        : String,
        photo        : String,
        about        : String,
        gender       : String,
        birthday     : String,
        interestedIn : String
    }
});

module.exports = mongoose.model('User', UserSchema);