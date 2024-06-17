const express = require('express')
const { Op } = require('sequelize')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.json())



module.exports = router