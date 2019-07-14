#!/usr/bin/env node

'use strict';

var WebSocketClient = require('websocket').client;
import mail from './mail';
const config = require('./config.js');

var client = new WebSocketClient();

client.on('connectFailed', function (error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function (connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function (error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function () {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            // console.log("Received: '" + message.utf8Data + "'");

            let data = JSON.parse(message.utf8Data)
            if (data.errno === 0 && data.msg_type === "data") {
                data.data.actions.map(item => {
                        if (item.data.from && item.data.to && item.data.quantity.split(" ")[0] > 500000) {
                            // 有大于50w的交易，就发邮件
                            console.log(item.data.quantity.split(" ")[0])

                            let mailOptions = {
                                from: '"eostuo" <eostuo@outlook.com>', // sender address
                                to: config.default.to, // list of receivers
                                subject: 'LC有大额转账', // Subject line
                                // 发送text或者html格式 text: 'Hello world?', // plain text body
                                html: `<p>from: ${item.data.from}</p><p>to: ${item.data.to}</p><p>quantity: ${item.data.quantity}</p>` // html body
                            };
                            mail.send(mailOptions)
                                .then((response) => {
                                    console.log(response);
                                })
                                .catch((error) => {
                                    console.error(error);
                                });
                        }
                    })
            }

        }
    });

    function subscribe() {
        if (connection.connected) {
            connection.sendUTF(JSON.stringify({"msg_type": "subscribe_account", "name": "lichangtoken"}));
        }
    }
    subscribe();
});

client.connect(`wss://ws.eospark.com/v1/ws?apikey=${config.default.eospark_apikey}`);
