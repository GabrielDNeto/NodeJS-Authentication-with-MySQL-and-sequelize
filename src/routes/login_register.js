const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/users', async (req, res) => {
  const ListOfAllUsers = await User.findAll();
  res.send(ListOfAllUsers);
})

router.post('/register', async (req, res) => {
  const user = req.body;
  await User.create(user)
  res.send(user)
})

module.exports = router;