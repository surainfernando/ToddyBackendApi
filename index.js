
const express = require('express')
var mysql = require('mysql');
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000
const bussinessman = require('./DatabaseTransactions/businessman.js');
const businessman = require('./DatabaseTransactions/businessman.js');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { DH_CHECK_P_NOT_PRIME } = require('constants');
const url = 'mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const dbName = 'project1';
var mysql = require('mysql');
const { makeDb } = require('mysql-async-simple');
var sqlConnection=require('./Connections.js')
const test101 = require('./test101');
const { Connection } = require('mongoose');
const Connections = require('./Connections.js')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'surain',
  database: 'Individual_Project'
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
  console.log("------------------------------------------------------------");
  res.send('Hello World!')
})
/**SS01- For database Fubnctions*/








/**RR01 for request groups*/


/**RR01 businessman */
app.post('/businessman/register', (req, res) => {


  // console.log("post------------------------------------------")
  // var x = { dd: "ddfdf" }
  // let busi = new businessman();
  // busi.registerBusinessman(req.body)
  // console.log(req.body)
  //res.send(x)
handleRegisterBusinessman(req,res)

})
app.post('/businessman/login', (req, res) => {

  
  console.log("postlogin------------------------------------------")
  
  
  //loginBusinessman(req.body, res)
  handeLogin(req,res)
})
app.get('/d', (req, res) => {
  console.log("------------------------------------------------------------");
  handleRegisterBusinessman(res)
  //res.send('Hello World!')
})
/**RR02 businessman */

/**RR01 toddyBatch*/

app.post('/toddybatch/add', (req, res) => {

console.log('/toddybatch/add---------------------------')
  // console.log("post------------------------------------------")
  // var x = { dd: "ddfdf" }
  // let busi = new businessman();
  // busi.registerBusinessman(req.body)
  // console.log(req.body)
  //res.send(x)
//handleRegisterBusinessman(req,res)
//console.log(req)g
addToddyBatch(req)
res.send({a:34})

})
app.post('/toddybatch/getToddyTapperBatch', (req, res) => {

  console.log('/toddybatch/getToddyTapperBatch---------------------------')
    // console.log("post------------------------------------------")
    // var x = { dd: "ddfdf" }
    // let busi = new businessman();
    // busi.registerBusinessman(req.body)
    // console.log(req.body)
    //res.send(x)
  //handleRegisterBusinessman(req,res)
  //console.log(req)
  console.log("req body-"+req.body.name)
  console.log("req body-"+req.body.permit)
  handleGetToddyTapperBatch(req,res)
  //res.send({a:34})
  
  })
  



/**RR02 toddyBatch*/


/**RR01 Toddy purchase*/
app.post('/toddybatch/maketransfer', (req, res) => {

  console.log('/toddybatch/maketransfer--------------------------')
    
  
  //makeToddySellRequest(req)
 // console.log("madetoddy sell request")
 // updateToddybatchAfterToddySellRequest(req)
 handleToddyPurchase(req,res)
 console.log(req.body)
  //res.send({s:1})
  
  
  })
/**RR02 Toddy purchase*/





/**RR01 Toddy Request*/
app.post('/toddybatch/makeToddySellRequest', (req, res) => {

  console.log('/toddybatch/makeToddySellRequest--------------------------')
    // console.log("post------------------------------------------")
    // var x = { dd: "ddfdf" }
    // let busi = new businessman();
    // busi.registerBusinessman(req.body)
    // console.log(req.body)
    //res.send(x)
  //handleRegisterBusinessman(req,res)
  console.log(req.body)
  //onsole.log("req body-"+req.body.name)
  //console.log("req body-"+req.body.permit)
  //handleGetToddyTapperBatch(req,res)

  // var dd=req.body.date_created
  // console.log("dd"+dd)
  // var d=new Date(dd).toISOString()
  // console.log("d=="+d)
  makeToddySellRequest(req)
  console.log("madetoddy sell request")
  updateToddybatchAfterToddySellRequest(req)
  res.send({s:1})
  
  
  })
