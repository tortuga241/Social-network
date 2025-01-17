const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const crypto = require('crypto')

const UsersTab = require('../database/users')

const router = express.Router()
router.use(bodyParser.json())

function confirmCodeGen(length) {return crypto.randomBytes(length).toString('hex').substr(0, length);}

let checkedAccount = {
    login: null,
    password: null,
    phoneNumber: null,
    name: null,
    surname: null,
    email: null,
    avatarPath: null,
    backgroundPath: null,
    description: null,
    location: null
}
let confirmCode = ''

const transporter = require('../mailConfig')

// MIDDLEWARES

const mwSimilarEmail = async(req, res, next) => {
    const email = req.body.email

    console.log('333')
    
    if(!email){
        res.json({
            status: 400,
            error: 'Register email: undefined'
        })
        res.end()
        console.log(email)
        return
    }

    const suppousedUser = await UsersTab.findOne({
        where: {
            email: email
        }
    })

    if(suppousedUser){
        console.log('123')
        res.json({
            status: 409,
            error: 'Register email: already exists'
        })
        res.end()
        return
    }

    console.log('321')

    next()
}

const mwSimilarLogin = async(req, res, next) => {
    const login = req.body.login
    
    if(!login){
        res.json({
            status: 400,
            error: 'Register login: undefined'
        })
        res.end()
        console.log(login)
        return
    }

    const suppousedUser = await UsersTab.findOne({
        where: {
            login: login
        }
    })

    if(suppousedUser){
        res.json({
            status: 409,
            error: 'Register login: already exists'
        })
        res.end()
        return
    }

    next()
}

const mwRegConfig = (req,res, next) => {
    console.log('555')
    checkedAccount = ''
    confirmCode = ''
    next()
}


// ROUTERS


router.get('/login', async(req,res)=>{
    const data = req.body

    console.log(`Логин: ${data.login}`)
    console.log(`Пароль: ${data.password}`)

    const findedAccount = await UsersTab.findOne({
        where: {
            login: data.login
        }
    })

    if(!findedAccount){
        res.json({
            status: 404,
            error: 'Login: Account undefined'
        })   
        res.end()
        return
    }

    if(findedAccount.password == data.password){
        res.json({
            status: 200,
            accountData: findedAccount
        })   
    }else{
        res.json({
            status: 400,
            error: 'Login access denied: password incorrect'
        })
    }
    res.end()
})


router.post('/register', mwRegConfig, mwSimilarEmail, mwSimilarLogin, async(req,res)=>{
    const data = req.body

    console.log(`Логин: ${data.login}`)
    console.log(`Пароль: ${data.password}`)
    console.log(`Телефон: ${data.phoneNumber}`)

    res.status(200)
    res.json({
        status: 200,
        error: null 
    })
    res.end()

    checkedAccount = {
        login: data.login,
        password: data.password,
        phoneNumber: null,
        name: data.name,
        surname: data.surname,
        email: data.email,
        avatarPath: 'standartAvatar.jpg',
        backgroundPath: null,
        description: '',
        location: 'Не указан',
        role: 'user'
    }

    console.log('AAAAA:' + JSON.stringify(checkedAccount.email))
})

router.get('/confirmCode', (req,res) => {
    email = checkedAccount.email

    confirmCode = confirmCodeGen(6)

    console.log(`confirmCode: `+email)
    console.log(confirmCode)

    if(!email){
        res.json({
            status: 400,
            error: 'Confirm email: Email error'
        })
        res.end()
        console.log(email)
        return
    }

    const mailOptions = {
        from: 'raccoonsprtservices@gmail.com',
        to: email,
        subject: 'Подтверждение почты',
        text: `Здраствуйте. Ваш код подтверждения: ${confirmCode}`
    };
    
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error(error);
            res.json({
                status: 400,
                error: 'SendEmail: Email undefined'
            })
            res.end()
        } else {
            console.log('Email sent: ' + info.response);
            res.json({
                status: 200,
                error: null
            })
            res.end()
        }
    });
})

router.post('/checkCode', async(req,res) => {
    const enteredCode = req.body.enteredCode

    if(enteredCode == confirmCode){
        await UsersTab.create(checkedAccount)
        res.json({
            status: 200,
            error: null
        })
        res.end()
    }else{
        res.json({
            status: 400,
            error: 'confirmCode: incorrect code'
        })
        res.end()
    }
})

module.exports = router

// login - запрос на вход в аккаунт
// register - запрос на регистрацию аккаунта
// confirmCode - запрос на отправку сообщения подтверждения на почту
// checkCode - запрос на вписывание кода подтверждения с почты