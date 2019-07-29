var express = require('express'),
app = express(),
port = process.env.PORT || 4000,
mongoose = require('mongoose'),
Task = require('./models/todoListModel'), //created model loading here
todoList = require('./controllers/todoListController'),
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/flightDb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
   res.send('ok');
});

app.get('/tasks', function(req, res){
    Task.find({}).then(function (flights) {
        console.log(flights);
    res.send(flights);
 });
//res.send('ok');

});


var routes = require('./routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('flight list RESTful API server started on: ' + port);