const express = require('express')
const { Op, Sequelize } = require('sequelize')
const bodyParser = require('body-parser')
const FriendsTab = require('../database/friends')
const UsersTab = require('../database/users')

const router = express.Router()
router.use(bodyParser.json())




// --------------------------- ДОБАВИТЬ



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








// -------------------------- УДАЛИТЬ




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

    const RemoveFriend2 = await FriendsTab.destroy({
        where: {
            user: friend,
            friend: user
        }
    })

    res.json({
        status: 200,
        error:null
    })
    res.end()
})



//------------------------------- ПОЛУЧИТЬ


router.get('/:user', async(req, res) => {
    const user = req.params.user

    let FriendsAccounts = []

    if(!user){
        res.json({
            status: 400,
            error: 'Get all friends: user is null'
        })
        res.end()
        return
    }

    const friends = await FriendsTab.findAll({
        where: {
          user: user,
          friend: {
            [Op.in]: Sequelize.literal(`(SELECT \`user\` FROM \`myfriends\` WHERE \`friend\` = '${user}')`)
          }
        }
    });

    const userFriends = friends.map(friendship => friendship.friend);

    if(!userFriends){
        res.json({
            status: 400,
            error: 'Get all friends: friends undefined'
        })
        res.end()
        return
    }

    for (let i = 0; i < userFriends.length; i++) {
        const user = await UsersTab.findOne({
            where: {
                login: userFriends[i]
            }
        })
        
        FriendsAccounts.push(user)
    }

    FriendsAccounts = FriendsAccounts.filter(friend => friend !== null)

    console.log(FriendsAccounts)

    res.json({
        friends: FriendsAccounts,
        status: 200,
        error: null
    })
    res.end()
})

router.get('/userRequests/:user/:friend', async(req, res) => {
    const user = req.params.user
    const friend = req.params.friend

    let FriendsAccounts = []

    if(!user){
        res.json({
            status: 400,
            error: 'Get all friends: user is null'
        })
        res.end()
        return
    }

    const friends = await FriendsTab.findAll({
        where: {
          user,
          friend
        }
    });

    if(!friends){
        res.json({
            status: 400,
            error: 'Get all friends: friends undefined'
        })
        res.end()
        return
    }

    for (let i = 0; i < friends.length; i++) {
        const user = await UsersTab.findOne({
            where: {
                login: friends[i].friend
            }
        })
        
        FriendsAccounts.push(user)
    }

    FriendsAccounts = FriendsAccounts.filter(friend => friend !== null)

    console.log(FriendsAccounts)

    res.json({
        friends: FriendsAccounts,
        status: 200,
        error: null
    })
    res.end()
})

router.get('/requests/:user', async(req, res) => {
    const user = req.params.user

    let FriendsAccounts = []

    if(!user){
        res.json({
            status: 400,
            error: 'Get all friends: user is null'
        })
        res.end()
        return
    }

    const friends = await FriendsTab.findAll({
        where: {
          friend: user
        }
    });

    if(!friends){
        res.json({
            status: 400,
            error: 'Get all friends: friends undefined'
        })
        res.end()
        return
    }

    for (let i = 0; i < friends.length; i++) {
        const friend = await FriendsTab.findOne({
            where: {
                friend: friends[i].user,
                user
            }
        })
        console.log(`1`+user)
        console.log(`2`+friends[i].friend)
        if(!friend || friend.length == 0){

            const user = await UsersTab.findOne({
                where: {
                    login: friends[i].user
                }
            })
        
            FriendsAccounts.push(user)
        }
    }

    FriendsAccounts = FriendsAccounts.filter(friend => friend !== null)

    console.log(FriendsAccounts)

    res.json({
        friends: FriendsAccounts,
        status: 200,
        error: null
    })
    res.end()
})

// ======================================

// router.get('/test/:user', async(req,res) => {
//     const user = req.params.user

//     try{
        

        
//         res.json(friendsList)
//     }catch(e){
//         console.error(`ERROR!!!!!!!!!!!!!!!!!!!!!!!!! : ${e}`)
//         res.status(500)
//     }
// })




// -----------------------








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

// router.get('/search/:content/:login', async(req, res) => {
//     const data = req.params.content
//     const login = req.params.login

//     const findedUsers = await FriendsTab.findAll({
//         where: {
//             friend: { [Op.like]: `%${data}%` },
//             user: login
//         }
//     })

//     if(!findedUsers){
//         res.json({
//             status: 400,
//             error: 'GET searching accounts: users undefined for entered parameters'
//         })
//         res.end()
//         return
//     }

//     res.json({
//         findedUsers,
//         status: 200,
//         error: null
//     })
// })


module.exports = router

// Добавить друга
// Удалить друга
// Получить всех друзей
// Получить общих друзей

// POST     friends/add
// GET      friends/
// DELETE   friends/remove
// GET      friends/general