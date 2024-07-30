const mongoose = require("mongoose");

const userSchema = ({
    username:{
        type: String,
        required: [true, "Please add the user name"],
    },
    email:{
        type: String,
        required: [true, "Please add the user email"],
        unique: [true, "Email address already taken"],
    },
    password:{
        type: String,
        required: [true, "Please add the user password"],
    },
});

module.exports = mongoose.model("User",userSchema);