const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()
require('./db')()


const userRoutes = require('./routes/userRoutes')


app.use(cors());
app.use(express.json())

app.use(userRoutes)

app.get('/', (req, res) => {
    res.json('hello');
});

app.listen(5000, () => {
    console.log('Server started')
})
