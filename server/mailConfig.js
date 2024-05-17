const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raccoonsprtservices@gmail.com',
        pass: 'jkmv fkcy sxvg kmin'
    }
})

module.exports = transporter