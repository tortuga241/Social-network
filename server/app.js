// Packages
const express = require('express')
const bodyParser = require('body-parser')

// Database
const sequelize = require('./database/pool')

const UsersTab = require('./database/users')
const PostsTab = require('./database/posts')
const MessagesTab = require('./database/messages')

// Routers
const UalRouter = require('./routers/fileLoaders/userAvatarLoaderRouter')
const UblRouter = require('./routers/fileLoaders/userBackgroundLoaderRouter')
const PilRouter = require('./routers/fileLoaders/postImageLoaderRouter')
const MflRouter = require('./routers/fileLoaders/messageFileLoader')

const signinRouter = require('./routers/signinRouter')
const recoveryPassword = require('./routers/forgetPassword')
const postRouter = require('./routers/postRouter')
const messageRouter = require('./routers/messageRouter')

// Package options
const app = express()
app.use(bodyParser.json())

sequelize.sync()

// Main
app.listen(3000, ()=>{
    console.log('Server started. Port 3000')
})

app.use('/', signinRouter)
app.use('/', UalRouter)
app.use('/', UblRouter)
app.use('/', PilRouter)
app.use('/', MflRouter)
app.use('/post', postRouter)
app.use('/message', messageRouter)
app.use('/recoveryPassword', recoveryPassword)

// POST /userAvatarUpload
// POST /userBackgroundUpload
// POST /postImageUpload
// POST /messageFileUpload
// POST /post/add
// GET /post/
// GET /post/findId
// GET /post/findAuthor
// GET /post/reposts
// POST /message/add
// POST /message/findFromTo