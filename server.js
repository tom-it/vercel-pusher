const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Pusher = require('pusher')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

const pusher = new Pusher({
    appId: '1565295',
    key: '105a23cb70c7843e3a00',
    secret: '30f65df9044563a2b21c',
    cluster: 'us2',
    encrypted: true
})

let dogs = 0
let cats = 0
let hamsters = 0


app.listen(port, function () {
    console.log('Node app is running at localhost:' + port)
})

app.post('/vote', function (req, res) {
    pusher.trigger('redirect_22', 'redirect', ["url"])
    res.sendStatus(200)
})