app.post('/toddybatch/getToddySellRequest', (req, res) => {

  console.log('/toddybatch/getToddySellRequest--------------------------')

  console.log(req.body)

  handleGetToddySellRequest(req,res)
   //res.send({s:1})
  
  
  })

/**RR02 Toddy Request*/


/*88888888888888888888888888888888888888888888888888*/
/* *Mysql Functions*/

/**SS01 Businessman Registration Component */
async function handleRegisterBusinessman(req,res) {

  var results = await testForBusinessEmail(req)
  results=JSON.parse(JSON.stringify(results))
  if(results.length>0)
  {console.log("Eroor persist")
  var x={status:false,error:"email"}
  res.send(x)

}
  else{
    var results = await testForBusinessPermit(req)
    results=JSON.parse(JSON.stringify(results))
    if(results.length>0)
    {console.log("Eroonnnnnnr persist")
    var x={status:false,error:"permit"}
    res.send(x)}
    else{
      let busi = new businessman();
   busi.registerBusinessman(req.body)

      res.send({status:true,error:'none'})
    }



    }

  
  //console.log("usera are")
  //console.log(t)
  //res.send('Hello pppp99p999999999999999999999999999Wooooorld!') //



}



async function  testForBusinessEmail(req) {


  var connection11 = new Connections()
  var connection1 = connection11.mySQLConnection()

  const db = makeDb();
  await db.connect(connection1);
  console.log(req.body.email)
  var xx=`select * from businessman where permit_number='${req.body.email}'`
  console.log(xx)

  try {
    const users = await db.query(connection1, `select * from businessman where email='${req.body.email}'`);
   // console.log(users)
    return users
  } catch (e) {
    // handle exception
  } finally {
    console.log('fdfd1')
    //await db.close(connection1);
    console.log('yfdfd')
    //l return users
  }


}

async function testForBusinessPermit(req) {


  var connection11 = new Connections()
  var connection1 = connection11.mySQLConnection()

  const db = makeDb();
  await db.connect(connection1);

  try {
    const users = await db.query(connection1, `select * from businessman where permit_number='${req.body.permit}'`);
    console.log(users)
    return users
  } catch (e) {
    // handle exception
  } finally {
    console.log('fdfd1')
    //await db.close(connection1);
    console.log('yfdfd')
    //l return users
  }


}

/**SS02 Businessman Registration Component */

/**SS01 Businessman Login Component */
async function handeLogin(req,res)
{
  var results = await testForEmailPassword(req)
  results=JSON.parse(JSON.stringify(results))
  if(results.length>0)
  { var obj=results[0];
    var x={status:true}
    x.name=obj.name
    x.permit=obj.permit_number
    x.business_type=obj.business_type
    x.noOfTrees=String(obj.no_of_trees)
    x.location=obj.location
    x.email=obj.email
    x.password=obj.password
    console.log(x)
    

   
 
  res.send(x)

}
  else{
    var x={status:false}
    res.send(x)
   



    }


}

async function testForEmailPassword(req) {


  var connection11 = new Connections()
  var connection1 = connection11.mySQLConnection()

  const db = makeDb();
  await db.connect(connection1);
  console.log(req.body.email)
  var xx=`select * from businessman where email='${req.body.email}' && password='${req.body.password}'`
  console.log(xx)

  try {
    const users = await db.query(connection1,xx);
   // console.log(users)
    return users
  } catch (e) {
    // handle exception
  } finally {
    console.log('fdfd1')
    //await db.close(connection1);
    console.log('yfdfd')
    //l return users
  }


}

/**SS02 Businessman Login Component */

/**SS01 Batch ADD */

