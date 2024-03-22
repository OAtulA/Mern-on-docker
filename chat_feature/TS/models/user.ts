let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    
    uname:{type: String, unique: true, required: true},
    password: {type:String, required: true},
    email: String,
    avatar: String,
    gender: String,
    age: Number,
    description: String
});
let User = mongoose.model('User', userSchema);
export default User;
