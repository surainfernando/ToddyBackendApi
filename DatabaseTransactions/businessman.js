const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { DH_CHECK_P_NOT_PRIME } = require('constants');
const url='mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const dbName = 'project1';
var sqlConnection=require('../Connections.js')
var mysql      = require('mysql');

class businessman{
     registerBusinessman(jsonObject)
    {
        var Connection=new sqlConnection();
        var con=Connection.mySQLConnection()
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql=`Insert into Businessman(permit_number,name,location,email,business_type,no_of_trees,password) values('${jsonObject.permit}','${jsonObject.name}','${jsonObject.location}','${jsonObject.email}','${jsonObject.business} ',${jsonObject.noOfTrees},'${jsonObject.pass1}')`
            //         var x={name:jsonObject.name,permit:jsonObject.permit,business_type:jsonObject.business,noOfTrees:200,location:jsonObject.location,email:jsonObject.email,password:jsonObject.pass1}
        
            
            //var sql = `Insert into Businessman3(permit_number,date_created,nic) values('${x}','${z}','${y}')`;
            //var sql = `Insert into Businessman2(permit_number,nic) values('${x}','${y}')`;
        
        
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log("Table created");
              con.end();
            });
          });



        // MongoClient.connect(url, function(err, client) {
        //     assert.equal(null, err);
        //     console.log("Connected successfully to server");
        //    // var db =mongo.collection('Student')
        //    const col = client.db(dbName).collection('Businessman');
        //    var x=4;
        //    var y="owner2"
        //    var z=3
        //     try {
        //         var x={name:jsonObject.name,permit:jsonObject.permit,business_type:jsonObject.business,noOfTrees:200,location:jsonObject.location,email:jsonObject.email,password:jsonObject.pass1}
        //         col.insertOne(x)
        //         //var x={name:"S Fernando",permit:"co123456",business_type:"Toddy Producer",noOfTrees:200,location:"Koswatta, Puttlam",email:"s@gmail.com",password:"123456"}
                
              
                
        
            
             
        //       }
        //       catch(err) {
               
        //       }
          
        
           
        //     // const db = client.db(dbName);
        //     // db.Student.insertOne( {StudentId:104, 
        //     //     Name:"Sam Wilkinson jr", Roll:1, Birthday:2001-09-08} );
        //     client.close();
        //     return ;
        //   });
    }

    loginBusinessman(jsonObject)
    { console.log("loginmmmmmmm")
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
           // var db =mongo.collection('Student')
           const col = client.db(dbName).collection('Businessman');
           var x=4;
           var y="owner2"
           var z=3
            try {
                col.findOne({email:jsonObject.email}, function(err, result) {
                    if (err) { console.log("error") }
                
                    if (result) {
                        console.log("email founf")
                        if(result.password===jsonObject.password)
                        {
                           result.status=true;
                           return result
                           

                        }
                        else
                        {
                            console.log("fail")
                           var returnobj={status:false,email:true,password:false}
                           return returnobj

                        }

                        return true
                        // we have a result
                    } else {
                        console.log("email. misiisn")
                        var returnobj={status:false,email:false,password:false}
                        return varobj
                        // we don't
                    }
                })
              
                
        
            
             
            }
              catch(err) {
                  console.log(err)
               
              }
          
        
           
            // const db = client.db(dbName);
            // db.Student.insertOne( {StudentId:104, 
            //     Name:"Sam Wilkinson jr", Roll:1, Birthday:2001-09-08} );
            client.close();
            return ;
          });
    }

    static async  loginBusinessman2(jsonObject)
    {
        

            const client = await MongoClient.connect(url, { useNewUrlParser: true })
                .catch(err => { console.log(err); });
        
            if (!client) {
                return;
            }
        
            try {
        
                const db = client.db(dbName);
        
                let collection = db.collection('Businessman');
        
                let query = { email: jsonObject.email
                 }
        
                let res = await collection.findOne(query);
                console.log(res)
                
        
               return res
        
            } catch (err) {
        
                console.log(err);
            } finally {
        
                client.close();
            }
        
    }
}
module.exports = businessman