async function handeBatchAdd(req,res)
{
  var results = await testForEmailPassword(req)
  results=JSON.parse(JSON.stringify(results))
  if(results.length>0)
  { var obj=results[0];
    var x={status:true}
    x.name=obj.name
    x.permit=obj.permit_number
    x.business_type=obj.business_type
    x.noOfTrees=String(obj.no_of_trees)
    x.location=obj.location
    x.email=obj.email
    x.password=obj.password
    console.log(x)
    

   
 
  res.send(x)

}
  else{
    var x={status:false}
    res.send(x)
   



    }


}
function addToddyBatch(req)
{
  var permitOwnerName=req.body.name
  var permitOwnerPermit=req.body.permit
  //console.log(req)
  //var connection11 = new Connections()
  var Connection=new sqlConnection();
  var con=Connection.mySQLConnection()
    con.connect(function(err) {
        if (err) throw err;
        var z=new Date().toISOString().slice(0, 19).replace('T', ' ');
        console.log("Connected!");
        var volume=parseInt(req.body.volume)
        var sql=`insert into persons2(LastName) values('jhn')`
        var sql=`insert into Toddy_Batch(requested,date_created,volume,creator_permit,creator_name,current_owner_permit,current_owner_name,current_owner_purchase_date) values(0,'${z}',${volume},'${req.body.permit}','${req.body.name}','${req.body.permit}','${req.body.name}','${z}')`
        //         var x={name:jsonObject.name,permit:jsonObject.permit,business_type:jsonObject.business,noOfTrees:200,location:jsonObject.location,email:jsonObject.email,password:jsonObject.pass1}
    
        
        //var sql = `Insert into Businessman3(permit_number,date_created,nic) values('${x}','${z}','${y}')`;
        //var sql = `Insert into Businessman2(permit_number,nic) values('${x}','${y}')`;
    
    
        con.query(sql, function (err, result) {
          mongoBatchInsert(result.insertId,permitOwnerName,permitOwnerPermit)
          if (err) throw err;
          console.log("Table created");
          con.end();
        });
      });



    
}
function mongoBatchInsert(id,name,permit)
{MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
//date modification
var dt=new Date();
var dateString=dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
//date modification

   
   const col = client.db(dbName).collection('Toddy_Batch');

   var transfer={}
   transfer.permit=permit
   transfer.name=name
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

async function handleGetToddyTapperBatch(req,res)
{
  var xx=await getToddyTapperBatch(req)
  var results=JSON.parse(JSON.stringify(xx))
  console.log(results)
  var resultmod={result:results}
  console.log("resultmod00000000000000000000000000000000000000000000000000000000000000000000")
  console.log(resultmod)
  res.send(resultmod)
}

async function getToddyTapperBatch(req) {


  var connection11 = new Connections()
  var connection1 = connection11.mySQLConnection()

  const db = makeDb();
  await db.connect(connection1);
  console.log(req.body.email)
  var xx=`select * from toddy_batch where creator_permit='${req.body.permit}' && requested=0`
  console.log(xx)

  try {
    const users = await db.query(connection1,xx);
   // console.log(users)
    return users
  } catch (e) {
    // handle exception
  } finally {
    console.log('fdfd1')
    //await db.close(connection1);
    console.log('yfdfd')
    //l return users
  }


}


/**SS02 Batch ADD */
async function makeToddySellRequest2(req) {
//not used but leave it here just in case

  var connection11 = new Connections()
  var connection1 = connection11.mySQLConnection()

  const db = makeDb();
  await db.connect(connection1);
  console.log(req.body.email)
  var xx=`select * from toddy_batch where creator_permit='${req.body.permit}' && requested=0`
  console.log(xx)

  try {
    const users = await db.query(connection1,xx);
   // console.log(users)
    return users
  } catch (e) {
    // handle exception
  } finally {
    console.log('fdfd1')
    //await db.close(connection1);
    console.log('yfdfd')
    //l return users
  }


}

function makeToddySellRequest(req)
{//jjjjjjjjjjjjjjjjjj
  //console.log(req)
  //var connection11 = new Connections()
  //date_created: '2020-11-25T18:30:00.000Z',
  var z=new Date(req.body.date_created).toISOString().slice(0, 19).replace('T', ' ');
  
 
  var Connection=new sqlConnection();
  var con=Connection.mySQLConnection()
    con.connect(function(err) {
        if (err) throw err;
        var dateee=req.body.date_created
        console.log("req.body.date_created "+dateee)
       // var z=new dateee.toISOString().slice(0, 19).replace('T', ' ');
       // console.log("z "+z)
        console.log("Connected!");
        var volume=parseInt(req.body.volume)
        var sql=`insert into persons2(LastName) values('jhn')`
        var sql=`insert into Toddy_Request(date_created,volume,approval_status,batch_id,buyer_permit_number,seller_permit_number,seller_name,buyer_name) values
        ('${z}',${req.body.volume},0,${req.body.batch_id},'${req.body.buyer_permit_number}','${req.body.seller_permit_number}','${req.body.seller_name}','${ req.body.buyer_name}')`
        //         var x={name:jsonObject.name,permit:jsonObject.permit,business_type:jsonObject.business,noOfTrees:200,location:jsonObject.location,email:jsonObject.email,password:jsonObject.pass1}
    
        
        //var sql = `Insert into Businessman3(permit_number,date_created,nic) values('${x}','${z}','${y}')`;
        //var sql = `Insert into Businessman2(permit_number,nic) values('${x}','${y}')`;
    
    
        con.query(sql, function (err, result) {
          console.log("batch id is"+result.insertId);
          temp11111(result.insertId)
          console.log("---------------------------------------------------")


          if (err) throw err;
          console.log("Tablel created");
          con.end();
        });
      });



    
}

function temp11111(newid)
{
  console.log("temp11111"+newid)

}

function updateToddybatchAfterToddySellRequest(req)
{//jjjjjjjjjjjjjjjjjj
  //console.log(req)
  //var connection11 = new Connections()
  //date_created: '2020-11-25T18:30:00.000Z',
  var z=new Date(req.body.date_created).toISOString().slice(0, 19).replace('T', ' ');
  
 
  var Connection=new sqlConnection();
  var con=Connection.mySQLConnection()
    con.connect(function(err) {
        if (err) throw err;
        var dateee=req.body.date_created
        console.log("req.body.date_created "+dateee)
       // var z=new dateee.toISOString().slice(0, 19).replace('T', ' ');
       // console.log("z "+z)
        console.log("Connected!");
        var volume=parseInt(req.body.volume)
        var sql=`insert into persons2(LastName) values('jhn')`
        var sql=`update toddy_batch set requested=1 where batch_id=${req.body.batch_id}`
        //         var x={name:jsonObject.name,permit:jsonObject.permit,business_type:jsonObject.business,noOfTrees:200,location:jsonObject.location,email:jsonObject.email,password:jsonObject.pass1}
    
        
        //var sql = `Insert into Businessman3(permit_number,date_created,nic) values('${x}','${z}','${y}')`;
        //var sql = `Insert into Businessman2(permit_number,nic) values('${x}','${y}')`;
    
    
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Tablel created");
          con.end();
        });
      });



    
}


