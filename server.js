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

 

   
 




    
// add todo in db
app.post('/api/addtodo', function(req, res) {

    connection.query('INSERT INTO todos (keimeno, date_created, date_due, status) VALUES (?, ?, ?, ?)', [req.body.keimeno, req.body.date_created, req.body.date_due, req.body.status], function(err) {
       
        if(err) {
            res.send({serversais: 'Error no todo inserted'});
            console.log(err)
        }
        else {
            res.send({serversais: 'Successfully inserted into DataBase'});
            console.log(res)
        }
    });

})
  


  





// get todos
app.post('/api/gettodos', (req, res) => {

    connection.query('SELECT id, keimeno, DATE_FORMAT(date_created, "%d/%m/%Y") AS date_created, DATE_FORMAT(date_due, "%d/%m/%Y") AS date_due, status FROM todos', (err, rows) => {
        if(err) {
            res.send({serversais: 'Error... Could not get todos'});
        }
        else {
            res.send(rows)
            console.log(rows)
        }
    })
                
         
})

        






// delete todo
app.post('/api/deletetodo', function(req, res){
    
    connection.query('DELETE FROM todos WHERE id = ?', [req.body.id], (err) => {
       
        if(err) {
           res.send({serversais: 'Sorry, could not delete your todo.'});
        }
        else{
            res.send({serversais: 'Selected todo deleted successfully'});
        }
       
      });

});


// delete multiple todos
app.post('/api/deletemultipletodo', function(req, res){

    connection.query('DELETE FROM todos WHERE id IN (?)', [req.body.ids], (err) => {
       
        if(err) {
           res.send({serversais: 'Sorry, could not delete your multiple todos.'});
        }
        else{
            res.send({serversais: 'Selected todos deleted successfully'});
        }
       
      });

});

// put/update todo status
app.post('/api/updatetodostatus', function(req, res){

connection.query('UPDATE todos SET status = ? where id = ?', [req.body.status, req.body.id], function(err) {
       
            if(err) {
               res.send({serversais: 'Error no data updated'});
            }
           else {
               res.send({serversais: 'Selected todo has been successfully updated'});
            }
          });

});

// put/update multiple todos status
app.post('/api/updatemultipletodostatus', function(req, res){

    if(req.body.status === 'Done'){
        connection.query('UPDATE todos SET status = ?, date_due = NOW() where id IN (?)', [req.body.status, req.body.ids], function(err) {
           
            if(err) {
               res.send({serversais: 'Error no multiple todos updated'});
            }
           else {
               res.send({serversais: 'Selected todos has been successfully updated'});
            }
          });
    } else if(req.body.status !== 'Done') {
        connection.query('UPDATE todos SET status = ? where id IN (?)', [req.body.status, req.body.ids], function(err) {
           
            if(err) {
               res.send({serversais: 'Error no multiple todos updated'});
            }
           else {
               res.send({serversais: 'Selected todos has been successfully updated'});
            }
          });
    }

    
    });
    










