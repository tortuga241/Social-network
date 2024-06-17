const express = require('express')
const { Op } = require('sequelize')
const bodyParser = require('body-parser')
const CommentsTab = require('../database/comments')
const FullDateInfo = require('../modules/dateInfo')

const router = express.Router()
router.use(bodyParser.json())

router.get('/', async(req, res) => {
    const AllComments = await CommentsTab.findAll()

    res.json({
        status: 200,
        error: null,
        comments: AllComments
    })
})

router.get('/post/:id', async(req, res) => {
    const id = req.params.id

    if(!id){
        res.json({
            status: 400,
            error: 'Get post comments error: id field is null'
        })
        res.end()
        return
    }

    const postComments = await CommentsTab.findAll({
        where: {
            postId: id
        }
    })

    if(!postComments || postComments.length == 0){
        res.json({
            status: 400,
            error: 'Get post comments error: comments undefined'
        })
        res.end()
        return
    }

    res.json({
        status: 200,
        error: null,
        comments: postComments
    })
})

router.post('/', async(req, res) => {
    const data = req.body

    if(!data.id || !data.content || !data.executer){
        res.json({
            status: 400,
            error: 'Add post comments error: one of data`s field is null'
        })
        res.end()
        return
    }

    await CommentsTab.create({
        postId: data.id,
        content: data.content,
        executer: data.executer,
        date: FullDateInfo
    })

    res.json({
        status: 200,
        error: null,
    })
})

router.delete('/', async(req, res) => {
    const id = req.body.id

    if(!id){
        res.json({
            status: 400,
            error: 'Delete post comment error: id field is null'
        })
        res.end()
        return
    }

    const comment = await CommentsTab.findOne({
        where: {
            id
        }
    })

    if(!comment || comment.length == 0){
        res.json({
            status: 400,
            error: 'Delete post comments error: comments undefined'
        })
        res.end()
        return
    }

    comment.destroy()

    res.json({
        status: 200,
        error: null
    })
})

module.exports = router