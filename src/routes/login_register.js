const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');


router.get('/users', async (req, res) => {
  try {
    const ListOfAllUsers = await User.findAll();
    res.send(ListOfAllUsers);
  } catch (error) {
    res.status(400).send({error: 'Cannot find User list'})
  }
})

router.post('/register', async (req, res) => {
  const { email } = req.body

  try {
    if(await User.findOne({where: { email }})){
      return res.status(400).send({ error: 'User already exists' })
    }

    const user = await User.create(req.body)
    user.password = undefined;

    return res.send({ user })

  } catch (error) {
    return res.status(400).send({ error: 'Registration Failed' })
  }
});

router.post('/login', async (req, res) => {
  const { email, password } =  req.body;

  try {
    const user = await User.findOne({where: {email: email}})

    if(!user) {
      return res.status(400).send({error: "User not found"})
    }

    if (!await bcrypt.compare(password, user.password))
      return res.status(400).send({ error: 'Invalid password'})

    res.send({ user })

  } catch (error) {
    res.status(401).send({error: 'Login Failed'})
  }
})

module.exports = router;