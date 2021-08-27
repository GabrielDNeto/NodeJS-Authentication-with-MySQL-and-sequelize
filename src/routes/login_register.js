const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/users', async (req, res) => {
  try {
    const ListOfAllUsers = await User.findAll();
    res.send(ListOfAllUsers);
  } catch (error) {
    res.status(400).send({error: 'Cannot find User list'})
  }
})

router.post('/register', async (req, res) => {
  try {
    const user = req.body;
    await User.create(user)
    res.send(user)
  } catch (error) {
    res.status(400).send({error: 'Cannot register new user'})
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = User.findOne({ email, password})

    if(!user) {
      return res.send(401)
    }

    res.send(user)

  } catch (error) {
    res.status(401).send({error: 'Login Failed'})
  }
})

module.exports = router;