const mongoose = require("mongoose");
const md5 = require("md5");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
}, {
  timestamps: true,
});

userSchema.methods.setPass = function (password) {
  this.password = md5(password);
};

userSchema.methods.checkPass = function (expectedPass, incomingPass) {
  return expectedPass === md5(incomingPass);
};

module.exports = mongoose.model("User", userSchema);