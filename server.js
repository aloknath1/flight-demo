var express = require('express'),
app = express(),
port = process.env.PORT || 4000,
mongoose = require('mongoose'),
Task = require('./src/models/todoListModel'), //created model loading here
bodyParser = require('body-parser');
const options = {
        useNewUrlParser: true
};

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/flightDb').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});        

let db = mongoose.connection;
//check connectioh
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function(callback) {
//The code in this asynchronous callback block is executed after connecting to MongoDB. 
    console.log('Successfully connected to MongoDB.');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
   res.send('ok');
});

app.get('/flights', function(req, res){
 
Task.find(function (err, data) {
  if (err) return console.error(err);  
   res.send(JSON.stringify(data));
    });   
 });

var routes = require('./routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('flight list RESTful API server started on: ' + port);
