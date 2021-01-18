const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/SpaceXlaunch'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/SpaceXlaunch/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000, function(){
    console.log("Node app is running at localhost:" + app.get('port'));
  });