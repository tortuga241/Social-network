// Packages
const express = require('express')
const bodyParser = require('body-parser')

// Database
const sequelize = require('./database/pool')
const UsersTab = require('./database/users')

// Routers
const signinRouter = require('./routers/signinRouter')
const UalRouter = require('./routers/userAvatarLoaderRouter')

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

// app.post('/create', async(req,res)=>{
//     const data = req.body

//     await UsersTab.create({
//         name: data.name,
//         age: data.age
//     })
//     res.end('200')
// })
// app.get('/users', async(req,res)=>{
//     const users = await UsersTab.findAll()

//     res.end(JSON.stringify(users))
// })

