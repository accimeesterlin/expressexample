var express = require('express');
var path = require('path'); // NO INSTALL
var app = express(); // initialize the app
var bodyParser = require('body-parser');

// Routing

app.use(express.static('public')); // serve static files
app.use(bodyParser.urlencoded({
    extended: true
}));


// Request
// Response

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/expressjs', function (req, res) {
    res.sendFile(path.join(__dirname, './views/index.html'));
});


app.get('/:name', function (req, res) {
    res.sendFile(path.join(__dirname, './views/user.html'));
});



app.post('/talkiwalkie', function (req, res) {
    // TODO
    // Reciev the data
    var data = req.body; // { username: 'fsfs' }
    console.log('Data: ', data);

    res.end("Thank buddy, the donut was delicious!");
});

// Delete
// PUT




app.listen(8080, function () {
    console.log('Hello world, server started');
});




/*
    Web Application Framework

    Express
    Hapijs

    http://github.com
    http://google.com


    http://localhost:8080



    Static Files    
        - HTML
        - JavaScript
        - CSS
*/