const path = require('path');
const mysql = require(path.join(__dirname, '..', 'config', 'mysql'));
const db = mysql.connect();

module.exports = function(app){
    app.get('/users', function(req, res, next){
        res.send();
    });

    app.post('/users', function(req, res, next){
        res.send(201, req.params);
    });

    app.get('/users/:username', function(req, res, next){
        res.send(req.params);
    });

    app.put('/users/:username', function(req, res, next){
        res.send(405);
    });

    app.patch('/users/:username', function(req, res, next){
        res.send(405);
    });

    app.del('/users/:username', function(req, res, next){
        res.send(405);
    });
}

