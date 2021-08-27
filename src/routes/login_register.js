const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/login', async (req, res) => {

})

router.post('/register', async (req, res) => {
  const user = req.body;
  await User.create(user)
  res.send(user)
})

module.exports = router;