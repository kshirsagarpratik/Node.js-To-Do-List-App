var express = require("express"),
        app = express(),
 bodyParser = require('body-parser'),        
       port = process.env.PORT || 3000,
         ip = process.env.IP;

var todosRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.use('/api/todos', todosRoutes);

app.get("/", function(req, res) {
        res.sendFile('index.html');
});

app.get("/happy", function(req, res){
        res.send({var: "hello ana banana :)"});
});

// This could be problematic in the future, port and IP.
app.listen(port, ip, function() {
        console.log("Hey there! Server up and running!");
});

