const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { DH_CHECK_P_NOT_PRIME } = require('constants');
const url='mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const dbName = 'project1';

var dt=new Date();
var formateedx=dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
testone()
var x=new Date();


console.log(x)

var z=x.toISOString().slice(0, 19).replace('T', ' ');

console.log(formateedx)


console.log(z)
var date2=new Date(z)
console.log(date2)

async function testone()  
{/**In this function at //mark1 findOne() is calle. it returns Student object. Then Student Object [key-owner] value is taken   */
    var x={name:"rockckck"}
     x=await findOne()//mark1
   var OwnerList=x.Owner
   var value1=[formateedx]
   var value2='1010101010'
   var newEntree={}
   newEntree.permit="water"
   newEntree.name="rock"
   OwnerList[value1]=newEntree
    console.log(OwnerList)
    updateOwner(OwnerList)

    console.log("hello")
}

 function insert()
{  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   // var db =mongo.collection('Student')
   const col = client.db(dbName).collection('Students');
   var x=4;
   var y="owner2"
   var z=3
    try {
       col.insertOne({StudentId:1,Name:"1rolf", Roll:1, Birthday:2001-09-08,car:'bug'})
var xx={'owner3':3,'owner4':4}
    //    col.findOne({ StudentId: 102 }, function(err, doc) {
    //     var OwnerList=doc.Owner
    //     OwnerList.owner5=5
        
    //     doc.Owner=OwnerList
    //     console.log(doc)
    //     //doc.save();
      
        

        
    //   });
     
      }
      catch(err) {
       
      }
  

   
    // const db = client.db(dbName);
    // db.Student.insertOne( {StudentId:104, 
    //     Name:"Sam Wilkinson jr", Roll:1, Birthday:2001-09-08} );
    client.close();
    return ;
  });

}
async function findValue()
{ await MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   // var db =mongo.collection('Student')
   const col = client.db(dbName).collection('Students');
   var x=4;
   var y="owner2"
   var z=3
    try {
       // col.insertOne({StudentId:1033,Name:"Sam Wilkinson", Roll:1, Birthday:2001-09-08})
       var xx={'owner3':3,'owner4':4}
       col.findOne({ StudentId: 102 }, function(err, doc) {
        var OwnerList=doc.Owner
        OwnerList.owner5=5
        
        doc.Owner=OwnerList
        console.log(doc)
        //doc.save();
      
        

        
      });
     
      }
      catch(err) {
       
      }
  

   
    // const db = client.db(dbName);
    // db.Student.insertOne( {StudentId:104, 
    //     Name:"Sam Wilkinson jr", Roll:1, Birthday:2001-09-08} );
    client.close();
    return ;
  });

}
async function findOne() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db(dbName);

        let collection = db.collection('Students');

        let query = { StudentId: 102
         }

        let res = await collection.findOne(query);

       return res

    } catch (err) {

        console.log(err);
    } finally {

        client.close();
    }
}

function updateOwner(ownerlist){
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
       // var db =mongo.collection('Student')
       const col = client.db(dbName).collection('Students');
       var x=4;
       var y="owner2"
       var z=3
        try {
           // col.insertOne({StudentId:1033,Name:"Sam Wilkinson", Roll:1, Birthday:2001-09-08})
           var xx={'owner3':3,'owner4':4}
           col.updateOne(// to update
            { StudentId: 102 },
            {
              
              $set: { "Owner": ownerlist },
             
            }
         )//to update
         
          }
          catch(err) {
           
          }
      
    
       
        // const db = client.db(dbName);
        // db.Student.insertOne( {StudentId:104, 
        //     Name:"Sam Wilkinson jr", Roll:1, Birthday:2001-09-08} );
        client.close();
      });
}