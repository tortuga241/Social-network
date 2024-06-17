const express = require('express')
const { Op } = require('sequelize')
const bodyParser = require('body-parser')
const LikesTab = require('../database/likes')
const commentsLikesTab = require('../database/commentsLikes')
const FullDateInfo = require('../modules/dateInfo')

const router = express.Router()
router.use(bodyParser.json())


router.get('/post/:postId', async(req, res) => {
    const id = req.params.postId

    if(!id){
        res.json({
            status: 400,
            error: 'Get post likes error: id field is null'
        })
        res.end()
        return
    }

    const postLikes = await LikesTab.findAll({
        where: {
            postId: id
        }
    })

    if(!postLikes || postLikes.length == 0){
        res.json({
            status: 400,
            error: 'Get post likes error: likes undefined'
        })
        res.end()
        return
    }

    res.json({
        status: 200,
        error: null,
        likes: postLikes
    })
})

router.get('/comment', async(req, res) => {
    const id = req.body.commentId

    if(!id){
        res.json({
            status: 400,
            error: 'Get comment likes error: id field is null'
        })
        res.end()
        return
    }

    const comLikes = await commentsLikesTab.findAll({
        where: {
            commentId: id
        }
    })

    if(!comLikes || comLikes.length == 0){
        res.json({
            status: 400,
            error: 'Get comment likes error: likes undefined'
        })
        res.end()
        return
    }

    res.json({
        status: 200,
        error: null,
        likes: comLikes
    })
})

router.post('/post', async(req, res) => {
    const data = req.body

    console.log(data.postId)
    console.log(data.executer)

    if(!data.postId || !data.executer){
        res.json({
            status: 400,
            error: 'Add like to post error: one of field is null'
        })
        res.end()
        return
    }

    LikesTab.create({
        postId: data.postId,
        executer: data.executer,
        date: FullDateInfo
    })
    res.json({
        status: 200,
        error: null
    })
    res.end()
})

router.post('/comment', async(req, res) => {
    const data = req.body

    if(!data.commentId || !data.executer){
        res.json({
            status: 400,
            error: 'Add like to comment error: one of field is null'
        })
        res.end()
        return
    }

    commentsLikesTab.create({
        commentId: data.commentId,
        executer: data.executer,
        date: FullDateInfo
    })

    res.json({
        status: 200,
        error: null
    })
    res.end()
})

router.delete('/post', async(req, res) => {
    const postId = req.body.postId
    const userLogin = req.body.executer

    if(!postId){
        res.json({
            status: 400,
            error: 'Delete like from post error: postId field is null'
        })
        res.end()
        return
    }

    const like = await LikesTab.findOne({
        where: {
            postId,
            executer: userLogin
        }
    })

    if(!like || like.length == 0){
        res.json({
            status: 400,
            error: 'Delete like from post error: like undefined'
        })
        res.end()
        return
    }

    like.destroy()

    res.json({
        status: 200,
        error: null
    })
    res.end()
})

router.delete('/comment', async(req, res) => {
    const commentId = req.body.commentId
    const userLogin = req.body.executer

    if(!commentId){
        res.json({
            status: 400,
            error: 'Delete like from comment error: commentId field is null'
        })
        res.end()
        return
    }

    const like = await commentsLikesTab.findOne({
        where: {
            commentId,
            executer: userLogin
        }
    })

    if(!like || like.length == 0){
        res.json({
            status: 400,
            error: 'Delete like from comment error: like undefined'
        })
        res.end()
        return
    }

    like.destroy()

    res.json({
        status: 200,
        error: null
    })
    res.end()
})

module.exports = router