// users.js in services folder for mysql functions

const path = require('path');
const mysql = require(path.join(__dirname, '..', 'config', 'mysql'));
const db = mysql.connect();

class Users{
    getAllUsers(next){
        db.execute('SELECT user_id, username, usermail FROM users', function(err, rows, fields){
            if(err) return next(err);
            next(null, rows);
        });
    }

    getOneUser(username, next){
        db.execute('SELECT user_id, username, usermail FROM users WHERE username = ?', [username], function(err, rows, fields){
            if(err) return next(err);
            next(null, rows);
        });
    }

    createUsers(values, next){
        db.execute('INSERT INTO users SET username = ?, usermail = ?', [values.username, values.usermail], function(err, row){
            if(err) return next(err);
            next(null, row);
        });
    }
}

module.exports = Users;