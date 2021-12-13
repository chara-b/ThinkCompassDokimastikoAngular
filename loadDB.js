/* create db with specified character set so it stores greek language too! */
/* CREATE DATABASE thinkcompassdokimastiko COLLATE utf8_unicode_ci; */

/* create table todos date is stored as 2021-12-13 yyy-mm-dd */
/* CREATE TABLE todos (id PRIMARY KEY AUTO_INCREMENT, keimeno TEXT NOT NULL, date_created DATE NOT NULL, date_due DATE NOT NULL, status VARCHAR(50) NOT NULL); */



// Configure MySQL connection ... db connection credentials ...
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

//Establish MySQL connection

  connection.connect(function(err) {
    if (err) throw err
    console.log('Connected!')
});
// create db
  connection.query('CREATE DATABASE if not exists thinkcompassdokimastiko COLLATE utf8_unicode_ci', function (err, result) {
    if (err) throw err;
    if(result['affectedRows'] == 0){
        console.log('Ooops! Database already exists...')
      } else {
        console.log('Database created')
        }
      });


      // create table todos
  var sql = 'CREATE TABLE if not exists thinkcompassdokimastiko.todos (id INT(5) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, keimeno TEXT NOT NULL, date_created DATE NOT NULL, date_due DATE NOT NULL, status VARCHAR(50) NOT NULL)';
  connection.query(sql, function (err, result) {
    if (err) throw err;

    if(result['warningCount'] == 1){
        console.log('Ooops! todos table already exists...')
    } else {
    console.log('Table todos created');
    }
  });
