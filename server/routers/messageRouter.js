const express = require('express')
const bodyParser = require('body-parser')
const MessagesTab = require('../database/messages')

const router = express.Router()
router.use(bodyParser.json())

router.post('/add', async(req,res)=>{
    const data = req.body

    const currentDate = new Date();
  
    const day = ('0' + currentDate.getDate()).slice(-2);
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2)
    const year = currentDate.getFullYear().toString().slice(-2)
    const hours = ('0' + currentDate.getHours()).slice(-2)
    const minutes = ('0' + currentDate.getMinutes()).slice(-2)
    
    const fullDateInfo = `${day}.${month}.${year} (${hours}:${minutes})`;

    const newMessage = await MessagesTab.create({
        from: data.from,
        to: data.to,
        content: data.content,
        status: 'unread',
        date: fullDateInfo
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

module.exports = router