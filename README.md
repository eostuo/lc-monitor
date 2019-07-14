## 监控力场LC 代币的大额转账

当有大于50w的转账，会发一份邮件通知

api使用了eospark 的websocket 订阅合约交易

使用方式：
```shell
npm install
PARKKEY=eospark_apikey MAILPWD="mail_password" babel-node index.js
```