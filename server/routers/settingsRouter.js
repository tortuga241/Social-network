const express = require('express')
const { Op } = require('sequelize')
const bodyParser = require('body-parser')

const SettingsTab = require('../database/settings')

const router = express.Router()
router.use(bodyParser.json())

router.get('/', async(req, res) => {
    const login = req.body.login

    if(!login){
        res.json({
            status: 400,
            error: 'Get settings error: login field is null'
        })
        res.end()
        return
    }

    const userSettings = await SettingsTab.findOne({
        where: {
            user: login
        }
    })

    if(!userSettings || userSettings.length == 0){
        res.json({
            status: 400,
            error: 'Get settings error: user undefined'
        })
        res.end()
        return
    }

    res.json({
        status: 200,
        error: null,
        settings: userSettings
    })
})

router.patch('/', async(req, res) => {
    const login = req.body.login
    const newSettings = req.body.newSettings

    if(!login || !newSettings){
        res.json({
            status: 400,
            error: 'Set settings error: login or new settings field is null'
        })
        res.end()
        return
    }

    const userSettings = await SettingsTab.findOne({
        where: {
            user: login
        }
    })

    if(!userSettings || userSettings.length == 0){
        res.json({
            status: 400,
            error: 'Set settings error: user undefined'
        })
        res.end()
        return
    }

    userSettings.update(newSettings)

    res.json({
        status: 200,
        error: null
    })
})

router.patch('/standart', async(req, res) => {
    const login = req.body.login

    if(!login){
        res.json({
            status: 400,
            error: 'Set standart settings error: login field is null'
        })
        res.end()
        return
    }

    const userSettings = await SettingsTab.findOne({
        where: {
            user: login
        }
    })

    if(!userSettings || userSettings.length == 0){
        res.json({
            status: 400,
            error: 'Set standart settings error: user undefined'
        })
        res.end()
        return
    }

    userSettings.update({
        notificationNewPost: true,
        notificationNewGroupChatMessage: true,
        notificationNewFriendRequest: true,
        notificationSystemUpdates: false,
        showStatus: 'online',
        showFriends: "All",
        showEmail: "friends",
        showPhone: "friends",
        showPosts: "All",
        showLikes: "No one",
        showMusic: "No one",
        showLocation: "No one"
    })

    res.json({
        status: 200,
        error: null
    })
})

module.exports = router