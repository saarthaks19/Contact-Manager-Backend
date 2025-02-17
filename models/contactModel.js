 const mongoose = require("mongoose");

const contactSchema = {
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "Please add contact name"],
  },
  email: {
    type: String,
    required: [true, "Please add contact email address"],
  },
  phone: {
    type: String,
    required: [true, "Please add contact phone number"],
  },
};

module.exports = mongoose.model("Contact", contactSchema);
