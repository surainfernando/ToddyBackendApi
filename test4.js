const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { DH_CHECK_P_NOT_PRIME } = require('constants');
const url='mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const dbName = 'project1';
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   // var db =mongo.collection('Student')
   const col = client.db(dbName).collection('Businessman');
   var x=4;
   var y="owner2"
   var z=3
    try {
        var x={name:"S Fernando",permit:"co123456",business_type:"Toddy Producer",noOfTrees:200,location:"Koswatta, Puttlam",email:"s@gmail.com",password:"123456"}
        col.insertOne(x)
      
      
        

    
     
      }
      catch(err) {
       
      }
  

   
    // const db = client.db(dbName);
    // db.Student.insertOne( {StudentId:104, 
    //     Name:"Sam Wilkinson jr", Roll:1, Birthday:2001-09-08} );
    client.close();
    return ;
  });