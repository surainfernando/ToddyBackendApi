const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { DH_CHECK_P_NOT_PRIME } = require('constants');
const url='mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const dbName = 'project1';

testone();

 async function testone()
{var x={name:"rockckck"}
     x=await findOne()
   var OwnerList=x.Owner
   OwnerList.option8=8888
    console.log(OwnerList)
    updateOwner(OwnerList)

    console.log("hello")}

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