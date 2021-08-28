const { DataTypes } = require('sequelize')
const sequelize = require('../database/index')
const bcrypt = require('bcryptjs');

const User = sequelize.define('Users',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true
    
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    default: Date.now()
  },
  updatedAt: {
    type: DataTypes.DATE,
    default: Date.now()
  }
})

User.beforeCreate((user, options) => {
  return bcrypt.hash(user.password, 10)
  .then(hash => {
    user.password = hash
  })
  .catch(err => {
    throw new Error()
  })
})

User.sync().then(() => {
  console.log('All models were synchronized successfully.')
})
module.exports = User