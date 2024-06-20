const express = require('express')
const { Op } = require('sequelize')
const bodyParser = require('body-parser')
const AccountTab = require('../database/users')
const FriendsTab = require('../database/friends')
const MessagesTab = require('../database/messages')
const UsersTab = require('../database/users')

const router = express.Router()
router.use(bodyParser.json())

router.get('/', async(req,res) => {
    const allAcc = await AccountTab.findAll()

    if(!allAcc){
        res.json({
            status: 400,
            error: 'GET all accounts: accounts undefined'
        })
        res.end()
        return
    }

    res.json({
        accounts: allAcc,
        status: 200,
        error: null
    })
})

router.get('/friends', async(req,res) => {
    const user = req.body.user

    if(!user){
        res.json({
            status: 400,
            error: 'GET account frineds: user undefined'
        })
        res.end()
        return
    }

    const friends = await FriendsTab.findAll({
        where: {
            user
        }
    })

    if(!friends){
        res.json({
            status: 400,
            error: 'GET account frineds: friends undefined'
        })
        res.end()
        return
    }

    res.json({
        friends,
        status: 200,
        error: null
    })
})

router.get('/findById/:login', async(req, res) => {
    const login = req.params.login

    const user = await AccountTab.findOne({
        where: {
            login
        }
    })

    if(!user){
        res.json({
            status: 400,
            error: 'Login user error: User undefined'
        })
        res.end()
        return
    }

    res.json({
        user,
        status: 200,
        error: null
    })
})

router.get('/search', async(req, res) => {
    const data = req.query.enteredData

    const findedUsers = await AccountTab.findAll({
        where: {
            [Op.or]: [
                { name: { [Op.like]: `%${data}%` } },
                { surname: { [Op.like]: `%${data}%` } },
                { login: { [Op.like]: `%${data}%` } },
                { nickname: { [Op.like]: `%${data}%` } },
                { phoneNumber: { [Op.like]: `%${data}%` } },
                { email: { [Op.like]: `%${data}%` } }
            ]
        }
    })

    if(!findedUsers){
        res.json({
            status: 400,
            error: 'GET searching accounts: users undefined for entered parameters'
        })
        res.end()
        return
    }

    res.json({
        findedUsers,
        status: 200,
        error: null
    })
})

router.get('/directs', async(req, res) => {
    const user = req.body.user

    if(!user){
        res.json({
            status: 400,
            error: 'GET user directs: user undefined'
        })
        res.end()
        return
    }

    const directs = await MessagesTab.findAll({
        where: {
            [Op.or]: [
                { from: user },
                { to: user }
            ]
        }
    })

    if(!directs){
        res.json({
            status: 400,
            error: 'GET user directs: user directs undefined'
        })
        res.end()
        return
    }

    res.json({
        directs,
        status: 200,
        error: null
    })
})

router.delete('/', async(req, res) => {
    const login = req.body.login
    
    if(!login){
        res.json({
            status: 400,
            error: 'Delete user: login field is null'
        })
        res.end()
        return
    }

    const user = await UsersTab.findOne({
        where: {
            login: login
        }
    })

    if(!user || user.length == 0){
        res.json({
            status: 400,
            error: 'Delete user: user undefined'
        })
        res.end()
        return
    }

    user.destroy()
    res.json({
        status: 200,
        error: null
    })
    res.end()
    return
})

module.exports = router

// Получить все аккаунты
// Получить все аккаунты в друзьях
// Получить все аккаунты по имени
// Получить все аккаунты с переписками

// GET account
// GET account/friends
// GET account/search
// GET account/directs