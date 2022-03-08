const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()


router.get('/', async (req, res)=>{
    res.json({
        'path:': 'home'
    })
})

router.get('/json', async (req, res) => {
    res.json({
        'path:': 'home'

    })
})

app.use('/', router)

module.exports.handler = serverless(app)