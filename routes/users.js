// users.js in routes folder to define userdata and required functions for app

const path = require('path');
const Users = require(path.join(__dirname, '..', 'services', 'users'));

module.exports = function (app) {
    app.get('/users', function (req, res, next) {
        let user = new Users();
        user.getAllUsers(function (err, result) {
            if (err) {
                console.error(err.message);
                res.send(404);
                return;
            }
            res.send(result);
        });
    });

    app.post('/users', function (req, res, next) {
        let user = new Users();
        user.createUsers(req.params, function (err, result) {
            if (err) {
                console.error(err.message);
                res.send(404);
                return;
            }
            req.params.id = result.insertId;
            res.send(201, req.params);
        });
    });

    app.get('/users/:username', function (req, res, next) {
        let user = new Users();
        user.getOneUser(req.params.username, function (err, result) {
            if (err) {
                console.error(err.message);
                res.send(404);
                return;
            }
            res.send(result);
        });
    });

    app.put('/users/:username', function (req, res, next) {
        res.send(405);
    });

    app.patch('/users/:username', function (req, res, next) {
        res.send(405);
    });

    app.del('/users/:username', function (req, res, next) {
        res.send(405);
    });
}

