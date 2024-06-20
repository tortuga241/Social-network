const express = require('express')
const bodyParser = require('body-parser')
const MessagesTab = require('../database/messages')
const GroupChatMessagesTab = require('../database/groupChatMessages')
const GetFullDateInfo = require('../modules/dateInfo')

const router = express.Router()
router.use(bodyParser.json())

// DIRECT MESSAGES

router.post('/add', async(req,res)=>{
    const data = req.body

    const newMessage = await MessagesTab.create({
        from: data.from,
        to: data.to,
        content: data.content,
        status: 'unread',
        date: GetFullDateInfo()
    }) 

    res.json({
        status: 200,
        error: null
    })
    res.end()
})

router.get('/findFromTo', async(req,res)=>{
    const from = req.body.from  // Оба пользователя
    const to = req.body.to      // Оба пользователя

    const messages = await MessagesTab.findAll({
        where: {
            from: from,
            to: to
        }
    })

    if(!messages){
        res.json({
            status: 400,
            error: 'Messages fromTo: undefined'
        })
        res.end()
        return
    }

    res.json({
        messages
    })
})

router.delete('/', async(req,res) => {
    const deleteId = req.body.id
    
    if(!deleteId){
        res.json({
            status: 400,
            error: 'Message delete: id field is null'
        })
        res.end()
        return
    }

    const deleteMessage = await MessagesTab.findOne({
        where: {
            id: deleteId
        }
    })

    if(!deleteMessage || deleteMessage.length == 0){
        res.json({
            status: 400,
            error: 'Message delete: message was undefined'
        })
        res.end()
        return
    }

    await MessagesTab.destroy({
        where: {
            id: deleteId
        }
    })
    res.json({
        status: 200,
        error: null
    })
})

router.patch('/', async(req,res) => {
    const id = req.body.id
    const newContent = req.body.newContent

    if(!id){
        res.json({
            status: 400,
            error: 'Message edit error: id field is null'
        })    
        res.end()
        return
    }

    const message = await MessagesTab.findOne({
        where: {
            id: id
        }
    })

    if(!message || message.length == 0){
        res.json({
            status: 400,
            error: 'Message edit error: message undefined'
        })    
        res.end()
        return
    }

    await MessagesTab.update(
        { 
            content: newContent 
        }, 
        { 
            where: { 
                id: id 
            }
        }
    )

    res.json({
        status: 200,
        error: null
    })
})

// GROUP CHATS MESSAGES

router.post('/groups/add', async(req,res)=>{
    const data = req.body

    const newMessage = await GroupChatMessagesTab.create({
        groupChatId: data.groupChatId,
        author: data.author,
        content: data.content,
        status: 'unread',
        date: GetFullDateInfo()
    }) 

    res.json({
        status: 200,
        error: null
    })
    res.end()
})

router.get('/groups/getMessage', async(req,res)=>{
    const groupChatId = req.body.groupChatId

    const messages = await GroupChatMessagesTab.findAll({
        where: {
            groupChatId: groupChatId
        }
    })

    if(!messages){
        res.json({
            status: 400,
            error: 'Group chat messages: undefined'
        })
        res.end()
        return
    }

    res.json({
        messages
    })
})

router.delete('/groups', async(req,res) => {
    const deleteId = req.body.id
    
    if(!deleteId){
        res.json({
            status: 400,
            error: 'Group chat message delete: id field is null'
        })
        res.end()
        return
    }

    const deleteMessage = await GroupChatMessagesTab.findOne({
        where: {
            id: deleteId
        }
    })

    if(!deleteMessage || deleteMessage.length == 0){
        res.json({
            status: 400,
            error: 'Group chat message delete: message was undefined'
        })
        res.end()
        return
    }

    await GroupChatMessagesTab.destroy({
        where: {
            id: deleteId
        }
    })
    res.json({
        status: 200,
        error: null
    })
})

router.patch('/groups', async(req,res) => {
    const id = req.body.id
    const newContent = req.body.newContent

    if(!id){
        res.json({
            status: 400,
            error: 'Group chat message edit error: id field is null'
        })    
        res.end()
        return
    }

    const message = await GroupChatMessagesTab.findOne({
        where: {
            id: id
        }
    })

    if(!message || message.length == 0){
        res.json({
            status: 400,
            error: 'group chat message edit error: message undefined'
        })    
        res.end()
        return
    }

    await GroupChatMessagesTab.update(
        { 
            content: newContent 
        }, 
        { 
            where: { 
                id: id 
            }
        }
    )
    
    res.json({
        status: 200,
        error: null
    })
})

module.exports = router