/**
 * nodejs 建立 server，模拟服务端
 */
var express = require('express'),
    app = express(),
    path = require('path')

app.use(express.static(__dirname + '/'));

// 为了 browserHistory
app.get('*', function (req, res) { 
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3001);