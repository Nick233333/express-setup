const express = require('express')
const router = express.Router()
let Index = require('../controllers/index')

router.get('/', (req, res) => {
    Index.index(req,res)
})




module.exports = router 