const express = require('express')
var cors = require('cors');
const app = express()
const dbConnect = require('./dbConnect')
const port = 3200;
app.use(express.json())
app.use(cors())

const userRoute = require('./route/userRoute')

app.use('/api/user', userRoute)

app.get('/', (req, res) => {res.send('hello world')})
app.listen(port, ()=> console.log(`listening on port ${port}`))