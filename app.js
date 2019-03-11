var express = require("express");
var app = express();


app.post("/", function (req, res) {
    console.log(req);
    res.send(200);
})

app.listen(3001, function (err) { });
