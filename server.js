const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
//let stringify = require('json-stringify-safe');



var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // when we set headers in the frontend to be sent we need to declare them here to be allowed in the backend
    next();
}

app.use(allowCrossDomain);
   

app.use(express.json()); 

// Configure MySQL connection ... db connection credentials ...
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'thinkcompassdokimastiko'
});

//Establish MySQL connection
connection.connect(function(err) {
    if (err) 
       throw err
    else {
        console.log('Connected to MySQL');
        // Start the app when connection is ready
        app.listen(3000);
        console.log('Server is listening on port 3000');
  }
 });

 

   
 




    
// add data in db
app.post('/api/add', function(req, res) {

    connection.query('INSERT INTO records (activity, currentDay, currentMonth, currentYear, Scheduled_at, duration, priority) VALUES (?, ?, ?, ?, ?, ?, ?)', [act, curD, curM, curY, SchAT, dur, prior], function(err) {
       
        if(err) {
            res.send({serversais: 'Error no data inserted'});
        }
        else {
            res.send({serversais: 'Successfully inserted into DataBase'});
        }
    });

})
  


  





// get data
app.post('/api/get', (req, res) => {

    connection.query('SELECT email, day, time FROM appointmentsdb.approvedappointments WHERE org = ?', [req.body.org], (err, rows) => {
        if(err) {
            res.send({serversais: 'Error... Could not get appointments for ' + req.body.org});
        }
        else {
            res.send(rows)
        }
    })
                
         
})

        










// delete data
app.post('/api/deleteappointment', function(req, res){
    
    connection.query('DELETE FROM appointmentsdb.approvedappointments WHERE email = ? AND org = ? AND day = ? AND time = ?', [req.body.email, req.body.org, req.body.day, req.body.time], (err) => {
       
        if(err) {
           res.send({serversais: 'Sorry, could not delete your appointment.'});
        }
        else{
            res.send({serversais: 'Selected appointment deleted successfully'});
        }
       
      });

});


// put data
app.put('/records/:id', function(req, res){

    var act = req.body.activity; // the incoming json's first key's value
    var curM = req.body.currentMonth;
    var curD = req.body.currentDay;
    var curY = req.body.currentYear;
    var SchAT = req.body.Scheduled_at;
    var dur = req.body.duration;
    var prior = req.body.priority;


connection.query('UPDATE records SET activity = ?, currentDay = ?, currentMonth = ?, currentYear = ?, Scheduled_at = ?, duration = ?, priority = ? WHERE id = ?', [act, curD, curM, curY, SchAT, dur, prior, req.params.id], function(err) {
       
            if(err) {
               res.send({serversais: 'Error no data updated'});
            }
           else {
               res.send({serversais: 'Selected record has been successfully updated'});
            }
          });

});










