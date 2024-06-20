const express = require('express')
const bodyParser = require('body-parser')
const PostsTab = require('../database/posts')
const GetFullDateInfo = require('../modules/dateInfo')

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
        status: 200,
        posts    
    })
    res.end()
})

router.get('/findId/:id', async(req,res)=>{
    const id = req.params.id

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
        status: 200,
        post   
    })
})

router.get('/findAuthor/:author', async(req,res)=>{
    const authorName = req.params.author

    // console.log(authorName)

    const posts = await PostsTab.findAll({
        where: {
            author: authorName
        }
    })

    // console.log(posts)

    if(!posts){
        res.json({
            status: 400,
            error: 'Posts for name undefined'
        })
        res.end()
        return
    }

    res.json({
        status: 200,
        posts,
        error: null
    })
})

router.post('/add', async(req,res)=>{
    const data = req.body

    const newPost = await PostsTab.create({
        author: data.author,
        date: GetFullDateInfo(),
        content: data.content,
        repostPostId: data.repostPostId
    })

    res.json({
        status: 200,
        postId: newPost.id
    })
})

router.get('/reposts/:id', async(req,res)=>{
    const id = req.params.id

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
        status: 200,
        reposts
    })
})

router.delete('/:id', async(req,res) => {
    const deleteId = req.params.id
    
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