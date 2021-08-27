const { DataTypes } = require('sequelize')
const sequelize = require('../database/index')

const User = sequelize.define('Users',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  username: {
    type: DataTypes.STRING
    
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
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

User.sync().then(() => {
  console.log('All models were synchronized successfully.')
})
module.exports = User