const express = require('express')
const { Op } = require('sequelize')
const bodyParser = require('body-parser')
const FriendsTab = require('../database/friends')

const router = express.Router()
router.use(bodyParser.json())

router.post('/add', async(req, res) => {
    const user = req.body.user
    const friend = req.body.friend

    if(!user){
        res.json({
            status: 400,
            error: 'Add friend: user is null'
        })
        res.end()
        return
    }
    if(!friend){
        res.json({
            status: 400,
            error: 'Add friend: friend is null'
        })
        res.end()
        return
    }

    const AddFriend = await FriendsTab.create({
        user,
        friend,
    })

    res.json({
        status: 200,
        error:null
    })
    res.end()
})

router.delete('/remove', async(req, res) => {
    const user = req.body.user
    const friend = req.body.friend

    if(!user){
        res.json({
            status: 400,
            error: 'Remove friend: user is null'
        })
        res.end()
        return
    }
    if(!friend){
        res.json({
            status: 400,
            error: 'Remove friend: friend is null'
        })
        res.end()
        return
    }

    const RemoveFriend = await FriendsTab.destroy({
        where: {
            user: user,
            friend: friend
        }
    })

    res.json({
        status: 200,
        error:null
    })
    res.end()
})

router.get('/', async(req, res) => {
    const user = req.body.user

    if(!user){
        res.json({
            status: 400,
            error: 'Get all friends: user is null'
        })
        res.end()
        return
    }

    const userFriends = await FriendsTab.findAll({
        where: {
            user: user
        }
    })

    if(!userFriends){
        res.json({
            status: 400,
            error: 'Get all friends: friends undefined'
        })
        res.end()
        return
    }

    res.json({
        friends: userFriends,
        status: 200,
        error: null
    })
    res.end()
})

router.get('/general', async(req, res) => {
    const user_1 = req.body.user1
    const user_2 = req.body.user2

    if(!user_1 || !user_2){
        res.json({
            status: 400,
            error: 'Get general friends: one of users is null'
        })
        res.end()
        return
    }

    const user1Friends = await FriendsTab.findAll({
        where: {
            user: user_1
        },
        attributes: ['friend']
    })
    const user2Friends = await FriendsTab.findAll({
        where: {
            user: user_2
        },
        attributes: ['friend']
    })

    if(!user1Friends || !user2Friends){
        res.json({
            status: 400,
            error: 'Get general friends: one of users has not friends'
        })
        res.end()
        return
    }

    const user1FriendsList = user1Friends.map(f => f.friend);
    const user2FriendsList = user2Friends.map(f => f.friend);
    const generalFriends = user1FriendsList.filter(friend => user2FriendsList.includes(friend))

    if(!generalFriends){
        res.json({
            status: 400,
            error: 'Get general friends: users are have not general friends'
        })
        res.end()
        return
    }

    res.json({
        generalFriends,
        status: 200,
        error: null
    })
    res.end()
})
module.exports = router

// Добавить друга
// Удалить друга
// Получить всех друзей
// Получить общих друзей

// POST     friends/add
// GET      friends/
// DELETE   friends/remove
// GET      friends/general