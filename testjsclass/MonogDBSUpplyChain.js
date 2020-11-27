const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { DH_CHECK_P_NOT_PRIME } = require('constants');
const url='mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const dbName = 'project1';
mongoBatchInsert()


function mongoBatchInsert()
{MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
//date modification
var dt=new Date();
var dateString=dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
//date modification

   
   const col = client.db(dbName).collection('Toddy_Batch');

   var transfer={}
   transfer.permit="permitnumber"
   transfer.name="new owner name"
   var OwnerHistory={}
   OwnerHistory[dateString]=transfer
   var obj={}
   obj.batch_id=id
   obj.ownerHistory=OwnerHistory;
   
   

    try {
       col.insertOne(obj)

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