/**SS01 Buy Toddy Batch */
async function handleToddyPurchase(req,res)
{
  var results = await ToddyPurchase(req)
  console.log("transfer at handle")
  results= await updateRequestIfPurchaseMade(req)
  // var results2=JSON.parse(JSON.stringify(results))
  // console.log(results2)
  // var resultmod={result:results2}
  // console.log("resultmod00000000000000000000000000000000000000000000000000000000000000000000")
  // console.log(resultmod)
  res.send({a:1})

 


}
async function ToddyPurchase(req)
{
  
  var connection11 = new Connections()
  var connection1 = connection11.mySQLConnection()

  const db = makeDb();
  await db.connect(connection1);
  console.log(req.body.email)
 
  var xx=`UPDATE toddy_batch SET current_owner_permit ='${req.body.ownerName}', current_owner_name = '${req.body.ownerPermit}' WHERE batch_id=${req.body.batchId}`
  console.log(xx)

  try {
     await db.query(connection1,xx);
   console.log("transfer at sql")
    return 
  } catch (e) {
    // handle exception
  } finally {
    console.log('fdfd1')
    //await db.close(connection1);
    console.log('yfdfd')
    //l return users
  }

}
async function updateRequestIfPurchaseMade(req)
{
  
  var connection11 = new Connections()
  var connection1 = connection11.mySQLConnection()

  const db = makeDb();
  await db.connect(connection1);
  console.log(req.body.email)
 
  var xx=`UPDATE toddy_request SET approval_status =1 where request_id=${req.body.requestId}`
  console.log(xx)

  try {
     await db.query(connection1,xx);
   console.log("transfer at sql2")
    return 
  } catch (e) {
    // handle exception
  } finally {
    console.log('fdfd1')
    //await db.close(connection1);
    console.log('yfdfd')
    //l return users
  }

}
/**SS02 Buy Toddy Batch */


