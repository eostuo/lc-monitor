## 监控力场LC 代币的大额转账

当有大于50w的转账，会发一份邮件通知

api使用了eospark 的websocket 订阅合约交易
需要申请eospark apikey,地址 https://eospark.com/openapi/apply

使用方式：
1. 本地
```shell
npm install
PARKKEY=eospark_apikey MAILPWD="mail_password" MAILTO="xxx@outlook.com" babel-node index.js
```

2.线上pm2部署
```shell
npm install
PARKKEY=eospark_apikey MAILPWD="mail_password" MAILTO="xxx@outlook.com" pm2 start apps.config.js
```