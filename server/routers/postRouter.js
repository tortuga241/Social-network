const express = require('express')
const bodyParser = require('body-parser')
const PostsTab = require('../database/posts')
const FullDateInfo = require('../modules/dateInfo')

const router = express.Router()
router.use(bodyParser.json())

router.get('/', async(req,res)=>{
    const posts = await PostsTab.findAll()

    if(!posts){
        res.json({
            status: 400,
            error: 'Posts undefined'
        })
        res.end()
        return
    }

    res.json({
        posts    
    })
    res.end()
})

router.get('/findId', async(req,res)=>{
    const id = req.body.id

    const post = await PostsTab.findOne({
        where: {
            id: id
        }
    })

    if(!post){
        res.json({
            status: 400,
            error: 'Post for id undefined'
        })
        res.end()
        return
    }

    res.json({
        post   
    })
})

router.get('/findAuthor', async(req,res)=>{
    const authorName = req.body.author

    const posts = await PostsTab.findAll({
        where: {
            author: authorName
        }
    })

    if(!posts){
        res.json({
            status: 400,
            error: 'Posts for name undefined'
        })
        res.end()
        return
    }

    res.json({
        posts
    })
})

router.post('/add', async(req,res)=>{
    const data = req.body

    const newPost = await PostsTab.create({
        author: data.author,
        date: FullDateInfo,
        content: data.content,
        repostPostId: data.repostPostId
    })

    res.json({
        status: 200,
        postId: newPost.id
    })
})

router.get('/reposts', async(req,res)=>{
    const id = req.body.id

    const reposts = await PostsTab.findAll({
        where: {
            repostPostId: id
        }
    })

    if(!reposts || reposts.length == 0){
        res.json({
            status: 400,
            error: 'Reposts for this id undefined'
        })
        res.end()
        return
    }

    res.json({
        reposts
    })
})

router.delete('/', async(req,res) => {
    const deleteId = req.body.id
    
    if(!deleteId){
        res.json({
            status: 400,
            error: 'Post delete: id field is null'
        })
        res.end()
        return
    }

    const deletePost = await PostsTab.findOne({
        where: {
            id: deleteId
        }
    })

    if(!deletePost || deletePost.length == 0){
        res.json({
            status: 400,
            error: 'Post delete: post was undefined'
        })
        res.end()
        return
    }

    await PostsTab.destroy({
        where: {
            id: deleteId
        }
    })
    res.json({
        status: 200,
        error: null
    })
})
module.exports = router