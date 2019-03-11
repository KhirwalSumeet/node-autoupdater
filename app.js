var express = require("express");
var app = express();
var execFile = require('child_process').execFile;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());

app.post("/master", function (req, res) {
  req = req.body;
  payload = JSON.parse(req.payload);
  console.log('Is this a master branch ? ' + payload.ref.includes('master'));
    if( payload.ref.includes('master') )
    {
            // Exec a shell script
            execFile('restart.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'exec complete' );
            });
    }
  res.send(200);
})

app.listen(3001, function (err) { });
