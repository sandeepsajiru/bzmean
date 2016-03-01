var auth = require('./auth');

module.exports = function(app){
    
    app.get('/partials/:pp', function(req, res){
        res.render('partials/'+req.params.pp);
    });
    app.get('/', function (req, res) {
        res.render('index');
    });
    
    app.post('/login', auth.authenticate );
    app.post('/logout', function(req, res){
        req.logout();
        res.end();
    });

    app.get('*', function (req, res) {
        res.render('index');
    });
    
}