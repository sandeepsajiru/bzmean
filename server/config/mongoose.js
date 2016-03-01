var mongoose = require('mongoose');

module.exports=function(config){
    
    // DB Connection
    mongoose.connect(config.db);
    var dbCon = mongoose.connection;
    dbCon.on('error', function(err){
       console.log('failed to connect to db, make sure it is running '+err);
    });
    dbCon.once('open', function callback(){
       console.log('Mongodb connected');
    });

    var userSchema = mongoose.Schema({
        firstName : String,
        lastName : String,
        userName : String,
        password : String
    });
    
    var User = mongoose.model('Use', userSchema);
    
    User.find({}).exec(function(err, coll){
        if(coll.length===0){
            User.create({firstName:'Being', lastName:'Zero', userName:'beingzero', password:'beingzero'})
            console.log('Created username beingzero');
        }
    });

/*

    var msgSchema = mongoose.Schema({msg : String});
    var msgModel = mongoose.model('Message', msgSchema);

    var dbMessage='';
    msgModel.findOne().exec(function(err, msgDocument){

       if(err)
           console.log('Error Reading the Message from DB');
        else{
            if(msgDocument==null){
                var msg = new msgModel({'msg':'This is a DB message'});
                msg.save();
                console.log('First time DB Connection, Saved the message.  Will be loaded next time');
            }
            else{
                console.log('Read Message: '+msgDocument.msg);
                dbMessage = msgDocument.msg;
            }
        }
    });
*/

    
}