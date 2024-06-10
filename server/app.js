// Packages
const express = require('express')
const bodyParser = require('body-parser')

// Database
const sequelize = require('./database/pool')

const UsersTab = require('./database/users')
const PostsTab = require('./database/posts')
const MessagesTab = require('./database/messages')
const FriendsTab = require('./database/friends')
const SettingsTab = require('./database/settings')
const LikesTab = require('./database/likes')
const GroupChatsTab = require('./database/groupChats')
const GroupChatMessagesTab = require('./database/groupChatMessages')
const GroupChatMembersTab = require('./database/groupChatMembers')
const commentsLikesTab = require('./database/commentsLikes')
const CommentsTab = require('./database/comments')

// Routers
const UalRouter = require('./routers/fileLoaders/userAvatarLoaderRouter')
const UblRouter = require('./routers/fileLoaders/userBackgroundLoaderRouter')
const PilRouter = require('./routers/fileLoaders/postImageLoaderRouter')
const MflRouter = require('./routers/fileLoaders/messageFileLoader')

const signinRouter = require('./routers/signinRouter')
const recoveryPassword = require('./routers/forgetPassword')
const postRouter = require('./routers/postRouter')
const messageRouter = require('./routers/messageRouter')
const accountRouter = require('./routers/accountRouter')
const friendsRouter = require('./routers/friendsRouter')
const settingsRouter = require('./routers/settingsRouter')
const commentRouter = require('./routers/commentRouter')
const likeRouter = require('./routers/likeRouter')
const groupChatRouter = require('./routers/groupChatRouter')

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
app.use('/account', accountRouter)
app.use('/friends', friendsRouter)
app.use('/settings', settingsRouter)
app.use('/comments', commentRouter)
app.use('/likes', likeRouter)
app.use('/settings', settingsRouter)

 

// groupChatRouter
{
    // получить все беседы
    // получить все беседы пользователя
    // получить все сообщения беседы
    // получить всех участников беседы
    // получить информацию о беседе 
    // добавить беседу
    // удалить беседу
    // добавить пользователя в беседу
    // удалить пользователя из беседы
    // добавить сообщение в беседу
    // удалить сообщение из беседы
    // изменить сообщение из беседы
}