/**SS01 Toody Sell Request */
async function handleGetToddySellRequest(req,res)
{
  var results = await getToddySellRequest(req)
  var results2=JSON.parse(JSON.stringify(results))
  console.log(results2)
  var resultmod={result:results2}
  console.log("resultmod00000000000000000000000000000000000000000000000000000000000000000000")
  console.log(resultmod)
  res.send(resultmod)

 


}

async function getToddySellRequest(req) {



  var connection11 = new Connections()
  var connection1 = connection11.mySQLConnection()

  const db = makeDb();
  await db.connect(connection1);
  console.log(req.body.email)
  var xx=`select * from Toddy_Request where buyer_permit_number='${req.body.permit}' && approval_status=0`
  console.log(xx)

  try {
    const users = await db.query(connection1,xx);
   // console.log(users)
    return users
  } catch (e) {
    // handle exception
  } finally {
    console.log('fdfd1')
    //await db.close(connection1);
    console.log('yfdfd')
    //l return users
  }


}
/**SS02 Toody Sell Request */








/**Mongo db mportant functions */
async function findOne(res) {

  const client = await MongoClient.connect(url, { useNewUrlParser: true })
    .catch(err => { console.log(err); });

  if (!client) {
    return;
  }

  try {

    const db = client.db(dbName);

    let collection = db.collection('Students');

    let query = {
      StudentId: 102
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
function loginBusinessman(jsonObject, res) {
  console.log("loginmmmmmmm")
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    // var db =mongo.collection('Student')
    const col = client.db(dbName).collection('Businessman');
    var x = 4;
    var y = "owne/r2"
    var z = 3
    try {
      col.findOne({ email: jsonObject.email }, function (err, result) {
        if (err) { console.log("error") }

        if (result) {
          console.log("email founf")
          if (result.password === jsonObject.password) {
            console.log("pass crrect")
            result.status = true;
            res.send(result)
            // return result


          }
          else {
            console.log("fail")
            var returnobj = { status: false, email: true, password: false }
            res.send(returnobj)
            //  return returnobj

          }

          //return true
          // we have a result
        } else {
          console.log("email. misiisn")
          var returnobj = { status: false, email: false, password: false }
          res.send(returnobj)
          //return varobj
          // we don't
        }
      })





    }
    catch (err) {
      console.log(err)

    }



   
    client.close();
    return;
  });
}


function teyww(res) { res.send('sdsd') }
app.get('/d', (req, res) => {
  console.log("------------------------------------------------------------");
  test2(res)
  //res.send('Hello World!')
})






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


