const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://yaokaoya:0Khongbiet@cluster0-wfiaa.mongodb.net/test?retryWrites=true&w=majority',
        { useNewUrlParser: true,
            useUnifiedTopology: true })
        .then( () => console.log ('DB connected'))
        .catch( err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))