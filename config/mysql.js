const mysql = require('mysql2');

module.exports = {
    connect: function(){
        mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'myownapi'
        });
    }
};