var express = require('express'),
app = express(),
port = process.env.PORT || 4000,
mongoose = require('mongoose'),
Task = require('./models/todoListModel'), //created model loading here
bodyParser = require('body-parser');
const options = {
        useNewUrlParser: true
};

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
   res.send('ok');
});

app.get('/flights', function(req, res){ 
    console.log('called....');
    var options = { useNewUrlParser: true };
    mongoose.connect('mongodb://localhost/flightDb', options, function(err,db){
        if(err){
            console.log("Not Connected to Database ERROR! ", err);
        }else{
            console.log("Connected to Database");

            var str = '';
            var cursor = db.collection('flight').find({});
            cursor.each(function(err, doc) {                            
                console.log(doc);
            });
            console.log(str);
            res.send(str);

        }
    });
 });


var routes = require('./routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('flight list RESTful API server started on: ' + port);
