'use strict';

let eospark_apikey = process.env.PARKKEY
let mailpwd = process.env.MAILPWD
let mailto = process.env.MAILTO

// Set common configs
let common = {
    eospark_apikey: eospark_apikey,
    to: mailto,
    smtp: {
        // host: 'smtp.ethereal.email',
        host: 'smtp-mail.outlook.com', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
        port: 587, // SMTP 端口
        secureConnection: true, // 使用了 SSL
        auth: {
            user: 'eostuo@outlook.com',
            // 这里密码不是qq密码，是你设置的smtp授权码
            pass: mailpwd 
        }
    }
}

export default Object.assign({}, common);