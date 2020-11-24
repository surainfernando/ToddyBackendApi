const { Connection } = require('mongoose');
var mysql      = require('mysql');
class Connections{
    mySQLConnection()
    {
        var con = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            port:      3306,
            password : 'surain',
            database:'Individual_Project'
          });
          return con;
    }
     mongoUrl()
     { var url='mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
    return url;  
    }
}
    
     

  module.exports=Connections