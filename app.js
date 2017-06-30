// DEPENDENCIES
const restify   = require('restify');
const logger    = require('morgan');
const path      = require('path');
const port      = process.env.PORT || 3000;
const app       = restify.createServer({
    name: 'MyOwnAPI',
    version: '1.0.0'
});

// configuration af server
app.use(logger('dev'));
app.use(restify.acceptParser(app.acceptable));
app.use(restify.queryParser());
app.use(restify.bodyParser());

// denne linje skal komme efter logger, da logger skal kunne bruges i 'routes' inklusive configuration af server
require(path.join(__dirname, 'routes', 'index'))(app);

app.listen(port, function(){
    console.log('%s is listening on port %s', app.name, port);
});
