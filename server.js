
/******** Requiring libraries ********/
var express = require('express');
var app = express();


/******** Setting ********/
app.disable('x-powered-by');
app.set('port', 3000 || process.env.PORT);


/******** Routing ********/
app.use(express.static(__dirname + '/dist'));


app.listen(app.get('port'), function(){
    console.log('Server is listening on port ' + app.get('port') + '. Press CTRL-C to terminate.');
});
