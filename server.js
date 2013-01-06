var express = require('express'),
    app = express.createServer(),
    port = 4000;

app.use(express.static(__dirname));
app.listen(port);