var express = require("express");
var app = express();
const exec = require('child_process').exec;
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
        exec('cd /home/ubuntu/cricgod-ui && npm install && pm2 restart 0', (e, stdout, stderr)=> {
			if (e instanceof Error) {
				console.error(e);
				throw e;
			}
			console.log('stdout ', stdout);
		});
    }
    res.send(200);
})

app.listen(3001, function (err) { });
