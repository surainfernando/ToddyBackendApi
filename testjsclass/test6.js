const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { DH_CHECK_P_NOT_PRIME } = require('constants');
const url='mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const dbName = 'project1'

updateSupplyTransactions();

jsonTest()


function jsonTest()
{
    var x={name:"surain",age:23}
    x.sirname="rocky"
    var keyString="tel"
    var valueString="0123"
    x[keyString]=valueString
    var keyString2="parent"
    var obj1={}
    var objkey="moth"
    var objvalue="mary"
    obj1[objkey]=objvalue
    x[keyString2]=obj1
    
    console.log(x)
}




function updateSupplyTransactions()
{
   console.log("hellooo")
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
       // var db =mongo.collection('Student')
       const col = client.db(dbName).collection('Toddy_Purchase_Collection');
       var x=4;
       var y="owner2"
       var z=3
        try {
            var x={name:"Tony Robbin",permit:"co12345688",business_type:"Toddy Producer",noOfTrees:200,location:"nyc, Puttlam",email:"to@gmail.com",password:"123456",kkk:"dfdfdf"}
            col.insertOne(x)
          
          
            
    
        
         
          }
          catch(erru) {
           
          }
      
    
       
        // const db = client.db(dbName);
        // db.Student.insertOne( {StudentId:104, 
        //     Name:"Sam Wilkinson jr", Roll:1, Birthday:2001-09-08} );
        client.close();
        return ;
      });

}