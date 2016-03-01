
module.exports = function(app){
    
    app.get('/partials/:pp', function(req, res){
        res.render('partials/'+req.params.pp);
    });
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('*', function (req, res) {
        res.render('index');
    });
    
}