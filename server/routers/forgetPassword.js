const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const { Op } = require('sequelize')

const router = express.Router()
router.use(bodyParser.json())
function tokenGen(length) {return crypto.randomBytes(length).toString('hex').substr(0, length);}

const UsersTab = require('../database/users')
const RecoveryTokenTab = require('../database/recoveryToken')
const transporter = require('../mailConfig')
const { urlencoded } = require('body-parser')

const hostAdress = 'http://localhost:5173'

let token = ''
let email = ''

router.post('/sendRecoveryMessage', async(req,res) => {
    token = ''
    email = ''
    const SupposedEmail = req.body.email

    const findedAccount = await UsersTab.findOne({
        where: {
            email: SupposedEmail
        }
    })

    if(!findedAccount){
        res.json({
            status: 400,
            error: 'Recovery Password: email undefined'
        })
        res.end()
        return
    }
    email = SupposedEmail

    token = tokenGen(15)
    console.log(`token: `+token)
    const link = `${hostAdress}/recoveryToken/${encodeURIComponent(token)}`
    const hashedToken = await bcrypt.hash(token, 15)

    const similarToken = await RecoveryTokenTab.findOne({
        where: {
            [Op.or]: [
                { token: hashedToken },
                { userId: findedAccount.id }
            ]
        }
    })

    if(similarToken){
        await RecoveryTokenTab.destroy({
            where: {
                [Op.or]: [
                    { token: hashedToken },
                    { userId: findedAccount.id }
                ]   
            }
        })
    }

    await RecoveryTokenTab.create({
        userId: findedAccount.id,
        token: hashedToken
    })

    setTimeout( async() => {
        await RecoveryTokenTab.destroy({
            where: {
                userId: findedAccount.id
            }
        })
    }, 10 * 60 * 1000)

    const mailOptions = {
        from: 'raccoonsprtservices@gmail.com',
        to: email,
        subject: 'Восстановление пароля',
        text: `Здраствуйте. Чтобы восстановить пароль перейдите по ссылке: ${link}`
    };
    
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error(error);
            res.json({
                status: 400,
                error: 'SendEmail: Email undefined'
            })
            email = ''
            token = ''
            res.end()
        } else {
            console.log('Email sent: ' + info.response);
            res.json({
                status: 200,
                link: link,
                email: email,
                token: token,
                error: null
            })
            res.end()
        }
    });
})

router.post('/changeRecoveryData/:token', async(req,res) => {
    const newPassword = req.body.password
    const token = req.params.token

    let findedToken

    const Tokens = await RecoveryTokenTab.findAll()

    for ( const element of Tokens ) {
        const result = await bcrypt.compare(token, element.token)
        
        console.log('123')
        if(result){
            findedToken = element
            break
        }
    };

    if(!findedToken){
        console.log(findedToken)
        res.json({
            status: 400,
            error: 'Change Data Base: token undefined'
        })
        res.end()
        return
    }



    const findedAccount = await UsersTab.findOne({
        where: {
            id: findedToken.userId
        }
    })

    if(!findedAccount){
        console.log(findedAccount)
        res.json({
            status: 400,
            error: 'Change Data Base: account undefined'
        })
        res.end()
        return
    }

    const hashedPassword = await bcrypt.hash(newPassword, 15)

    findedAccount.update({
        password: hashedPassword
    })
    res.json({
        status: 200,
        error: null
    })
    res.end()
})

module.exports = router


// recoveryPassword/sendRecoveryMessage
// email

// recoveryPassword/changeRecoveryData
// password, email