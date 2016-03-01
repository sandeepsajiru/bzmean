var path = require('path');

var rootPath = path.normalize(__dirname+"../../../");

module.exports = {
    development:{
        rootPath : rootPath,
        db: 'mongodb://localhost/bzmean',
        port: process.env.PORT || 3000,
        logger:'dev'
    },
    production:{
        rootPath : rootPath,
        db: 'mongo://localhost/bzmean',
        port: process.env.PORT || 80,
        logger:'common'
    }
}