const express = require('express')
const app = express()
const dbConnect = require('./dbConnect')
const port = 3200;
app.use(express.json())

const userRoute = require('./route/userRoute')

app.use('/api/user', userRoute)

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {res.send('hello world')})
app.listen(port, ()=> console.log(`listening on port ${port}`))