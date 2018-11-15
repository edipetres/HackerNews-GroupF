const mongoose = require("mongoose");
const User = mongoose.model("User");
const logger = require('../../utilities/logger')

const saveUser = (data) => {
  const user = new User(data);
  user.setPass(data.password);
  return user.save();
};

const loginUser = async data => {
  const {username, password} = data
  const savedUser = await User.findOne({username}) // get user from DB
  if (!savedUser) {
    return logger.info('User not found in loginUser with username: ' + username)
  }
  
  const passwordMatch = savedUser.schema.methods.checkPass(savedUser.password, password)
  if (passwordMatch !== true) throw new Error('Username/password missmatch.')

  return savedUser
}

const editUser = (user, data) => {
  const {name, sex, age} = data;
  const currentUser = user;

  currentUser.name = name;
  currentUser.sex = sex;
  currentUser.age = age;
  return user.save();
};

const deleteUser = (user) => user.remove();

const findUser = (username) => User.findOne({username})

module.exports = {
  saveUser,
  editUser,
  deleteUser,
  findUser,
  loginUser
};