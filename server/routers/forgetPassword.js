const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')

const router = express.Router()
router.use(bodyParser.json())
function tokenGen(length) {return crypto.randomBytes(length).toString('hex').substr(0, length);}

const UsersTab = require('../database/users')
const transporter = require('../mailConfig')
const { urlencoded } = require('body-parser')

const hostAdress = 'http://localhost:3000'

let token = ''
let email = ''

router.get('/sendRecoveryMessage', async(req,res) => {
    token = ''
    email = ''
    SupposedEmail = req.body.email

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
    const link = `${hostAdress}/recoveryToken?token=${encodeURIComponent(token)}`

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
                error: null
            })
            res.end()
        }
    });
})

router.get('/changeRecoveryData', async(req,res) => {
    const newPassword = req.body.password
    const getEmail = req.body.email

    const findedAccount = await UsersTab.findOne({
        where: {
            email: getEmail
        }
    })

    if(!findedAccount){
        console.log(findedAccount)
        res.json({
            status: 400,
            error: 'Change Data Base: finded account error'
        })
        res.end()
        return
    }

    findedAccount.update({
        password: newPassword
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