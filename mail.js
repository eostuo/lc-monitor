'use strict';

import nodemailer from 'nodemailer';

const config = require('./config.js');

let send = (options) => {

    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport(config.default.smtp);

        transporter.sendMail(options, (error, response) => {
            if (error) {
                reject(error);
            } else {
                //console.log('Message sent');
                resolve(response);
            }
        });
    });
};

export default {
    send
};
