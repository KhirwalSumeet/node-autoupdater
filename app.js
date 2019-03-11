var express = require("express");
var app = express();


app.post("/webhooks/github", function (req, res) {
    console.log(req);
    res.send();
})

app.listen(3001, function (err) { });
