const express = require('express')
const cors = require('cors')
const db = require('./database/index')
const loginRegister = require('./routes/login_register')

const app = express();


app.use(express.json())
app.use(cors());

app.use('/', loginRegister)

app.listen(3333, () => {
  console.log('🔥 Server is running on http://localhost:3333')
})
